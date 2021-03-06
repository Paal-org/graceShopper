/* global describe beforeEach it */

import jsdom from 'jsdom-global/register'
import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Navbar} from './navbar'

const adapter = new Adapter()
enzyme.configure({adapter})

// let doc = jsdom.jsdom('<!doctype html><html><body></body></html>')

// let win = doc.defaultView

// global.document = doc
// global.window = win

// function propagateToGlobal (window) {
//   for(let key in window) {
//     if(!window.hasOwnProperty(key)) continue
//     if(key in global) continue

//     global[key] = window[key]
//   }
// }

describe('Navbar', () => {
  let navBar


  beforeEach(() => {

    navBar = shallow(<Navbar firstName="Cody" categories="list: []" cart="products: []" isLoggedIn={true} />)
  })

  it('renders the name in the nav bar', () => {
    expect(navBar.find('#welcome').text()).to.be.equal('Welcome Cody');
  })
})
