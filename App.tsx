import { SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { store } from './src/components/RtkQueryExample/store';
import { Provider } from 'react-redux';
import AuthDash from './src/components/HireOrderComponent/DashBoard';
import MemoryLeakProblem from './src/components/MemoryLeak/MemoryLeakProblem';
import MemoryLeakSolution from './src/components/MemoryLeak/MemoryLeakSolution';
import Testing from './src/components/Testing/Testing';
import UseRefExample from './src/components/Hook/UseRef/UseRefExample';
import UseMemoSolutionExample from './src/components/Hook/UseMemo/UseMemoSolutionExample';
import UseCallBackProblemExample from './src/components/Hook/UseCallback/UseCallBackProblemExample';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <Provider store={store}>
        {/* <Testing /> */}
        {/* <UseRefExample /> */}
        <UseCallBackProblemExample />
        {/* <UseMemoSolutionExample /> */}
        {/* <GetApiWithDeleteButton /> */}
        {/* <Login /> */}
       {/* <AuthDash /> */}
       {/* <MemoryLeakProblem /> */}
       {/* <MemoryLeakSolution /> */}
      </Provider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;


