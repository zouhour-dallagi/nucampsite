import { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    Button,
    Modal
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../features/favorites/favoritesSlice';
import { postComment } from '../features/comments/commentsSlice';
import RenderCampsite from '../features/campsites/RenderCampsite';
import { Rating, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { postComment } from '../features/comments/commentsSlice';
const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params;
    const comments = useSelector((state) => state.comments.commentsArray);
    const favorites = useSelector((state) => state.favorite);
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    const [rating, setRating] = useState(5);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = () => {
        const newComment = {
            author,
            rating,
            text,
            campsiteId: campsite.id
        };
        console.log(newComment);
        dispatch(postComment({ ...newComment, date: new Date().toISOString() }));
        setShowModal(false);
        resetForm();
        dispatch(postComment(newComment));
    };

    const resetForm = () => {
        setRating(5);
        setAuthor('');
        setText('');
    };

    const renderCommentItem = ({ item }) => {
        return (
            <View style={styles.commentItem}>
                <Text style={{ fontSize: 14 }}>{item.text}</Text>
                <Rating
                    readonly
                    startingValue={item.rating}
                    imageSize={10}
                    style={{ alignItems: 'flex-start', paddingVertical: '5%' }}
                />
                <Text style={{ fontSize: 12 }}>{`-- ${item.author}, ${item.date}`}</Text>
            </View>
        );
    };

    return (
        <>
            <FlatList
                data={comments.filter((comment) => comment.campsiteId === campsite.id)}
                renderItem={renderCommentItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ marginHorizontal: 20, paddingVertical: 20 }}
                ListHeaderComponent={
                    <>
                        <RenderCampsite
                            campsite={campsite}
                            isFavorite={favorites.includes(campsite.id)}
                            markFavorite={() => dispatch(toggleFavorite(campsite.id))}
                            onShowModal={() => setShowModal(true)}
                        />
                        <Text style={styles.commentsTitle}>Comments</Text>
                    </>
                }
            />

            <Modal
                animationType="slide"
                transparent={false}
                visible={showModal}
                onRequestClose={() => {
                    setShowModal(false);
                    resetForm();
                }}
            >
                <View style={styles.modal}>
                    <Rating
                        showRating
                        startingValue={rating}
                        imageSize={40}
                        onFinishRating={(rating) => setRating(rating)}
                        style={{ paddingVertical: 10 }}
                    />
                    <Input
                        placeholder="Author"
                        leftIcon={<Icon name="user-o" />}
                        leftIconContainerStyle={{ paddingRight: 10 }}
                        onChangeText={(text) => setAuthor(text)}
                        value={author}
                    />
                    <Input
                        placeholder="Comment"
                        leftIcon={<Icon name="comment-o" />}
                        leftIconContainerStyle={{ paddingRight: 10 }}
                        onChangeText={(text) => setText(text)}
                        value={text}
                    />
                    <View style={{ margin: 10 }}>
                        <Button
                            title="Submit"
                            color="#5637DD"
                            onPress={handleSubmit}
                        />
                    </View>
                    <View style={{ margin: 10 }}>
                        <Button
                            title="Cancel"
                            color="#808080"
                            onPress={() => {
                                setShowModal(false);
                                resetForm();
                            }}
                        />
                    </View>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    commentsTitle: {
        textAlign: 'center',
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#43484D',
        padding: 10,
        paddingTop: 30
    },
    commentItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    }
});

export default CampsiteInfoScreen;