import "@testing-library/jest-dom";
import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory";

describe('Pruebas en GiffGridItem', () => {

    const setCategories = jest.fn();
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('should renderize AddCategory component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should change data', () => {
        const input = wrapper.find('input');
        const value = 'Hello my world';

        input.simulate('change', { target: { value } });
    })

    test('should not post submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('should call setcategories and clean the input', () => {
        const input = wrapper.find('input');
        const value = 'Hello Kurumi';
        // tener cuidado por que si lo tomo con wrapper
        // es justo en ese momento como lo tengo que se evaluara
        // si sucede algo despues no se tomara en cuenta
        input.simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).toHaveBeenCalledTimes(1);
        //expect(setCategories).toHaveBeenCalled(expect.any(function));
        expect(input.prop('value')).toBe('');

    })



})