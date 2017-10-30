import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { red, white } from '../utils/colors'

const ButtonBase = styled.TouchableOpacity`
  border-radius: 5px;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`

export const Button = ButtonBase.extend`
  border: 1px solid black;
  background-color: ${white};
`

export const PrimaryButton = ButtonBase.extend`
  background-color: ${red};
`

export const ButtonText = styled.Text`
  font-size: 24px;
  color: black;
`

export const PrimaryButtonText = ButtonText.extend`
  color: ${white};
`
