class Entry < ActiveRecord::Base
  validates :title, :feed_id, presence: true
  belongs_to :feed

  def self.create_with_json!(entry_data, feed)
    Entry.create!({
      feed_id: feed.id, 
      title: entry_data.title, 
      content: entry_data.content_encoded || entry_data.description,
      guid: entry_data.guid
    })
  end
end
