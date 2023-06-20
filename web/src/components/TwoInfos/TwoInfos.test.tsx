import { render } from '@redwoodjs/testing/web'

import TwoInfos from './TwoInfos'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TwoInfos', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TwoInfos />)
    }).not.toThrow()
  })
})
