require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get root.html.erb" do
    get :root.html.erb
    assert_response :success
  end

end
