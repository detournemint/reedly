json.categories @categories do |category|
  json.title category.title

  json.feeds category.feeds do |feed|
    json.title feed.title
    json.url feed.url
    json.user_id feed.user_id
    json.feed_category_id feed.feed_category_id
    json.entries feed.entries
  end
end

json.UncategorizedFeeds @feeds do |feed|
  if feed.feed_category_id === 0
    json.title feed.title
    json.url feed.url
    json.user_id feed.user_id
    json.feed_category_id feed.feed_category_id
    json.entries feed.entries
  end
end

