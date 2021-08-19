import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GiffGridItem from "../components/GiffGridItem";

describe('Pruebas en GiffGridItem', () => {
    const text = "aa"
    const imgurl = "https://www.giffgrid.com/";
    const wrapper = shallow(<GiffGridItem id="1" title={text} imgUrl={imgurl} />);

    test('should renderize GiffGridItem compnent', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should show text', () => {
        const p = wrapper.find('span');
        expect(p.text().trim()).toBe(text);
    })

    test('should show img', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(imgurl);
    })


})



