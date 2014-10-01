class UsersController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.new(user_params)
    if user.save
      log_in user
      redirect_to :root
    else
      flash.now.errors = user.errors.full_messages
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :name)
  end
end
