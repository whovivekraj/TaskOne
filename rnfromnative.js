import React from 'react';
import { Button, View, Text ,NativeModules} from 'react-native';
function nativetorn() {
  const { ToastModule } = NativeModules;
  const onPress = () => {
    ToastModule.show(', Calling Native Toast, and passing Text from RN ');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button
      title="Press Me"
      color="#841584"
      onPress={onPress}
    />
    </View>
  );
  }
  export default nativetorn;