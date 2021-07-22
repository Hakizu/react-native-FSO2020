import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
     headings: {
        flex: 1,
        flexBasis: 350,
        alignItems: 'flex-start'
     },
     headingRow: {
         marginBottom: 7,
     },
});

const Headings = ({
    name,
    desc,
    language
}) => {
    return (
        <View style={styles.headings}>
            <View style={styles.headingRow}>
                <Text fontWeight='bold'>{name}</Text>
            </View>
            <View style={styles.headingRow}>
                <Text color='textSecondary'>{desc}</Text>
            </View>
            <View style={styles.headingRow}>
                <Text backgroundPrimary='primary'>{language}</Text>
            </View>
        </View>
    );  
};

export default Headings;