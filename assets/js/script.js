const cardArr = document.querySelectorAll('.products-cont__product-card')
const productsCont = document.querySelector('#products-cont')
const buyBtnsArr = document.querySelectorAll('.products-cont__buy-btn')

cardArr.forEach(card => {
  card.addEventListener('click', event => {

    const closestCard = event.target.closest('.products-cont__product-card')
    const isContainsInactiveClass = closestCard.classList.contains('products-cont__product-card__inactive')

    const tastesDescription = {
      'с фуа-гра' : 'Печень утки разварная с артишоками',
      'с рыбой' : 'Головы щучьи с чесноком да свежайшая сёмгушка',
      'с курой' : 'Филе из цыплят с трюфелями в бульоне',
    }

    if (!isContainsInactiveClass) {

      closestCard.classList.toggle('products-cont__product-card__blue')
      closestCard.classList.toggle('products-cont__product-card__pink')

      const closestCardTaste = closestCard.querySelector('.product-card__product-taste').innerText
      const description = closestCard.parentNode.querySelector('.products-cont__description')
      const fullDescription = closestCard.parentNode.querySelector('.products-cont__full-description')
 
      if (closestCard.classList.contains('products-cont__product-card__blue')) {
        fullDescription.style.display = "none"
        description.style.display = "inline"
        if (closestCard.classList.contains('hovered-card')) {
          closestCard.classList.remove('hovered-card')
        }
      } 
      else {
        fullDescription.style.display = "inline"
        description.style.display = "none"
      }
    }
  })

  card.addEventListener('mouseenter', e => {
    const isPrevContCard = e.target.classList.contains('products-cont__product-card__pink')
    const isContainCatAgreement = e.target.classList.contains('hovered-card')

    if (isPrevContCard && !isContainCatAgreement) {
      e.target.classList.add('hovered-card')
    }

  })
})

buyBtnsArr.forEach(btn => {
  btn.addEventListener('click', event => {
    
    const closestCard = event.target.closest('.products-cont__product-cont').children[0]
    const isContainsInactiveClass = closestCard.classList.contains('products-cont__product-card__inactive')
    const closestCardTaste = closestCard.querySelector('.product-card__product-taste').innerText

    const tastesDescription = {
      'с фуа-гра' : 'Печень утки разварная с артишоками',
      'с рыбой' : 'Головы щучьи с чесноком да свежайшая сёмгушка',
      'с курой' : 'Филе из цыплят с трюфелями в бульоне',
    }

    if (!isContainsInactiveClass) {

      closestCard.classList.toggle('products-cont__product-card__blue')
      closestCard.classList.toggle('products-cont__product-card__pink')

      const description = closestCard.parentNode.querySelector('.products-cont__description')
      const fullDescription = closestCard.parentNode.querySelector('.products-cont__full-description')

      if (closestCard.classList.contains('products-cont__product-card__blue')) {
        fullDescription.style.display = "none"
        description.style.display = "inline"
      } 
      else {
        fullDescription.style.display = "inline"
        description.style.display = "none"
      }

    }

  })
})

const rewriteDesription = (event) => {
  const inactiveCardsArray = document.querySelectorAll('.products-cont__product-card__inactive')
  
  const tastesDescription = {
    'с фуа-гра' : 'Печалька, с фуа-гра закончился.',
    'с рыбой' : 'Печалька, с рыбой закончился.',
    'с курой' : 'Печалька, с курой закончился.',
  }
  
  inactiveCardsArray.forEach(card => {
    const closestCardTaste = card.querySelector('.product-card__product-taste').innerText
    card.parentNode.querySelector('.products-cont__description').innerHTML = tastesDescription[closestCardTaste]
    card.parentNode.querySelector('.products-cont__description').style.color ="#FFFF66"
  })
}

document.onload = rewriteDesription();