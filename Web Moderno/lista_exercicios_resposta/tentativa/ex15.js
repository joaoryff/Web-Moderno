function vendaCarro(carro) {
    switch (carro) {
        case 'hatch':

            console.log('compra realizada com sucesso')
            break;

        case 'sedan':
        case 'moto':
        case 'caminhonete':
            console.log('Tem certeza que não prefere este modelo?')
            break;
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
            break;
    }
}

vendaCarro('hatch')
vendaCarro('sedan')
vendaCarro('moto')
vendaCarro('caminhonete')
vendaCarro('Suv')