import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { ITodoItem } from './interfaces'
import TodoItem from './TodoItem'

type TodoItemProps = {
  items: ITodoItem[]
}

export default function TodoItemList(props: TodoItemProps) {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={props.items}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TodoItem item={item}/>
        )}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  list: {
    marginVertical: 20,
    width: '70%',
  },
})
