import { shallow } from 'enzyme'

import Icon from '../Icon'

const testProps = { className: 'active', onClick: jest.fn() }

describe('Icon component', () => {
  describe('GIVEN testProps', () => {
    describe('WHEN the component is mounted', () => {
      const wrapper = shallow(<Icon {...testProps} />)
      it('THEN should show correctly', () => {
        expect(wrapper).toMatchSnapshot()
      })
    })
  })
})
