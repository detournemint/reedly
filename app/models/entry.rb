require 'sanitize'
require 'htmlentities'

class Entry < ActiveRecord::Base
  validates :title, :feed_id, presence: true
  belongs_to :feed

  def self.create_with_json!(entry_data, feed)
    coder = HTMLEntities.new
    Entry.create!({
      feed_id: feed.id, 
      title: entry_data.title, 
      content: entry_data.content_encoded || Sanitize.clean(coder.decode(entry_data.description)), 
      guid: entry_data.guid,
      published_date: entry_data.pubDate,
      link: entry_data.link
    })
  end
end
