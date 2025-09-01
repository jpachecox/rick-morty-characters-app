
# Rick & Morty Characters App

Esta es una aplicación creada con [Next.js](https://nextjs.org) usando [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).  
Permite explorar personajes de Rick & Morty con filtrado, paginación, historial de personajes recientes y gestión de estado global mediante Redux.


## Funcionalidades

- Listado de todos los personajes con paginación.
- Filtrado de personajes por nombre en tiempo real.
- Visualización de detalles de cada personaje.
- Seguimiento de los últimos 5 personajes visitados usando `localStorage`.
- Gestión global del estado con Redux para la lista de personajes y detalles individuales.
- Componentes reutilizables: `Button`, `Card`, `Input`, `LinkButton`.
- Tipado completo con TypeScript.
- Pruebas unitarias con Jest y React Testing Library.
- Optimización automática de fuentes con [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (fuente Geist).


## Cómo empezar

Para instalar el repositorio escoja: SSH o HTTPS
```bash
  git clone git@gitlab.com:jpachecox/rick-morty-characters-app
```
```bash
  git clone https://github.com/jpachecox/rick-morty-characters-app
```

Ir al directorio del proyecto
```bash
  cd rick-morty-characters-app
```

Instalar dependencias
```bash
  npm install
```

Ejecutar el proyecto en local:
```bash
  npm run dev
```



## Estructura de los Módulos

Dentro de la carpeta app/Modulos, cada módulo debe respetar la estructura base de un proyecto Laravel que permita mantener un diseño limpio, escalable y organizado.

Estructura para cada módulo:

```
src/
├─ components/           # Shared components (Button, Input, Card, LinkButton)
├─ features/
│  ├─ characters/        # Characters module
│  │   ├─ components/    # Components for characters
│  │   ├─ hooks/         # useCharacters, useCharacter
│  │   ├─ services/      # API services
│  │   ├─ store/         # Redux slices for characters and detail
│  │   └─ types/         # Domain types
├─ shared/               # Shared utilities and types
├─ store/                # Redux store configuration
├─ app/                  # Next.js pages
```
## Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest](https://jestjs.io/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [clsx](https://github.com/lukeed/clsx)
- [Rick & Morty API](https://rickandmortyapi.com/documentation)


## Variables de Entorno

Copia el archivo env.local.example y renombralo a .env.local y agregar el URL del API

`NEXT_PUBLIC_API_URL`

