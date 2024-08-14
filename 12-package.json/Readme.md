Package.json  6%
Package configuration
Dependency management

安装给定依赖的限定版本 major.minor.patch
npm install lodash@^4.17.21
^ 表示依赖最新到minor版本 4.x.x

安装给定依赖的限定版本 major.minor.patch
npm install lodash@~4.17.21
~ 表示依赖最新到patch版本 4.17.x

安装给定依赖的限定版本 major.minor.patch
npm install lodash@4.17.21
安装指定版本

* 表示可以安装任意版本

安装给定依赖的限定版本 major.minor.patch
npm install lodash@>=4.17.21
>= 表示依赖大于等于指定版本

1. Initializing a Package [npm init -y]

2. Installing Dependencies [npm i xxx npm i --omit=dev]

3. Development Dependencies [npm i xxx -D]

4. Understanding Semver [^minor ~patch]

5. Package Scripts [npm test npm install npm run xxx]
