import { render } from '@testing-library/react'
import Button from './Button'

describe('Button Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Button />)
    expect(asFragment()).toMatchSnapshot()
  })
})
