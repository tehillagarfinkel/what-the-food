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
    results = {}

    params[:answerIds].each do |id|
      search_filters.each do |search_filter|
        if search_filter[:answer_ids].include?(id)
          if results[search_filter[:name]]
            results[search_filter[:name]] += 1
          else
            results[search_filter[:name]] = 1
          end
        end
      end
    end

    categories = results
      .sort_by { |key, value| value }
      .reverse
      .take(3)
      .to_h
      .keys
      .map { |value| value.downcase.gsub(/[\W]/, "") }
      .join(",")

    puts categories

    @restaurants = HTTP
      .headers({
        "X-User-Email" => ENV["YELP_API_EMAIL"],
        "Authorization" => "Bearer #{ENV["YELP_API_KEY"]}",
      })
      .get("https://api.yelp.com/v3/businesses/search", params: { location: 60601, radius: 4000, open_now: true, categories: "#{categories}" })
      .parse

    @restaurants.sort_by()
    render "index.json.jb"
  end
end
