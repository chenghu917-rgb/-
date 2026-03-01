# H5 前端项目

React + antd-mobile + Vite 新建项目，用于替换 `public/h5` 的旧前端。

## 目录结构

```
h5-src/
├── API_REFERENCE.md    # API 接口参考（从旧版提取）
├── package.json
├── vite.config.ts      # 构建输出到 public/h5
├── index.html
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── api/            # 接口封装
│   ├── layouts/        # 布局
│   └── pages/          # 页面
└── README.md
```

## 开发

```bash
cd h5-src
npm install
npm run dev
```

开发时访问 `http://localhost:5173`，Vite 已配置 `/api` 代理到后端。

**修改后端接口地址：**
- **开发环境**：改 `vite.config.ts` 里 `server.proxy['/api'].target`，如 `http://127.0.0.1:8080`。
- **生产环境**：H5 和后端同域名时不用改；后端在别的域名时，在 `.env.production` 里设置 `VITE_API_BASE=https://你的后端域名`。

## 构建与替换

```bash
npm run build
```

构建完成后会自动输出到 `public/h5`，覆盖旧前端。访问站点 `/h5` 即可使用新前端。

## 对接步骤

1. **抓包**：用浏览器访问旧 H5，F12 → Network，操作各功能，记录每个接口的：
   - URL
   - Request Payload（参数）
   - Response（返回格式）

2. **实现页面**：在 `src/pages/` 下按需实现首页、订单、交易、团队、我的等页面，调用 `src/api/index.ts` 中的接口。

3. **样式**：参考旧版 `public/h5/assets/index-TrMjrZGI.css` 的类名和布局，用 antd-mobile 组件 + 自定义样式还原。

## 首页 Partner 图标

首页「Partner」区域的 12 张图标来自 `assets/upload`（子目录 0c、2c、7e、18、28、65、95、a9、c4、df、f2、f4）。  
开发与构建时会使用 `public/assets/upload`：若你更新了 `h5-src/assets/upload` 下的文件，需再复制到 `public/assets/upload`，或重新执行一次复制（例如 PowerShell：`Copy-Item -Path .\assets\upload\* -Destination .\public\assets\upload -Recurse -Force`）。
