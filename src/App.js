
import { useState } from 'react';
import './App.css';
import Login from './component/login';
import Profile from './component/profile';

function App() {
  
  const[id , setId] = useState("");
  const[token , setToken] = useState("");
  const[error , setError] = useState("");

  const handleLogin = (username, password) => {
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(`Error: ${res.status} - ${res.statusText}`);
        }
        return res.json();
    })
    .then(data => {
        setToken(data.token);
        setId(data.id);
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.id);
    })
    .catch(error => {
        console.error('Login Error:', error.message);
        setError('Invalid username or password');
    });
};

  return (
    <div className="App">
       {token ? (
        <Profile id={id} />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default App;
