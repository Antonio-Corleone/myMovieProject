import React, { useState } from 'react'
import NewItemComponent from './NewItem';
import news from './news.json';

export default function NewsComponent(props) {
  console.log(news);
  const [showCase, setShowCase] = useState('Cinemas')
  const handleShowCase = (val) => {
    setShowCase(val)
  }
  const renderNewsType = (type) => {
    switch (type) {
      case 'Cinemas':
        return (
          <NewItemComponent data ={news[0].CinemasList} />
        )
      case 'Reviews':
        return (
          <NewItemComponent data ={news[0].ReviewsList} />
        )
      case 'Promotions':
        return (
          <NewItemComponent data ={news[0].PromotionsList}/>
        )
      default:
        break;
    }
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
                style={{cursor: "pointer"}}
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
                onClick={() => handleShowCase('Cinemas')}
              >
                Cinemas
              </a>
              <a
                className="nav-item nav-link"
                id="nav-profile-tab"
                data-toggle="tab"
                style={{cursor: "pointer"}}
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
                onClick={() => handleShowCase('Reviews')}
              >
                Reviews
              </a>
              <a
                className="nav-item nav-link"
                id="nav-profile-tab"
                data-toggle="tab"
                style={{cursor: "pointer"}}
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
                onClick={() => handleShowCase('Promotions')}
              >
                Promotions
              </a>
            </div>
          </nav>
        </div>
      </div>
      {renderNewsType(showCase)}
    </div>
  )
}
