class ScoreShouldBeANumber < ActiveRecord::Migration
  def change
    remove_column :reviews, :score
    add_column :reviews, :score, :integer
  end
end
