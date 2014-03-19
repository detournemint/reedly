class Feed < ActiveRecord::Base
  validates :title, :url, presence: true
  belongs_to :user
  has_many :entries

  def self.create_feed(url)
    feed_data = SimpleRSS.parse open(url)

    feed = Feed.create!(title: feed_data.title, url: url, user_id: 1)
  end
end
