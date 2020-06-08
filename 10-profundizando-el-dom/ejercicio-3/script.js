let information = [
    {
        name: 'AAA',
        lastName: 'BBBBB',
        numberPhone: '1111111111'
    },
    {
        name: 'AAA',
        lastName: 'BBBBB',
        numberPhone: '1111111111'
    },
    {
        name: 'AAA',
        lastName: 'BBBBB',
        numberPhone: '1111111111'
    }
]

document.getElementById('select').addEventListener('change', (e) => {
    let info = e.target.value;
    console.log(info);
    selectInfo(info);

    let selectInfo = () => {

        let name = document.getElementById('name');
        let lastName = document.getElementById('last-name');
        let number = document.getElementById('number');

        if ((info === '1')) {
            name.info = information[0].name
            lastName.info = information[0].lastName
            number.info = information[0].numberPhone
        } else if (info === '2') {
            name.info = information[1].name
            lastName.info = information[1].lastName
            number.info = information[1].numberPhone
        } else {
            name.info = information[2].name
            lastName.info = information[2].lastName
            number.info = information[2].numberPhone
        }

        console.log('hola')

    }

});