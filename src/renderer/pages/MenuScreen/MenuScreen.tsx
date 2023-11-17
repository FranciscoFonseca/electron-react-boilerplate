import { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import { useNavigate } from 'react-router-dom';
import { useIdleTimer } from 'react-idle-timer';
import { TIMEOUT_CONSTANT } from '../../../constants/shared';

const MenuScreen = () => {
  const [state, setState] = useState<string>('Active');
  const [count, setCount] = useState<number>(0);
  const [remaining, setRemaining] = useState<number>(0);
  const navigate = useNavigate();
  const onIdle = () => {
    navigate('/');
  };

  const { getRemainingTime } = useIdleTimer({
    onIdle,
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
      <div>
        <h1>Menu Screen</h1>
      </div>
    </>
  );
};

export default MenuScreen;
