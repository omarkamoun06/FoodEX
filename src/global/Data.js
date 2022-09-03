export const filterData = [
  {name: 'Fast food', image: require('../assets/fastfood.png'), id: '0'},
  {name: 'Burgers', image: require('../assets/burger.png'), id: '1'},
  {name: 'Salads', image: require('../assets/salads.png'), id: '2'},
  {name: 'Tunisian', image: require('../assets/tunisian.png'), id: '3'},
  {name: 'Chinese', image: require('../assets/chinese.png'), id: '4'},
  {name: 'Italian', image: require('../assets/italian.png'), id: '5'},
  {name: 'Sea food', image: require('../assets/seafood.png'), id: '6'},
];
export const filterData2 = [
  {name: 'Fast food', image: require('../assets/fastfood.jpg'), id: '0'},
  {name: 'Burgers', image: require('../assets/burger.jpg'), id: '1'},
  {name: 'Salads', image: require('../assets/salads.jpg'), id: '2'},
  {name: 'Tunisian', image: require('../assets/tunisian.jpg'), id: '3'},
  {name: 'Chinese', image: require('../assets/chinese.jpg'), id: '4'},
  {name: 'Italian', image: require('../assets/italian.jpg'), id: '5'},
  {name: 'Sea food', image: require('../assets/seafood.jpg'), id: '6'},
];

export const restauratsData = [
  {
    restaurantName: 'Le Zink',
    farAway: '21.2',
    businessAddress: '1  Salah Chatti street, Tunis',
    images:
      'https://www.onamangepourvous.tn/wp-content/uploads/2019/12/3-5.jpg',
    averageReview: 4.9,
    numberOfReview: 772,
    coordinates: {lat: -26.1888612, Ing: 28.246325},
    discount: 10,
    deliveryTime: 15,
    collectTime: 5,
    foodType: 'Burgers, steaks,salads ...',
    productData: [
      {
        name: 'Salade Burata',
        price: 17,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-w/1b/ea/a0/80/le-zink.jpg',
      },
      {
        name: 'Filet à la croute  d épices',
        price: 38,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-p/17/b6/a5/dc/le-zink.jpg',
      },
      {
        name: 'Double Trouble',
        price: 30,
        image:
          'https://www.onamangepourvous.tn/wp-content/uploads/2019/12/1-6.jpg',
      },
    ],
    id: 0,
  },
  {
    restaurantName: 'KFC',
    farAway: '12.7',
    businessAddress: ' LAC, 1 Av. principal, Tunis',
    images:
      'https://static.actu.fr/uploads/2022/06/3db510bee2b2661c510bee2b235c51v-960x640.jpg',
    averageReview: 4.3,
    numberOfReview: 482,
    coordinates: {lat: 36.8363666, Ing: 10.2427005},
    discount: 30,
    deliveryTime: 40,
    collectTime: 10,
    foodType: 'Chicken,Chicken wings ...',
    productData: [
      {
        name: 'Party Bucket',
        price: 81.9,
        image: 'https://kfc.com.tn/58498-large_default/party-bucket.jpg',
      },
      {
        name: 'Tower Burger',
        price: 16.9,
        image:
          'https://kfc.com.tn/63455-large_default/tower-burger-sandwich.jpg',
      },
      {
        name: 'Crispy Strips Meal',
        price: 19.9,
        image: 'https://kfc.com.tn/56350-large_default/crispy-strips-meal.jpg',
      },
    ],
    id: 1,
  },
  {
    restaurantName: 'Dar El Jeld',
    farAway: '35',
    businessAddress: ' Dar El Jeld street, Tunis 1006',
    images:
      'https://lh3.googleusercontent.com/p/AF1QipOcLMlb6UcF0ZMpswo_m4jb1wnuIZtejm2a_yih=s1600-w640',
    coordinates: {lat: 36.7989592, lng: 10.1687787},
    averageReview: 4.5,
    numberOfReview: 381,
    discount: 10,
    deliveryTime: 45,
    collectTime: 15,
    foodType: 'Tunisian Plates',
    productData: [
      {
        name: 'Couscous',
        price: 44,
        image:
          'https://www.globe-reporters.org/IMG/jpg/dareljeld11_750x563_.jpg',
      },
      {
        name: 'Brick',
        price: 12,
        image:
          'https://cdn.tasteatlas.com//images/dishrestaurants/2c3d1ae2f6944b83acc0c2a32aa8fc33.jpg?width=800&height=513',
      },
      {
        name: 'Ojja',
        price: 20,
        image:
          'https://cuisine.nessma.tv/uploads/7/2020-05/a0e6e06aa4a08ac83b810cf1f1cc2e2b.png',
      },
    ],
    id: 2,
  },
  {
    restaurantName: 'Papa Johns',
    farAway: '12',
    businessAddress: 'Lac Miami، Tunis 1053',
    images: 'https://www.onamangepourvous.tn/wp-content/uploads/2017/07/43.jpg',
    averageReview: 4,
    numberOfReview: 410,
    coordinates: {lat: 36.8311793, Ing: 10.2212427},
    discount: 15,
    deliveryTime: 30,
    collectTime: 5,
    foodType: 'Chicken pizza, Vegetarian pizza ...',
    productData: [
      {
        name: 'Pepperoni Pizza',
        price: 19.9,
        image:
          'https://www.kharjet.tn/wp-content/uploads/2019/04/papajohnstn-1.jpg',
      },
      {
        name: 'Spicy Chicken Ranch',
        price: 25.9,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-s/11/a6/88/45/bbq-chicken.jpg',
      },
      {
        name: 'All The Meats',
        price: 29.9,
        image: 'https://pbs.twimg.com/media/D9cWD1lXkAQChYf.jpg',
      },
    ],
    id: 3,
  },
  {
    restaurantName: 'La Spigola',
    farAway: '22',
    businessAddress: '52 Av. Franklin Roosevelt, La Goulette',
    images:
      'https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/33/ed/view-from-the-evening.jpg',
    averageReview: 4.2,
    numberOfReview: 331,
    coordinates: {lat: 36.8204824, Ing: 10.3067602},
    discount: 7,
    deliveryTime: 40,
    collectTime: 25,
    foodType: 'Sea Food , Fish ...',
    productData: [
      {
        name: 'seafood party',
        price: 100,
        image:
          'https://media-cdn.tripadvisor.com/media/photo-o/09/a3/9f/ce/la-spigola.jpg',
      },
      {
        name: 'Fish and chips',
        price: 16,
        image: 'https://tunisie.co/uploads/images/content/poisson-200716-5.jpg',
      },
      {
        name: 'Spaghetti with seafood',
        price: 39.9,
        image:
          'https://www.tounsia.net/media/cache/singlepost/uploads/2016/06/spaguetti.jpg',
      },
    ],
    id: 4,
  },
];
