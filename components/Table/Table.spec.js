import 'jsdom-global/register';
import { mount } from 'enzyme';

import Table from './Table';

/** @test {Table Component} */
describe('Table Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Table columns={[]} rows={[]} />);

    expect(wrapper.find('[data-testid="table-div"]')).toHaveLength(1);
  });
});