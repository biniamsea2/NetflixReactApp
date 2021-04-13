import React, { useEffect, useState } from "react";
import db from "../firebase";
import "./PlanScreen.css";

function PlanScreen() {
  // pulling products from our database
  const [products, setProducts] = useState([]);

  // fetch the products from the database
  useEffect(() => {
    //   go to our collections called products and filter it out by only getting the active ones
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        // empty products object
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data,
            };
          });
        });
        setProducts(products);
      });
  }, []);

  const loadCheckout = async (priceId) => {
      
  };
  return (
    <div className="planScreen">
      {Object.entries(products).map(([productId, productData]) => {
        //   check if users subscription is active
        return (
          <div className="planScreen_plan">
            <div className="planScreen_info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button onClick={() => loadCheckout(productData.prices.price.id)}>
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlanScreen;
