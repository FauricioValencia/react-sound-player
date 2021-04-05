import React from 'react'
import { shallow } from 'enzyme'

import { GlobalProvider } from 'store/GlobalStore'
import PlayerTrack from '../PlayerTrack'

const testProps = {
  className: 'active',
  tProgress: '00:00',
  tTime: '00:00',
  seekBar: 80,
  song: {},
}

describe('Icon component', () => {
  describe('GIVEN testProps', () => {
    describe('WHEN the component is mounted', () => {
      const wrapper = shallow(
        <GlobalProvider>
          <PlayerTrack {...testProps} />
        </GlobalProvider>
      )
      it('THEN should show correctly', () => {
        expect(wrapper).toMatchSnapshot()
      })
    })
  })
})
