import s from './Comment.module.scss';
import classNames from 'classnames/bind';
import React, { useState, useRef, useEffect } from 'react';
import { addComment } from '../../../slice/appSlice';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';


const cx = classNames.bind(s);

export default function Comment({comments, id, projID}) {
    const ref = useRef();
    const dispatch = useDispatch();
    const comment = comments.find(comment => comment.id === id);
    const [showForm, setShowForm] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const addFormStyle = cx({
        'comment_add_form': true,
        hidden: !showForm
    });
    const showCommentsStyle = cx({
        styled: true,
        hidden: !showComments
    });

    const childComments = comments.map(comment => {
        if (comment.parentID === id) {            
            return (                       
                <div key={comment.id} className={showCommentsStyle}> 
                    <Comment id={comment.id} comments={comments} projID={projID}/>
                </div>    
            )
        }        
    }).filter(elem => elem !== undefined);

    const addNewComment = () => {
        const newComment = {
            id: uuid(),
            parentID: id,
            text: ref.current.value,
            date: new Date().toISOString(),
        };
        dispatch(addComment({id: projID, comment: newComment}));
        setShowForm(false);
        setShowComments(true);
        ref.current.value='';
    }

    useEffect(() => {
        ref.current.focus();
    })
    
    return (
        <div className={s.comment}>
            <div className={s.comment_body}>
                <div className={s.comment_text}>{comment.text}</div>
                <div className={s.comment_add}>
                    <button 
                        className={s.comment_add_open} 
                        onClick={() => setShowForm(!showForm)}>
                            {showForm ? 'отмена': 'ответить'}
                    </button>
                    <div className={addFormStyle}>
                        <textarea className={s.comment_add_form_input} ref={ref}/>
                        <div className={s.comment_add_buttons}>
                            <button 
                                className={s.comment_add_button}
                                onClick={addNewComment}
                            >
                                {'сохранить'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {(childComments.length > 0 && 
            <>
            <div className={s.comment_toggle} onClick={() => setShowComments(!showComments)}>
                <div className={s.comment_toggle_icon}>{showComments ? '-' : '+'}</div>
                <div className={s.comment_toggle_label}>{!showComments ?  `показать (${childComments.length})`: 'спрятать'}</div>
            </div>
            {childComments}
            </>)}
            
        </div>
    )
}