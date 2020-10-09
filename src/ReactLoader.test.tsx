import React from 'react';
import { render } from '@testing-library/react';
import ReactLoader from './ReactLoader';

test('renders the children of react loader', () => {
  const { container } = render(<ReactLoader><div></div></ReactLoader>);
  expect(container.firstChild).toBeInTheDocument();
  expect(container.firstChild).toHaveClass('react___block__loader')
});

test('renders multiple children of react loader', () => {
  const { container } = render(
    <ReactLoader>
      <div></div>
      <p></p>
    </ReactLoader>
  );
  expect(container.childNodes.length).toBe(2)
  expect(container.firstChild).toHaveClass('react___block__loader')
  expect(container.lastChild).toHaveClass('react___block__loader')
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

test('do not render react loader if text content is present', () => {
  const { container } = render(
    <ReactLoader>
      <h4>This is a test content. React loader will not load if this text is present</h4>
    </ReactLoader>
  );
  expect(container.firstChild).not.toHaveClass('react___block__loader')
});

test('do not render react loader if children elements are presnt', () => {
  const { container } = render(
    <ReactLoader>
      <div>
        <p>This is a test element. React loader will not load if this element is present as a child</p>
      </div>
    </ReactLoader>
  );
  expect(container.firstChild).not.toHaveClass('react___block__loader')
  expect(container.firstChild.firstChild).toHaveTextContent('This is a test element. React loader will not load if this element is present as a child')
});
