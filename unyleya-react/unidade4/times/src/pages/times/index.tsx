import { useEffect, useState } from 'react';
import Header from '../../components/header';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
import { useNavigate, Link } from 'react-router-dom';
import type { TimeResponse } from '../../models/time.model';
import './style.css';

const Times = () => {
  const navigate = useNavigate();
  const {token} = useAuth();

  const [times, setTimes] = useState<TimeResponse[]>([]);

  const getTimes = async () => {
    try {
      const response = await api.get<TimeResponse[]>('/teams',
        {
          headers: {
            'Authorization': token,
          },
        }
      );
      console.log(response.data);
      setTimes(response.data);
    } catch (error) {
      if (token) {
        alert('Houve um erro ao buscar os times ' + error);
      }
    }
  }

  useEffect(() => {
    getTimes();
  }, []);

  useEffect(() => {
    if(!token) {
      navigate('/');
    }
  }, []);

  return (
    <div>
      <Header />
      <div className='container-times'>
        {
          times.map((time) =>
            <Link to={`/products/${time._id}`} key={time._id} className='container-time'>
              <div className='content-time'>
                <p>{time.name}</p>
                <img src={time.image} alt={`Imagem do brasão do ${time.name}`} />
              </div>
            </Link>
          )
        }
      </div>
    </div>
  );
};

export default Times;