import React from 'react';
import { Text, View } from "react-native";
import { connect } from "react-redux";

class Component extends React.Component {

	render() {
		return(
			<View>
				<Text style={{textAlign: "center", paddingTop: "50%"}}>
					Hello World!
				</Text>
			</View>
		)
	}
}

const Redux = connect(store => ({}))(Component);

export const IndexPage = Redux;