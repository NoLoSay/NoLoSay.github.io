import { render } from '@redwoodjs/testing/web'

import ThreeInfos from './ThreeInfos'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ThreeInfos', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThreeInfos />)
    }).not.toThrow()
  })
})
