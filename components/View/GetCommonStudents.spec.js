import 'jsdom-global/register';
import { mount } from 'enzyme';

import GetCommonStudents from './GetCommonStudents';

/** @test {GetCommonStudents Component} */
describe('GetCommonStudents Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<GetCommonStudents columns={[]} rows={[]} />);

    expect(wrapper.find('[data-testid="view-form"]')).toHaveLength(1);
    expect(wrapper.find('[data-testid="view-table"]')).toHaveLength(1);
  });
});