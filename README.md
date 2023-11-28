# **Schwarz**

### Table of Contents

1. [Description](#description)
2. [Stack](#stack)
3. [State](#state)
   1. [Alert](#alert)
   2. [Authentication](#authentication)
   3. [Cart](#cart)
   4. [Filter](#filter)
   5. [Sidebars](#sidebars)

## Description

Schwarz is an e-commerce app selling luxury watches, integrated with Stripe for easier payments. On top of that, this app comes with admin protal, connected to Firebase and Stripe, that allows administrator to manage the shop (adding, editing, removing products, managing displayed content), add or remove other admin users, and have insight into orders and revenue.

## Stack

- Schwarz is a **React Typescript** project, built with **Vite**
- State is managed with **Redux**, using **Redux Toolkit** as it is recommended approach for writing Redux logic.
- Database used is **Firebase's** non-relational database **Firestore**.
- Images for UI content (excluding product images) are stored in **Firebase Storage**.
- Authentication is handled through **Firebase Authentication**.
- Live page is deployed on **Firebase Hosting** service.
- Payments, customers, and products are handled through **Stripe** and **Firebase** integration (using **Run Payments with Stripe** extension in Firebase).
- Enabling admin users to manage products, and view payments data in admin portal created for this project (instead of Stripe dashboard) was achieved by using **Stripe API**
- Project was styled with **styled-components** library
- End to end tests were written in **Cypress**

## State

### Alert

Alerts are shown throughout the app and the most convenient way of showing, hidding, and determining their content and type was through Redux.
State object for alert reducer is consisted of two properties - showAlert and alert. First one gives us information about whether alert should be displayed and the second contains specific information about current alert (type and message).

### Authentication

Authentication is the only reducer in this project that is persisted using **redux-persist** library. I wanted user to have the convenience of staying signed in between sessions.
This reducer saves authentication status, but also handles displaying of authentication forms (SignIn, SignUp, and ResetPassword).

### Cart

Cart reducer handles adding and removing items from cart, increasing and decreasing their amount in cart, clearing all cart content, and storing the information that will be sent to checkout session once user decides to checkout.
After checkout, information in this reducer is reset to initial state (empty cart).

### Filter

This reducer is used for keeping filters when browsing through different product categories.

### Sidebars

This reducer is used to keep state of sidebars (open or closed) throughout the app.

## Credits

Letter S icons created by [arnikahossain - Flaticon](https://www.flaticon.com/free-icons/letter-s)
