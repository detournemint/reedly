class FeedsController < ApplicationController

  def index
    @feeds = Feed.all
    render :index
  end

  def show
    @feed = Feed.find(params[:id])

    render :json => @feed
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

