import './styles.css';

const restaurantes = [
  {
    name: 'UnyDonalds',
    color: 'red',
    category: 'Fast-food'
  },
  {
    name: 'Uny Bambu',
    color: 'maroon',
    category: 'Frutos do Mar'
  },
  {
    name: 'UnyBib\'s',
    color: 'deeppink',
    category: 'Lanches'
  },
  {
    name: 'UnyBucks',
    color: 'green',
    category: 'Coffee Break'
  },
  {
    name: 'Unyrafas',
    color: 'yellow',
    category: 'Fast-food'
  },
  {
    name: 'Unyway',
    color: 'blue',
    category: 'Frutos do Mar'
  },
  {
    name: 'Unyback',
    color: 'orange',
    category: 'Lanches'
  },
  {
    name: 'Uny Hut',
    color: 'darkgoldenrod',
    category: 'Pizzas'
  },
  {
    name: 'Uny Robbins',
    color: 'lightblue',
    category: 'Sorvetes'
  },
  {
    name: 'Uny Queen',
    color: 'lightgreen',
    category: 'Sorvetes'
  },
  {
    name: 'Uny John\'s',
    color: 'lightpink',
    category: 'Take away'
  },
  {
    name: 'UnyKFC',
    color: 'sienna',
    category: 'Sorvetes'
  },
];

const Restaurants = () => {
  return (
    <div className='container-restaurant'>
      <h4>Conheça nossos restaurantes</h4>

      <div className='container-restaurant-cards'>
        {
          restaurantes.map((item, index) => {
            return (
              <div className="card-restaurant" key={index}>
                <div className='circle' style={{ backgroundColor: item.color}} />
                <div className="card-info">
                  <p>{item.name}</p>
                  <p>{item.category}</p>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default Restaurants;