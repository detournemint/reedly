require 'spec_helper'

describe FeedCategory do
  it "creates new category" do
    category = FeedCategory.create!({title: "Testing"})
    expect(category.title).to eq("Testing")
  end

  

end