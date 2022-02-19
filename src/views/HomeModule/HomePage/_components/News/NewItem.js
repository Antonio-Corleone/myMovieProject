import React from 'react'
import './NewItem.css';
import './demo.css';
import './set1.css';

export default function NewItemComponent(props) {
  const { data } = props
  console.log(props);
  return (
    <div className="row">
      {data.map((item, index) => {
        return (
          <div className="col-md-4" key={index}>
            <div className="grid mix review" style={{ border: '1px solid #000' }} >
              <a href="#" className="new__item d-block">
                <figure className="effect-ruby">
                  <img className="card-img-top" src={item.image} alt={123} />
                  <figcaption>
                    <h2>{item.Title}</h2>
                    <p>Ruby did not need any help. Everybody knew that.</p>
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
        )
      })}
    </div>

  )
}
