var menuHandler = {

  createMenu: function(e, data){
    $('.add_menu').html(data.name);
  }
}


$(document).ready(function(){
  $('.create_menu').on('ajax:success',menuHandler.createMenu);
});