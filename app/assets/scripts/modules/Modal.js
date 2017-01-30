import $ from 'jquery';

class Modal {
  constructor(){
    this.modal = $('.modal');
    this.closeModalButton = $('.modal__close');
    this.openModalButton = $('.open-modal');
    this.events();
  }
  events(){
    //clicking the open modal btn
    this.openModalButton.click(this.displayModal.bind(this));
    //clicking the close modal x
    this.closeModalButton.click(this.closeModal.bind(this));
    //pushing the escape key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e){
    if(e.keyCode == 27){
      this.closeModal();
    }
  }
  displayModal(){
    this.modal.addClass("modal--is-visible");
    return false;
  }
  closeModal(){
    this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;
