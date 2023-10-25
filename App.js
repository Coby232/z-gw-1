import { View} from 'react-native'
import React from 'react'
import WelcomeScreen from './src/screens/WelcomeScreen'
import SignScreen from './src/screens/SignScreen'
import { SafeAreaView } from 'react-native'

import Advantage from './src/screens/Advantage'
import { ScrollView } from 'react-native'
import LoginScreen from './src/screens/LoginScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import SuccessScreen from './src/screens/SuccessScreen'
import CategoriesScreen from './src/screens/CategoriesScreen'
import Frame9 from './src/screens/Frame9'
import Frame10 from './src/screens/Frame10'
import Frame25 from './src/screens/Frame25'
import Frame24 from './src/screens/Frame24'



const App = () => {
  return (
  <ScrollView>
   <View >
    <WelcomeScreen />
      
    </View> 

   <SafeAreaView flex-1>
      <SignScreen />     
    </SafeAreaView> 
     
    <SafeAreaView >
      <Advantage />
    </SafeAreaView>
    
    <SafeAreaView>

      <LoginScreen />
    </SafeAreaView>
    
    <View >
    <SignUpScreen />
      </View>
      <SafeAreaView>
        <SuccessScreen />
      </SafeAreaView>
      
      <SafeAreaView>
      <CategoriesScreen />
      </SafeAreaView>
      
      
      <SafeAreaView>
        <Frame9 />
      </SafeAreaView>
      <SafeAreaView>
        <Frame10/>
      </SafeAreaView>
        
<SafeAreaView>
  <Frame25 />
</SafeAreaView>
<SafeAreaView>
  <Frame24/>
</SafeAreaView>
</ScrollView>
      
  )
}

export default App