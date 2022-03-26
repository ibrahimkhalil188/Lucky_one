import './App.css';
import Cars from './Components/Cars/Cars';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Cars></Cars>
      <div>
        <h2>How useState work?</h2>
        <p>Use state is a functional hook. It takes a parameter as an initial value and returns an array with 2 elements. number one Is a state and number two is a function. Number one contains the value of the state and number two set the value of the state. if any state is changed. otherwise, contain an initial value or previous value.</p>
      </div>
      <div>
        <h2>Props vs State</h2>
        <p>
          <pre>
            #Props

            1. Props are used to pass data from one component to another component.
            2. Props are immutable (  it’s not changeable after the initial state)
            3. Props are read-only
            4. Props are synchronous

            #State

            1. The state is used to store data on the current page.
            2. The state is mutable(it can be changed at any time)
            3. The state work  asynchronous way</pre></p>
      </div>
    </div>
  );
}

export default App;
