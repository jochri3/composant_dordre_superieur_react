import React from 'react';
import CommentBox from './comment.box';
import CommentList from './comment.list';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { changeAuth } from '../redux/auth/auth.action';
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  function renderButton() {
    console.log('AUTH : ', auth);
    return auth;
  }
  function renderHeader() {
    return (
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/post'>Post a comment</Link>
        </li>
        <li>
          {renderButton() ? (
            <button onClick={() => dispatch(changeAuth(false))}>
              Sign out
            </button>
          ) : (
            <button onClick={() => dispatch(changeAuth(true))}>Sign in</button>
          )}
        </li>
      </ul>
    );
  }
  return (
    <>
      {renderHeader()}
      <Route path='/post' component={CommentBox} />
      <Route exact path='/' component={CommentList} />
    </>
  );
}
