class ModifyEntryContentToText < ActiveRecord::Migration
  def change
    change_column :entries, :content, :text, :limit => nil
  end
end
