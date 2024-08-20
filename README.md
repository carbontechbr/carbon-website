# Carbon Tech Web Site

## Requirements

node >= 18

## Get Started

```sh
git clone 
cd carbon-site
git config core.fileMode false
npm install
```
## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── *assets
├── src/
│   ├── components/
│   │   └── *.astro
|   |   |__*.vue
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Inside of components folder there are `src/components/`, Astro and Vue components.

Any static assets, like images, can be placed in the `public/` directory.


## Documentations

[Astro](https://docs.astro.build)
[Tailwindss](https://docs.astro.build/en/guides/integrations-guide/tailwind/)
[Vuejs](https://docs.astro.build/en/guides/integrations-guide/vue/)

### Features

- Vuejs
- Tailwind
- Sass
