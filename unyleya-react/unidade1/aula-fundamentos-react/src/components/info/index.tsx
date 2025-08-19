import woman from '../../assets/images/woman.png';
import man from '../../assets/images/man.png';
import './styles.css';
import CardInfo from '../card-info';

const infos = [
  {
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ut amet? Laborum inventore illo amet dolore, voluptates ratione impedit vel repellendus fugiat nesciunt, perferendis, itaque eligendi! Suscipit consectetur officiis incidunt.',
    image: woman
  },
  {
    title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellat eum, pariatur voluptatum corrupti voluptatem saepe distinctio provident nobis culpa eveniet numquam, tempora magnam nulla. Neque, explicabo sed. Id, temporibus.',
    image: man
  }
]

const Info = () => {
  return (
  <div className='container-info'>
    <h4>Informações</h4>

    <div className='container-info-cards'>
      {
        infos.map((item, index) => {
          return (
            <CardInfo
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          )
        })
      }
    </div>
  </div>
  );
};

export default Info;