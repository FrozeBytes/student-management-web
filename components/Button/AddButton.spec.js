import 'jsdom-global/register';
import { mount } from 'enzyme';

import AddButton from './AddButton';

/** @test {AddButton Component} */
describe('AddButton Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<AddButton onClick={() => {}} />);

    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('should trigger callback on button click', () => {
    const mockCallBack = jest.fn();
    const wrapper = mount(<AddButton onClick={mockCallBack} />);

    wrapper.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});