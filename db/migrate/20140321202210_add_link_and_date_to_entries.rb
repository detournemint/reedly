class AddLinkAndDateToEntries < ActiveRecord::Migration
  def change
    add_column :entries, :published_date, :datetime
    add_column :entries, :link, :text
    change_column :entries, :content, :text, null: true

  end
end
