import { useState, useEffect } from 'react'

import { runIfFunction } from 'utils'

const initialState = { isLoading: false }

const useAsyncService = (service, onError) => {
  const [state, setState] = useState(initialState)
  const [error, setError] = useState()

  useEffect(() => {
    if (error) runIfFunction(onError, error)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])

  const callService = async (...args) => {
    setState({ ...state, isLoading: true })
    const response = await service(...args).catch(setError)

    setState({ ...state, isLoading: false, data: response })
    return response
  }

  return [callService, { ...state, error }]
}

export default useAsyncService
