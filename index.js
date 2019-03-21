function handleItemSubmit() {
    $('#js-shopping-list-form').on('submit', function(e) {
      e.preventDefault();
      const item = $(this).find('#shopping-list-entry').val();
      $('.shopping-list').append(generateHTMLItem(item));
    })
  }
  
  function generateHTMLItem(item) {
    return `<li>
      <span class="shopping-item">${item}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
  }
  
  function handleItemDelete(){
    $('.shopping-list').on('click', '.shopping-item-delete' , function(e){
      $(this).closest('li').remove();
      })
  }
  
  
  
  function handleItemToggle(){
    $('.shopping-list').on('click', '.shopping-item-toggle', function(e){
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    })
  }
  
  $(handleItemToggle);
  $(handleItemSubmit);
  $(handleItemDelete);