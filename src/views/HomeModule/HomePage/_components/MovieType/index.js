import React, { useState } from 'react';

import NowShowingComponent from './NowShowing';
import ComingSoonComponent from './ComingSoon';



export default function MovieTypeComponent(props) {

  const [showStatus, setShowStatus] = useState(true)
  const handleShowStatus = () => {
    setShowStatus(!showStatus)
  }

  return (
    <div className="bg-light">
      <div className="container">
        <h2 className="text-center pt-3 mb-0" style={{fontWeight: '700'}}>MOVIE SELCTIONS</h2>
        <div className="row">
          <div className="col-md-12 text-center my-3">
            <nav>
              <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                <button
                  className={`nav-item nav-link btn ${showStatus ? 'btn-success' : ''}`}
                  id="nav-home-tab"
                  data-toggle="tab"
                  style={{ cursor: "pointer" }}
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  onClick={handleShowStatus}
                >
                  Now showing
                </button>
                <button
                  className={`nav-item nav-link btn ${!showStatus ? 'btn-success' : ''}`}
                  id="nav-profile-tab"
                  data-toggle="tab"
                  style={{ cursor: "pointer" }}
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                  onClick={handleShowStatus}
                >
                  Coming soon
                </button>
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
    </div>
  )
}
