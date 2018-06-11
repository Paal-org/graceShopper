/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Navbar} from './navbar'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Navbar', () => {
  let navBar


  beforeEach(() => {
    navBar = shallow(<Navbar firstName="Cody" categories="list: []" cart="products: []" isLoggedIn={true} />)
  })

  it('renders the name in the nav bar', () => {
    expect(navBar.find('#welcome').text()).to.be.equal('Welcome Cody');
  })
})
