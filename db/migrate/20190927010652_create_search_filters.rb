class CreateSearchFilters < ActiveRecord::Migration[6.0]
  def change
    create_table :search_filters do |t|
      t.string :category

      t.timestamps
    end
  end
end
