import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import {  } from "react-router-dom";

export default function CommentBox(props) {
  const { auth } = useSelector((state) => state);

  function shouldNavigateAway() {
    if (!auth) props.history.push('/');
  }

  useEffect(() => {
    shouldNavigateAway();
  }, [auth, shouldNavigateAway]);
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
