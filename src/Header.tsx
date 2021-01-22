import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { COLOR, TEXTS } from './constants'

export default function Header() {
  return (
    <View>
      <Text style={styles.header}>{TEXTS.LABEL.APP_TITLE}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    paddingTop: 40,
    paddingBottom: 10,

    width: '100%',
    height: 120,
    fontSize: 35,
    fontWeight: 'bold',
    backgroundColor: COLOR.MAIN,
    color: COLOR.BACKGROUND,
  },
})
