import React, { Component } from "react";
class Cart extends Component {
    constructor() {
        super();
        this.state = {
            displayDetails: [
                {
                    productName: "Fancy product",
                    productPriceOffer: "$40.00 - $80.00",
                    productAction: "View option",
                    remove: [{
                        productView: "remove"
                    }]

                },
                {
                    productName: "Special Item",
                    productPrice: "$20.00",
                    productPriceOffer: " $18.00",
                    productAction: "Add to cart",
                    top: "sale",
                    star: "⭐",
                    remove: [{
                        productView: "remove"
                    }]

                },
                {
                    productName: "Sale Item",
                    productPrice: "$36.00",
                    productPriceOffer: " $19.00 ",
                    productAction: "Add to cart",
                    top: "sale",
                    remove: [{
                        productView: "remove"
                    }]

                },
                {
                    productName: "Popular Item",
                    productPriceOffer: "$40.00",
                    productAction: "Add to cart",
                    star: "⭐",
                    remove: [{
                        productView: "remove"
                    }]

                },

                {
                    productName: "Sale Item",
                    productPrice: "$36.00",
                    productPriceOffer: " $19.00 ",
                    productAction: "Add to cart",
                    top: "sale",
                    remove: [{
                        productView: "remove"
                    }]
                },
                {
                    productName: "Fancy product",
                    productPriceOffer: "$40.00 - $80.00",
                    productAction: "View option",
                    remove: [{
                        productView: "remove"
                    }]

                },

                {
                    productName: "Special Item",
                    productPrice: "$20.00",
                    productPriceOffer: " $18.00",
                    productAction: "Add to cart",
                    top: "sale",
                    star: "⭐",
                    remove: [{
                        productView: "remove"
                    }]

                },
                {
                    productName: "Popular Item",
                    productPriceOffer: "$40.00",
                    productAction: "Add to cart",
                    star: "⭐",
                    remove: [{
                        productView: "remove"
                    }]

                },


            ],
            name: "cart",
            count: 0
        }
    }



    addFunc = (index) => {
        if (this.state.displayDetails[index].productAction === "Add to cart") {
            this.setState({
                count: this.state.count + 1

            },
            )
            this.setState(state => {
                const displayDetails = [...state.displayDetails]
                displayDetails[index].isDisabled = true
                return displayDetails
            })
        }




    }

    delFunc = (index) => {
        if (this.state.count !== 0) {
            this.setState({
                count: this.state.count - 1

            })
        }
        this.setState(state => {
            const displayDetails = [...state.displayDetails]
            displayDetails[index].isDisabled = false
            return displayDetails
        })
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container px-4 px-lg-5">
                        <a className="navbar-brand" href="#!">Start Bootstrap</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#!">All Products</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                        <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <button className="btn btn-outline-dark" type="submit">
                                    <i className="bi-cart-fill me-1"></i>
                                    {this.state.name}
                                    <span className="badge bg-dark text-white ms-1 rounded-pill">{this.state.count}</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
                <header className="bg-dark py-5">
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="text-center text-white">
                            <h1 className="display-4 fw-bolder">Shop in style</h1>
                            <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                        </div>
                    </div>
                </header>

                <section className="py-5">
                    <div className="container px-4 px-lg-5 mt-5">
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            {this.state.displayDetails.map((c, index) => {
                                return (
                                    <div key={index}>

                                        <div className="col mb-5">
                                            <div className="card h-100">
                                                <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>{c.top}</div>
                                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                                <div className="card-body p-4">
                                                    <div className="text-center">
                                                        <h5 className="fw-bolder">{c.productName}</h5>
                                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                                            <div className="bi-star-fill">{c.star}</div>
                                                            <div className="bi-star-fill">{c.star}</div>
                                                            <div className="bi-star-fill">{c.star}</div>
                                                            <div className="bi-star-fill">{c.star}</div>
                                                            <div className="bi-star-fill">{c.star}</div>
                                                        </div>
                                                        <span className="text-muted text-decoration-line-through">{c.productPrice}</span>
                                                        {c.productPriceOffer}
                                                    </div>
                                                </div>
                                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                    <div className="text-center"><button className="btn btn-outline-dark mt-auto" type="button" disabled={c.isDisabled}
                                                        onClick={() => { this.addFunc(index) }}>{c.productAction}</button></div>
                                                {c.remove.map((f)=> {
                                                    if(c.productAction!=="View option"){
                                                        return(<div className="text-center"><button className="btn btn-outline-dark mt-auto" type="button"
                                                        onClick={() => { this.delFunc(index) }}>{f.productView}</button></div>)
                                                    }
                                                })}
                                                                
                                                        

                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                )
                            })}


                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Cart;

