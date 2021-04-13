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

  console.log(products)
  return <div className="planScreen"></div>;
}

export default PlanScreen;
