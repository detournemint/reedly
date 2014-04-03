require 'spec_helper'

describe User do
  it "creates new user" do
    user = User.create!({email: 'test@test.com', password: 'testtest'})
    expect(user.email).to eq("test@test.com")
  end

  it "validates password length" do
    user = User.new({email: 'short@password.com', password: 'short'})
    expect(user).to have_at_least(1).error_on(:password)
  end

  it "validates email presence length" do
    user = User.new({email: '', password: 'noemailllllll'})
    expect(user).to have_at_least(1).error_on(:email)
  end

end
