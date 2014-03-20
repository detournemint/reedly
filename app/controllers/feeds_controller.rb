class FeedsController < ApplicationController
  before_filter :authenticate_user!

  def index
    @feeds = Feed.includes(:entries)
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
    @feed = Feed.create_feed(params[:feed][:url])
    if @feed
      render :json => @feed
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
    params.require(:feed).permit(:title, :url, :user_id)
  end


end

