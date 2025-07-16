
# Project Title

🍭 Sweet Shop Management System - TDD Kata (JavaScript)
A clean and well-tested JavaScript implementation of the Sweet Shop Management System Kata, built using the principles of Test-Driven Development (TDD).
This project is part of the Incubyte Software Craftsmanship Assessment and demonstrates commitment to quality, clarity, and robust handling of inventory operations.





## ✅ Features Implemented

| Step | Feature Description                                                   |
|------|------------------------------------------------------------------------|
| 1    | Add a sweet with ID, name, category, price, and quantity              |
| 2    | Validate required fields (ID, name, category)                         |
| 3    | Prevent duplicate sweet IDs                                           |
| 4    | Delete a sweet by ID                                                  |
| 5    | Throw error if sweet to delete doesn't exist                          |
| 6    | Purchase a sweet (reduce quantity)                                    |
| 7    | Throw error if quantity to purchase exceeds available stock           |
| 8    | View all sweets                                                       |
| 9    | Restock a sweet (increase quantity)                                   |
| 10   | Throw error if sweet to restock doesn't exist                         |
| 11   | Search sweets by name (case-insensitive)                              |
| 12   | Search sweets by category                                             |
| 13   | Search sweets by price range (minPrice, maxPrice)                     |
| 14   | Sort sweets by price in ascending order                               |


## ✅ Features Implemented

| Step | Feature Description                                                   |
|------|------------------------------------------------------------------------|
| 1    | Add a sweet with ID, name, category, price, and quantity              |
| 2    | Validate required fields (ID, name, category)                         |
| 3    | Prevent duplicate sweet IDs                                           |
| 4    | Delete a sweet by ID                                                  |
| 5    | Throw error if sweet to delete doesn't exist                          |
| 6    | Purchase a sweet (reduce quantity)                                    |
| 7    | Throw error if quantity to purchase exceeds available stock           |
| 8    | View all sweets                                                       |
| 9    | Restock a sweet (increase quantity)                                   |
| 10   | Throw error if sweet to restock doesn't exist                         |
| 11   | Search sweets by name (case-insensitive)                              |
| 12   | Search sweets by category                                             |
| 13   | Search sweets by price range (minPrice, maxPrice)                     |
| 14   | Sort sweets by price in ascending order                               |

## 🧠 Design Principles

- 🧪 **TDD-first**: every feature is implemented using a test-first approach
- 🧼 **Clean, modular JavaScript code** using separation of concerns
- 🧾 **Well-structured test cases** using Jest for each feature
- 🔒 **Strict input validation** to ensure data integrity 


## ⚙️ Setup & Installation

Follow the steps below to set up and run the project locally.

### 🔧 Prerequisites

- Node.js installed (v14 or higher recommended)
- A terminal or command prompt
- A code editor like Visual Studio Code (recommended)

---
## ✅ Test Report

All features in the Sweet Shop Management System were implemented using Test-Driven Development (TDD) and tested with Jest.

Test Suite: tests/sweetShop.test.js  
Test Suites: 1 passed  
Tests: 13 passed  
Snapshots: 0  
Execution Time: 0.927 seconds

### ✅ Passed Test Cases

- throws error if required fields are missing or empty  
- adds a sweet  
- throws error on duplicate sweet ID  
- deletes a sweet  
- throws error when deleting non-existent sweet  
- purchase sweet reduces quantity  
- viewSweets returns empty array when no sweets exist  
- restocks sweet increases quantity  
- throws error when restocking non-existent sweet  
- search sweets by name  
- search sweets by category  
- search sweets by price range  
- sort sweets by price ascending

All test cases passed successfully by running: `npm test`




### 📦 Installation

```bash
# Clone the repository
git clone https://github.com/nityshah/Incubyte-tdd-assesment.git

# Navigate into the project directory
cd Incubyte-tdd-assesment

# Install project dependencies
npm install

## Folder Structure
Incubyte-tdd-assesment/
├── src/
│   ├── models/
│   │   └── sweet.js
│   ├── services/
│   │   └── sweetShop.js
├── tests/
│   └── sweetShop.test.js
├── package.json
├── .gitignore
└── README.md


