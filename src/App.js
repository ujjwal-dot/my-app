import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyle.css'
import style from './appStyle.module.css'


function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={style.success}>Success</h1>

      <Inline/>

     {/* <StyleSheet primary={true}/> */}
      {/* <UserGreeting/> */}
      {/* <NameList/> */}

      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <Counter/> */}

      {/* <Message/> */}
     {/* <Greet/> */}
      {/* <Welcome name="Diana" hero="WonderWoman"/> */}

     {/* <Greet name='Bruce' hero='Batman'>
      This is it..
     </Greet>
     <Greet name="Clark" hero = "SuperMan">
      <button>Submit</button>
     </Greet> */}


     {/* <Hello/> */}
    </div>
  );
}

export default App;
