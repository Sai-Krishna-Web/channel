import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import ChannelCard from '../components/channelCard';

const item={
description: "Nunc hendrerit blandit elit sed rhoncus. Sed interdum tempus enim vel ornare. Nulla facilisi. Morbi rhoncus turpis in justo sollicitudin, sit amet varius magna fringilla. Fusce porta magna neque, nec.",
instructorName: "Vestibulum Ante",
instructorPhotoUrl: "https://placeholdit.imgix.net/~text?txtsize=34&txt=B&w=60&h=60",
subjectPhotoUrl: "https://placeholdit.imgix.net/~text?txtsize=34&txt=A&w=60&h=60",
time: "2016-01-05 22:00:00",
title: "Ut consequat risus id lacus."
}
let wrapper=shallow(<ChannelCard item={item}/>);
describe('renders ChannelCard Component', () => {
    it('renders correctly', () => {
      wrapper =shallow(<ChannelCard item={item} />);
      expect(wrapper.exists()).toBe(true)
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });

    it('should match the product details content', () => {
        const component = mount(<ChannelCard item={item} />);
    
        expect(component.text()).toContain(item.title);
        expect(component.text()).toContain(item.description);
        expect(component.text()).toContain(item.instructorName);
      });
});

