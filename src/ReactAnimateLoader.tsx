import React from 'react';

import './ReactAnimateLoader.css'

type ReactAnimateLoaderProps = {
  children?: React.ReactElement | Array<React.ReactElement>
  style?: React.CSSProperties
}

export default function ReactAnimateLoader(props:ReactAnimateLoaderProps) {
  
  return (<>
    {React.Children.map(props.children, (item: React.ReactElement) => {
      if(item.props.children)
        return item

      const className = `${item.props.className || ''} react___block__loader`
      const styles = Object.assign({}, item.props?.style || {}, props.style || {})
      const itemProps = Object.assign({}, { ...item.props}, {className: className}, {style: styles})

      return React.cloneElement(item, itemProps)
    })}
  </>)
}