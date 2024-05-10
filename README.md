# Dify.ai on Amazon Lightsail

## 日本語

[こちらの記事](https://note.com/sangmin/n/nbb4db69784e8) (by サンミンさん @gijigae)で紹介されている
[Dify](https://github.com/langgenius/dify)のAWSへのデプロイ方法を，
AWS CDKを使ってコード化したものです．

AWSのマネジメントコンソールを使った場合と同等のリソース作成操作を，コマンドラインを使って実行しています．
インフラリソースをCDKでコード化してデプロイすることで，

- 途中の一部操作（SSHキーを作成してインスタンスにログインし，Difyインストールコマンドを実行する）が不要
- Lightsailサービスのマネジメントコンソールが変わって操作方法が変化してしまった時も，コマンドラインから同等のリソース作成を再現できる
- リソースが不要になった場合，CloudFormationのページから一括削除できる

などの利点があります．

AWS CDK（やその中でつかっているAWS CLI）を全く触ったことがない方も，AWS CloudShellという機能（これは完全無料！）を使えば，
CLIツールの面倒なインストール作業なしに，以下の手順で簡単にデプロイできます．

1. AWS CloudShellの起動

AWSアカウントにログインし，使用したいリージョンに切り替えてください．

それから，画面の右上のボタンを押して，CloudShellを開いてください．

![CloudShellの起動](doc/JP-01-CloudShell.png)

![CloudShellを起動した様子](doc/JP-02-CloudShell-Started.png)


2. デプロイコマンドの実行

下記のコマンドを１行ずつ実行する．

```sh
git clone https://github.com/langgenius/dify-ai-on-amazon-lightsail.git
cd dify-ai-on-amazon-lightsail
cdk bootstrap
cdk deploy
```

3. 8 -10分ほど待つ

（この間に，作成したインスタンスで，Dockerのインストール・DifyのGitHubコードpullとサービス起動が行われています．）

4. 出来上がったLightsailインスタンスの固定IPアドレスを確認して，ブラウザからDifyのフロントエンドにアクセスする．

![Lightsailのページを開く](doc/JP-03-Open-Lightsail.png)

![Lightsailのページから作成したインスタンスの詳細ページを開く](doc/JP-04-Open-Instance_Details.png)

![固定IPアドレスを確認する](doc/JP-05-Check-StaticIP.png)

ブラウザで，[http://AAA.BBB.CCC.DDD](http://AAA.BBB.CCC.DDD)にアクセスする．
(AAA.BBB.CCC.DDDの部分は，先の手順で控えた固定IPアドレスに読み替え．)

**`https`ではなく`http`でのアクセスが必要なので注意する！**

![Difyフロントエンドにアクセスする](doc/JP-06-Open-Dify.png)


## English

This is AWS CDK project to deploy stack to install [Dify](https://github.com/langgenius/dify) on Amazon Lightsail, inspired by [this article (Japanese only)](https://note.com/sangmin/n/nbb4db69784e8) (by @gijigae).

Don't worry that if you are not familiar with AWS CDK (or AWS CLI).

You can deploy this stack simply by using AWS CloudShell (free service!).

Here is an instruction to deploy this stack.

1. Open the AWS CloudShell.

Login to your AWS account and switch region to where you want to deploy this stack.

After that, click the CloudShell icon on the top right of the screen.


