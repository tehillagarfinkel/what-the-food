class Question < ApplicationRecord
  belongs_to :question_format
  has_many :answers
  has_many :search_filters, through: :answers
end
