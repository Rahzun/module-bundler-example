### Module Bundlers Basics ###

**Loaders**
Webpack enables use of loaders to preprocess files.
- allows us to bundle any static resource beyond Javascript

**Rules**
- match particular file-type to required loaders

**Plugins**
- tap into the webpack compiler (bundler lifecycle) directly


### Snowpack ###
- Instead of recompiling on every change, all of the dependencies are built once and are shipped directly to browser
- never builds a file twice (unless it changes)


***Ref***
Fireship: https://www.youtube.com/watch?v=5IG4UmULyoA