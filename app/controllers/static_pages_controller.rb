class StaticPagesController < ApplicationController
  def home
    if current_user
      redirect_to "/feeds"
    end
  end
  
end
