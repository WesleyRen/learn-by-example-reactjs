# Build your first ReactJS project:
npm init
npm i webpack -S

# 1. Create webpack.config.js with following content
echo -e "
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
	entry: APP_DIR + '/index.jsx',
	output: {
	path: BUILD_DIR,
	filename: 'build.js'
	}
};

module.exports = config;
" > webpack.config.js

# 2. Create an index.html file:
echo -e '
<html>
  <head>
    <meta charset="utf-8" />
    <title>React.js using NPM, Babe16 and Webpack</title>
  </head>
  <body>
    <div id="app" />
    <script src="public/build.js" type="text/javascript"></script>
  </div>
  </body>
</html>
' > index.html

# 3. Create index.jsx file:
[ -d app ] || mkdir app
echo -e "console.log('Hello World!');
" > app/index.jsx

# 4. Run webpack
webpack -d # use -p for production.

# 5. open index.html file:
open ./index.html

# 6. check browser console for "Hello World!".

# Done!

# extras:
# Install babel
#  Babel is required to translate JSX code to pure JS and also to produce code for non-ES6 browswers
npm i babel-loader babel-preset-env babel-preset-react -S

echo '
{
	"presets" : ["es2015", "react"]
}
' > .babelrc


echo -e "
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
	entry: APP_DIR + '/index.jsx',
	output: {
	path: BUILD_DIR,
	filename: 'build.js'
	},
  module : {
    loaders : [{
      test : /\.jsx?/,
      include : APP_DIR,
      loader : 'babel'
    }]
  }
};

module.exports = config;
" > webpack.config.js

npm i react react-dom -S
