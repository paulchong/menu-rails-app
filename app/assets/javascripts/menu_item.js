var itemHandler = {

  toggleMenuItems: function(){
    console.log('ajax is making it');
    var $newItemList = $(this).parent().find('input');
    if ($newItemList.attr('type') == 'hidden'){
      $newItemList.attr('type', 'shown')
    } else {
      $newItemList.attr('type', 'hidden')
    }
  }

}

$(document).ready(function(){
  $('.menu_items').on('ajax:success', itemHandler.toggleMenuItems);
})