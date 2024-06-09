# ベースイメージの指定
FROM node:alpine

# 作業ディレクトリの設定
WORKDIR /app

# 依存関係をインストールするためにpackage.jsonとpackage-lock.jsonをコピーする
COPY package.json package-lock.json ./

# 依存関係をインストールする
RUN npm install

# アプリケーションのソースコードをコピーする
COPY . .

# ビルドする
RUN npm run build

# ポート3000でリッスンするように設定する
EXPOSE 3000

# アプリケーションを起動する
CMD ["npm", "start"]
