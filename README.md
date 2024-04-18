# Online Shopping with Microservices Using Spring

## Requiremenent
  ### Micro Services:
  - Customer Service:
    - Retrieve all Customers
    - Retrieve one Customer using Id.
    - Add Customer, When a customer is added, sales order service should also create a copy of the customer in it
    - Update Customer
    - Delete Customer
    - Should be Deployed on tomcat
  - Item Service:
    - Retrieve all Items
    - Retrieve one Item with Item Name.
    - Add Item
    - Update Item
    - Delete Item
    - Should be deployed on Jersy
  - Sales Order Service:
    - Retrieve all Orders
    - Retrieve one Order with Order Id
    - Add Order
    - Should be deployed on Undertow server

## Technologies Used
  - Angular 7
  - PrimeNG for reach and responsive UI
  - Java 1.8
  - Spring Boot
  - Spring Data, Hibernate
  - H2 Database 

## Softwares Pre-requisite
  - Java 1.8
  - Maven 
  - Eclipse Neon(4.6.3+) / Spring Tool Suite(3.8.4+) - Optional. You can run projects using Maven
  - Node.js (8.x+) + NPM (5.6.x+)

## How to Run the project
  ### Run Customer Service
    Import 'CustomerService' as Maven project and Run it as Spring boot application. Use command 'mvn spring-boot:run'.
  ### Run Item Service
    Import 'ItemService' as Maven project and Run it as Spring boot application. Use command 'mvn spring-boot:run'.
  ### Run Sales Order Service
    Import 'SalesOrderService' as Maven project and Run it as Spring boot application. Use command 'mvn spring-boot:run'.
  ### Run Angular 7.x based Shopping UI
    1. Install angular CLI - 'npm install -g @angular/cli'
    2. Go to 'ShoppingUI/ShoppingUI' folder which has 'package.json' file. 
    3. Run 'npm install'
    4. Run 'ng serve --open'. Application will open up in a browser.

- **Shopping UI Url:**
  - UI application will run on default Port(4200). So, UI Application can be accessed using: 'http://localhost:4200/'
- **Customer Service can be tested:**
    - Using direct URL: http://localhost:5051/customers/
	- Or in Angular UI
	- Customer Database console: http://localhost:5051/h2-console/ - 'jdbc:h2:mem:customerdb'
- **Item Service can be tested:**
    - Using direct URL: http://localhost:5052/items/
	- Or in Angular UI
	- Item Database console: http://localhost:5052/h2-console/ - 'jdbc:h2:mem:itemdb'
- **Sales Order Service can be tested:**
    - Using direct URL: http://localhost:5053/orders/
	- Or in Angular UI
	- Sales order Database console: http://localhost:5053/h2-console/ - 'jdbc:h2:mem:salesorderdb'
