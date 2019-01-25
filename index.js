$(function(){
    $('.shopping-list').empty();
    $('#js-shopping-list-form').submit(event=>{
        event.preventDefault();
        let shopItem= $('#shopping-list-entry').val();
        const input= $(this).find (`input[type='text']`)
        input.val('')
        const newItem = `
        <li>
        <span class="shopping-item">${shopItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
      `
        
        $('.shopping-list' ).append($(newItem));
    })
    $('.shopping-list').on('click','.shopping-item-toggle', event=>{
        const $btn = $(event.currentTarget) 
        const $title= $($btn).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    })
    $('.shopping-list').on('click','.shopping-item-delete', event=>{
        const $btn = $(event.currentTarget) 
        const $title= $($btn).closest('li').remove();
    })

})