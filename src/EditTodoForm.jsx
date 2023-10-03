export default function EditTodoForm({
  currentTodo,
  setIsEditing,
  onEditFormSubmit,
  onEditInputChange
}) {
  return (
    <form onSubmit={onEditFormSubmit}>
      <h2>TODO追加</h2>
      <label htmlFor="title">タイトル: </label>
      <input
        type='text'
        id="title"
        name='title'
        placeholder='タイトル'
        value={currentTodo.title}
        onChange={onEditInputChange}
      />
      <br /><br />

      <label htmlFor="detail">詳細: </label>
      <textarea
        name="detail"
        id="detail"
        cols="30"
        rows="3"
        value={currentTodo.detail}
        onChange={onEditInputChange}>
      </textarea>
      <br /><br />

      <label htmlFor="status">ステータス: </label>
      <select name="status" id="status" value={currentTodo.status} onChange={onEditInputChange}>
        <option value="notStartYet">未着手</option>
        <option value="inProgress">進行中</option>
        <option value="completed">完了</option>
      </select>
      <br /><br />

      <button type='submit' onClick={onEditFormSubmit}>
        更新
      </button>
      <button onClick={() => setIsEditing(false)}>キャンセル</button>
    </form>
  )
}

