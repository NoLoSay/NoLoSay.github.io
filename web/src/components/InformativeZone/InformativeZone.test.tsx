import { render } from '@redwoodjs/testing/web'

import InformativeZone from './InformativeZone'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InformativeZone', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InformativeZone />)
    }).not.toThrow()
  })
})
