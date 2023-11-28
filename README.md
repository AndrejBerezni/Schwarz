# **Schwarz**

### Table of Contents

1. [Description](#description)
2. [Stack](#stack)

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

## Credits

Letter S icons created by [arnikahossain - Flaticon](https://www.flaticon.com/free-icons/letter-s)
