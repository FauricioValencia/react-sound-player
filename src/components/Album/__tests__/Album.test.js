import { shallow } from 'enzyme'

import Album from '../Album'

const testProps = { className: 'active', song: {} }

describe('Album component', () => {
  describe('GIVEN testProps', () => {
    describe('WHEN the component is mounted', () => {
      const wrapper = shallow(<Album {...testProps} />)
      it('THEN should show correctly', () => {
        expect(wrapper).toMatchSnapshot()
      })
    })
  })
})
