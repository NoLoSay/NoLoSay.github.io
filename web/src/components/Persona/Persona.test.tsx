import { render } from '@redwoodjs/testing/web'

import Persona from './Persona'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Persona', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Persona />)
    }).not.toThrow()
  })
})
