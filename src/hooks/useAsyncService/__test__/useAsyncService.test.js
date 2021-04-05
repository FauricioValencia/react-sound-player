import { renderHook, act } from '@testing-library/react-hooks'

import useAsyncService from '../useAsyncService'

describe('useAsyncService', () => {
  describe('WHEN useAsyncService is run', () => {
    const { result } = renderHook(() =>
      useAsyncService(
        jest.fn(() =>
          Promise.resolve({
            firstName: 'testName',
          })
        )
      )
    )

    const [callService, state] = result.current

    it('THEN the first element in the result should be a function', () => {
      expect(typeof callService).toBe('function')
    })

    it('AND the second element in the result should be an object', () => {
      expect(state).toMatchObject({
        isLoading: false,
      })
    })
  })
})
