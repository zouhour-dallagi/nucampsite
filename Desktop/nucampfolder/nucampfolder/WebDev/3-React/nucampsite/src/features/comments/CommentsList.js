import React from "react";
import  CommentForm  from "./CommentForm";
import {COMMENTS} from '../../app/shared/COMMENTS';
import { useSelector } from "react-redux";
import {selectAllCampsiteById} from "./commentsSlice"
const CommentsList = ({ campsiteId }) => {
    const comments = useSelector(selectAllCampsiteById(campsiteId));
    console.log("CommentsList received campsiteId:", campsiteId);
    console.log("Filtered comments:", comments);

      
    return (
            <div>
            {comments.map(comment => (
                <div key={comment.id}>
                    <p>{comment.text}</p>
                    <p>-- {comment.author}, {comment.date}</p>
                </div>
            
            ))}
             <CommentForm campsiteId={campsiteId} />
        </div>)
};
export default CommentsList;

