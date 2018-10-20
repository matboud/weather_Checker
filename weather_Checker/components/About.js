import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

class About extends Component {
    render() {
        return (
            <View>
                <Text style={styles.about}>About</Text>
                <Text style={styles.textAbout}>Weather Checker is a simple app that allows you to check the weather of any city or Region you want just by searching by its name </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    about: {
        fontSize: 22,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    textAbout: {
        padding: 40
    }
})

export default About;

