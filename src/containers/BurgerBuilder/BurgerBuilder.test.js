import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { BurgerBuilder } from './BurgerBuilder'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

configure({ adapter: new Adapter() })


describe('<BurgerBuilder/>', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder
      initStateRequest={() => { }}
      restoreInitState={() => { }}
      ingredients={{}}
    />)
  })

  it('should render <BuildControls/> when receive ingredients', () => {
    wrapper.setProps({
      ingredients: { salad: 3 }
    })

    expect(wrapper.find(BuildControls)).toHaveLength(1)
  })
})