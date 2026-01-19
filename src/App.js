import './App.css';
import { useState } from 'react';
import UserRow from './UserRow';

function App() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('user')
  const [users, setUsers] = useState([])

  const deleteUser = userId => {
      setUsers(users.filter(user => Number(user.id) !== Number(userId)))
   }

  const handleChangeUsername = event => {
    setUsername(event.target.value)
  }
  const handleChangeEmail = event => {
    setEmail(event.target.value)
  }
  const handleChangeRole = event => {
    setRole(event.target.value)
  }

  function validateUser(username, email) {
    if (username.trim() === '') {
      return 'Заполните username'
    }
    if (username.length > 15) {
      return 'Username не может быть таким длинным'
    }
    if (email.trim() === '') {
      return 'Заполните email'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return 'Email должен содержать @ и домен'
    }
    return null
  }

  const addUser = event => {
    const error = validateUser(username, email)
    if (error) {
      alert(error)
      return
    }
    setUsername('')
    setEmail('')
    setRole('user')
    let id = Date.now()
    setUsers([...users, {
      username: username,
      email: email,
      role: role,
      id: id
    }])
  }
  return (
    <div className="App">
      <header className="App-header">
        <table className='table table-dark table-hover table-striped table-sm'>
          <thead>
          <tr>
            <td className='table-dark'><h2>ID</h2></td>
            <td className='table-dark'><h2>Имя</h2></td>
            <td className='table-dark'><h2>Email</h2></td>
            <td className='table-dark'><h2>Роль</h2></td>
            <td className='table-dark'><h2>Удаление</h2></td>
          </tr>
          </thead>
          <tbody>
                   {users.map((user, a) => (
                    <UserRow
                      key={user.id}
                      user={user}
                      onDelete={deleteUser}
                    />
                   ))}
        
          </tbody>
        </table>
      </header>
      <h2>Добавить пользователя</h2>
      <div className="input-group mb-3">
      <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">@</span>
      </div>
          <input value={username} onChange={handleChangeUsername} required type="text" id='username' className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
    </div>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">@</span>
      </div>
          <input value={email} onChange={handleChangeEmail} id='email' required type="text" className="form-control email" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"></input>
    </div>
      <select id='selectRole' onChange={handleChangeRole} className='form-select'>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={addUser} type="submit" className="btn btn-primary btn-lg mt-2">Добавить пользователя</button>
    </div>
    
  );
}

export default App;
