require_relative "./search_filters"

class Api::ResultsController < ApplicationController
  def index
    @restaurants = HTTP
      .headers({
        "X-User-Email" => ENV["YELP_API_EMAIL"],
        "Authorization" => "Bearer #{ENV["YELP_API_KEY"]}",
      })
      .get("https://api.yelp.com/v3/businesses/search", params: { location: 60601, radius: 4000, open_now: true, categories: "Restaurants" })
      .parse

    # selectedAnswerIds.map { |id|
    #   option.filter { |option| option["name"] if option["answer_ids"].include?(id) }
    # }
    @restaurants.sort_by()
    render "index.json.jb"
  end

  def create
    # puts search_filters
    # searchParams = {}
    # params[searchFilterIds]

    @selected = search_filters.filter { |filter|
      answer_ids = filter[:answer_ids].map { |id|
        params[:searchFilterIds].include?(id)
      }
      answer_ids.length > 0
    }
    render json: @selected
  end
end
