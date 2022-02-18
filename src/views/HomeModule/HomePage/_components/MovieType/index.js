import React, { useState } from 'react';

import NowShowingComponent from './NowShowing';
import ComingSoonComponent from './ComingSoon';



export default function MovieTypeComponent(props) {

  const [showStatus, setShowStatus] = useState(true)
  const handleShowStatus = () => {
    setShowStatus(!showStatus)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center my-3">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <a
                className="nav-item nav-link active"
                id="nav-home-tab"
                data-toggle="tab"
                style={{ cursor: "pointer" }}
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
                onClick={handleShowStatus}
              >
                Now showing
              </a>
              <a
                className="nav-item nav-link"
                id="nav-profile-tab"
                data-toggle="tab"
                style={{ cursor: "pointer" }}
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
                onClick={handleShowStatus}
              >
                Coming soon
              </a>
            </div>
          </nav>
        </div>
      </div>
      {showStatus
        ?
        // Now showing
        <NowShowingComponent />
        :
        // Coming soon
        <ComingSoonComponent />
      }
    </div>
  )
}
