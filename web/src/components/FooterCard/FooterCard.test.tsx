import { render } from '@redwoodjs/testing/web'

import FooterCard from './FooterCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FooterCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FooterCard />)
    }).not.toThrow()
  })
})
