import { Component } from "react";

class TransformText extends Component {
  state = {
    text: this.props.text,
  };

  componentDidMount() {
    const { replace } = this.props;
    

    if (replace)
      this.setState({
        text: this.state.text.replace(replace[0], replace[1]),
      });
  }

  render() {
    return this.state.text;
  }
}

export default TransformText;
