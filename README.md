# Brocconi 

This is Brocconi that provide a new better way for life

# Architecture

This app is based on Nextjs using app router

- app 
  - `api`, includes backend API requests
  - `common`, includes shared functions/react hooks
  - `components`, includes independent and reusable components
  - `types`, includes all types definition
  - `{page}`, includes page component and  folder name is important because it used as part of url, e.g. folder name is `home`, then the url looks like `https://<domain>/home`

# Tailwind

This app use [Tailwind](https://tailwindcss.com/docs/installation) as style system


```bash
# code example
<div class="flex ...">
  <div class="w-1/2 ... ">w-1/2</div>
  <div class="w-1/2 ... ">w-1/2</div>
</div>
```

To learn more about Tailwind check this link: https://tailwindcss.com/docs/configuration

# Getting Started

- Set up your [Github account](links-to-compnay-github)
- Add [ssh-keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)


Note: this is not for the test code reviewer 

# Setup

This app created based on node 20, but should working for node 18 or above ([asdf](https://asdf-vm.com/guide/getting-started.html) is recommand for version management)
```bash
asdf install 
#or
nvm install 20 & nvm use 20

```

clost this repo
```bash
git clone git@github.com:GeorgeSydney1984/broccoli-george.git
```

install all dependencies 
```bash
npm i
```

run the development server:

```bash
npm run dev
```

run test
```bash
npm run test:unit
npm run test:e2e
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Deployment
coming soon

