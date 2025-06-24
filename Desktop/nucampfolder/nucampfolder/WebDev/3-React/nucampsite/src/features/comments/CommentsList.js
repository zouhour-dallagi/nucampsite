import React from "react";
import  CommentForm  from "./CommentForm";
import {COMMENTS} from '../../app/shared/COMMENTS';

const CommentsList = ({ campsiteId }) => {
      console.log("CommentsList received campsiteId:", campsiteId);
      
    return (
            <div>
            {COMMENTS.map(comment => (
                <div key={comment.id}>
                    <p>{comment.text}</p>
                    <p>-- {comment.author}, {comment.date}</p>
                </div>
            
            ))}
             <CommentForm campsiteId={campsiteId} />
        </div>)
};
export default CommentsList;

