function UserRow({ user, onDelete }) {
    const handleDelete = () => {
        const confirmed = window.confirm('Вы уверены что хотите удалить пользователя?');
        if (confirmed) {
            onDelete(user.id);
        }
    }

    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td className='text-center'><button onClick={handleDelete}  className='btn btn-danger btn-lg'>Удалить</button></td>
        </tr>
    )
}

export default UserRow;