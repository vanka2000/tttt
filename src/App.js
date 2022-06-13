import  classes from'./App.module.scss';
import Ul from './components/Ul/Ul';
import li from './components/Ul/Li/Li';

function App() {


const array = ['Danila','Vanya','Misha','Oleg','Artur']



  return (
    <div className={classes.App}>
      <ul>
      {array.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
