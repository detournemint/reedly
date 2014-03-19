class CreateFeeds < ActiveRecord::Migration
  def change
    create_table :feeds do |t|
      t.string :title, null: false
      t.string :url, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
