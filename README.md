# react-loader
A animated sleek loader for react components

[![GitHub license](https://img.shields.io/github/license/vasanthonline/battleship?logo=MIT)](https://github.com/vasanthonline/react-loader/blob/main/LICENSE)

A animated sleek loader for any HTML element / React component.


## Install

```bash
yarn add react-animate-loader

# or

npm i react-animate-loader
```

## Usage

```javascript
import React from 'react';
import ReactAnimateLoader from 'react-animate-loader';



function App() {
  return (
    <ReactAnimateLoader>
      <div></div>
    </ReactAnimateLoader>
  );
}
```

## How ReactAnimateLoader works?



## Criteria for ReactAnimateLoader

ReactAnimateLoader applies loading animation to each of its immediate children. 
In case the immediate children has it's own children or text content, ReactAnimateLoader does not get applied. The element should be empty for ReactAnimateLoader to kick-in.

## Props

| Prop                      | Type            | Required             |  Default                        | Description                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------- | --------------- | --------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| style                     | `React.CSSProperties`        | Optional         |   `{minHeight:1.5rem,backgroundColor:#e2e2e2}`                           | Custom CSS styling for children of ReactAnimateLoader component.                                                                                                                                                                                                                                                                                                                                                                                       |



## Local Development

```bash
npm install
npm run build # or use npm run build:watch
npm run start:examples
```

## License

MIT
