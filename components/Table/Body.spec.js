import 'jsdom-global/register';
import { mount } from 'enzyme';

import Body from './Body';

/** @test {Body Component} */
describe('Body Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Body rows={[]} />);

    expect(wrapper.text().includes('No students found')).toBe(true);
  });

  it('should render without crashing', () => {
    const wrapper = mount(<Body rows={['test@gmail.com']} />);

    expect(wrapper.text().includes('test@gmail.com')).toBe(true);
  });
});