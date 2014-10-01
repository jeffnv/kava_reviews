class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :body
      t.string :title
      t.string :score
      t.string :product_id
      t.string :author_id

      t.timestamps
    end
  end
end
