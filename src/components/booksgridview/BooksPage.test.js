import expect from 'expect';
import React from 'react';
import {mount,shallow} from 'enzyme';
import BookList from './BookList';
import BooksPage from './BooksPage';
import { MemoryRouter,Link } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import nock from 'nock';
import App from '../App';

const wait = (wrapper, predicate, timeout = 1000) => {
    return new Promise((resolve, reject) => {
      if (predicate(wrapper)) {
        console.log(wrapper.debug());
        return resolve(true);
      }
      setTimeout(() => {
        console.log(wrapper.debug());
        wrapper.update();
        return predicate(wrapper) ? resolve(true) : reject(new Error('Timeout expired'));
      }, timeout);
    });
  };
function setup(){
    const props={
        books:[{title:"sherlok",author:"anurag rai",thumbnail:"biography"},{title:"harry",author:"anurag rai",thumbnail:"harry image"}],
       
    };
    return mount(
        <MemoryRouter initialEntries={[ '/details' ]}>
    <BookList {...props}/>
    </MemoryRouter>
    );
}
describe('BooksPage via Enzyme',()=>{
   
    it('renders books',()=>{
        const wrapper=setup();
       
       expect(wrapper.find('table').length).toBeGreaterThan(0);
    });

    it('renders the sherlock book details on click',()=>{
        const wrapper=setup();
        wrapper.find('Link').first().simulate('click')
       
        expect(wrapper.find('img').first().props().src).toEqual('biography');
    })
    it('renders the Harry book details on click',()=>{
        const wrapper=setup();
        wrapper.find('Link').at(1).simulate('click')
       
        expect(wrapper.find('img').at(1).props().src).toEqual('harry image');
    })
    it('mocks goodreads api',()=>{
        nock('https://goodreads.com/api')
          .get('/harry')
          .reply(200, {
               books: [{title:"sherlok",author:"anurag rai",thumbnail:"biography"},{title:"harry",author:"anurag rai",thumbnail:"harry image"}]
          });
        const wrapper=shallow(<MemoryRouter initialEntries={[ '/details' ]}>
        <BooksPage />
        </MemoryRouter>)
        
        setImmediate(() => {
            expect(wrapper.state().books).toEqual({ books:[{title:"sherlok",author:"anurag rai",thumbnail:"biography"},{title:"harry",author:"anurag rai",thumbnail:"harry image"}] });
            done();
        });
    })
    it('searching books shows result--integration test',  ()=>{
        const wrapper=mount(<Router><App/></Router>);
        wrapper.find('input').instance().value="Harry";
        
         wrapper.find('#searchlink').first().simulate('click');
        const waitPromise=wait(wrapper, w =>w.find('table').exists());
        waitPromise.then(()=>{
            expect(wrapper.find('table').length).toBeGreaterThan(0)
        })
    
        

             
    })

})