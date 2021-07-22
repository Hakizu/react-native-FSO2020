import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import theme from '../../theme';
import Stats from './Stats';
import Headings from './Headings';

const styles = StyleSheet.create({
    mainContainer: {
       backgroundColor: 'white',
    },
    rowContainer: {
        marginTop: 20,
        flexDirection: 'row',
    },
});

const RenderImage = ({item}) => (
    <Image
        source={{
            url: item.ownerAvatarUrl
        }}
        style={theme.image}
    />
);

const RepositoryItem = ({item}) => {
    const {
        forksCount: forks,
        stargazersCount: stars,
        reviewCount: reviews,
        ratingAverage: rating,
        description: desc,
        fullName: name,
        language: lang,
    } = item;
    return (
        <View style={styles.mainContainer}>
            <View style={styles.rowContainer}>
                <RenderImage item={item}/>
                <Headings 
                    desc={desc}
                    name={name}
                    language={lang}
                />
            </View>
                <Stats 
                    forks={forks}
                    stars={stars}
                    reviews={reviews}
                    rating={rating}
                />
        </View>
    );
};

export default RepositoryItem;