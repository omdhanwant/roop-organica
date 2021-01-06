import AloeveraSoap from '../assets/soaps/AloeveraSoap.jpg';
import BaPanchamrutBasedbabySoaps from '../assets/soaps/BabySoapPanchamrutBased.jpg';
import BabySoaps from '../assets/soaps/BabySoaps.jpg';
import DetanSoap from '../assets/soaps/DetanSoap.jpeg';

export default {
    products: [ {
        name: 'Aloevera Soap',
        type: 'latest',
        price: 200,
        shortDescription:'Product 1 short description',
        asset: AloeveraSoap
    },
    {
        name: 'Panchamrut Based',
        type: 'popular',
        price: 220,
        shortDescription:'Product 2 short description',
        asset: BaPanchamrutBasedbabySoaps
    },
    {
        name: 'Baby Soaps',
        type: 'popular',
        price: 300,
        shortDescription:'Product 3 short description',
        asset: BabySoaps
    },
    {
        name: 'Detan Soap',
        type: 'upcoming',
        price: 150,
        shortDescription:'Product 4 short description',
        asset: DetanSoap
        
    }
    ]
}