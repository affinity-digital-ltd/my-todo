import React from 'react'
import Todo from '../Todo'

import { shallow, mount } from 'enzyme'

describe('<Todo />', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Todo />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should add a new item to the list', () => {
    const wrapper = mount(<Todo />)

    const input = wrapper.find('[name="todoItem"]')
    input.instance().value = 'test'
    input.simulate('change')
    const button = wrapper.find('[type="submit"]')
    button.simulate('submit')

    expect(wrapper.find('.c-todo-item__content').text()).toEqual('test')
  })

  it('should mark the item as done', () => {
    const wrapper = mount(<Todo />)

    const input = wrapper.find('[name="todoItem"]')
    input.simulate('change', { target: { value: 'test' } })
    const button = wrapper.find('[type="submit"]')
    button.simulate('submit')

    const checkbox = wrapper.find('[type="checkbox"]')
    checkbox.simulate('click', { target: { checked: true } })

    expect(wrapper.find('span').hasClass('u-strikethrough')).toEqual(true)
  })

  it('should remove the todo item', () => {
    const wrapper = mount(<Todo />)

    const input = wrapper.find('[name="todoItem"]')
    input.simulate('change', { target: { value: 'test' } })
    const button = wrapper.find('[type="submit"]')
    button.simulate('submit')

    expect(wrapper.find('span').length).toEqual(1)
    
    const del = wrapper.find('[data-behavior="delete"]')
    del.simulate('click')

    expect(wrapper.find('span').length).toEqual(0)
  })
})
