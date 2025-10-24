import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";
import CanteenMenu from "../../src/screens/Canteenmenu";
import { describe} from "node:test";

describe("should dispaly the content on the homescreen", () => {
    test("renders EverestEngineering message on the home page", async () => {
        const { getByText } = render(<CanteenMenu/>);
        const header = getByText('EverestEnginering');
        expect(header).toBeTruthy()
        
    });
});