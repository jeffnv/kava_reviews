class ShouldBeCompanyId < ActiveRecord::Migration
  def change
    rename_column :products, :supplier_id, :company_id
  end
end
