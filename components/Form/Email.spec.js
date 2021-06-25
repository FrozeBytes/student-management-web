import 'jsdom-global/register';
import { mount } from 'enzyme';

import Email from './Email';

/** @test {Email Component} */
describe('Email Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Email removeCB={() => {}} email='test'/>);

    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('should render with provided email', () => {
    const wrapper = mount(<Email removeCB={() => {}} email='test'/>);

    expect(wrapper.text().includes('test')).toBe(true);
  });

  it('should trigger callback on button click', () => {
    const mockCallBack = jest.fn();
    const wrapper = mount(<Email removeCB={mockCallBack} />);

    wrapper.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});