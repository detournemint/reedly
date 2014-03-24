class FeedCategoriesController < ApplicationController

  def index
    @categories = FeedCategory.where(user_id: current_user.id)
    @feeds = Feed.includes(:entries).where(user_id: current_user.id)
    render "feed_categories/index"
  end

  def create
    @feedcategory = FeedCategory.new(feed_category_params)
    if @feedcategory
      render :json => @feedcategory
    end
  end

  def destroy
    FeedCategory.find(params[:id]).destroy
  end

  def feed_category_params
    params.require.(:feed_category).permit(:title)
  end
end
