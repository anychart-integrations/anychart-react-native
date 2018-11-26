import React from 'react';
import {StyleSheet, View, WebView} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={require('./resources/chart.html')}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
