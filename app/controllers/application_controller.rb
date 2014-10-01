class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user

  def current_user
    @current_user ||= User.find_by_session_token(session[:token])
  end

  def log_in user
    session[:token] = user.reset_session_token!
    @current_user = user
  end

  def log_out
    current_user.try(:reset_session_token!)
    @current_user = nil
    session[:token] = nil
  end
end
