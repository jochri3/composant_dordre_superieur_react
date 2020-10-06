import React from 'react';
import requireAuth from './require.auth';

function CommentBox() {
  return (
    <>
      <h4>Add a comment</h4>
      <form action=''>
        <textarea name='comment' placeholder='Je suis dans la joie' />
        <input type='submit' value='submit comment' />
      </form>
      <button>Fetch comments</button>
    </>
  );
}

export default requireAuth(CommentBox);
