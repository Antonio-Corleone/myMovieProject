import React, { useState } from 'react'
import NewItemComponent from './NewItem';
import news from './news.json';

export default function NewsComponent(props) {
  const [showCase, setShowCase] = useState('Cinemas')
  const handleShowCase = (val) => {
    setShowCase(val)
  }
  const renderNewsType = (type) => {
    switch (type) {
      case 'Cinemas':
        return (
          <NewItemComponent data={news[0].CinemasList} />
        )
      case 'Reviews':
        return (
          <NewItemComponent data={news[0].ReviewsList} />
        )
      case 'Promotions':
        return (
          <NewItemComponent data={news[0].PromotionsList} />
        )
      default:
        break;
    }
  }
  return (
    <div className="bg-light" style={{borderRadius: '3px'}}>
      <div className="container">
      <h2 className="text-center pt-3 mb-0" style={{fontWeight: '700'}}>NEWS &amp; EVENTS</h2>
        <div className="row">
          <div className="col-md-12 text-center my-3">
            <nav>
              <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                <button
                  className={`nav-item nav-link btn ${showCase ==='Cinemas' ? 'btn-success' : ''}`}
                  id="nav-home-tab"
                  data-toggle="tab"
                  style={{ cursor: "pointer" }}
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  onClick={() => handleShowCase('Cinemas')}
                >
                  Cinemas
                </button>
                <button
                  className={`nav-item nav-link btn ${showCase ==='Reviews' ? 'btn-success' : ''}`}
                  id="nav-profile-tab"
                  data-toggle="tab"
                  style={{ cursor: "pointer" }}
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                  onClick={() => handleShowCase('Reviews')}
                >
                  Reviews
                </button>
                <button
                  className={`nav-item nav-link btn ${showCase ==='Promotions' ? 'btn-success' : ''}`}
                  id="nav-profile-tab"
                  data-toggle="tab"
                  style={{ cursor: "pointer" }}
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                  onClick={() => handleShowCase('Promotions')}
                >
                  Promotions
                </button>
              </div>
            </nav>
          </div>
        </div>
        {renderNewsType(showCase)}
      </div>
    </div>
  )
}
