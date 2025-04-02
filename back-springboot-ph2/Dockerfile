# 1️⃣ Gradle 빌드 단계
FROM gradle:8.5-jdk21 AS builder
WORKDIR /app
COPY . .
RUN ./gradlew clean build -x test

# 2️⃣ 실행 단계 (더 가벼운 JDK 이미지 사용)
FROM eclipse-temurin:21-jdk
WORKDIR /app
COPY --from=builder /app/build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
