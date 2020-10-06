import React from 'react';
import comments from '../lib/comments';

export default function CommentList() {
  return (
    <>
      <h4>Comment list</h4>
      <ul>
        {comments.map(({ comment }) => (
          <li key={comment}>{comment}</li>
        ))}
      </ul>
    </>
  );
}

CommentList.propTypes = {};
