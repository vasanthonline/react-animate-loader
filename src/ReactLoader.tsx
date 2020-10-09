import React from 'react';

import './ReactLoader.css'

type ReactLoaderProps = {
  children?: React.ReactElement | Array<React.ReactElement>
}

export default function ReactLoader(props:ReactLoaderProps) {
  
  return (<>
    {React.Children.map(props.children, item => {
      const className: string = `${item.props.className || ''} block__loader`

      const itemProps = Object.assign({}, { ...item.props}, {className: className})

      return React.cloneElement(item, itemProps, item.props.children)
    })}
  </>)
}