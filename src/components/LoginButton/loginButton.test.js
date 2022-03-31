import React from 'react';
import TestRenderer from 'react-test-renderer';
import { LoginButton } from '.';

const testRenderer = TestRenderer.create(
  <LoginButton page="/login">Login</LoginButton>
).toJSON();


// test('match spanshot link', () => {
//     expect(testRenderer.props.href).toBe('https://www.facebook.com/')
// })
test('When the button is clicked needs to redirect to the Login page', () => {
    expect(testRenderer).toMatchSnapshot();
})

// test('match snapshot with route :v', () => {
//     expect(testRenderer.props.href).toBe('/');
// })