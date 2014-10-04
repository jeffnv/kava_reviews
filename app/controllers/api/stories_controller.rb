class Api::StoriesController < ApplicationController
  def create
    story = Story.new(story_params)
    if story.save
      render json: story
    else
      render json: story.errors.full_messages, status: 422
    end
  end

  def index
    render json: Story.all
  end

  def show
  end
  private
  def story_params
    params.require(:story).permit(:title, :url, :description)
  end
end
