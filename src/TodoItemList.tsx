import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { ITodoItem } from './interfaces'
import TodoItem from './TodoItem'

type TodoItemProps = {
  items: ITodoItem[]
  onRemove: (item: ITodoItem) => void
  onToggle: (item: ITodoItem) => void
}

export default function TodoItemList(props: TodoItemProps) {
  const onToggle = (item: ITodoItem) => {
    props.onToggle(item)
  }

  function onRemove(item: ITodoItem): any {
    props.onRemove(item)
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={props.items}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TodoItem
            item={item}
            onToggle={() => onToggle(item)}
            onRemove={() => onRemove(item)} />
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
    width: '90%',
  },
})
