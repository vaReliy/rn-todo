import React from 'react'
import { StyleSheet, View } from 'react-native'

import AddTodo from './src/AddTodo'
import Header from './src/Header'
import { ITodoItem } from './src/interfaces'
import TodoItemList from './src/TodoItemList'


export default function App() {
  const [currentInputValue, onChangeText] = React.useState('')
  const [list, onChangeList] = React.useState(INITIAL_TODOS || [])

  const currentInputChange = (value: string) => {
    if (value !== currentInputValue) {
      onChangeText(value)
    }
  }

  const addTodo = () => {
    if (!currentInputValue) {
      return
    }
    const item = {id: `${(list.length)}`, name: currentInputValue}
    list.push(item)
    onChangeList(list)
    onChangeText('')
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo
          onAddTodo={addTodo}
          onInputChange={currentInputChange}
          value={currentInputValue}/>
        <TodoItemList items={list}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  content: {
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
  },
})

const INITIAL_TODOS: ITodoItem[] = [
  {id: '0', name: 'Todo #1'},
  {id: '1', name: 'Todo #2'},
  {id: '2', name: 'Todo #3'},
  {id: '3', name: 'Todo #4'},
  {id: '4', name: 'Todo #5'},
  {id: '5', name: 'Todo #6'},
]
