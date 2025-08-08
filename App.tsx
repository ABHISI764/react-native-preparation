import { SafeAreaView } from 'react-native';
import React from 'react';
import { store } from './src/components/RtkQueryExample/store';
import { Provider } from 'react-redux';
import GetDataUI from './src/components/RtkQueryExample/GetDataUI';
const App = () => {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <GetDataUI />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
