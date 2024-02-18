![](/angular-hashnode/src/assets/animation/merge-animation.gif)

# Angular Headless Hashnode
## [![Discord](https://github.com/monacodelisa/icons-and-graphics/blob/main/icomoon/PNG/discord.png?raw=true)](https://discord.gg/3bS3xpCj) Open Source Project 

## Overview 

The **Angular Headless Hashnode Project** aims to seamlessly connect your Angular application to the Hashnode GraphQL database, providing a template for integrating Angular with a headless Hashnode setup.

In other words - this project is very much like the starter kit that Hashnode provides, except that this project uses Angular for the frontend and deployment is set to be done through Netlify.

## Project Goals

- Develop a flexible template for Angular integration with headless Hashnode.
- Connect the Angular app to Hashnode's GraphQL database to retrieve posts and blog data.
- Support Angular versions 16 and 17 native - without UI libraries and just custom SCSS.
- Support Angular versions 16 and 17 with Angular Material UI.
- Support Angular versions 16 and 17 with PrimeNG.
- Responsive layout improvements for different devices

## Existing Setup & Features

- [Appolo Angular](https://the-guild.dev/graphql/apollo-angular/docs) - GraphQL Client for Angular
- [Font Awesome Icons](https://fontawesome.com/)
- [Google Material Symbols and Icons](https://fonts.google.com/icons)
- [Google Fonts](https://fonts.google.com/)

## LIVE VERSIONS

| [![v16 dark](https://raw.githubusercontent.com/monacodelisa/Angular-Headless-Hashnode/develop/angular-v16/src/assets/images/angular-headless-hashnode-dark.jpg)](https://angular-hashnode.monacodelisa.com/) | [![v16 light](https://raw.githubusercontent.com/monacodelisa/Angular-Headless-Hashnode/develop/angular-v16/src/assets/images/angular-headless-hashnode-light.jpg)](https://angular-hashnode.monacodelisa.com/) |
| - | - |
### [Angular v16 native - no UI libraries](https://angular-v16-hashnode.monacodelisa.com/)                          

### [Angular v17 native - no UI libraries](https://angular-v17-hashnode.monacodelisa.com/)                          

## Angular App Versions

### `angular-v16` - has no UI libraries
### `angular-v16-AnguMAT` - has Angular Material
### `angular-v16-PrimeNG` - has PrimeNG 
### `angular-v17` - has no UI libraries
### `angular-v17-AnguMAT` - has Angular Material
### `angular-v17-PrimeNG` - has PrimeNG 
### `angular-hashnode`- presentation site


## Contributing

### Most of the open issues feature engaging YouTube videos, providing step-by-step guidance on implementing requirements. Dive in and contribute without hesitation – your skills are valued, and you can make a meaningful impact! Join us in building something great together.🌟

#### the default branch is `develop`!

### Fork the repository

1. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) the `monacodelisa/angular-headles-hashnopde` repo.

### Working on Issues

1. In your local or forked repository, make your changes in a new git branch:

     ```shell
     git checkout -b my-fix-branch develop
     ```

2. Create your patch, **including appropriate test cases**.

3. This is a monorepo that includes 6 versions of the app, make sure that you are working on the correct app version.

4. Follow our [Coding Rules](./CONTRIBUTING.md#coding-rules).

5. Run the full test suite, as described in the developer documentation, and ensure that all tests pass.

6. Commit your changes using a descriptive commit message as specified in [CONTRIBUTING.md](./CONTRIBUTING.md/#commit-message-guidelines).

     ```shell
     git commit --all
     ```
    Note: the optional commit `--all` command line option will automatically "add" and "rm" edited files.

6. Push your branch to GitHub:

    ```shell
    git push origin my-fix-branch
    ```

7. In GitHub, send a pull request to `angular-headless-hashnode:develop`.

## Using the app with your Hashnode Blog

This app is still in its early stages, and it currently has limited features. At this point, I strongly encourage you to contribute to its development before actively using the app.

### Fork the repository

1. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) the `monacodelisa/angular-headles-hashnopde` repo.

2. Go to the `angular-v16` app and inside the `graphql.operations.ts` file, replace the URL of the blog to point to your blog

3. Right now only `angular-v16` can be deployed to Netlify so you just need to select it and deploy from an existing github repo. (Your forked repo)

Be advised that a lot of features are yet to be implemented.

### Run locally

1. Clone this repository.

```bash
git clone https://github.com/your-username/angular-headless-hashnode.git
cd angular-headless-hashnode
```
2. Select Angular version 16 
```
cd angular-16
```

3. Install dependencies.

```
npm install
```

4. Run the app 

```
npm start
```

or 

```
ng serve
```

## Celebrate Your Achievements!

If you've added exciting features or functionalities that the project currently lacks, we'd love to see what you've accomplished. Share your contributions, suggestions, or improvements to help enhance the overall app experience. Your input plays a crucial role in making the application even better, and we're eager to see the innovative strides you've taken!

## Found an issue?
If you have found an issue or bug, please create an issue.

If it's a quick fix, such as a misspelled word or a broken link, feel free to skip creating an issue. You can create a pull request directly.

## Have feedback?
Feel free to create an issue with the feedback label. I will take a look and get back to you as soon as I can!

