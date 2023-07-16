import Heading from "./Headings";
import renderer from "react-test-renderer";
import { Text } from "react-native";

describe("Heading", () => {
  it("renders correctly", () => {
    const heading = "Heading";
    const tree = renderer.create(<Heading heading={heading} />);
    expect(tree.root.findByType(Text).props.children).toBe(heading);
  });
});
