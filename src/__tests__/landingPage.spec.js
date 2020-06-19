import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import LandingPage from '../components/landingPage';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const initialState={};
const mockStore = configureStore();
let store1=mockStore(initialState);

let wrapper=shallow(<Provider store={store1}><LandingPage /></Provider>);
let component = mount(<Provider store={store1}><LandingPage /></Provider>);
describe('renders LandingPage Component', () => {
    it('renders correctly', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });

    it('should match the product details content', () => {
        
        expect(component.text()).toContain('View Channels');
      });
    
    it('check Button Link exists',()=>{
        expect(component.find('button').exists()).toBe(true);
    });
});

