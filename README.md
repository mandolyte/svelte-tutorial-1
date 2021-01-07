# svelte-tutorial-1

## Create repo from template
```
$ npx degit sveltejs/template svelte-tutorial-1
npx: installed 1 in 2.497s
> cloned sveltejs/template#master to svelte-tutorial-1
$ cd svelte-tutorial-1/
$ node scripts/setupTypeScript.js 
Converted to TypeScript.
$ 
```
NOTE: apparently the scripts folder is deleted after running this command.

Now install dependencies and run the server:
```
npm install
npm run dev
```

The last few lines of output from the server:
```
  Your application is ready~! 🚀

  - Local:      http://localhost:5000
  - Network:    Add `--host` to expose

────────────────── LOGS ──────────────────
```

Pointing browser to above will show the default page from template... a simple "hello world" app.

The main entry point is `src/main.ts`:
```ts
const app = new App({
	target: document.body,
	props: {
		name: 'world in 2021!'
	}
});
```
If you modify the property name, the server will hot-update and use the updated value.







## Directions to add above to a (new) repo on Github

1. Create a new repository on GitHub. You can also add a gitignore file, a readme, and a license if you want
 Open Git Bash
2. Change the current working directory to your local project.
3. Initialize the local directory as a Git repository.
```
git init
```
3. Add the files to your new local repository. This stages them for the first commit.
```
git add .
```
4. Commit the files that you’ve staged in your local repository.
```
git commit -m "initial commit"
```
5. Copy the HTTPS URL of your newly created repo
In the Command prompt, add the URL for the remote repository where your local repository will be pushed.
```
git branch -M main
git remote add origin git@github.com:mandolyte/svelte-tutorial-1.git
git push -u origin main
```







# ORIGINAL TEMPLATE README

*Looking for a shareable component template? Go here --> [sveltejs/component-template](https://github.com/sveltejs/component-template)*

---

# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Using TypeScript

This template comes with a script to set up a TypeScript development environment, you can run it immediately after cloning the template with:

```bash
node scripts/setupTypeScript.js
```

Or remove the script via:

```bash
rm scripts/setupTypeScript.js
```

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
