import { useContext } from 'react';
import NotificationContext from '../context/NotificationContext';

function Component2() {
  const { notificationHandler } = useContext(NotificationContext);

  // Call notificationHandler where you need
  //eg. after a form submit, user authentication ...
  function handler() {
    notificationHandler({ type: 'worning', message: 'Worning Message' });
  }
  return (
    <>
      <h2>Component2</h2>
      <button className=' border-2 p-2' onClick={handler}>
        Error message
      </button>
    </>
  );
}

export default Component2;
