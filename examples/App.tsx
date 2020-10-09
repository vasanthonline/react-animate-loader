import React, { useState } from 'react';
import './App.css';
import ReactLoader from './../src/index'

type formData = {
  label?:  string,
  type?: string
}
type tileData = {
  tileImage?: string,
  title?: string,
  subtitle?: string,
  description?: string
}
type AppData = {
  block: string,
  form : formData,
  tile : tileData
}

function App() {
  const defaultData: AppData = {
    'block': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    'form': {'label': 'Email address', 'type': 'email'},
    'tile': {'tileImage': 'https://dummyimage.com/250x200/eeeeee/fff&text=Sample+product+image', 'title': 'Nike Airmax T-shirt', 'subtitle': 'Highly breathable fabric with no sweat on skin', 'description': 'This product is made from at least 50% recycled polyester fabric.'},
  }
  const [ data, setData ] = useState(defaultData)

  function fetchData(){
    setData({
      'block': '',
      'form': {},
      'tile': {}
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

  function getTileElement(){
    const el = (<>
                  <div className="block__tile">
                    {data.tile?.tileImage ? 
                      <img src={data.tile?.tileImage} /> :
                      ''
                    }
                  </div>
                  <h3 className="block__tile__header">{data.tile?.title}</h3>
                  <h4 className="block__tile__subheader">{data.tile?.subtitle}</h4>
                  <p className="block__tile__text">{data.tile?.description}</p>
                </>)
    return (data.tile?.title ? el : <ReactLoader>{el.props.children}</ReactLoader>)
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
      <div className="block__row ">
        <h2>Example 3 - Tile with Multiple elements loader</h2>
        <div className="block__tile__border">
          {getTileElement()}
        </div>
      </div>
    </div>
    <br />
  </>);
}

export default App;

