import expect from 'expect';
import React from 'react';
import {mount,shallow} from 'enzyme';
import BooksPage from './BooksPage';
import { MemoryRouter } from 'react-router';
function setup(){
    const props={
        books:[{title:"abc",author:"anurag rai",thumbnail:"biography"},{title:"defcls",author:"anurag rai",thumbnail:"programm"}],
       
    };
    return mount(
        <MemoryRouter initialEntries={[ '/details' ]}>
    <BooksPage {...props}/>
    </MemoryRouter>
    );
}
describe('BooksPage via Enzyme',()=>{
    it('renders books',()=>{
        const wrapper=setup();
       
       expect(wrapper.find('table').length).toBeGreaterThan(0);
    });
})