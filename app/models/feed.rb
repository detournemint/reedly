  class Feed < ActiveRecord::Base
  validates :title, :url, presence: true
  belongs_to :user
  belongs_to :category
  has_many :entries

  def self.create_feed(url, feed_cat, id)
    feed_data = SimpleRSS.parse open(url)
    begin
      feed = Feed.create!(title: feed_data.title, url: url, user_id: id, feed_category_id: feed_cat)
      feed_data.entries.take(20).each do |entry|
        Entry.create_with_json!(entry, feed);
      end
      feed
    rescue SimpleRSSError
      return nil
    end
  end

  def reload
    # reloads entries
    begin
      feed_data = SimpleRSS.parse(open(url))
      self.title = feed_data.title
      save!
      existing_entry_guids = Entry.pluck(:guid)
      feed_data.entries.each do |entry_data|
        unless existing_entry_guids.include?(entry_data.guid)
          Entry.create_with_json!(entry_data, self)
        end
      end

      self
    rescue SimpleRSSError
      return false
    end
  end
end
