# == Schema Information
#
# Table name: products
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  url         :string(255)
#  price       :integer
#  supplier_id :integer
#  created_at  :datetime
#  updated_at  :datetime
#

class Product < ActiveRecord::Base
end
