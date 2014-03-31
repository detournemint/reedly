class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :feed_categories, dependent: :destroy
  has_many :feeds, dependent: :destroy
  after_commit :createdefaultcategory, on: :create

  def createdefaultcategory
    FeedCategory.create!(title: "Uncategorized", user_id: self.id)
  end
end
