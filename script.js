function bukaPop(button) {
    let pop = button.closest('.cont').querySelector('.pop-cont');
    pop.style.display = "block"; 
  }
  
  function tutupPop(event, closeBtn) {
    event.stopPropagation();
    let pop = closeBtn.closest('.pop-cont');
    pop.style.display = "none";
  }
