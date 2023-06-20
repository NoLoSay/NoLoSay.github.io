import { render } from '@redwoodjs/testing/web'

import HeaderCard from './HeaderCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HeaderCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeaderCard />)
    }).not.toThrow()
  })
})
