FROM openjdk:8u342-jdk
WORKDIR /app
COPY target/SalesOrderService-0.0.1-SNAPSHOT.jar /app/sales-order-service.jar
EXPOSE 5053
CMD ["java", "-jar", "sales-order-service.jar"]