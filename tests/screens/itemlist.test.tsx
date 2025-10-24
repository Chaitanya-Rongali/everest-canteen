import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";
import Displaylistofitems from "../../src/screens/itemlist";
import { describe, it } from "node:test";
import App from "../../App";
describe("should dispaly the content on the homescreen", () => {
    test("renders EverestEngineering message on the home page", async () => {
        const { getByText } = render(<Displaylistofitems/>);
        getByText('EverestEnginering');
        
    });
});