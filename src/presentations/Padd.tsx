import * as React from 'react';

export interface addProps {
  addClick: (text: string) => void,
}

export function Padd ({addClick}: addProps) {
  let input: any
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          addClick(input.value)
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit" >
          添加
      </button>
      </form>
    </div>
  )
}