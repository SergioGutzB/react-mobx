import React from 'react'
import { render } from 'react-dom'

import TodoList from './TodoList'
import store from './TodoStore'


render(<TodoList store={store }/>, document.getElementById('app'))
