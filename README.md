# vue-mangosteen

> 部署的时候，要先修改 bin/deploy.sh 里的 ip，确定是自己`前端`服务器的 IP；还要修改 Http.tsx 里的 IP，确定请求的接口是自己`后端`服务器的 IP。

初始化项目，使用 Vue3 和 TSX

```
pnpm config set save-prefix=''
pnpm i -g create-vite
pnpm create vite@2.9.0 vue-mangosteen -- --tmplate vue-ts
```

在 `package.json` 中锁定依赖的版本

安装依赖，运行

```
pnpm i
pnpm run dev
pnpm run dev --host=3001
pnpm run build
pnpm run preview
```

安装插件，支持 TSX

```
pnpm i -D @vitejs/plugin-vue-jsx
```

使用 Vue Router

```
pnpm i vue-router@4
```

已经提交到了 git，再添加到 .gitignore，无法忽略怎么办？

```
git rm -r --cached dist
```

--amend

```
git add .
git commit --amend -m "update"
```

vite plugin

```
[vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons)
```

> 创建 Tag 页面，切换表情 tab 有 bug，有可能是因为装了 chrome 插件（Chromoji - Emojis for Google Chrome），把这个插件关闭就好了。

curl
```
curl  -v  -XPOST -H "Content-Type:application/json"  http://123.45.67.89:3000/api/v1/validation_codes  -d  ' {"email" : "xxx@xxx.com"} '

```

查看 docker 日志
```
docker logs [OPTIONS] CONTAINER
```