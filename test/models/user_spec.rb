require 'spec_helper'

describe User do
  it "creates new user" do
    user = User.create!({email: 'test@test.com', password: 'test'})
    expect(user.email).to eq(["test@test.com"])
  end
end