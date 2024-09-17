# Use a maven image to build the project
FROM maven:3.8.5-openjdk-17 as builder
WORKDIR /app
COPY . .
RUN mvn clean package

# Use a smaller JRE image to run the application
FROM openjdk:17.0.1-jdk-slim
WORKDIR /app
COPY --from=builder /app/target/backend-0.0.1-SNAPSHOT.jar /app/backend.jar
EXPOSE 8080
CMD ["java", "-jar", "backend.jar"]
