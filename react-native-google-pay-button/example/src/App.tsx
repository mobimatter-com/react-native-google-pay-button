import * as React from 'react';

import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { GooglePayButton, GooglePayButtonType } from 'react-native-google-pay-button';

export default function App() {
  return (
    <TouchableOpacity style={styles.container} onPress={() => console.log('here')}>
          <GooglePayButton type={GooglePayButtonType.SUBSCRIBE_WITH_GOOGLEPAY} style={styles.box} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 50,
    width: '50%',
    marginVertical: 20,
  },
});
