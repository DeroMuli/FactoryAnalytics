import FancySeparator from "./FancySeparator";
import renderer from "react-test-renderer";
import { Text } from "react-native";

describe("Heading", () => {
  it("renders correctly", () => {
    const color = "red";
    const style = { margin: 5 };
    const tree = renderer.create(
      <FancySeparator color={color} style={style} />
    );
  });
});
