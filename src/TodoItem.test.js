import React from 'react'
import ReactDOM from 'react-dom'
import TodoItem from './TodoItem'

import { shallow } from 'enzyme'

describe('<TodoItem />', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<TodoItem />)

    expect(wrapper).toMatchSnapshot
  })
})
