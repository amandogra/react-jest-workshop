import React from 'react';
import {mount} from 'enzyme';
import {mountToJson} from 'enzyme-to-json';
import Button from './Button';
// You're going to need react, mount from enzyme,
// mountToJson from enzyme-to-json, and ./Button

test('styles the button with a background of the context color', () => {
  // get a new version of the Button component by using stubContext to stub it with the color blue
  // render that component
  // take a snapshot of the result and verify the snapshot
  const element = mount(<Button children="Click me!" />, {
    context: {color: 'red'}
  });

  expect(mountToJson(element)).toMatchSnapshot();
})
