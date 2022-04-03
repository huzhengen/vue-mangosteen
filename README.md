初始化项目
```
pnpm i -g create-vite
pnpm create vite@2.9.0 vue-mangosteen -- --tmplate vue-ts
```

在 `package.json` 中锁定依赖的版本

安装依赖，运行
```
pnpm i
pnpm run dev
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