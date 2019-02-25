import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Login from './Login'

configure({ adapter: new Adapter() });

test('Renderização sem erro do form', () => {
	expect(shallow(<Login />).find('form.ui form').exists()).toBe(true)
})

test('Verifica se existe a entrada de email', () => {
   expect(shallow(<Login />).find('#email').length).toEqual(1)
})

test('Verifica se existe a entrada de password', () => {
  expect(shallow(<Login />).find('#password').length).toEqual(1)
})

test('simular entrada de dado no campo e-mail', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'teste@teste.com'}});
    
   expect(wrapper.state('email')).toEqual('teste@teste.com');
})

it('simular entrada de dados no campo password', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'gato'}});
    
    expect(wrapper.state('password')).toEqual('gato');
})