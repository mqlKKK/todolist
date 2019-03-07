# todolist
typescript+react+redux

TodoList 是Redux官方教程中的例子。
使用create-react-app脚手架创建项目
使用redux进行状态管理
编码时将Container Component, Presentation Component 分开处理, 并在注释中标明。
使用Redux时，注意结合TS的模板编程技术进行Type Hint。Action，Root Reducers 都应该是强类型的，而不是any
开发的基本模式是Container Component使用connect作为一个高阶组件的输入，并作为其他若干Presentation Component的父组件。仅有Container Component会与Redux维护的状态树产生交互。
