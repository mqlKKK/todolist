/**
 * Presentation Component
 *  一个 todo 项
 */

import * as React from 'react';

export interface todoProps {
  onClick: () => void,
  completed: boolean,
  text: string
}

function Todo ({ onClick, completed, text }: todoProps) {
    return (
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        {text}
      </li>
    );
}

export default Todo