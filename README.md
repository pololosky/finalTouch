This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## ----------------- Documentation ------------------
* Icons : lucid-react and remix-icon (parce que certains icons ne marchais pas on a du faire aussi appel)
* theme and color : DaisyUi (ligthTheme : corporate; darkTheme : forest)
* font : Poppins

## structure Générale
* on a la page d'acceuil scr/app/page.tsx est contenu dans un Wrapper (src/components/Wrapper). ce Wrapper contient en plus du children un NavBar (src/components/NavBar.tsx) et le footer (src/components/Footer). Un unique boutton se trouve sur la page d'acceuil menant au generateur de signature.
* le generateur (src/app/generator/page.tsx) est contient un autre et unique composant CreateSignature (src/component/CreateSignature.tsx). Ce composant (client) contient l'interface de gestion, d'edition et de génération des signatures.


## structure de CreateSignature.tsx
* on a la div principale qui contient 2 div (gauche et droite). en ecran pc cette div est flex et en mobile ou tablette flex-col

