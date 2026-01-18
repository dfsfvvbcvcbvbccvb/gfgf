import './App.css';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('user')
  const [users, setUsers] = useState([])

  const deleteUser = event => {
    let a = window.confirm('Вы уверены что хотите удалить пользователя?')
    if (a === false) {
      return
    }
      setUsers(users.filter(user => Number(user.id) !== Number(event.target.value)))
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

  const addUser = event => {
    let oldUsers = users
    let result = false
    if (!email.includes('@')) {
      alert('Email должен содеражать @')
      return
    }
    if (username.length > 15) {
      alert('Username не может быть таким длинным!')
      return
    }
    if (username === '') {
      alert('Заполните username')
      return
    }
    if (email === '') {
      alert('Заполните email')
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
                    <tr key={a}>
                          <td><h2>{users[a].id}</h2></td>
                          <td><h2>{users[a].username}</h2></td>
                          <td><h2>{users[a].email}</h2></td>
                          <td><h2>{users[a].role}</h2></td>
                          <td className='text-center'><button value={users[a].id} onClick={deleteUser} className='btn btn-danger btn-lg'>Удалить</button></td>
                    </tr>
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
