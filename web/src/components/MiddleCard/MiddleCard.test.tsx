import { render } from '@redwoodjs/testing/web'

import MiddleCard from './MiddleCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MiddleCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MiddleCard />)
    }).not.toThrow()
  })
})
