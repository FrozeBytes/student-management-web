import 'jsdom-global/register';
import { mount } from 'enzyme';

import Row from './Row';

/** @test {Row Component} */
describe('Row Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Row index={0} />);

    expect(wrapper.text().includes('No students found')).toBe(true);
  });

  it('should trigger render No students found when no data is provided', () => {
    const wrapper = mount(<Row index={0} />);

    expect(wrapper.text().includes('No students found')).toBe(true);
  });

  it('should trigger render render email when data is provided', () => {
    const wrapper = mount(<Row data={'test@gmail.com'} index={0} />);

    expect(wrapper.text().includes('test@gmail.com')).toBe(true);
    expect(wrapper.text().includes('No students found')).toBe(false);
  });
});