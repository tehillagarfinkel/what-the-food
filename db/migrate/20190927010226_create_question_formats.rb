class CreateQuestionFormats < ActiveRecord::Migration[6.0]
  def change
    create_table :question_formats do |t|
      t.string :format

      t.timestamps
    end
  end
end
