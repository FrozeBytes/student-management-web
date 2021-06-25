import 'jsdom-global/register';
import { mount } from 'enzyme';

import Body from './Body';

/** @test {Body Component} */
describe('Body Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Body rows={[]} />);

    expect(wrapper.text().includes('No students found')).toBe(true);
  });
});