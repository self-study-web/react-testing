import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

it('shows a Comment Box',() => {
    expect(wrapped.find(CommentBox).length).toEqual(1);  // find returns an array with all the found instances 
});

it('shows a comment list',() => {
    expect(wrapped.find(CommentList).length).toEqual(1);
})