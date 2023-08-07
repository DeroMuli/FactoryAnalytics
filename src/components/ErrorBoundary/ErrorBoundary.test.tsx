import ErrorBoundary from "./ErrorBoundary";
import { render, screen } from "@testing-library/react-native";
import { Text } from "react-native";

describe("ErrorBoundary", () => {
  it("should show the fallback icon when error is thrown", () => {
    render(<TestComponent />);
    expect(screen.getByText("fallback")).toBeVisible();
  });
});

const TestComponent = () => {
  return (
    <ErrorBoundary fallback={<Fallback />}>
      <ErrorComponent />
    </ErrorBoundary>
  );
};

const Fallback = () => {
  return <Text>fallback</Text>;
};

const ErrorComponent = () => {
  throw new Error("error");
};
