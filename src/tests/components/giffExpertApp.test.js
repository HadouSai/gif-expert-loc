import "@testing-library/jest-dom";
import { shallow } from "enzyme"
import GiftExpertApp from "../../GiftExpertApp";

describe('testing in main component', () => {
    test('should appear in root', () => {
        const wrapper = shallow(<GiftExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })

})
