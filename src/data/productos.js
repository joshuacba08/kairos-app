import cactusOrejas from '../assets/images/CactusOrejasDeConejo.jpg';
import higueraViolin from '../assets/images/HigueraDeHojaDeViolin.jpg';
import plantaSerpiente from '../assets/images/PlantaDeSerpiente.jpg';

const productList = [
    {
        itemID: 1,
        image: cactusOrejas,
        name: 'Cactus Orejas de Conejo',
        price: 780,
        stock: 7,
        category:"plantas",
        featured:true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam in porttitor diam.Suspendisse et sapien vel leo tristique bibendum.Nam aliquet elementum tempus.Quisque neque felis, tristique eu odio ac, aliquet tristique felis.",
    }, 
    {
        itemID: 2,
        image: higueraViolin,
        name: 'Higuera de hoja de violín',
        price: 640,
        stock: 5,
        category: "plantas",
        featured: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam in porttitor diam.Suspendisse et sapien vel leo tristique bibendum.Nam aliquet elementum tempus.Quisque neque felis, tristique eu odio ac, aliquet tristique felis.",
    },
    {
        itemID: 3,
        image: plantaSerpiente,
        name: 'Planta de Serpiente',
        price: 590,
        stock: 10,
        category: "plantas",
        featured: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam in porttitor diam.Suspendisse et sapien vel leo tristique bibendum.Nam aliquet elementum tempus.Quisque neque felis, tristique eu odio ac, aliquet tristique felis.",
    },
    {
        itemID: 4,
        image: "https://images.pexels.com/photos/1011302/pexels-photo-1011302.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        name: 'Suculentas',
        price: 350,
        stock: 11,
        category: "plantas",
        featured: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam in porttitor diam.Suspendisse et sapien vel leo tristique bibendum.Nam aliquet elementum tempus.Quisque neque felis, tristique eu odio ac, aliquet tristique felis.",
    },
    {
        itemID: 5,
        image: "https://images.pexels.com/photos/4503751/pexels-photo-4503751.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        name: 'Ortiga',
        price: 450,
        stock: 7,
        category: "hierbas",
        featured: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam in porttitor diam.Suspendisse et sapien vel leo tristique bibendum.Nam aliquet elementum tempus.Quisque neque felis, tristique eu odio ac, aliquet tristique felis.",
    },
    {
        itemID: 6,
        image: "https://images.pexels.com/photos/8261504/pexels-photo-8261504.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: 'Manzanilla',
        price: 650,
        stock: 9,
        category: "hierbas",
        featured: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam in porttitor diam.Suspendisse et sapien vel leo tristique bibendum.Nam aliquet elementum tempus.Quisque neque felis, tristique eu odio ac, aliquet tristique felis.",
    },
    {
        itemID: 7,
        image: "https://images.pexels.com/photos/278664/pexels-photo-278664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: 'Velas aromáticas',
        price: 200,
        stock: 22,
        category: "velas",
        featured: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam in porttitor diam.Suspendisse et sapien vel leo tristique bibendum.Nam aliquet elementum tempus.Quisque neque felis, tristique eu odio ac, aliquet tristique felis.",
    },
    
    
    
];

export default productList;