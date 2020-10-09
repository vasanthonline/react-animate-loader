import React, { useState } from 'react';
import './App.css';
import ReactLoader from './../src/index'

type formData = {
  label?:  string,
  type?: string
}
type AppData = {
  block: string,
  form : formData
}

function App() {
  const defaultData: AppData = {
    'block': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    'form': {'label': 'Email address', 'type': 'email'}
  }
  const [ data, setData ] = useState(defaultData)

  function fetchData(){
    setData({
      'block': '',
      'form': {}
    })
    setTimeout(() => {
      setData(defaultData)
    }, 5000)
  }

  function getBlockElement(){
    const el = (<div className="block__elem">{data.block}</div>)
    return (data.block ? el : <ReactLoader>{el}</ReactLoader>)
  }

  function getFormElement(){
    const el = (<form className="form__group">
                  <div className="form__row">
                    <label htmlFor="form__group__input">{data.form?.label} </label>
                    <input type={data.form?.type} className="form__group__input" id="form__group__input" />
                  </div>
                  <div className="form__row">
                    <button type="submit">Submit</button>
                  </div>
                </form>)
    return (data.form?.label ? el : <ReactLoader style={{minHeight: '10rem', backgroundColor: '#9fbdd2'}}><form className="form__group"></form></ReactLoader>)
  }

  return (<>
    <br />
    <br />
    <div className="block">
      <div className="block__row">
        <button onClick={fetchData}>Click here to preview loader</button>
      </div>
    </div>
    <br />
    <hr />
    <div className="block block__flexcolumn">
      <div className="block__row">
        <h2>Example 1 - Block element loader</h2>
        {getBlockElement()}
      </div>
    </div>
    <br />
    <hr />
    <br />
    <div className="block">
      <div className="block__row">
        <h2>Example 2 - Form element loader</h2>
        <span>(With different background color and customized height)</span>
        {getFormElement()}
      </div>
    </div>
  </>);
}

export default App;

