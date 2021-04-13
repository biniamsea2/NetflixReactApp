import React, { useEffect, useState } from "react";
import db from "../firebase";
import "./PlanScreen.css";
import { selectUser } from "../features/UserSlice";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

function PlanScreen() {
  // pulling products from our database
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  // get the current user's subscription plan
  const [subscription, setSubsription] = useState(null);

  useEffect(() => {
    // go to customers
    db.collection("customers")
      // go to this user
      .doc(user.uid)
      // go to subscription
      .collection("subscriptions")
      .get()
      //enumerate through out querySnapshot
      .then((querySnapshot) => {
        querySnapshot.forEach(async (subscription) => {
          setSubsription({
            role: subscription.data().role,
            current_period_end: subscription.data().current_period_end.seconds,
            current_period_start: subscription.data().current_period_start
              .seconds,
          });
        });
      });
  }, [user.uid]);

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

  console.log(subscription);
  //  send the user to the stripe checkout payment screen
  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        // whether the user successfully completed a payment or not send them back to whatever url they were previously on (editprofile location)
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });
    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        alert(`An error occured: ${error.message}`);
      }

      if (sessionId) {
        // we have a session, redirect to checkout
        // initialize stripe, with test key
        const stripe = await loadStripe(
          "pk_test_51IfcqpKwZUroqbpG8fBJR5iyplRiY16G0emUlY73jAhAHUkQsdfPvf9vMmtcijqWN3BKa4GizjmlmJroJVlM3Ms400gClkmUPf"
        );
        // redirect with the sessionId
        stripe.redirectToCheckout({ sessionId });
      }
    });
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
            <button onClick={() => loadCheckout(productData.prices.priceId)}>
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlanScreen;
