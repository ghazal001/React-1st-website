import Examples from "./components/Examples.jsx";
import Header  from "./components/Header/Header.jsx";
import CoreConcepts from './components/CoreConcepts.jsx';



function App() {
  //we must call it on the top of the app  component to make useState work properly
  return (
    <>
      <Header> </Header>
      {/* or  just use <Header/> if there is no props needed */}
      
      <main>
        {/* this is the root components */}
      <CoreConcepts />

      <Examples />
      </main>
    </>
  );
}

export default App;
