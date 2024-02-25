import { isBookAlreadyExist, deleteFromLS, saveToLS, loadFromLS } from "./local-storage";

export const showBoockDetails = book => {
  renderModalwindow(book);

  const modal = document.querySelector('.backdrop');
  const closeModalWindow = document.querySelector('.close-modal');

  closeModalWindow.addEventListener('click', closeModal);
  modal.addEventListener('click', modalClickHandler);
  document.addEventListener('keydown', keydownHandler);
};

async function renderModalwindow(book) {
  const markup = `<div class="backdrop">
  <div class="modal">
    <button class="close-modal">
      <svg class="modal-svg-close" width="24" height="24">
        <use href="../img/icons.svg#icon-x-close"></use>
      </svg>
    </button>

    <div class="desctop">
      <img src="${book.book_image}" alt="${book.title}" class="img-modal" />
      <div class="lauch">
        <div class="tittle-books">
          <h2 class="boock-name">${book.title}</h2>
          <p class="author">${book.author}</p>
        </div>

        <p class="about-book">
         ${book.description}
        </p>

        <ul class="sale-place">
          <li>
            <a href="${book.amazon_product_url}" target="_blank"
              ><img
                class="sale-place-links"
                src="../img/amazon.png"
                alt="amazon"
                width="62"
                height="19"
            /></a>
          </li>
          <li>
            <a href="${book.book_uri}" target="_blank"
              ><img
                class="sale-place-links"
                src="../img/apple.png"
                alt="amazon"
                width="33"
                height="32"
            /></a>
          </li>
        </ul>
      </div>
    </div>

    <button class="add-lokalstorage" type="button"></button>
    <p class="congrat hiden">
      Сongratulations! You have added the book to the shopping list. To delete,
      press the button “Remove from the shopping list”.
    </p>
  </div>
</div>
`;
  const main = document.querySelector('main');
  main.insertAdjacentHTML('beforeend', markup);

  const addDelBtn = document.querySelector('.add-lokalstorage');
        
function setButtonText() { 
  const isBookAlreadyAdded = isBookAlreadyExist(book._id);

    const buttonText = isBookAlreadyAdded ? 'REMOVE FROM THE SHOPPING LIST' : 'ADD TO SHOPPING LIST';
    addDelBtn.textContent = buttonText;
}
setButtonText();

addDelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const isBookAlreadyAdded = isBookAlreadyExist(book._id);
    
    console.log(isBookAlreadyAdded);

    if (isBookAlreadyAdded) {
        deleteFromLS(book._id);
    } else { 
        saveToLS(book);
    }
    setButtonText();
});

}

function closeModal() {
  removeEventListeners();
  const modal = document.querySelector('.backdrop');
  modal.remove();
}

function removeEventListeners() {
  const modal = document.querySelector('.backdrop');
  const closeModalWindow = document.querySelector('.close-modal');
  closeModalWindow.removeEventListener('click', closeModal);
  modal.removeEventListener('click', modalClickHandler);
  document.removeEventListener('keydown', keydownHandler);
}

function modalClickHandler(event) {
  const modal = document.querySelector('.backdrop');
  if (event.target === modal) {
    closeModal();
  }
}

function keydownHandler(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}



