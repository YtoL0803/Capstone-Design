import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const REGISTER_USER = gql`
  mutation RegisterUser($username: String!, $email: String!, $password: String!) {
    registerUser(username: $username, email: $email, password: $password) {
      id
      username
      email
    }
  }
`;

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [registerUser, { loading, error }] = useMutation(REGISTER_USER, {
    onCompleted: (data) => {
      // 가입 성공 시 처리할 작업
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser({ variables: { username, email, password } });
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
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
          Signup
        </button>
        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
}

export default Signup;
