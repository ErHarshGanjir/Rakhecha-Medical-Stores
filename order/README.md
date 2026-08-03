<div align="center">

<img src="https://i.ibb.co/k29yhhVp/favicon.png" width="120" alt="Logo">

# Rakhecha Medical Product Catalog
### Google Apps Script Based Pharmaceutical Catalog & Order Management System

A modern, responsive pharmaceutical product catalog built entirely on **Google Apps Script** and **Google Sheets**.

Designed for wholesalers, distributors, and medical stores to manage products, customers, orders, and inventory without any external database.

![Platform](https://img.shields.io/badge/Platform-Google%20Apps%20Script-green)
![Frontend](https://img.shields.io/badge/Frontend-HTML%20CSS%20JavaScript-blue)
![Database](https://img.shields.io/badge/Database-Google%20Sheets-orange)
![License](https://img.shields.io/badge/License-MIT-brightgreen)

</div>

---

# 📖 Project Overview

Rakhecha Medical Product Catalog is a complete web application developed using **Google Apps Script**.

The application allows customers to browse pharmaceutical products, search medicines, manage shopping carts, authenticate using Email OTP, place orders, while allowing administrators to manage products directly from Google Sheets.

No external server or database is required.

---

# ✨ Features

## Product Catalog

- Responsive Product Listing
- Company Wise Products
- Division Wise Products
- Fast Product Search
- Product Details Popup
- Generic Name
- Packing
- GST
- HSN Code
- MRP
- Stock Display

---

## User Management

- Email OTP Login
- Auto Registration
- User Profile
- Device Tracking
- IP Address Tracking
- Update Profile
- Session Management

---

## Shopping Cart

- Add to Cart
- Quantity Control
- Product Remarks
- Overall Order Remark
- Remove Products
- Live Cart Counter

---

## Order Management

- Automatic Order ID Generation
- Google Sheet Order Storage
- Order History
- Order Status Tracking
- Backend Email Notifications
- Customer Email Confirmation

---

## Inventory Management

- Real Time Stock Check
- Automatic Stock Deduction
- Prevent Over Ordering
- Inventory Synchronization

---

## Admin Controls

Global Preference System

Enable or Disable

- Stock Validation
- Customer Email
- Backend Email
- Other Global Variables

---

# 🏗️ Technology Stack

| Component | Technology |
|------------|------------|
| Backend | Google Apps Script |
| Frontend | HTML |
| Styling | CSS |
| Programming | JavaScript |
| Database | Google Sheets |
| Authentication | Email OTP |
| Email Service | GmailApp |
| Storage | CacheService + PropertiesService |

---

# 📂 Google Sheet Database Structure

---

## Sheet : Product

| Column | Field |
|---------|------|
| A | Company |
| B | Division |
| C | HSN Code |
| D | Product Name |
| E | Pack |
| F | MRP |
| G | GST |
| H | Stock |
| I | Generic Name |

---

## Sheet : logo

| Column | Field |
|---------|------|
| A | Company Name |
| B | Logo URL |

---

## Sheet : user

| Column | Field |
|---------|------|
| A | Email |
| B | Name |
| C | City |
| D | Phone |
| E | IP Address |
| F | Device ID |
| G | Ledger Name |
| H | User Tag |

---

## Sheet : preferences

| Column | Field |
|---------|------|
| A | Variable |
| B | Value |

Example

```
stock_check          1
mail_update_backend  1
mail_update_user     0
```

---

## Sheet : orders

| Column | Field |
|---------|------|
| A | Order ID |
| B | Customer Email |
| C | Customer Name |
| D | Order Data |

---

# 🔄 Application Flow

```text
Customer

↓

Browse Products

↓

Search Medicine

↓

View Product

↓

Add To Cart

↓

Login Using OTP

↓

Complete Profile

↓

Place Order

↓

Stock Verification

↓

Generate Order ID

↓

Save Order

↓

Send Email

↓

Order Completed
```

---

# 📦 Main Modules

- Product Catalog
- Search Engine
- Company Filter
- Shopping Cart
- OTP Authentication
- User Profile
- Inventory Module
- Order Processing
- Email Notification
- Order History
- Global Preferences
- Dashboard
- Mobile Responsive UI

---

# 📧 Email Features

✔ OTP Login

✔ Order Notification

✔ Customer Confirmation

✔ Professional HTML Email

---

# 🔐 Security Features

- OTP Authentication
- Cache Based OTP Storage
- Device Identification
- IP Tracking
- Google Authentication Layer
- Server-side Validation

---

# 📱 Responsive Design

Supports

- Desktop
- Laptop
- Tablet
- Mobile

---

# 🚀 Deployment

1. Open Google Apps Script
2. Upload all project files
3. Connect Google Spreadsheet
4. Deploy as Web App
5. Allow Public Access (Anyone)

Done ✅

---

# 📸 Screens

- Product Catalog
- Product Detail Popup
- Login Screen
- Shopping Cart
- User Profile
- Order History
- Dashboard
- Company Filter

---

# 📈 Future Improvements

- Admin Dashboard
- Invoice PDF
- WhatsApp Integration
- Barcode Scanner
- GST Reports
- Analytics Dashboard
- Multi Warehouse
- Online Payments
- Distributor Portal

---

# 👨‍💻 Developed By

**Harsh Ganjir**

Rakhecha Medical Stores

---




<div align="center">

Made with ❤️ using Google Apps Script

</div>
