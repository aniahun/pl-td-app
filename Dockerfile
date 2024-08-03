FROM mcr.microsoft.com/playwright:v1.38.0-focal
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx playwright install --with-deps
CMD ["npx", "playwright", "test", "--reporter", "allure-playwright"]