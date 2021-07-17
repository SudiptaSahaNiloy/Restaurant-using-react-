import './App.css';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

function App() {
  // console.log(Store.getState());
  return (
    <div className="App">
      <Provider store={Store}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
