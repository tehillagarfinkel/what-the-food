class Api::ResultsController < ApplicationController
  def index
    @restaurants = HTTP
      .headers({
        "X-User-Email" => ENV["YELP_API_EMAIL"],
        "Authorization" => "Bearer #{ENV["YELP_API_KEY"]}",
      })
      .get("https://api.yelp.com/v3/businesses/search", params: { location: 60601, radius: 4000, open_now: true, categories: "Restaurants" })
      .parse

    render "index.json.jb"
    # render json: response
  end
end
