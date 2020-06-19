import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import ChannelList from '../components/ChannelList';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {fetchChannelsAPI} from '../API';

const channels={
channels:fetchChannelsAPI()
}
const initialState={channels};
const mockStore = configureStore();
let store1=mockStore(initialState);

let wrapper=shallow(<Provider store={store1}><ChannelList /></Provider>);
let component = mount(<Provider store={store1}><ChannelList /></Provider>);
describe('renders ChannelList Component', () => {
    it('renders correctly', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });

    it('should have header Channel List', () => {
        
        expect(wrapper.text()).toContain('Channel List');
      });
    
    it('check Button Link exists',()=>{
        expect(wrapper.find('ChannelCard').exists()).toBe(true);
    });
});

