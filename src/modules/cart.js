const cart = () => {
    const buttonCart = document.getElementById('cart-button')
    const modalCart = document.querySelector('.modal-cart')
    const close = modalCart.querySelector('.close')
    const body = modalCart.querySelector('.modal-body')
    const buttonSend = modalCart.querySelector('.button-primary')
    const clearCart = modalCart.querySelector('.clear-cart')
    const modalPricetag = modalCart.querySelector('.modal-pricetag')

    const resetCart = () => {
        body.innerHTML = ''
        localStorage.removeItem('cart')
        modalCart.classList.remove('is-open')
        modalPricetag.textContent = 0
    }

    const incrementCount = (id) => {
        const cartArray = JSON.parse(localStorage.getItem('cart'))

        cartArray.map((item) => {
            if (item.id === id) {
                item.count++
            }

            return item
        })

        localStorage.setItem('cart', JSON.stringify(cartArray))
        renderItems(cartArray)
        countTotalPrice(JSON.parse(localStorage.getItem('cart')))
    }

    const decrementCount = (id) => {
        const cartArray = JSON.parse(localStorage.getItem('cart'))

        cartArray.map((item) => {
            if (item.id === id) {
                item.count = item.count > 0 ? item.count - 1 : 0
            }

            return item
        })

        localStorage.setItem('cart', JSON.stringify(cartArray))
        renderItems(cartArray)
        countTotalPrice(JSON.parse(localStorage.getItem('cart')))
    }

    const renderItems = (data) => {
        body.innerHTML = ''

        data.forEach(({ name, price, id, count }) => {
            const cartElem = document.createElement('div')
            cartElem.classList.add('food-row')
            cartElem.innerHTML = `
                <span class="food-name">${name}</span>
                <strong class="food-price">${price} ₽</strong>
                <div class="food-counter">
                    <button class="counter-button btn-dec" data-index="${id}">-</button>
                    <span class="counter">${count}</span>
                    <button class="counter-button btn-inc" data-index="${id}">+</button>
                </div>
            `
            body.append(cartElem)
        });
    }

    const countTotalPrice = (data) => {
        let priceArray = []
        data.forEach(({ price, count }) => {
            const itemPrice = price * count
            priceArray.push(itemPrice)
        })
        const res = priceArray.reduce((sum, num) => sum + num, 0)
        modalPricetag.textContent = `${res}`
    }

    body.addEventListener('click', (e) => {
        e.preventDefault

        if (e.target.classList.contains('btn-inc')) {
            incrementCount(e.target.dataset.index);
        } else if (e.target.classList.contains('btn-dec')) {
            decrementCount(e.target.dataset.index);
        };
    })

    buttonSend.addEventListener('click', () => {
        const cartArray = localStorage.getItem('cart')

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: cartArray
        })
            .then(response => {
                if (response.ok) {
                    resetCart()
                }
            })
            .catch(e => {
                console.error(e);
            })
    })

    clearCart.addEventListener('click', () => {
        resetCart()
    })

    buttonCart.addEventListener('click', () => {
        if (localStorage.getItem('cart')) {
            renderItems(JSON.parse(localStorage.getItem('cart')))
            countTotalPrice(JSON.parse(localStorage.getItem('cart')))
        }
        modalCart.classList.add('is-open')
    })

    close.addEventListener('click', () => {
        modalCart.classList.remove('is-open')
    })
}
export default cart




