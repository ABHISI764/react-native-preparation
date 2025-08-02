import { SafeAreaView } from 'react-native';
import React from 'react';
import { store } from './src/components/ReduxeApiCallExample/store';
import { Provider } from 'react-redux';
import UserList from './src/components/ReduxeApiCallExample/UserList';
const App = () => {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <UserList />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
