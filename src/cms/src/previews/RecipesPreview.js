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
      <div className="m-4 bg-white border shadow-xl border-silver">
        <h2 className="items-center px-4 pt-4 pb-2 mb-0 font-bold leading-snug border border-t-0 border-b-2 border-l-0 border-r-0 text-outer-space recipe-title border-red">{entry.getIn(["data", "title"])}</h2>
        <div className="p-3 recipe-card">
          <div className="page-top">
            <img className="w-64 h-64 mr-6 lazyload fade-in" data-src={entry.getIn(["data", "image"])} title={entry.getIn(["data", "title"])} />
            <div className="pt-1 recipe-stats">
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
              <div className="my-8 text-lg content">
                {widgetFor("body")}
              </div>
            </div>
          </div>
          <div className="p-4">
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
      </div>

    );
  }
}
