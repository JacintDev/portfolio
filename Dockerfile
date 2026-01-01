# --- 1. Lépés: Buildelés (Node.js) ---
FROM node:20-alpine AS build

WORKDIR /app

# Először csak a package fájlokat másoljuk a gyorsabb cache-elés miatt
COPY package*.json ./
RUN npm install

# Most másoljuk a forráskódot
COPY . .

# Lebuildeljük az appot production módba
RUN npm run build

# --- 2. Lépés: Kiszolgálás (Nginx) ---
FROM nginx:alpine

# Töröljük az alapértelmezett nginx html fájlokat
RUN rm -rf /usr/share/nginx/html/*

# Átmásoljuk a buildelt Angular fájlokat az előző lépésből
# FONTOS: cseréld le a 'projekt-neve' részt a te projekted nevére (lásd angular.json)
COPY --from=build /app/dist/projekt-neve/browser /usr/share/nginx/html

# Bemásoljuk a saját nginx konfigunkat
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Port megnyitása
EXPOSE 80

# Nginx indítása
CMD ["nginx", "-g", "daemon off;"]