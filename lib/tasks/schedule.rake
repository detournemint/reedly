desc "This task is called by the Heroku scheduler add-on"
task :refresh_db => :environment do
  puts "Dropping DB"
  heroku pg:reset postgres
  heroku run rake db:migrate
  heroku run rake db:seed
  puts "done."
end
