import React from 'react'
const Cards = () => {
    return (

        <div className="col-12 col-md-3 mt-3">
            <img className="card-img-top" src="https://picsum.photos/500/325" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}
export default Cards;