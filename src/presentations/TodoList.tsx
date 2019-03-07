/**
 * Presentation Component
 * 用于显示 todos 列表
 * todos: Array 以 { text, completed } 形式显示的 todo 项数组
 * onTodoClick(index: number) 当 todo 项被点击时调用的回调函数
 */

import * as React from 'react';
import Todo from './Todo'

export interface listProps {
  onTodoClick: (id: number) => void,
  todos: Array<
    {
      id: number,
      completed: boolean,
      text: string
    }
  >
}

//onClick={() => onTodoClick(todo.id)}
//不会立即执行，点击才会执行
//onClick=onTodoClick(todo.id)
//是匿名函数，是会立即执行的
function TodoList({ todos, onTodoClick }: listProps) {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      ))}
    </ul>
  );
}

export default TodoList