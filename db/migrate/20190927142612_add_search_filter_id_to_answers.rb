class AddSearchFilterIdToAnswers < ActiveRecord::Migration[6.0]
  def change
    add_column :answers, :search_filter_id, :integer
  end
end
