import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NavigationItems from './NavigationItems'
import NavigationItem from '../NavigationItem/NavigationItem'

configure({ adapter: new Adapter() })

describe('<NavigationItems/>', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<NavigationItems />)
  })

  it('should render three "NavigationItems" if not authenticated', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(3)
  })

  it('should render four "NavigationItems" if  authenticated', () => {
    wrapper.setProps({ auth: true })
    expect(wrapper.find(NavigationItem)).toHaveLength(4)
  })

  it('should contains logout NavigationItem if not authenticated', () => {
    wrapper.setProps({ auth: true })
    expect(wrapper.contains(
      <NavigationItem
        url="/logout"
      >Logout</NavigationItem>)).toEqual(true)
  })
})