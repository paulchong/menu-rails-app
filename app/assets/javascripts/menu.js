var menuHandler = {

  createMenu: function(e, data){
    console.log('ajax is working');
    $('.show_menu').html(data.name);
  }
}


$(document).ready(function(){
  $('.create_menu').on('ajax:success',menuHandler.createMenu);
});