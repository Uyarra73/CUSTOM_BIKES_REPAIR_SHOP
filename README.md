# Ezcaray Custom Bikes

Sitio web para un taller especializado en motos clasicas, custom y vintage, construido con Next.js, React, TypeScript y Tailwind CSS.

El proyecto incluye:

- pagina de inicio con identidad visual de marca
- seccion de servicios con precios en euros
- formulario de reserva de citas
- pagina de merchandising (`Tienda`)
- envio de correos de confirmacion con Resend

## Demo local

```bash
npm install
npm run dev
```

La aplicacion quedara disponible en `http://localhost:3000`.

## Scripts disponibles

```bash
npm run dev
npm run build
npm run start
npm run lint
npx tsc --noEmit
```

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 3
- Resend
- Lucide React

## Variables de entorno

Crea un archivo `.env.local` con:

```bash
RESEND_API_KEY=re_tu_api_key_aqui
```

## Estructura principal

```text
src/
  app/
    page.tsx
    services/page.tsx
    book/page.tsx
    tienda/page.tsx
    api/send-email/route.ts
  components/
    Header.tsx
    Footer.tsx
    BookingForm.tsx
  data/
    bikes.ts
    merch.ts

public/
  images/
    logo.png
```

## Funcionalidades

- interfaz en espanol
- branding actualizado a Ezcaray Custom Bikes
- logo integrado en cabecera, pie y hero
- tarjetas de servicios con imagen de fondo atenuada
- mockups visuales para productos de merchandising
- mejoras de accesibilidad y estabilidad de hidratacion

## Validacion

Comandos usados para comprobar el proyecto:

```bash
npm run lint
npx tsc --noEmit
```

## Repositorio

GitHub: `https://github.com/Uyarra73/CUSTOM_BIKES_REPAIR_SHOP`
