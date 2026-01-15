import './App.css';

function App() {
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
          <tr>
            <td><h1>234324</h1></td>
            <td><h1>Чел</h1></td>
            <td><h1>bvnvnb@gmail.com</h1></td>
            <td><h1>user</h1></td>
            <td className='text-center'><button className='btn btn-danger btn-lg'>Удалить</button></td>
          </tr>
          <tr>
            <td><h1>234324</h1></td>
            <td><h1>Чел</h1></td>
            <td><h1>bvnvnb@gmail.com</h1></td>
            <td><h1>user</h1></td>
            <td className='text-center'><button className='btn btn-danger btn-lg'>Удалить</button></td>
          </tr>
          <tr>
            <td><h1>234324</h1></td>
            <td><h1>Чел</h1></td>
            <td><h1>bvnvnb@gmail.com</h1></td>
            <td><h1>user</h1></td>
            <td className='text-center'><button className='btn btn-danger btn-lg'>Удалить</button></td>
          </tr>
          </tbody>
        </table>
      </header>
      <h2>Добавить пользователя</h2>
      <div class="input-group mb-3">
      <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">@</span>
      </div>
          <input required type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">@</span>
      </div>
          <input required type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"></input>
    </div>
      <div></div>
      <select className='form-select'>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="button" class="btn btn-primary btn-lg mt-2">Primary</button>
    </div>
    
  );
}

export default App;
