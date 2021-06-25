import 'jsdom-global/register';
import { mount } from 'enzyme';

import Form from './Form';

/** @test {Form Component} */
describe('Form Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Form onSubmitCB={() => {}} title='title' />);

    expect(wrapper.find('[data-testid="form-submit-btn"]')).toHaveLength(1);
  });

  it('should trigger callback on button click', () => {
    const mockCallBack = jest.fn();
    const wrapper = mount(<Form onSubmitCB={mockCallBack} title='title'/>);

    wrapper.find('input').simulate('change', { target: { value: 'test@gmail.com' } })
    wrapper.find('[data-testid="form-add-email-btn"]').simulate('click');
    wrapper.find('[data-testid="form-submit-btn"]').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});