json.(@categories) do |category|
  json.title category.title
  json.id category.id

  json.feeds category.feeds do |feed|
    json.title feed.title
    json.id feed.id
    json.url feed.url
    json.user_id feed.user_id
    json.feed_category_id feed.feed_category_id
    json.entries feed.entries.limit(5)
  end
end




