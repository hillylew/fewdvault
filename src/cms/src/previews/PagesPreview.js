import React from "react";

export default class PagesPreview extends React.Component {
  render() {
    const { entry, widgetFor } = this.props;

    return (
      <div>
        <h1>{entry.getIn(["data", "title"])}</h1>
        {widgetFor("body")}
      </div>
    );
  }
}
