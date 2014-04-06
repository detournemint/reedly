class FeedCategory < ActiveRecord::Base
  validates :title, presence: :true
  has_many :feeds, dependent: :destroy
  belongs_to :user
  
end
