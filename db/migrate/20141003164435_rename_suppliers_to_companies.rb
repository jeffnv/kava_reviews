class RenameSuppliersToCompanies < ActiveRecord::Migration
  def change
    rename_table :suppliers, :companies
  end
end
