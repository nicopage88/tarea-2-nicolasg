import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: 'justify',
    }
});

class MovieStoryLine extends Component {
    constructor(props) {
        super(props)

    }


    render() {
        const { storyline, children } = this.props;
        
        return (
            <View>
                <Text style={styles.text}>
                            {storyline}
                        </Text>
            </View>
        );
    };
};

export default MovieStoryLine;