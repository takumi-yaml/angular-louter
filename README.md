# AngularRouterSample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## memo


ルータを使うには

1. RouterModule from @angular/router を登録する
2. routesを定義する
3. RouteModule.forRoot() にroutesを渡す

note: RouterModule.forRootメソッドは、アプリケーション全体のプロバイダを登録するためのパターンです。

設定されたRouterModuleをAppModuleに追加するだけで、簡単なルート設定ができます。


# 1. ルータの基本

1. Routerをロードする
2. routeLink, routeLinkActive属性のついたアンカータグでリンクを作る
3. route-outletを表示するビューに追加する
4. RouterモジュールをRouteModule.forRoot()と設定する
5. ルータをブラウザのURLを構成するのに設定する
6. 不正なURLをワイルドカードで扱う
7. 空のパスでアプリケーションがロンチした時に、デフォルトのルートにナビゲートする

# 2. ルーティングモジュール

## ルーティングモジュールの特徴
- ルートの関心事を他のアプリケーションの関心事と分ける
- アプリケーションをテストするときの置換 / 削除するモジュールを提供する
- ガードやリゾルバを含むルーティングサービス・プロバイダに既知のロケーションを提供する
- コンポーネントを定義しない


--routing で CLIに@ angular / router npmパッケージを組み込み、app-routing.module.tsという名前のファイルを作成するように指示します。

- `RouterModule.forRoot` はrootのAppRoutingModuleだけで使う
  - トップレベルのアプリケーションモジュールでのみ
- それ以外のモジュールでルートの追加をするときは、`RouterModule.forChild`を使う

- 各モジュール内でルート設定ファイルを持つことで複雑なアプリケーションにも対応できるようにする

- トップレベルのアプリケーションモジュールでのimportsはルーティングに影響を与える。
  - サブモジュールのルーティング設定をつかうため、トップレベルのルーティングモジュールのインポートはimportsの最後に書く

- ActivateRoute.paramMapはobservableなので、mapをするとobservableが返ってくる
  - switchmapを使い、observableからオブジェクトそのものを(ParamMap)を使う
  - serviceが値をgetする前に、新しいidを渡した場合にも、switchMapならその前に渡されたidを捨てて、新しいidを使ってくれる


- animationの使い方
  1. rootのmoduleに import {BrowserAnimationsModule} from @angular/platform-browser/animations を追加
  2. animationを作成
```
// animation.ts
// インポート
import {
    trigger, animateChild, group,
    transition, animate, style, query
} from '@angular/animations';
```

```
// animation.ts
export const slideAnimation = trigger(アニメーション名, [
  transition(どのステートの変更にバインドするか, [
    ステップ
  ])
])
```

  3. rootのcomponentに定義したアニメーションと {RouterOutlet} from @angular/router をimport
    - importしたアニメーションは@compornentデコレータの`animations`プロパティに配列で持たせる
  4. 
    - rootのテンプレートのrouter-outletタグを別のタグで囲み、新しいタグに[@routerAnimation]ディレクティブを追加
    - router-outletタグのrouterOutlet変数にoutletをバインドし、router-outletを公開する
```
<div [@routeAnimation]="getAnimationData(routerOutlet)">
  <router-outlet #routerOutlet="outlet"></router-outlet>
</div>
```
  5. rootコンポーネントクラス内でgetAnimationData(outlet: RouterOutlet)メソッドを定義する
```
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
```



1. Routesのchildrenとparentの違い
  - childrenはデフォルトでcomponentをre-useする
  - parentはデフォルトでre-createする


## 複数ルートの同時表示

1. templateにname属性付きrouter-outletタグに追加する
2. ルーティングモジュールのroutesにオブジェクト追加
  - オブジェクトのoutletはname属性と同じにする
3. aタグを追加し、[routerLink]ディレクティブなどを追加する
  - `<a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>`
  - `compose`を指定することで、1つのviewの中に該当のテンプレートのviewを作成できる



