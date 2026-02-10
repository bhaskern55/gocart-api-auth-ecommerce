# GoCart – Authentication-Based E-Commerce Platform (API-Driven UI)

GoCart is a frontend-focused e-commerce web application that implements **authentication-based access**, **API-driven product rendering**, and **cart management** using plain **HTML, CSS, and JavaScript**.

This project was built to simulate how real e-commerce platforms handle login flows, protected pages, product data from APIs, and client-side state management — and to ensure everything works correctly even after deployment on GitHub Pages.

---

## Live Demo
https://bhaskern55.github.io/gocart-api-auth-ecommerce/

You can explore products, view details, test authentication flow, and manage the cart directly from the live site.

---

## Why This Project
Most beginner projects work only on local machines.  
GoCart was intentionally designed to:
- Work after deployment (no broken routes)
- Handle direct URL access and refresh correctly
- Use real external APIs instead of static data

---

## Core Features

### Authentication Flow
- User login and registration handled on the client side
- Authentication state stored using browser localStorage
- Unauthorized users are automatically redirected from protected pages

### Dynamic Product Handling
- Product list fetched from external REST APIs
- Products rendered dynamically without page reloads
- Clean separation between listing and detail views

### Product Details Page
- Individual product detail view
- Data passed dynamically without relying on hardcoded paths
- Works correctly on GitHub Pages deployment

### Cart Functionality
- Add-to-cart feature implemented using JavaScript
- Cart data persisted using browser storage
- Cart state maintained across page refreshes

### Deployment-Ready Routing
- No dependency on `home.html` or local file paths
- Compatible with GitHub Pages routing behavior
- Handles refresh and direct navigation without errors

---

## Tech Stack Used
- HTML5 for structure
- CSS3 for layout and styling
- JavaScript (ES6) for logic, DOM manipulation, and routing
- REST APIs for product data
- Git & GitHub for version control
- GitHub Pages for deployment

---

## Status
Project is complete and fully functional.  
Future improvements may include better UI polish and backend-based authentication.
