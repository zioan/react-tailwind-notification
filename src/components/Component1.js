import { useContext } from 'react';
import NotificationContext from '../context/NotificationContext';

function Component1() {
  const { notificationHandler } = useContext(NotificationContext);

  function handler() {
    notificationHandler({ type: 'success', message: 'Success Message' });
  }
  return (
    <>
      <h2>Component1</h2>
      <button className=' border-2 p-2' onClick={handler}>
        Success message
      </button>
    </>
  );
}

export default Component1;
