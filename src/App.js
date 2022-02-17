/* eslint-disable no-unused-vars */

import './App.css';
import MyList from './MyList';

const theList = [ 'Buy ice cream', 'Eat ice cream', 'Go to the gym'

]

function App() {
  return (
    <div className="App">
      <MyList theList ={theList}/>
    </div>
  );
}

export default App;
