class AddGuidToEntries < ActiveRecord::Migration
  def change
    add_column :entries, :guid, :string
  end
end
