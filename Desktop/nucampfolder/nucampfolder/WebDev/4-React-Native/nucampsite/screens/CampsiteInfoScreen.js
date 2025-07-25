import RenderCampsite from '../features/campsites/RenderCampsite';
import { FlatList,StyleSheet,Text,View } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { toggleFavorite } from '../features/favorites/favoritesSlice';

const CampsiteInfoScreen=({route})=>{
    const {campsite}=route.params;
    const comments=useSelector((state)=>state.comments);
    const favorites=useSelector((state)=>state.favorite);
    const dispatch=useDispatch();
    const renderCommentItem=({item})=>{
        return(
            <View style={StyleSheet.commentItem}>
                <Text style={{fontSize:14}}>{item.text}</Text>
                <Text style={{fontSize:12}}>{item.rating} Stars</Text>
                <Text style={{fontSize:12}}>{`--${item.author},${item.date}`}</Text>

            </View>
        )
    }
    return (
        <FlatList 
        data={comments.filter((Comment)=>Comment.campsiteId===campsite.id)}
        renderItem={renderCommentItem}
        keyExtractor={(item)=>item.id.toString()}
        contentContainerStyle={{marginHorizontal:20,paddingVertical:20}}
        ListHeaderComponent={
            <>
                <RenderCampsite 
                campsite={campsite}
                isFavorite={favorites.includes(campsite.id)}
                markFavorite={()=>dispatch(toggleFavorite(campsite.id))}
                />
                <Text style={styles.commentsTitle}>comments</Text>
            </>
        } 
        />
    )
};
const styles=StyleSheet.create({
    commentsTitle:{
        textAlign:'center',
        backgroundcolor:'#fff',
        fontSize:16,
        fontWeight:'bold',
        color:'#43484D',
        padding:10,
        paddingTop:30

    },
    commentItem:{
        paddingVertical:10,
        paddingHorizontal:20,
        backgroundColor:'#fff'
    }
})
export default CampsiteInfoScreen; 