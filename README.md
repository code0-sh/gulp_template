# Gulp.js Template

### 概要

静的サイト作成のための<a href="http://gulpjs.com/" target="_blank">Gulp</a>のテンプレート

- HTMLテンプレート作成のための言語 : [Jade](http://jade-lang.com/)
- CSSプリプロセッサー : [Stylus](https://learnboost.github.io/stylus/)
- モジュール管理 : [WebPack](http://webpack.github.io/)
- ブラウザの同期 : [BrowserSync](http://www.browsersync.io/)
- パッケージ管理 : [Bower](http://bower.io/)
- ES6のトランプパイラー : [Babel](https://babeljs.io/)
- JSXのパース : [react-jsx-anywhere](https://www.npmjs.com/package/react-jsx-anywhere)

### 使用方法

##### Node.jsインストール

(1) [nvm](https://github.com/creationix/nvm)を使用したインストール

```bash
$ git clone git://github.com/creationix/nvm.git ~/.nvm
$ source ~/.nvm/nvm.sh
$ nvm ls-remote
```

v0.12.2をインストールする場合

```bash
$ nvm install v0.12.2
```

ターミナル起動時に有効にするため
.bash_profile
に次の記述を追加する。

```bash
source ~/.nvm/nvm.sh
nvm use v0.12.2
```

(2)インストラーを使用したインストールは[こちら](https://nodejs.org/download/)から

##### Gulpインストール

```bash
$ npm install -g gulp
```

package.jsonに記述してある依存ファイルをインストールする。
package.jsonがあるディレクトリで

```bash
$ npm install
```

##### Bowerインストール

```bash
$ npm install -g bower
```

各自で必要なライブラリーをインストールしてください。

(例)

```bash
bower search react
bower install react --save
```

##### Gulp実行

```bash
$ gulp
```

#### 参考

- [gulp.jsを使ってフロントエンドのビルドをする webpack, stylus](http://yutapon.hatenablog.com/entry/2014/12/06/123000)

- [ES6時代のJavaScript](http://techlife.cookpad.com/entry/2015/02/02/094607)

- [Bower入門](http://yosuke-furukawa.hatenablog.com/entry/2013/06/01/173308)
