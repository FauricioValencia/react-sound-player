import React from 'react'

const GlobalContext = React.createContext({})
GlobalContext.displayName = 'GlobalContext'

function globalReducer(state, action) {
  switch (action.type) {
    case 'set song': {
      return { ...state, song: action.payload }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function GlobalProvider({ children }) {
  const [state, dispatch] = React.useReducer(globalReducer, {
    song: {},
  })

  const value = [state, dispatch]

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}

export { GlobalProvider, GlobalContext }
