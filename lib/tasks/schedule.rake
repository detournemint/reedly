desc "This task is called by the Heroku scheduler add-on"
task :refresh_db => :environment do
  puts "Dropping DB"
  %x(heroku pg:reset postgres)
  %x(heroku run rake db:migrate)
  %x(heroku run rake db:seed)
  puts "done."
end
