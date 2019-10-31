import React from 'react';
import { shallow , mount} from 'enzyme';
import Header from './Header';
import Buscador from './Buscador';
describe('Header', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Header/>);
  
    expect(component).toMatchSnapshot();
  });
});

it('should be possible to activate button with Spacebar', () => {
    const component = mount(<Buscador />);
    component
      .find('input#boton')
      .simulate('keydown', { keyCode: 32 });
    expect(component).toMatchSnapshot();
    component.unmount();
  });