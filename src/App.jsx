import { useState } from 'react'
import AddTodoForm from "./AddTodoForm";
import EditTodoForm from "./EditTodoForm";
import TodoList from "./TodoList";

function App() {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({}); // 編集中のTodoリストのstate
  
  function handleFormSubmit(e) {
    e.preventDefault();

    if (todo.title === '' || todo.title === undefined){
      alert('タイトルの入力が必要です');
      return;
    } else {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          title: todo.title,
          detail: todo.detail,
          status: todo.status || 'notStartYet'
        }
      ])
    }

    setTodo({});
  }

  function handleInputChange(e) {
    const target = e.target;
    setTodo({...todo, [target.name]: target.value});
  }

  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo(todo);
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();
    
    const updatedTodos = todos.map((todo)=>{
      return todo.id === currentTodo.id ? currentTodo : todo
    });
    setIsEditing(false);
    setTodos(updatedTodos);
  }

  function handleEditInputChange(e) {
    const target = e.target;
    setCurrentTodo({...currentTodo, [target.name]: target.value});    
  }

  return (
    <div style={{margin: '0px 200px'}}>
      {isEditing ? (
          <EditTodoForm
            currentTodo={currentTodo}
            setIsEditing={setIsEditing}
            onEditFormSubmit={handleEditFormSubmit}
            onEditInputChange={handleEditInputChange}      
          />
        ) : (
          <AddTodoForm 
            todo={todo}
            onFormSubmit={handleFormSubmit}
            onInputChange={handleInputChange}
          />
        )
      }

      <br /><br />

      <TodoList 
        todos={todos}
        onEditClick={handleEditClick}
      />
    </div>
  )
}

export default App
