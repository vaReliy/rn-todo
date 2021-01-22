import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

import { COLOR, TEXTS } from './constants'

type AddTodoProps = {
  value: string
  onAddTodo: () => void
  onInputChange: (value: string) => void
}

export default function AddTodo(props: AddTodoProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={TEXTS.BUTTON.ADD_PLACEHOLDER}
        onChangeText={text => props.onInputChange(text)}
        onSubmitEditing={() => {
          props.onAddTodo()
        }}
        value={props.value}
      />
      <Button
        disabled={!props.value}
        color={COLOR.MAIN}
        title={TEXTS.BUTTON.ADD}
        onPress={() => {
          props.onAddTodo()
        }}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    paddingLeft: 10,
    paddingRight: 10,
    width: '70%',

    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 2,
    borderColor: COLOR.MAIN,
    borderWidth: 1,
  },
})
