class FeedCategoriesController < ApplicationController

  def index
    @feedcategories = FeedCategory.includes(:feeds).where(user_id: current_user.id)
    render :json => @feedcategories.to_json(include: :feeds)
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
