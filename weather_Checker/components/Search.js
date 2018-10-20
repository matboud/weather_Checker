import React, { Component } from 'React'
import { TextInput, StyleSheet, View } from 'react-native'

class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            city: 'Kenitra'
        }
    }

    setCity(city) {
        this.setState({ city })
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    onChangeText={(text) => this.setCity(text)}
                    underlineColorAndroid='transparent'
                    style={styles.textIn} value={this.state.city}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    textIn: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5
    },

    container: {
        padding: 10
    }
})


export default Search;