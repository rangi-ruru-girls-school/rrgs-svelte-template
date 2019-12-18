# Rangi Ruru Girls' School Svelte Template

This is a starting template for building and running an app using [Svelte](https://svelte.dev).

---
## Install

1. Download and install [NodeJS](https://nodejs.org) on your laptop.


> NodeJS lets you run JavaScript code outside of a browser, such as on your dev laptop. Providers like [Netlify](https://netlify.com) also use it to run JavaScript on their hosting servers. You'll use it to automatically build and display your app from your source code so you can see and test it in your browser. There are only two commands you'll need for this - explained next.

2. In [Visual Studio Code](https://code.visualstudio.com) open a new terminal (Ctrl + Shift + `), choose the folder where this project is saved, and enter and run this command.

```
npm install
```

> NPM stands for Node Package Manager and comes with NodeJS. It reads the __package.json__ file to see what packages you want to include with this project, then downloads and installs them into the __node_modules/__ folder.  NodeJS knows to look in there for packages it needs when you run the next command to build your app.

> "A package is a reusable piece of software which can be downloaded from a global registry into a developer’s local environment. Each package may or may not depend on other packages." - [freecodecamp.org](https://www.freecodecamp.org/news/javascript-package-managers-101-9afd926add0a/)
> "Simply put — a package manager is a piece of software that lets you manage the dependencies (external code written by you or someone else) that your project needs to work correctly." - [freecodecamp.org](https://www.freecodecamp.org/news/javascript-package-managers-101-9afd926add0a/)
> “To make it more clear, your package.json states “what I want” for the project whereas your lockfile says “what I had” in terms of dependencies. — Dan Abramov

## Develop

3. In the same terminal  enter and run this command.

```
npm run dev
```

> Your browser will pop up with the [app](http://localhost:5000) and it'll rebuild itself and refresh in the browser every time you save a file. You can make changes, save, and then check them as you develop your app.  
> _Note: you'll need to run this command each time you open VS Code to restart the development server on your laptop._

> The `dev` part of `npm run dev` is defined in the __package.json__ file in the `"scripts"` section. It says to npm to use `rollup` with the `-c -w` commands. The first command, `-c`, tells rollup that there a _config_ file for it to use, __rollup.config.js__ which has comments to help explain its parts. The second command, `-w`, tells rollup to _watch_ your code for changes and reload the app every time you save.

## Publish

4. Commit your code to a repostitory on [GitHub](https://github.com).

5. Connect your repository to [Netlify](https://netlify.com) and set it up as a new site, but ensure...

6. On the third page of the __Create a new site__ process on [Netlify](https://netlify.com), add the following to the section at the bottom.
  * __Build command:__ npm run prod
  * __Publish directory:__ public

6.5. If you accidentally missed the last step: don't worry! On your new site's [Netlify](https://netlify.com) page go to __Settings__ -> __Build & Deploy__ -> __Edit Settings__ and update the following settings:
  * __Build command:__ npm run prod
  * __Publish directory:__ public

> Committing to [GitHub](https://github.com) means there's a copy of your project's code online. The copy includes all the changes you've made in different commits as well as the  each commit summary and description you wrote for those changes.

> [Netlify](https://netlify.com) provides free hosting for sites that are saved on [GitHub](https://github.com). [Netlify](https://netlify.com) will automatically know when you push a new commit to [GitHub](https://github.com) and update your website accordingly. In this case, [Netlify](https://netlify.com) needs to build your website from your source code each time, and know where to put the resulting output files. This step is similar to `npm run dev` that you do on your own laptop, but it's a _production_ version and excludes some of the debugging features and the rebuilding/refreshing behaviour. Excluding those parts makes your app faster and more responsive for users.

## Get coding

Use the [Svelte tutorial](https://svelte.dev/tutorial), [Svelte documentation pages](https://svelte.dev/docs), [Svelte examples](https://svelte.dev/examples), and [web searches](https://lmgtfy.com/?q=how+to+use+svelte) to look up whatever you want your app to do!

---
# How-Tos
---

## Reset all CSS rules

1. Add the following CSS to the __index.svelte__ file inside the `<style></style>` tags.

```css
  :global(*) {
    font: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
```

2. Save __index.svelte__ and your changes should show in the browser when you run `npm run dev`.

> Every browser has its own default rules it uses for displaying HTML elements, like `<h1>` and `<a>`. Resetting all the rules means that your app is more likely to display consistently in all browsers because it only uses the style rules _you_ have specified. You might notice there's an unusual piece of code there: `:global()`. This is Svelte-specific code that tells Svelte that this bit of CSS should apply to _all_ components, not just the one it's defined in.

## Apply a CSS framework, e.g. Bulma

1. Copy the minified [Bulma CSS](https://github.com/jgthms/bulma/blob/master/css/bulma.min.css) from their GitHub repository and paste it into a new file called __bulma.css__ in the __public/__ folder. Remember to save the file.

2. Add the following code after the link to __bundle.css__ inside the `<head>` section of the __index.htm__ file in the __public/__ folder.

```htm
<link rel="stylesheet" href="bulma.css">
```

3. Save __index.htm__ and your changes should show in the browser when you run `npm run dev`.

> The __public/__ folder stores the final files that will be presented to the user and you can include files there and add them to __index.htm__ if you need to, but you should do this sparingly. Your written code should be in the __src/__ folder as much as possible and when to use each folder will become clearer to you the more projects you complete.

## Add images (and other media)

1. Create an __img/__ folder in the __public/__ folder and put your image files inside.

2. In your __index.svelte__ and other components you can reference your images as if you're accessing them from __index.htm__.

```htm
<img src="img/picture.png" alt="A picture.">
```

> This can be a little confusing at first but just remember that all your code from the __src/__ folder gets bundled up and put into the __public/__ folder for displaying to the user. Unfortunately, the way this works means VS Code can't autocomplete file paths (like `href`, `src`, and `link`) for you.