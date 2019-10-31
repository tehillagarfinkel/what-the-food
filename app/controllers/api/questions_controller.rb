class Api::QuestionsController < ApplicationController
  def show
    @question = Question.find_by(id: params[:id])
    render "show.json.jb"
  end
end
