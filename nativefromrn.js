import React from 'react';
import { requireNativeComponent } from 'react-native';
function nativefromrn(){
    module.exports = requireNativeComponent('RCTImageView');
    const path='https://reactnative.dev/img/tiny_logo.png';
    return(
        <RCTImageView src={path} borderRadius={2} resizeMode='cover' />
    );
}
export default nativefromrn;