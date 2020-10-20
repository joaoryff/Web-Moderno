function lunch(cd, qt) {
    function cal(qt, price) {
        let bill = qt * price
        return bill
    }

    function display(price, name) {
        bill = cal(qt, price)
        console.log(`Vc pediu ${qt} ${name}s e sua conta sera de R$ ${bill}`)
    }
    switch (cd) {
        case 100:
            name = 'HotDog'
            price = 3
            return display(price, name)
            break;
        case 200:
            name = 'Humburguer'
            price = 4
            return display(price, name)
            break;
        case 300:
            name = 'Cheeseburguer'
            price = 5.50
            return display(price, name)
            break;
        default:
            return console.log('Nao existe esse item no Menu')
            break;
    }
}

lunch(100, 5)
lunch(200, 5)
lunch(300, 5)
lunch(400, 5)