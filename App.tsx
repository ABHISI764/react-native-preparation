import { SafeAreaView } from 'react-native';
import React from 'react';
import { store } from './src/components/RtkQueryExample/store';
import { Provider } from 'react-redux';
import GetDataUI from './src/components/RtkQueryExample/GetDataUI';
import GetApiWithDeleteButton from './src/components/GetApiWithDeleteButton/GetApiWithDeleteButton';
const App = () => {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <GetApiWithDeleteButton />
        {/* <GetDataUI /> */}
      </Provider>
    </SafeAreaView>
  );
};

export default App;


