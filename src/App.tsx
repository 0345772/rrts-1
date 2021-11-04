import TodoList from "./components/TodoList";
import UserList from "./components/UserList";


function App() {
  return (
    <div style={{ boxSizing: "border-box" }}>
      <u>RRTS-1</u>
      <h2 style={{display:'flex', justifyContent: 'center', color: 'teal'}}>Список пользвателей: </h2>
      <UserList />

      <hr />
      <h2 style={{display: 'flex', justifyContent:"center", color: 'teal'}}> Список задач:</h2>
      <TodoList/>
    </div>
  );
}

export default App;
