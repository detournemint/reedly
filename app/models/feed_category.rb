class FeedCategory < ActiveRecord::Base
  has_many :feeds, dependent: :destroy
  belongs_to :user
  
end
