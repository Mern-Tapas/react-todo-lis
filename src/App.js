import './App.css';
import Todoapp from './component/Todoapp';

function App() {
  return (
    <>
      <div className='container-fluid'>
        <div className='vh-100 d-flex justify-content-center align-items-center'>
          <Todoapp/>
        </div>
      </div>
    </>
  );
}

export default App;
