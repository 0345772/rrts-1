import {FC, useEffect} from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TodoList: FC = () => {
  const { page, limit, todos, loading, error } = useTypedSelector(state => state.todo);

  const { fetchTodos, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5, 6, 7, 8]
  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  if (loading) {
    <h3> Loading... </h3>
  }
  if (error) {
    <h3> Error... </h3>
  }

  return (
    <div>
      {todos.map(todo =>
        <div
          style={{border: '2px solid teal', margin: '5px 50px', padding: '10px', color: 'blue'}}
          key={todo.id}> {todo.id}. <span style={{color:'red'}}>user-ID: {todo.userId}</span>. {todo.title} </div>
      )}
      <div style={{display:"flex", justifyContent:'center'}}>
        {pages.map(p =>
          <div
            onClick={() => setTodoPage(p)}
            style={{ margin: "5px", border: p === page ? '3px solid blue' : '1px solid gray', borderRadius: "20%", padding: '5px' }} >
            {p}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;