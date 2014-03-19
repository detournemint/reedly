class FeedsController < ApplicationController

  def index
    @feeds = Feed.all
    render :index
  end

  def show
  end

  def create
    @feed = Feed.create_feed(params[:feed][:url])
    if @feed
      render :json => @feed
    end
  end

  def edit
  end

  def new
    @feed = Feed.new
    render :new
  end


end

