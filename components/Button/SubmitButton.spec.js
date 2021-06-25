import 'jsdom-global/register';
import { mount } from 'enzyme';

import SubmitButton from './SubmitButton';

/** @test {SubmitButton Component} */
describe('SubmitButton Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<SubmitButton onClick={() => {}} text='test' disabled={false} />);

    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('should render with provided text', () => {
    const wrapper = mount(<SubmitButton onClick={() => {}} text='test' disabled={false} />);

    expect(wrapper.text().includes('test')).toBe(true);
  });

  it('should be disabled when disabled flag is true', () => {
    const wrapper = mount(<SubmitButton onClick={() => {}} text='test' disabled={true} />);

    expect(wrapper.props()["disabled"]).toBe(true);
  });

  it('should trigger callback on button click', () => {
    const mockCallBack = jest.fn();
    const wrapper = mount(<SubmitButton onClick={mockCallBack} />);

    wrapper.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});