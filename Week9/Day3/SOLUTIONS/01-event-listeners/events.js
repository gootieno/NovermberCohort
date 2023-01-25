// Your code here
window.addEventListener('DOMContentLoaded', () => {
  // alert('DOM Loaded')


  const input = document.getElementById('red-input');

  const changeRed = e => {
    console.log(e);
    const text = input.value;
    if (text === 'red') {
      input.style.backgroundColor = 'red'
    } else {
      input.style.backgroundColor = 'transparent'
    }
  }
  input.addEventListener('input', changeRed)

  const addItem = document.getElementById('add-item');

  const addLi = e => {
    const ul = document.getElementsByTagName('ul')[0]
    const li = document.createElement('li');
    const input = document.getElementById('list-add');
    li.innerText = input.value
    ul.append(li)
    input.value = '';
  }

  addItem.addEventListener('click', addLi)
  // addItem.removeEventListener('click', addLi);


  const section3 = document.getElementById('section-3');
  const colorSelect = document.getElementById('color-select');

  const changeColor = e => {
    section3.style.backgroundColor = e.currentTarget.value
  }
  colorSelect.addEventListener('change', changeColor)


  const removeBtn = document.getElementById('remove-listeners');

  removeBtn.addEventListener('click', e => {
    input.removeEventListener('input', changeRed);
    addItem.removeEventListener('click', addLi);
    colorSelect.removeEventListener('change', changeColor);

    // BONUS SECTION
    const button = document.createElement('button');
    const sectionFour = document.getElementById('section-4');
    sectionFour.append(button);
    button.style.height = '30px';
    button.innerText = 'Add Event Listeners'

    button.addEventListener('click', e => {
      button.class = 'add-button';
      input.addEventListener('input', changeRed);
      addItem.addEventListener('click', addLi);
      colorSelect.addEventListener('change', changeColor)
    })
  })

  const bonusSection = document.getElementById('section-5');
  const bonusDiv = document.getElementById('bonus');
  bonusSection.addEventListener('mouseover', e => {
    bonusDiv.innerText = 'HOVERED';
  })

  window.addEventListener('keydown', e => {
    if (e.keyCode === 32) {
      alert('SPACEBAR PRESSED')
    } else {
      return;
    }
  })
})
