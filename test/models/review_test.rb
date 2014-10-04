# == Schema Information
#
# Table name: reviews
#
#  id              :integer          not null, primary key
#  body            :string(255)
#  title           :string(255)
#  score           :string(255)
#  author_id       :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#  reviewable_type :string(255)
#  reviewable_id   :integer
#

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
