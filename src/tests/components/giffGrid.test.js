import "@testing-library/jest-dom";
import GiffGrid from "../../components/GiffGrid";
import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe('Testing in giffgrid', () => {
    const gifs = [{
        id: 'abc',
        url: 'http://www.vaaa/ss/fs.jpg',
        title: 'pinto'
    }, {
        id: 'abc',
        url: 'http://www.vaaa/ss/fs.jpg',
        title: 'pinto'
    }]

    test('should appear GiffGrid', () => {
        useFetchGifs.mockReturnValue({
            giffs: [],
            loading: true
        });
        // voy aca el mock se me cargo todo .....
        const category = 'kurumi';
        const wrapper = shallow(<GiffGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('should show items when loaded', () => {

        useFetchGifs.mockReturnValue({
            giffs: gifs,
            loading: false
        })
        const category = 'kurumi';
        const wrapper = shallow(<GiffGrid category={category} />);
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GiffGridItem').length).toBe(gifs.length)


        //expect(wrapper).toMatchSnapshot();
    })


});
