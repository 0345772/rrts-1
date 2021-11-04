import { FC, useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const UserList: FC = () => {
  const { users, loading, error } = useTypedSelector(state => state.user);
  const { fetchUsers } = useActions()

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <h4>Загрузка...</h4>
  }
  if (error) { 
    return <h4>{error}</h4>
  }

  return (
    <div>
      {users.map(user =>
        <div style={{ margin: '10px 20px', padding: '10px', border: "1px solid teal" }} key={user.id}>
          <b> {user.name} {user.username}</b> <br />
          <span>email:</span> <u>{user.email}</u>
        </div>
      )}
    </div>
  );
};

export default UserList;