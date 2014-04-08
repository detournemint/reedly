require 'spec_helper'

describe Feed do

  it "creates new feed" do
    @user = User.create({email: "testingt@test.com", password: "testtest"}) 
    feed = Feed.create_feed("http://rss.cnn.com/rss/cnn_topstories.rss", 1, @user.id)
    expect(feed.title).to eq("CNN.com - Top Stories") 
  end

end