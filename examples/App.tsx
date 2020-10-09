import React, { useState } from 'react';
import './App.css';
import ReactLoader from './../src/index'

function App() {
  const defaultData = {
    'block': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  }
  const [ data, setData ] = useState(defaultData)

  function fetchData(){
    setData({
      'block': '',
    })
    setTimeout(() => {
      setData(defaultData)
    }, 5000)
  }

  function getBlockElement(){
    const el = (<div className="block__elem">{data.block}</div>)
    return (data.block ? el : <ReactLoader>{el}</ReactLoader>)
  }

  return (<>
    <div className="block">
      <div className="block__row">
        <button onClick={fetchData}>Click here to preview loader</button>
      </div>
    </div>
    <div className="block block__flexcolumn">
      <div className="block__row">
        <h2>Example 1 - Block element loader</h2>
        {getBlockElement()}
      </div>
    </div>
    <br />
    <hr />
  </>);
}

export default App;

