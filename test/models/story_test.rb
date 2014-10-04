# == Schema Information
#
# Table name: stories
#
#  id          :integer          not null, primary key
#  url         :string(255)
#  title       :string(255)
#  discription :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#

require 'test_helper'

class StoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
