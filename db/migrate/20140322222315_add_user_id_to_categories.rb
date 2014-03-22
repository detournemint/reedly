class AddUserIdToCategories < ActiveRecord::Migration
  def change
    add_column :feed_categories, :user_id, :integer
  end
end
