FROM openjdk:8u342-jdk
WORKDIR /app
COPY target/CustomerService-0.0.1-SNAPSHOT.jar /app/customer-service.jar
EXPOSE 5051
CMD ["java", "-jar", "customer-service.jar"]