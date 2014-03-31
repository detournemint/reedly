# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

if User.find_by_email('guest@guest.com')
  User.find_by_email('guest@guest.com').destroy
end

user = User.create(email: 'guest@guest.com', password: 'guestguest')
uncat = FeedCategory.find_by_user_id(user.id)

# make feeds
cat1 = FeedCategory.create(title: "News", user_id: user.id)
cat2 = FeedCategory.create(title: "Music", user_id: user.id)
cat3 = FeedCategory.create(title: "Technology", user_id: user.id)
cat4 = FeedCategory.create(title: "Money", user_id: user.id)
cat5 = FeedCategory.create(title: "Arts", user_id: user.id)

#news feeds
Feed.create_feed("http://www.npr.org/rss/rss.php?id=1001", cat1.id, user.id)
Feed.create_feed("http://feeds.bbci.co.uk/news/rss.xml", cat1.id, user.id)
Feed.create_feed("http://feeds.gothamistllc.com/SFist", cat1.id, user.id)

# music feeds
Feed.create_feed("http://feeds.feedburner.com/stereogum/cBYa", cat2.id, user.id)
Feed.create_feed("http://pitchfork.com/rss/reviews/albums/", cat2.id, user.id)
Feed.create_feed("http://www.npr.org/rss/podcast.php?id=510019", cat2.id, user.id)

# Technology Feeds
Feed.create_feed("http://feeds.feedburner.com/makezineonline", cat3.id, user.id)
Feed.create_feed("http://www.adafruit.com/blog/feed/", cat3.id, user.id)
Feed.create_feed("http://feeds2.feedburner.com/hackaday/LgoM", cat3.id, user.id)

# Money Feeds
Feed.create_feed("http://online.wsj.com/xml/rss/3_7014.xml", cat4.id, user.id)
Feed.create_feed("http://www.npr.org/rss/podcast.php?id=510289", cat4.id, user.id)
Feed.create_feed("http://feeds.feedburner.com/MrMoneyMustache", cat4.id, user.id)

#Arts Feeds
Feed.create_feed("http://www.moma.org/feeds/today_at_moma.rss", cat5.id, user.id)
Feed.create_feed("http://artforum.com/rss.xml", cat5.id, user.id)
Feed.create_feed("http://feeds.feedburner.com/SFMOMAtoday", cat5.id, user.id)

#uncategorized Feeds

uncat = FeedCategory.find_by_user_id(user.id)

Feed.create_feed("http://dailycatgif.com/rss", uncat.id, user.id)
Feed.create_feed("http://feeds.gawker.com/lifehacker/full", uncat.id, user.id)
Feed.create_feed("http://feeds.feedburner.com/Lessig?format=xmlford.edu/lessig/blog/index.rdf", uncat.id, user.id)


