import React from 'react';
import { NavLinks } from '.';
import { getAllByTestId } from '@testing-library/react';
import TestRenderer from 'react-test-renderer' 

// BROUGHT FROM MENU
const links = [{ route: '',page : 'Settings'}, 
{ route: '/home', page : 'home'}, 
{ route: '/profile', page: 'profile'},
{ route: '/scores', page: 'scores'}
];


test('When the button is clicked needs to redirect to the Login page', () => {
  const component = TestRenderer.create(<NavLinks links={links} ></NavLinks>).findAllByType("a").toJSON();

  expect(component).toMatchSnapshot()
})


// test('match snapshot', () => {
//     expect(testRenderer.props.href).toBe('/');
// })