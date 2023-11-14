"use client";

import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";

function SubscribeForm() {
  const [email, setEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    // You can implement your subscription logic here, e.g., sending the email to a server.

    // For this example, let's just simulate a successful subscription.
    setSubscribed(true);
  };

  useEffect(() => {
    setSubscribed(false);
  }, []);

  return (
    <div>
      {subscribed ? (
        <div className="text-center">
          <p className="text-2xl font-semibold">Thank you for subscribing!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-2 -mt-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-secondary-700"
          >
            Subscribe to the latest from our blog
          </label>
          <div>
            <input
              type="email"
              id="email"
              className="block w-full px-4 py-2 border border-primary-200 rounded-lg shadow-sm focus:ring focus:ring-primary-200 focus:outline-none focus:border-primary-400"
              placeholder="Your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="block w-full px-4 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 focus:outline-none focus:ring focus:ring-primary-200"
            >
              Subscribe
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default SubscribeForm;
