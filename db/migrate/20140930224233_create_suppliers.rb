class CreateSuppliers < ActiveRecord::Migration
  def change
    create_table :suppliers do |t|
      t.string :name
      t.string :url
      t.string :lat
      t.string :long
      t.string :addr

      t.timestamps
    end
  end
end
