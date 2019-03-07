/**
 * Presentation Component
 * 根组件，渲染余下的所有内容
 * 一个允许用户改变可见 todo 过滤器的组件
 */

import * as React from 'react';
import FilterLink from '../containers/FilterLink'

//选项栏
const Footer = () => (
  <p>
    显示选项:
    {'   '}
    <FilterLink option = "显示全部">
      全部
    </FilterLink>
    {',   '}
    <FilterLink option = "显示未完成">
      未完成
    </FilterLink>
    {',   '}
    <FilterLink option = "显示已完成">
      已完成
    </FilterLink>
  </p>
)

export default Footer