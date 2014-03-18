class Api::ListsController < ApplicationController
  
  def index
    @lists = Board.find(params[:board_id]).lists
    render :index
  end
  
  def show
    @list = List.find(params[:list_id])
    @cards = @list.cards
    
    render "api/lists/show"
  end
  
  def create
    @list = List.new(list_params)
    
    if @list.save
      render "api/lists/show"
    else
      render json: { errors: @list.errors.full_messages }, status: 422
    end
  end
  
  def update
    @list = List.find(params[:id])

    if @list.update_attributes(list_params)
      render "api/lists/show"
    else
      render json: { errors: @list.errors.full_messages }, status: 422
    end
  end
  
  def destroy
    @list = List.find(params[:id])
    @list.destroy
    render "api/lists/show"
  end

  private
  def list_params
    params.require(:list).permit(:title, :rank, :board_id)
  end
end