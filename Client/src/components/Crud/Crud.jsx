import React from "react";
import "./crud.scss";
import { useDataContext } from "../../context/context";
import { IoIosBasket } from "react-icons/io";
import { Link } from "react-router-dom";


const Crud = () => {
  const { shopData, addToWishlist, addToBasket } = useDataContext();
  return (
    <>
      <div>
        <div className="container">
          <div className="crud-text">
            <p>POPULAR PRODUCTS</p>
            <h1>Our Products</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae <br />
              nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut{" "}
              <br />
              consequatur laboriosam ipsam.
            </p>
          </div>
          <div className="row">
            {shopData?.map((item, idx) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="crud-img">
                    <img width={350} height={400} src={item.imgSrc} alt="" />
                  </div>
                  <div className="crud-title text-center">
                    <h6>{item.name}</h6>
                    <p>{item.title}</p>
                  </div>
                  <div className="basket">
                  <button className="btn btn-warning ">
                    <Link to={`/${item._id}`}>
                    Detail
                    </Link>
                  </button>
                  <button className="btn btn-primary " onClick={()=>{
                    addToWishlist(item)
                  }}>Wishlist</button>
                    <button className="btn btn-success " onClick={()=>{
                    addToBasket(item)
                  }}><IoIosBasket /></button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Crud;
