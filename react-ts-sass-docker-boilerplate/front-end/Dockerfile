# Stage 1 - build create-react-app application
FROM node:current-alpine as build
ENV NODE_ENV Production
WORKDIR /src
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

# Stage 2 - publish application
FROM node:current-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=build /src/build ./
EXPOSE 5000
CMD ["serve -l 5000 -s"]