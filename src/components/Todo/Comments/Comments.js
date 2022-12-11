
import React from 'react';
import uuid from 'react-uuid';
import {useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './Comments.module.scss';
import {addComment} from '../../../slice/appSlice';
import Comment from './Comment';


export default function Comments({projID}) {
    const comments = useSelector(state => state.data.find(proj => proj.id === projID).todos.find(todo => todo.active).comments);
    const dispatch = useDispatch();
    const ref = useRef();
    const addNewComment = () => {
        if (ref.current.value.length > 0) {
        const newComment = {
            id: uuid(),
            parentID: null,
            text: ref.current.value,
            date: new Date().toISOString(),
        };
        
        dispatch(addComment({id: projID, comment: newComment}));
        }
    };

    const baseComments = comments.map(comment => {
        let newComment;
        if (comment.parentID === null) {
            newComment = (
                <React.Fragment key={comment.id} >
                    <Comment 
                    id={comment.id} 
                    comments={comments}
                    projID={projID}/>
                </React.Fragment>
            )
        }
        return newComment;
    }
    );
    return (
        <div className={s.comments}>
            <h3 className={s.comments_title}>Комментарии</h3>
            <div className={s.comments_block}>
                {baseComments}
            </div>
            <textarea 
                className={s.comments_input} 
                placeholder='Введите комментарий'
                ref={ref}
            />
            <button 
                className={s.comments_add}
                onClick={addNewComment}>Добавить</button>
        </div>
    )
}