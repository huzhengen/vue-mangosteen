```
pnpm i -g create-vite
pnpm create vite@2.9.0 vue-mangosteen -- --tmplate vue-ts
```

在 `package.json` 中锁死依赖的版本

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

已经提交到了 git，再添加到 .gitignore，无法忽略怎么办？
```
git rm -r --cached dist
```