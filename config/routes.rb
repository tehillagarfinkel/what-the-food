Rails.application.routes.draw do
  get "/#/results" => "results#index"

  # EXAMPLE JSON ROUTE WITH API NAMESPACE
  # namespace :api do
  #   get "/photos" => "photos#index"
  # end

  root to: "pages#index"
  namespace :api do
    get "/results" => "results#index"
    post "/results" => "results#create"
    get "/questions/:id" => "questions#show"
  end
end
