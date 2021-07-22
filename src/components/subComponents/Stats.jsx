import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
     bottomContainer: {
         flexDirection: 'row',
         justifyContent: 'space-evenly',
         marginTop: 10,
         marginBottom: 20,
     },
 });

const Stats = ({
    forks,
    stars,
    reviews,
    rating
}) => {
    return (
        <View style={styles.bottomContainer}>
            <View>
                <Text>{`${((stars)/1000).toFixed(1)}k`}</Text>
                <Text fontWeight='bold'>Stars</Text>
            </View>
            <View>
                <Text position='center'>{`${((forks)/1000).toFixed(1)}k`}</Text>
                <Text fontWeight='bold'>Forks</Text>
            </View>
            <View>
                <Text position='center'>{reviews}</Text>
                <Text fontWeight='bold'>Reviews</Text>
            </View>
            <View>
                <Text position='center'>{rating}</Text>
                <Text fontWeight='bold'>Rating</Text>
            </View>
        </View>
    );
};

export default Stats;