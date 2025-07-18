import { View, Text } from 'react-native'
import React from 'react'
import { store } from './src/components/reduxe/store'
import { Provider } from 'react-redux'
import GetApiCall from './src/components/GetApiCall/GetApiCall'
import JavaScriptCompilerForMobile from './src/components/JavaScriptCompilerForMobile/JavaScriptCompilerForMobile'

const App = () => {
  return (
    // <Provider store={store}>
    //   <GetApiCall />
    // </Provider>
      <JavaScriptCompilerForMobile />
  )
}

export default App