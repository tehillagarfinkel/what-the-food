class AddQuestionFormatIdToQuestions < ActiveRecord::Migration[6.0]
  def change
    add_column :questions, :question_format_id, :integer
  end
end
