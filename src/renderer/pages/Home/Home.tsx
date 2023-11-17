import { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import { useIdleTimer } from 'react-idle-timer';
import logoNavbar from '../../../../assets/logopng.png';
import YourComponent from '../../../features/counter/Counter';
import { useNavigate } from 'react-router-dom';
import { TIMEOUT_CONSTANT } from '../../../constants/shared';

const Home = () => {
  const [state, setState] = useState<string>('Active');
  const [count, setCount] = useState<number>(0);
  const [remaining, setRemaining] = useState<number>(0);
  const navigate = useNavigate();
  const onIdle = () => {
    setState('Inactivo');
  };
  const onActive = () => {
    setState('Activo');
  };
  const onAction = () => {
    setCount(count + 1);
  };
  const { getRemainingTime } = useIdleTimer({
    onIdle,
    onActive,
    onAction,
    timeout: TIMEOUT_CONSTANT,
    throttle: 500,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.ceil(getRemainingTime() / 1000));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <Layout />
      <div
        style={{ display: 'flex', position: 'relative' }}
        onClick={() => {
          navigate('/Menu');
        }}
      >
        <div>
          <p
            style={{
              color: 'Black',
              fontWeight: 'bolder',
              fontSize: '40px',
            }}
          >
            Bienvenido a la tienda de Grupo Cadelga!
          </p>
          <p
            style={{
              color: 'Black',
              fontWeight: 'bolder',
              fontSize: '40px',
            }}
          >
            Presione la pantalla para empezar a comprar.
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img alt="icon" src={logoNavbar} />
        </div>
      </div>
    </>
  );
};

export default Home;
