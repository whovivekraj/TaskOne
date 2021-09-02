import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import nativefromrn from './nativefromrn';
import rnfromnative from './rnfromnative';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1,flexDirection:'row' }}>
      <View style={{flex:0.5,flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Call RN From Native"
        onPress={() => navigation.navigate('rnfromnative')}
      />
      </View>
      <View style={{flex:0.5,flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
     
      <Button
        title="Call Native From RN"
        onPress={() => navigation.navigate('nativefromrn')}
      />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="rnfromnative" options={{
          title:'React Native to Native'
        }} component={rnfromnative} />
        <Stack.Screen name="nativefromrn" options={{
          title:'Native From React Native'
        }} component={nativefromrn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
