require 'spec_helper'

describe FeedCategory do
  it "creates new category" do
    category = FeedCategory.create!({title: "Testing"})
    expect(category.title).to eq("Testing")
  end

  it "validates title presence" do
    category = FeedCategory.create!({title: ""})
    expect(category).to have_at_least(1).error_on(:title)
  end

end