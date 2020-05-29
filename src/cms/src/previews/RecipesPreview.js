import React from "react";

export default class RecipesPreview extends React.Component {
  render() {
    const { entry, widgetFor } = this.props;
    let tags = [];
    if (entry.getIn(["data", "tags"])) {
      tags = this.props.widgetsFor("tags").map(function(tag, index) {
        return [tag.get("data")];
      });
    }
    tags = tags.join(", ");

    return (
      <div>
        <h2 className="leading-none">{entry.getIn(["data", "title"])}</h2>
        <div className="flex page-top">
          <img className="h-64 mr-6" src={entry.getIn(["data", "image"])} title={entry.getIn(["data", "title"])} />
          <div className="recipe-stats">
            <div className="text-sm uppercase">
              <a href={entry.getIn(["data", "source_url"])} className="self-end font-bold hover:underline focus:underline">{entry.getIn(["data", "source"])}</a>
            </div>
            <div>
              <span className="field-label">Yield: </span>
              <span>{entry.getIn(["data", "yield"])}</span>
            </div>
            <div>
              <span className="field-label">Total Time: </span>
              <span>{entry.getIn(["data", "total_time"])}</span>
            </div>
            <div>
              <span className="field-label">Categories: </span>
              {tags}
            </div>
          </div>
        </div>
        <div className="my-8 text-lg content">
          {widgetFor("body")}
        </div>
        <div>
          <h3>Ingredients</h3>
          <div className="mb-8 ingredients">
            {widgetFor("ingredients")}
          </div>
          <h3>Instructions</h3>
          <div className="mb-8 instructions">
            {widgetFor("instructions")}
          </div>
          <h4>Notes</h4>
          <div className="text-sm">
            {widgetFor("notes")}
          </div>
        </div>
      </div>

    );
  }
}
