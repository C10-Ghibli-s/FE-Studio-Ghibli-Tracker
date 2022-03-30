import React from 'react';
import { NavLinks } from '.';
import { render } from '@testing-library/react';
// BROUGHT FROM MENU
const links = [{ route: '',page : 'Settings'}, 
{ route: '/home', page : 'home'}, 
{ route: '/profile', page: 'profile'},
{ route: '/scores', page: 'scores'}
];


test('When the button is clicked needs to redirect to the Login page', () => {
  const { getAllByTestId } = render(<NavLinks links={links} ></NavLinks>);

  const navBarLinks = getAllByTestId('navLink').map(li => li.children );

  expect(navBarLinks).toMatchSnapshot()
})



// test('match snapshot', () => {
//     expect(testRenderer.props.href).toBe('/');
// })