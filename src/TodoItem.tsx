import React from 'react'
import { Text } from 'react-native'

import { COLOR } from './constants'
import { ITodoItem } from './interfaces'

type TodoItemProps = {
  item: ITodoItem
}

export default function TodoItem(props: TodoItemProps) {
  return (
    <Text style={styles}>{props.item.name}</Text>
  )
}

const styles = {
  padding: 10,
  marginBottom: 10,

  borderRadius: 5,
  borderColor: COLOR.TODO_BORDER,
  borderWidth: 2,
}
