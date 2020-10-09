import React from 'react';
import { render } from '@testing-library/react';
import ReactLoader from './ReactLoader';

test('renders the children of react loader', () => {
  const { container } = render(<ReactLoader><div></div></ReactLoader>);
  expect(container.firstChild).toBeInTheDocument();
});

test('renders multiple children of react loader', () => {
  const { container } = render(
    <ReactLoader>
      <div></div>
      <p></p>
    </ReactLoader>
  );
  expect(container.childNodes.length).toBe(2)
});
