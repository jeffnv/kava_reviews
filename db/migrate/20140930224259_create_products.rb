class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.string :url
      t.integer :price
      t.integer :supplier_id

      t.timestamps
    end
  end
end
