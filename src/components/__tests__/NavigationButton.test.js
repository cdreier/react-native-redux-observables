// import 'react-native'
// NOTE: there is a bug in react native with nodejs versions > 7.4
// https://github.com/facebook/jest/issues/4433
import React from 'react'
import renderer from 'react-test-renderer'

import NavigationButton from '../NavigationButton'

describe('NavigationButton', () => {

  it('renders without error', () => {
    renderer.create(
      <NavigationButton />
    )
  })

})