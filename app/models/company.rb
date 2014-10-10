# == Schema Information
#
# Table name: companies
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  url        :string(255)
#  lat        :string(255)
#  long       :string(255)
#  addr       :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Company < ActiveRecord::Base
  include Reviewable
  has_many :products
end
