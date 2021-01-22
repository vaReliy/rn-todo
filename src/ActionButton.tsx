import React from 'react'
import { Button, StyleProp, View, ViewStyle } from 'react-native'

type ActionButtonProps = {
  title: string
  color: string
  disabled?: boolean
  style?: StyleProp<ViewStyle>
  onPress: () => {}
}

export default function ActionButton(props: ActionButtonProps) {
  return (
    <View style={props.style}>
      <Button
        disabled={props.disabled}
        title={props.title}
        onPress={props.onPress}
        color={props.color}
      />
    </View>
  )
}
