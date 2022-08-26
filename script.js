class MarkDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input:
      "# H1 Element \r ## H2 Element \r **bolded text** \r > blockquote \n * List: \n - FirstItem \n - Second Item \n - Third Item \n * Link: [Google](https://www.google.com) \n * Image: ![sunset](https://cdn.pixabay.com/photo/2021/02/12/09/36/sunflowers-6007847_960_720.jpg) \n * `<div>HTML code</div>` \n * ``` \n { \n multilinecode \n } \n```" };

  }

  handleChange(event) {
    document.getElementById("preview").innerHTML = marked(event.target.value, {
      gfm: true,
      breaks: true });

    this.setState({
      input: event.target.value });

  }

  componentDidMount() {
    document.getElementById("preview").innerHTML = marked(this.state.input, {
      gfm: true,
      breaks: true });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "container-fluid row d-flex justify-content-center align-content-center fill" }, /*#__PURE__*/
      React.createElement("div", { id: "input", className: "area" }, /*#__PURE__*/
      React.createElement("h4", null, "Input text"), /*#__PURE__*/
      React.createElement("textarea", {
        id: "editor",
        className: "editor",
        onChange: this.handleChange.bind(this),
        value: this.state.input })), /*#__PURE__*/


      React.createElement("div", { id: "markdown", className: "area" }, /*#__PURE__*/
      React.createElement("h4", { className: "markdown" }, "Markdown"), /*#__PURE__*/
      React.createElement("p", { id: "preview", className: "preview" }))));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(MarkDown, null), document.getElementById("container"));