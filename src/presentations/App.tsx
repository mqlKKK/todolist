/**
 * Presentation Component
 * 根组件，渲染余下的所有内容
 */

import * as React from 'react'
import Cadd from '../containers/Cadd'
//import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'


const App = () => (
  <div>
    <Cadd />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App