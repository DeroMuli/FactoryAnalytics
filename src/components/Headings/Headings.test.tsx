import Heading from "./Headings";
import { render, screen } from "@testing-library/react-native";
import definedcolor from "../../constants/colors";
import {
  MD3DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import {} from "@testing-library/jest-native";

describe("Heading", () => {
  it("displays the heading correctly", () => {
    const heading = "Heading";
    render(
      <PaperProvider theme={PaperDarkTheme}>
        <Heading heading={heading} />
      </PaperProvider>
    );
    const headingElement = screen.getByText(heading);
    expect(headingElement).toBeVisible();
    expect(headingElement.props.style.fontFamily).toBe(
      PaperDarkTheme.fonts.bodyLarge.fontFamily
    );
    expect(headingElement.props.style.fontSize).toBe(
      PaperDarkTheme.fonts.bodyLarge.fontSize
    );
    expect(headingElement.props.style.color).toBe(definedcolor.HeadingColor);
    expect(headingElement.props.style.fontWeight).toBe("bold");
  });
});
