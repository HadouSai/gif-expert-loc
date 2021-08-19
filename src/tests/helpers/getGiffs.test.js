import "@testing-library/jest-dom";
import { shallow } from "enzyme"
import { getGiffs } from "../../helpers/getGifs";

describe('Pruebas en getgiffs', () => {
    test('should get 10 items',async () => {
        const giffs = await getGiffs('kurumi');
        expect(giffs.length).toBe(10);       
    })
    
});



