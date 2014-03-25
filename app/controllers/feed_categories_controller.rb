class FeedCategoriesController < ApplicationController

  def index
    @categories = FeedCategory.where(user_id: current_user.id)
    @feeds = Feed.includes(:entries).where(user_id: current_user.id)
    render "feed_categories/index"
  end

  def create
    @feedCategory = FeedCategory.create!(title: params[:title], user_id: current_user.id)
    if @feedCategory
      render :json => @feedCategory
    end
  end

  def destroy
    FeedCategory.find(params[:id]).destroy
  end

  def feed_category_params
    params.require.(:feed_category).permit(:title)
  end
end
