FROM openjdk:8u342-jdk
WORKDIR /app
COPY target/ItemService-0.0.1-SNAPSHOT.jar /app/item-service.jar
EXPOSE 5052
CMD ["java", "-jar", "item-service.jar"]