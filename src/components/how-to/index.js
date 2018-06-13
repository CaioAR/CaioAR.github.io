import React from 'react';

import './_how-to.scss';

const NewsListing = props =>
  (<section className="howto" id="howto">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h4 className="howto-title">About Me</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="howto-list">
            {props.data.map((item, i) =>
              (<p className="howto-list-item" key={i}>
                {item.title}
              </p>),
            )}
          </div>
        </div>
      </div>
    </div>
  </section>);

export default NewsListing;
