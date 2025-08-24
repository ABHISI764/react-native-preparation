import { SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { store } from './src/components/RtkQueryExample/store';
import { Provider } from 'react-redux';
import AuthDash from './src/components/HireOrderComponent/DashBoard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <Provider store={store}>
        {/* <GetApiWithDeleteButton /> */}
        {/* <Login /> */}
       <AuthDash />
      </Provider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;


