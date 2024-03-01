import React from 'react';
import { Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from "react-redux";

class Component extends React.Component {

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text style={{ textAlign: "center"}}>
            Hello World!
          </Text>
        </View>
      </SafeAreaView>

    )
  }
}

const Redux = connect(store => ({}))(Component);

export const IndexPage = Redux;