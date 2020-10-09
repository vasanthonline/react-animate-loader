import React from 'react';
import { render } from '@testing-library/react';
import ReactLoader from './ReactLoader';

test('renders the children of react loader', () => {
  const { container } = render(<ReactLoader><div></div></ReactLoader>);
  expect(container.firstChild).toBeInTheDocument();
  expect(container.firstChild).toHaveClass('block__loader')
});

test('renders multiple children of react loader', () => {
  const { container } = render(
    <ReactLoader>
      <div></div>
      <p></p>
    </ReactLoader>
  );
  expect(container.childNodes.length).toBe(2)
  expect(container.firstChild).toHaveClass('block__loader')
  expect(container.lastChild).toHaveClass('block__loader')
});

test('renders react loader with custom styles set', () => {
  const { container } = render(
    <ReactLoader style={{backgroundColor: '#000', minHeight: '100px'}}>
      <div></div>
    </ReactLoader>
  );
  expect(container.firstChild).toHaveStyle(`background-color: #000`)
  expect(container.firstChild).toHaveStyle(`min-height: 100px`)
});
