# 1️⃣ Next.js 빌드 단계 (빌드 전용 컨테이너)
FROM node:lts-alpine AS builder
WORKDIR /app

# package.json과 package-lock.json만 먼저 복사하여 npm install 캐싱 활용
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# 모든 프로젝트 파일 복사 후 Next.js 빌드
COPY . .
RUN npm run build

# 2️⃣ 실행 단계 (가벼운 Node.js 이미지 사용)
FROM node:lts-alpine
WORKDIR /app

# 실행에 필요한 파일만 복사 (불필요한 소스 파일 제거)
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

# Next.js 프로덕션 실행
CMD ["npm", "run", "start"]
