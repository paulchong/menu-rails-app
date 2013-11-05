var itemHandler = {

  toggleItems: function(){
    var $newItemList = $(this).parent().find('div');
    if ($newItemList.attr('style') == 'display: none'){
      $newItemList.attr('style', 'display: block')
    } else {
      $newItemList.attr('style', 'display: none')
    }
  },

  createItem: function(e, data){
    $('#item_details').html(data.name + ' $' + data.price);
    $('#item_name').val('');
    $('#item_price').val('');
  }
}

$(document).ready(function(){
  $('.items').on('ajax:success', itemHandler.toggleItems);
  $('#item').on('ajax:success', itemHandler.createItem)
})