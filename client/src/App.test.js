import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nav from './components/Nav'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Tests if title renders', ()=>{
  const {getByText} = render(<Nav/>)
const Title = getByText('Futbol')
expect(Title).toBeInTheDocument
})

test('classname', ()=>{
  const {container}= render(<App variant='navbar'/>)
  expect(container.firstChild).toHaveClass('navbar')

})