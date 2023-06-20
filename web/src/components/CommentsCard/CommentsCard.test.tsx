import { render } from '@redwoodjs/testing/web'

import CommentsCard from './CommentsCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CommentsCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommentsCard />)
    }).not.toThrow()
  })
})
