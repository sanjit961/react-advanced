import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  useReducer,
  useLayoutEffect,
  Suspense,
} from "react";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import useLocalStorage from "./hooks/useLocalStorage";
import ApiCall from "./components/ApiCall";

const ContactComponent = React.lazy(() => import("./components/Contact"));

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [value, setValue] = useState(0);

  //custom hook

  const [name, setName] = useLocalStorage("username", "");
  const [userId, serUserId] = useLocalStorage("userid", "");

  // useReducer - start
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase": {
        return { count: state.count + 1 };
      }
      case "decrease": {
        return { count: state.count - 1 };
      }
      case "input": {
        return { count: action.payload };
      }
      default: {
        return state;
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  // useReducer - end

  // **useState, useRef, useMemo, useCallback, useContext, useReducer, useLayoutEffect, custom hooks**

  // const count = useRef(0);

  // useEffect(() => {
  //   count.current = count.current + 1;
  // });

  // console.log("count", count)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 2000);
  // }, [count]);

  useEffect(() => {
    // setCount((prev) => prev + 1);
  });

  // function cubeNum(num) {
  //   console.log("Calculation done!");
  //   return Math.pow(num, 3);
  // }

  // useMemo

  // const result = useMemo(() => {
  //   return cubeNum(number);
  // }, [number]);

  // useCallback

  // const newFn = useCallback((count) => {}, []);

  // useLayoutEffect

  // useLayoutEffect(() => {
  //   console.log("Message from useLayoutEffect!");
  // }, []);

  // useEffect(() => {
  //   console.log("Message from useEffect!");
  // }, []);

  return (
    <>
      {/* <h3>I have rendered: {count} times!</h3>
      <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
      <h2>{count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button> */}
      {/* <h1>Render count: {count.current}!</h1> */}
      <ApiCall/>
      <Suspense fallback={<p>this is laoding...</p>}>
        <ContactComponent count={count} />
      </Suspense>

      {/* <h2>React Practice: 'All Hooks'</h2> */}
      {/* <ol type="1">
        <li>useEffect</li>
        <li>useState</li>
        <li>useRef</li>
        <li>useMemo</li>
        <li>useCallback</li>
        <li>useContext</li>
        <li>useReducer</li>
        <li>useLayoutEffect</li>
        <li>useLayoutEffect</li>
        <li>Custom Hooks</li>
      </ol> */}

      {/* <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <h2>
        cube of {number}: {result}
      </h2> */}

      {/* <button onClick={() => setCount(count + 1)}>Counter++</button>
      <h3>counter:{count}</h3>

      <Header newFn={newFn} />
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>click here</button> */}

      {/* useContext */}

      {/* <Profile />
      <Footer /> */}

      {/* ---useReducer--- */}
      {/* <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>
      <br /> */}
      {/* <input
        value={state.count}
        onChange={(e) =>
          dispatch({ type: "input", payload: Number(e.target.value) })
        }
        type="number"
      /> */}

      {/* custom hooks */}
      {/* <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <h3>Hello, {name}! </h3>
      <input
        value={userId}
        onChange={(e) => serUserId(e.target.value)}
        type="text"
      />
      <h3>Your, {userId}! </h3> */}
    </>
  );
}

export default App;
