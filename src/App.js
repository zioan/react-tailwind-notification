import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Notification from './util/Notification';

function App() {
  return (
    <div className='App'>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <Component1 />
      <Component2 />

      <Notification />
    </div>
  );
}

export default App;
