import { useState } from 'react';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import MainLayout from './src/MainLayout';
import TodoState from './src/components/Context/todo/TodoState';
import ScreenState from './src/components/Context/screen/ScreenState';

const loadApp = async () => {
  await Font.loadAsync({
    'Quintessential-Regular': require('./assets/fonts/Quintessential-Regular.ttf')
  })
}


export default function App() {



  const [isReady, setisReady] = useState(false)


  if (!isReady) {
    return <AppLoading
      startAsync={loadApp}
      onError={err => console.log(err)}
      onFinish={() => setisReady(true)}
    />
  }


  return (
    <ScreenState>
      <TodoState>
        <MainLayout />
      </TodoState>
    </ScreenState>
  );
}

