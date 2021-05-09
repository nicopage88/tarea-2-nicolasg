import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import Chip from '../Chip';

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        margin: 20,
    },
});

const MovieGenres = ({ genres }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <FlatList
            style={styles.container}
            data={genres}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(genreName) => { return genreName }}
            renderItem={({ item: genreName }) => <Chip value={genreName}/>}
        />
    </View>
);

export default MovieGenres;