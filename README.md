# react-loader
A animated sleek loader for react components

[![GitHub license](https://img.shields.io/github/license/vasanthonline/battleship?logo=MIT)](https://github.com/vasanthonline/react-loader/blob/main/LICENSE)

A animated sleek loader for any HTML element / React component.


## Install

```bash
yarn add react-loader

# or

npm i react-loader
```

## Usage

```javascript
import React from 'react';
import ReactLoader from 'react-loader';



function App() {
  return (
    <ReactLoader>
      <div></div>
    </ReactLoader>
  );
}
```

## Criteria for ReactLoader

ReactLoader applies loading animation to each of its immediate children. 
In case the immediate children has it's own children or text content, ReactLoader does not get applied. The element should be empty for ReactLoader to kick-in.

## Props

| Prop                      | Type            | Required             |  Default                        | Description                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------- | --------------- | --------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| style                     | `React.CSSProperties`        | Optional         |   `{minHeight:1.5rem,backgroundColor:#e2e2e2}`                           | Custom CSS styling for children of ReactLoader component.                                                                                                                                                                                                                                                                                                                                                                                       |



## Local Development

```bash
npm install
npm run build # or use npm run build:watch
npm run start:examples
```

## License

MIT
