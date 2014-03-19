class Feed < ActiveRecord::Base
  validates :title, :url, presence: true
  belongs_to :user
  has_many :entries

  def self.create_feed(url)
    feed_data = SimpleRSS.parse open(url)
    begin
      feed = Feed.create!(title: feed_data.title, url: url, user_id: 1)
      feed_data.entries.each do |entry|
        Entry.create_with_json!(entry, feed);
      end
      feed
    rescue SimpleRSSError
      return nil
    end
  end
end
