import React from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';

import SNSMobileSDK from '@sumsub/react-native-mobilesdk-module';

const App = () => {
  let launchSNSMobileSDK = () => {
    let accessToken = '_act-e96181c9-c00c-4faa-b46a-2d005a88b4c3';

    let snsMobileSDK = SNSMobileSDK.init(accessToken, () => {})
      .onTestEnv()
      .withHandlers({
        onStatusChanged: event => {
          console.log(
            'onStatusChanged: [' +
              event.prevStatus +
              '] => [' +
              event.newStatus +
              ']',
          );
        },
        onLog: event => {
          console.log('onLog: [Idensic] ' + event.message);
        },
      })
      .withDebug(true)
      .withLocale('en')
      .build();

    snsMobileSDK
      .launch()
      .then(result => {
        console.log('SumSub SDK State: ' + JSON.stringify(result));
      })
      .catch(err => {
        console.log('SumSub SDK Error: ' + JSON.stringify(err));
      });
  };

  console.log(SNSMobileSDK);

  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={launchSNSMobileSDK} title="Launch SumSub SDK" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
