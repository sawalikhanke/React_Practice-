import './App.css'
import React from 'react';
import ConditionalList from './Components/ConditionalList';
import TypeScriptBasics from './Components/TypeScriptBasics';
import UseStateExample from './Components/Hooks/Usestate';
import UseEffectExample from './Components/Hooks/UseEffect';
import UseContextExample from './Components/Hooks/UseContext';
import UseMemoExample from './Components/Hooks/UseMemo';
import UseReducerExample from './Components/Hooks/UseReducer';
import UseRefExample from './Components/Hooks/UseRef';
import UseCallbackExample from './Components/Hooks/UseCallBack';
import CustomHookExample from './Components/Hooks/Custome_hook';

function App() {
  return (
    <>
    <ConditionalList/>
    <TypeScriptBasics/>
    <UseStateExample/>
    <UseEffectExample/>
    <UseContextExample/>
    <UseMemoExample/>
    <UseReducerExample/>
    <UseRefExample/>
    <UseCallbackExample/>
    <CustomHookExample/>
    </>

  )
}

export default App
