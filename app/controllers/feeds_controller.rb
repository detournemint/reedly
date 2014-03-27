class FeedsController < ApplicationController
  before_filter :require_login!

  def index
    @feeds = Feed.includes(:entries).where(user_id: current_user.id)
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @feeds.to_json(include: :entries) } 
    end
  end

  def show
    @feed = Feed.find(params[:id])
    @feed.reload
    render :json => @feed.to_json(include: :entries)
  end

  def create
    @feed = Feed.create_feed(params[:url], params[:feed_category_id], current_user.id)
    if @feed
      render :json => @feed
    else
      flash[:errors] = @link.errors.full_messages
    end
  end

  def new
    @feed = Feed.new
    render :new
  end

  def destroy
    @feed = Feed.find(params[:id])
    @feed.destroy

    render :json => @feed
  end

  def feed_params
    params.require(:feed).permit(:title, :url, :user_id, :feed_category_id)
  end

  def require_login!
    redirect_to "/welcome" and return unless current_user
  end

end

