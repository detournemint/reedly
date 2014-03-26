class GuestsController < DeviseController

   def login_guest
    @user = User.find_by_email("guest@guest.com")
    sign_in(:user, @user)
    redirect_to '/'
  end

end
