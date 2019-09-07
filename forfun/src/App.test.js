import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react'
import Players from './components/Players'

// afterEach(rtl.cleanup);
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test("Players Exist", async () =>{
  const {findByText} = await render(<Players />)
  findByText(/Player/i);
})


