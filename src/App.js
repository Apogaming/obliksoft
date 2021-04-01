import './style/App.css';
import refresh from './img/refresh.svg';
import { useState } from 'react';
import JsonData from './data.json';
import Search from './components/search/Search';
import Table from './components/table/Table';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [jsonData, setJsonData] = useState(JsonData);

  const getData = () => {
    fetch('http://localhost:3001/data.json').then((data) => {
      return data.json();
    }).then((data) => {
      setJsonData(data);
    })
  }
  const callback = (value) => {
    setSearchTerm(value);
  }
  return (
    <div className="App">
      <Search parentCallback={callback} />
      <header className="header">
        <img src={refresh} onClick={getData}
        />
        <p className="header__title">Знайдено 8 клієнтів</p>
      </header>
      <Table searchTerm={searchTerm} jsonData={jsonData} />
    </div>
  );
}
export default App;
