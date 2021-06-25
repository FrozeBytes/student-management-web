import 'jsdom-global/register';
import { mount } from 'enzyme';

import DeleteButton from './DeleteButton';

/** @test {DeleteButton Component} */
describe('DeleteButton Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<DeleteButton onClick={() => {}} />);

    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('should trigger callback on button click', () => {
    const mockCallBack = jest.fn();
    const wrapper = mount(<DeleteButton onClick={mockCallBack} />);

    wrapper.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});