import React from 'react';

import './ReactLoader.css'

type ReactLoaderProps = {
  children?: React.ReactElement | Array<React.ReactElement>
  style?: React.CSSProperties
}

export default function ReactLoader(props:ReactLoaderProps) {
  
  return (<>
    {React.Children.map(props.children, item => {
      if(item.props.children)
        return item

      const className = `${item.props.className || ''} block__loader`
      const styles = props.style || {}
      const itemProps = Object.assign({}, { ...item.props}, {className: className}, {style: styles})

      return React.cloneElement(item, itemProps)
    })}
  </>)
}