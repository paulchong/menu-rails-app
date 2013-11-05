class MenusController < ApplicationController
  def index
    @menus = Menu.all
    @menu = Menu.new
  end

  def create
    @menu = Menu.new
    @menu.name = params[:menu][:name]
    if @menu.save
      render json: {name: @menu.name}
    else
      redirect_to root_path
    end
  end

end
