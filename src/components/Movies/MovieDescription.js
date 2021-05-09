import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: 'justify',
        fontSize:20
    }
});

class MovieDescription extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
        };
    }

toggle = () => this.setState(({ open }) => ({ open: !open }))

    render() {
    
        const { open }      = this.state;
        const { children }  = this.props;
        return (
            <View>
                <TouchableHighlight
                onPress={ this.toggle}
                underlayColor="white"
                >
                    <View>
                        <Text style={styles.text}>
                        Ver descripción
                        </Text>
                    </View>
                    
                </TouchableHighlight>
                { open && children }
            </View>
        );
    };
};

export default MovieDescription;