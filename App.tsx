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
    const item: ITodoItem = {
      id: `${(list.length)}`,
      name: currentInputValue,
      isComplete: false,
    }
    list.push(item)
    onChangeList(list)
    onChangeText('')
  }

  const onToggleHandler = (toggled: ITodoItem) => {
    const target = list.find(item => item.id === toggled.id)
    if (target) {
      target.isComplete = !target.isComplete
      onChangeList(list.slice())
    }
  }

  const onRemoveHandler = (toggled: ITodoItem) => {
    // todo modal
    const updatedList = list.filter(item => item.id !== toggled.id)
    onChangeList(updatedList)
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo
          onAddTodo={addTodo}
          onInputChange={currentInputChange}
          value={currentInputValue}/>
        <TodoItemList
          onRemove={onRemoveHandler}
          onToggle={onToggleHandler}
          items={list}
        />
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
  {id: '0', name: 'Lorem ipsum dolor sit amet.', isComplete: false},
  {id: '1', name: 'Animi eligendi libero', isComplete: false},
  // eslint-disable-next-line max-len
  {id: '2', name: 'Blanditiis, corporis cumque distinctio ea esse et harum in iste recusandae saepe sapiente temporibus?', isComplete: false},
  {id: '3', name: 'consectetur adipisicing elit', isComplete: false},
  {id: '4', name: 'Animi blanditiis fugit', isComplete: false},
  {id: '5', name: 'At ea obcaecati odio', isComplete: false},
]
