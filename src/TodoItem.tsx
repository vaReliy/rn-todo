import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ActionButton from './ActionButton'

import { COLOR, TEXTS } from './constants'
import { ITodoItem } from './interfaces'

type TodoItemProps = {
  item: ITodoItem
  onToggle: () => any
  onRemove: () => any
}

export default function TodoItem(props: TodoItemProps) {
  const isComplete = props.item.isComplete

  return (
    <View style={ styles.container }>
      <Text
        style={[
          styles.text, isComplete ? styles.isCompleted : styles.isActive,
        ]}>
        {props.item.name}
      </Text>
      <ActionButton
        title={TEXTS.BUTTON.TOGGLE}
        onPress={props.onToggle}
        color={isComplete ? COLOR.ALT : COLOR.MAIN}
        style={[styles.button, {marginRight: 10}]}/>
      <ActionButton
        disabled={!isComplete}
        title={TEXTS.BUTTON.REMOVE}
        onPress={props.onRemove}
        color={COLOR.REMOVE}
        style={styles.button}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    marginRight: 10,
    width: '60%',
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
  },
  isCompleted: {
    color: COLOR.ALT,
    textDecorationLine: 'line-through',
    borderColor: COLOR.ALT,
  },
  isActive: {
    color: COLOR.MAIN,
    textDecorationLine: 'none',
    borderColor: COLOR.MAIN,
  },
  button: {
    width: '15%',
  },
})
