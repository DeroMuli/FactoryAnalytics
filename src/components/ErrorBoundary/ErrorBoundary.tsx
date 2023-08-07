import React, { Component, ErrorInfo } from "react";

type MyProps = {
  children: JSX.Element | null;
  fallback: JSX.Element | null;
};
type MyState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<MyProps, MyState> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: ErrorInfo) {
    // add a loggin service here
    return { hasError: true };
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
