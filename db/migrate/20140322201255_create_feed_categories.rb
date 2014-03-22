class CreateFeedCategories < ActiveRecord::Migration
  def change
    create_table :feed_categories do |t|
      t.string :title

      t.timestamps
    end

    add_column :feeds, :feed_category_id, :integer, default: 0

  end
end
