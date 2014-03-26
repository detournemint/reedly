# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.create(email: 'guest@guest.com', password: 'guestguest')

cat1 = FeedCategory.create(title: "News", user_id: user.id)
cat2 = FeedCategory.create(title: "Music", user_id: user.id)
cat3 = FeedCategory.create(title: "Technology", user_id: user.id)
cat4 = FeedCategory.create(title: "Money", user_id: user.id)

Feed.create_feed("http://www.npr.org/rss/rss.php?id=1001", cat1.id, user.id)
Feed.create_feed("http://rss.cnn.com/rss/cnn_topstories.rss", cat1.id, user.id)
Feed.create_feed("http://feeds.bbci.co.uk/news/rss.xml", cat1.id, user.id)

Feed.create_feed("http://feeds.feedburner.com/stereogum/cBYa", cat2.id, user.id)
Feed.create_feed("http://rss.cnn.com/rss/cnn_topstories.rss", cat2.id, user.id)
Feed.create_feed("http://feeds.bbci.co.uk/news/rss.xml", cat2.id, user.id)




