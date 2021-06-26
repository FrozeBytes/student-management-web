import 'jsdom-global/register';
import { mount } from 'enzyme';

import Input from './Input';

/** @test {Input Component} */
describe('Input Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Input addCB={() => {}} title='title' />);

    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('should render with provided title', () => {
    const wrapper = mount(<Input addCB={() => {}} title='title'/>);

    expect(wrapper.text().includes('title')).toBe(true);
  });

  it('should trigger callback on button click', () => {
    const mockCallBack = jest.fn();
    const wrapper = mount(<Input addCB={mockCallBack} title='title'/>);

    wrapper.find('input').simulate('change', { target: { value: 'testgmail.com' } })
    wrapper.find('button').simulate('click');
    wrapper.find('input').simulate('change', { target: { value: 'test0@gmail.com' } })
    wrapper.find('input').simulate('keydown', {key: 'Space'});
    wrapper.find('input').simulate('keydown', {key: 'Enter'});
    wrapper.find('input').simulate('change', { target: { value: 'test@gmail.com' } })
    wrapper.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(2);
  });
});