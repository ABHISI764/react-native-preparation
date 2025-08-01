import { SafeAreaView } from 'react-native'
import React from 'react'
import CounterUi from './src/components/reduxe/CounterUi'
import { store } from './src/components/reduxeNew/store'
import { Provider } from 'react-redux'
const App = () => {
  

  return (

    <SafeAreaView>
      <Provider store={store}>
      <CounterUi />
      </Provider>
    </SafeAreaView>
  )
}

export default App