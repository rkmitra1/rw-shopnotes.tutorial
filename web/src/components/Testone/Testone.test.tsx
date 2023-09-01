import { render } from '@redwoodjs/testing/web'

import Testone from './Testone'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Testone', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Testone />)
    }).not.toThrow()
  })
})
