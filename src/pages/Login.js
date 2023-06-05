import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      id
      username
      email
    }
  }
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      // 로그인 성공 시 처리할 작업
     
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ variables: { email, password } });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          Login
        </button>
        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
}

export default Login;
