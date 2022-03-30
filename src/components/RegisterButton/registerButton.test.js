import React from 'react';
import TestRenderer from 'react-test-renderer';
import { CTA_RegisterButton } from '.';

const component = TestRenderer.create(
    <CTA_RegisterButton page='register'> Register Now! </CTA_RegisterButton>
).toJSON();


test('snapshot xd', () => {
    expect(component).toMatchSnapshot();
});
