import React from 'react';
import { mount } from 'enzyme'; 
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;
// FullDOM renderer from enzyme.
//.attempts to show the same fakeDOM that is implemented
// by the JSDOM library.So we have to do clean up (unmount) so that it
// does not interfere with other tests
beforeEach(() => {
    wrapped = mount(
            <Root>
                <CommentBox />
            </Root>
        );                                
});

afterEach(() => {
    wrapped.unmount();
});

it('has a textarea and two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area' ,() => { 
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        wrapped.update(); //Forcing the update as setState will perform asynchronously
    });

    it('has a textarea that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('should clear the text area when user has submitted form', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});