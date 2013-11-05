class ItemsController < ApplicationController
  def index
  end

  def create
    p 'made it over to the item page'
    @item = Item.new
    @item.name = params[:item][:name]
    @item.price = params[:item][:price]
    if @item.save
      render json: {name: @item.name, price: @item.price}
      p @item
    else
      redirect_to root_path
    end
  end
end


