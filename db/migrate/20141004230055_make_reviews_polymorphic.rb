class MakeReviewsPolymorphic < ActiveRecord::Migration
  def change
    rename_column :reviews, :product_id, :reviewable_id
    add_column :reviews, :reviewable_type, :string
  end
end
