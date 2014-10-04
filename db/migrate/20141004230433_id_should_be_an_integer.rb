class IdShouldBeAnInteger < ActiveRecord::Migration
  def change
    remove_column :reviews, :reviewable_id
    add_column :reviews, :reviewable_id, :integer
  end
end
