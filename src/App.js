import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionalClick from './components/FunctionalClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import ConditionalRender from './components/ConditionalRender'
import ListRender from  './components/ListRender'
import Form from './components/Form'
import Fragment from './components/Fragement'
import UpdatingLifeCycle from './components/UpdatingLifeCycle'
import Refs from './components/Refs'
import Portal from './components/Portal'
import Hero from './components/Hero'
import ErrorBunduling from './components/ErrorBunduling'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import ClickCounterTwo from './components/ClickCounterTwo'
import RenderProps from './components/RenderProps'
import Context, { userProvider } from "./components/Context";
import ComponentA from "./components/ComponentA";
import {UserProvider} from "./components/Context";
import Get from './components/GET'
function App() {
  return (
    <div className="App">

    <Get />

    {/* <UserProvider value="Pradeep">
      <ComponentA />
    </UserProvider> */}

    {/* <RenderProps>
      // newFun={(count,increseCount) => <ClickCounterTwo count={count} increseCount={increseCount} />}  
      OR
      {(count,increseCount) => <ClickCounterTwo count={count} increseCount={increseCount} />}
    </RenderProps> */}

      {/* <HoverCounter name="Hover"/>
      <ClickCounter name="Click"/> */}

      {/* <ErrorBunduling>
        <Hero heroName='IronMan' />
      </ErrorBunduling>
      <ErrorBunduling>
        <Hero heroName='Thor' />
      </ErrorBunduling>
      <ErrorBunduling>
        <Hero heroName='Joker' />
      </ErrorBunduling> */}

      {/* <Portal /> */}

      {/* <Refs /> */}
      {/* <UpdatingLifeCycle /> */}
      {/* <Fragment /> */}
      {/* <Form /> */}
      {/* <ListRender /> */}
      {/* <ConditionalRender /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionalClick /> */}
      {/* <ClassClick /> */}
       {/* <Message /> */}
      {/* <Counter />  */}
      {/*<Greet name="pradeep">
        <p>this is my name</p>
      </Greet>
      <Greet name="Rahul"/>
      <Greet name="Dishank"/>
      <Welcome name="pradeep">
        <p>This is my name</p>
      </Welcome>
      <Welcome name="rakul"/>*/}
  </div>
  );
}

export default App;
