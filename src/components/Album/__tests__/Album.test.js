import { shallow } from 'enzyme'

import { GlobalProvider } from 'store/GlobalStore'
import Album from '../Album'

const testProps = { className: 'active', song: {} }

describe('Album component', () => {
  describe('GIVEN testProps', () => {
    describe('WHEN the component is mounted', () => {
      const wrapper = shallow(
        <GlobalProvider>
          <Album {...testProps} />
        </GlobalProvider>
      )
      it('THEN should show correctly', () => {
        expect(wrapper).toMatchSnapshot()
      })
    })
  })
})
