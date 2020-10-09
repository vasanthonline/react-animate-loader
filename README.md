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
1. `ReactAnimateLoader` is applied as a wrapper to any HTML / React element. It could a single element or a set of elements.
2. `ReactAnimateLoader` will loop through each if its children and check whether it's empty.
3. If the child element is not empty, the element is rendered as it is. No loader is added.
4. If the child element is empty, it will create an loader animation on the component as a `:after` pseudo element.
5. The `:after` pseudo element has a white gradient background. The element moves from left to right of the parent element for a default time period of 1.2 seconds. The movement is repeated for an infinitely, generating a nice loading experience.
6. The loader can be stopped by removing the `ReactAnimateLoader` wrapper to the HTML / React element.
7. Additional customizations in terms of element background color, minimum height etc can be set via the `style` props of `ReactAnimateLoader` element.
8. Additioncal customizations on animation color, animation duration etc can be set via CSS styling for the selector `.react___block__loader:empty:after`.


## Criteria for ReactAnimateLoader

ReactAnimateLoader applies loading animation to each of its immediate children. 
In case the immediate children has it's own children or text content, ReactAnimateLoader does not get applied. The element should be empty for ReactAnimateLoader to kick-in.

## Props

| Prop                      | Type            | Required             |  Default                        | Description                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------- | --------------- | --------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| style                     | `React.CSSProperties`        | Optional         |   `{minHeight:1.5rem,backgroundColor:#e2e2e2}`                           | Custom CSS styling for children of ReactAnimateLoader component.                                                                                                                                                                                                                                                                                                                                                                                       |



## View examples

```bash
npm install
npm run build # or use npm run build:watch
npm run start:examples
```

## Local development

```bash
npm install
npm run build:watch
npm run start:examples
```

## License

MIT
