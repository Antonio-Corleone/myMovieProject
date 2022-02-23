import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieItem from './MovieItem';
import { actFetchDataListMovie } from './modules/actions';

export default function ListMoviePage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchDataListMovie());
  }, [dispatch]);
  
  const dataListShowing = useSelector(state => state.listMoviePageReducer.dataListShowing);
  const dataListComing = useSelector(state => state.listMoviePageReducer.dataListComing)
  const [showStatus, setShowStatus] = useState(true)
  const handleShowStatus = () => {
    setShowStatus(!showStatus)
  }

  return (
    <>
      <div className="bg-warning" style={{ height: '3px' }}></div>
      <div className="bg-light">
        <div className="container">
          <h2 className="pt-3 mb-0" style={{ fontWeight: '700' }}>MOVIE LIST</h2>
          <div className="row">
            <div className="col-md-12 text-center my-3">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
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
          <div className="row">
            {showStatus
              ?
              // Now showing
              dataListShowing?.map((movie, index) => {
                return (
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                    <MovieItem movie={movie} />
                  </div>
                )
              })
              :
              // Coming soon
              dataListComing?.map((movie, index) => {
                return (
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                    <MovieItem movie={movie} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}
