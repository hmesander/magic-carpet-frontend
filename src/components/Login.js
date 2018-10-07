import React from 'react';

const Login = (props) => {
  return (
    <div className='container'>
      <img className='logo' alt='magic-carpet-logo' src='/public/images/app.gif'/>
      <button onClick={props.handleLogin} className='button'>Log In With Lyft</button>
    </div>
  );
}

export default Login;
