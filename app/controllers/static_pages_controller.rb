class StaticPagesController < ApplicationController
  before_action :require_logged_in
  def root
    @companies_json = Company.all.to_json only: [:id, :name, :url]
  end

  def require_logged_in
    redirect_to new_user_url unless current_user
  end
end
