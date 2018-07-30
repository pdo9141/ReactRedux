module Api
  module V1
    class ArticlesController < ApplicationController
      require "json"

      before_action :set_article, only: [:show, :destroy] 

      def index
        if $redis.exists("properties")
          puts "######### properties exists #########"  
          properties = $redis.get("properties")
          properties = JSON.parse(properties)
          puts JSON.pretty_generate(properties) 
        else
          puts "######### properties do not exist #########"   
          
          json = "[{\"id\":\"5b5e6c9c1e57b9522cd884b3\",\"address\":\"619 Horace Court, Riegelwood, Michigan, 7310\",\"latitude\":\"82.405193\",\"longitude\":\"-75.315001\"},{\"identifier\":\"5b5e6c9cf4a9e8356a345d1f\",\"address\":\"440 Butler Place, Germanton, Florida, 1285\",\"latitude\":\"-39.669648\",\"longitude\":\"-78.413467\"}]"
          $redis.set("properties", json)   
          # $redis.del("properties")
        end
        
        render json: Article.all
      end 

      def create
        @article= Article.create(article_params)
        if @article.save
          render json: @article, status: 201
        else
          render json: { errors: @article.errors.full_messages }, status: 422
        end
      end 

      def show
        render json: @article = Article.find(params[:id]) 
      end 

      def destroy
        @article.destroy
        render :show, status: :ok
      end 

      private
      def set_article
        @article = Article.find(params[:id])
      end 

      def article_params
        params.permit(:title)
      end 

    end 
  end 
end 
