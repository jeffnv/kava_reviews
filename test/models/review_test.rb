# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  body       :string(255)
#  title      :string(255)
#  score      :string(255)
#  product_id :string(255)
#  author_id  :string(255)
#  created_at :datetime
#  updated_at :datetime
#

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
