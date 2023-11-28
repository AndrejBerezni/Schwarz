# **Schwarz**

Visit live page at [https://schwarzluxurywatches.web.app/](https://schwarzluxurywatches.web.app/)
View Admin Page functionalities [here](https://scribehow.com/shared/Admin_Page_of_Schwarz__OXL3NGnbSIKCMOHeDgn0Pw).

### Table of Contents

1. [Description](#description)
2. [Stack](#stack)
3. [Pages](#pages)
   1. [Home](#home-page)
   2. [Account](#account-page)
   3. [Product List](#product-list-page)
   4. [Product](#product-page)
   5. [Admin](#admin-page)
   6. [Not Found](#not-found-page)
4. [State](#state)
   1. [Alert](#alert)
   2. [Authentication](#authentication)
   3. [Cart](#cart)
   4. [Filter](#filter)
   5. [Sidebars](#sidebars)
5. [Database](#database)
6. [Authentication](#authentication)

## Description

Schwarz is an e-commerce app selling luxury watches, integrated with Stripe for easier payments. On top of that, this app comes with admin protal, connected to Firebase and Stripe, that allows administrator to manage the shop (adding, editing, removing products, managing displayed content), add or remove other admin users, and have insight into orders and revenue.

## Stack

- Schwarz is a **React Typescript** project, built with **Vite**
- State is managed with **Redux**, using **Redux Toolkit** as it is recommended approach for writing Redux logic.
- Routing is handled with **React Router**.
- Database used is **Firebase's** non-relational database **Firestore**.
- Images for UI content (excluding product images) are stored in **Firebase Storage**.
- Authentication is handled through **Firebase Authentication**.
- Live page is deployed on **Firebase Hosting** service.
- Payments, customers, and products are handled through **Stripe** and **Firebase** integration (using **Run Payments with Stripe** extension in Firebase).
- Enabling admin users to manage products, and view payments data in admin portal created for this project (instead of Stripe dashboard) was achieved by using **Stripe API**
- Project was styled with **styled-components** library
- Icons used in the project are from **React Icons** package.
- End to end tests were written in **Cypress**

## Pages

### Home Page

Home page has several components:

- TopNavbar (which is present on all pages).
- Hero section that has carousel with 3 slides displaying current promotions and offers, plus two additional boxes with the same type of content. Every one of those items has call to action button that leads to product pages. Hero section is customizable through Admin page.
- Latest products carousel that displays limited number of products that have 'new' property in metadata.
- Browse Brands navbar that is visible only on screen width larger than 768px - on smaller screen it becomes sidebar that user can open from TopNavbar
- Newsletter section (which is present on all pages) that contains form for subscribing to newsletter (not yet implemented functionality) and several other links.

### Account Page

When user signs in/up, they are redirected to Account page, where they can view their past orders and items that they added to wishlist.

- Orders are there just to be viewed, they can't be modified or deleted.
- From wishlist, items can be removed or added to cart.

### Product List Page

User is redirected here by navigating through Browse Brands navbar. This page displays all products from certain category that can be then filtered. At first, only six products are shown (number that seemed the most convenient, considering the layout and size of each product box), but then there is a 'Load more' option at the bottom that enables user to load and view more products until all products are shown.

### Product Page

Page dedicated to single project is reachable by clicking on product card on Product List page or on product card on any carousel in the app.
Main focus of this page is on enlarged image of the product, product description and price. Product can be added to cart(in amount selected on Counter component) or to wishlist.
Below main section of this page, we have Reviews section where user can leave their review (1 to 5 stars) with comment if they are signed in, and see reviews from other users if they exist. Average rating is also displayed.
At the bottom, Related Products carousel is displayed, which contains products that have similar metadata as main product on that page.

### Admin Page

If user is admin, when they sign in, they are redirected to Admin Page instead of Account Page like customers.
Admin Page has several sections to which user can navigate using the Admin Navbar placed on the left side of the screen (below TopNavbar and above other content on smaller screens - I preferred leaving it visible instead of transforming it into a sidebar):

1. Dashboard - fetches information about sales from Stripe API and displays Total Sales and Total Income for current month, week and day.
2. Products - using Stripe API, I am providing admin user possibility to:
   - View all products and edit them (put them on discount, edit price, edit description, name, brand, and metadata, update image).
   - Archive the product - Stripe API does not allow deleting products, but encourages just archiving them. If needed, products can be deleted from Stripe Dashboard.
   - Add new products with all necessary metadata.
3. Orders - payments with their details are fetched from Stripe API and displayed in a table.
4. Admins - this section enables currently logged in admin to remove or add other admin users.
5. Page Settings - information and images displayed in Hero section of Home Page are stored in Firestore and Firebase Storage, and this is the place where admin users can modify that information, while changes being instantly reflected to UI for all users.

### Not Found Page

Not Found Page is displayed when user navigates to non-existent url.

## State

### Alert

Alerts are shown throughout the app and the most convenient way of showing, hidding, and determining their content and type was through Redux.
State object for alert reducer is consisted of two properties - showAlert and alert. First one gives us information about whether alert should be displayed and the second contains specific information about current alert (type and message).

### Authentication

Authentication is the only reducer in this project that is persisted using **redux-persist** library. I wanted user to have the convenience of staying signed in between sessions.
This reducer saves authentication status, but also handles displaying of authentication forms (SignIn, SignUp, and ResetPassword). Information about the type of the user (isAdmin) is also saved and is used across application for displaying different content for different type of user.

### Cart

Cart reducer handles adding and removing items from cart, increasing and decreasing their amount in cart, clearing all cart content, and storing the information that will be sent to checkout session once user decides to checkout.
After checkout, information in this reducer is reset to initial state (empty cart).

### Filter

This reducer is used for keeping filters when browsing through different product categories.

### Sidebars

This reducer is used to keep state of sidebars (open or closed) throughout the app.

## Database

As mentioned earlier, this project uses Firebase's non-relational database **Firestore**.
The following document collections are present:

- Administrators - Contains information about admin users and is used for their verification when they sign in.
- Content - Contains information that is fetched to be displayed on Hero Section of Home Page. This collection is modified by admin users from Admin Page.
- Customers - Automatically created by Run Payments with Stripe extension when it was installed. It contains document for each user, which is consisted of user information and subcollections for checkout sessions and payments.
- Products - Automatically created by Run Payments with Stripe extension, this collection contains document for each product. It is synchronised with Stripe Dashboard and therefore modified when changes are made either from Stripe Dashboard or Admin Page.
- Reviews - Each product has document in this collection that contains user reviews. One user can leave only one review for individual product, therefore any new review for the same product is overwritting the old review.
- Wishlist - When user starts creating wishlist, document for that user is created in this collection and it stores products that are currently present on user's wishlist.

## Authentication

Using Firebase authentication, users can easily sign in / sign up with one of the two following methods:

- Email and password
- Google Sign In

Firebase provides mechanism for resetting password by sending password reset email, which I added as an option to Sign In form.

## Credits

Letter S icons created by [arnikahossain - Flaticon](https://www.flaticon.com/free-icons/letter-s)
