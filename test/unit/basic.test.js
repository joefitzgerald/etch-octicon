/** @jsx etch.dom */
/* eslint-disable no-unused-expressions */

import Octicon from './../../lib/index'
import etch from 'etch'

describe('octicon support', () => {
  it('renders octicons', () => {
    let component = {
      render () {
        return <Octicon name='diff-added' disableAtomScheduler />
      },

      update () {}
    }

    etch.initialize(component)
    let elem = component.element
    expect(elem.constructor).to.be.ok
  })
})
