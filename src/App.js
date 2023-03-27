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
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import ParentComp from './components/ParentComp';
import RefDemo from './components/RefDemo';
import FrParentInput from './components/FrParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import Newcounter from './components/Newcounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import ComponentC from './components/ComponentC';
import {UserProvider} from './components/createContext'
import PostList from './components/PostList';
import PostForm from './components/PostForm';


function App() {
  return (
    <div className="App">

     {/* <ClickCounter name='ujjwal'/> */}
     {/* <Newcounter>
     {(count,incrementCount)=>(<ClickCounterTwo count={count} incrementCount={incrementCount}/>)}

      </Newcounter>  */}
      {/* <UserProvider value="Ujjwal">
      <ComponentC/>
      </UserProvider> */}
      {/* <PostList/> */}
      <PostForm/>




      {/* <ErrorBoundary>
      <Hero hero="Batman"/>

      </ErrorBoundary>
      <ErrorBoundary>
      <Hero hero="Superman"/>

      </ErrorBoundary>
      <ErrorBoundary>
      <Hero hero="Joker"/>

      </ErrorBoundary> */}


      {/* <FrParentInput/> */}
      {/* <PortalDemo/> */}
      {/* <RefDemo/> */}
      {/* <LifecycleA/> */}
      {/* <ParentComp/> */}

      {/* <Form/> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={style.success}>Success</h1> */}

      {/* <Inline/> */}

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
