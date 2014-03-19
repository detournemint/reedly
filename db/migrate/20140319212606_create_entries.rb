class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :title, null: false
      t.string :content, null: false
      t.integer :feed_id, null: false

      t.timestamps
    end
  end
end
