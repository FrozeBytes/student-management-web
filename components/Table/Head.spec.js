import 'jsdom-global/register';
import { mount } from 'enzyme';

import Head from './Head';

/** @test {Head Component} */
describe('Head Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Head columns={['Students']} />);

    expect(wrapper.text().includes('Students')).toBe(true);
  });
});