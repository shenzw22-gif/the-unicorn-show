# THE UNICORN SHOW · 部署指南

## 项目位置

```
/Users/studio2/WorkBuddy/2026-08-13-11-31-35/unicorn-show-app/
```

> 注意：此目录埋在 WorkBuddy 时间戳会话目录内，路径不含 "alan" 字样。

## 当前状态（2026-10-16）

- Git 仓库已初始化，分支 `main`，2 次提交
- 生产构建已验证通过（`npm run build`）
- 本地开发服务器运行于 http://localhost:5173/
- GitHub 远程仓库：**尚未创建**（需登录后执行）

## 技术栈

| 项| 版本 |
| --- | --- |
| React | 18.3.1 |
| TypeScript | 5.6.3 |
| Vite | 6.4.3 |
| Tailwind CSS | 4.x |

## 常用命令

```bash
npm run dev# 启动开发服务器（热更新）
npm run build    # 生产构建，输出到 dist/
npm run preview  # 本地预览生产构建
npm run typecheck# 类型检查，不产出文件
```

## 第一步：登录 GitHub

本机已安装 `gh`（位于 `/Users/studio2/.local/bin/gh`），但尚未登录。

```bash
export PATH="/Users/studio2/.local/bin:$PATH"
gh auth login
```

选择：`GitHub.com` → `HTTPS` → `Yes`(登录浏览器) 。

若希望 `gh` 全局可用，把这行加入 `~/.zshrc`：

```bash
echo 'export PATH="/Users/studio2/.local/bin:$PATH"' >> ~/.zshrc
```

## 第二步：创建远程仓库并推送

```bash
cd /Users/studio2/WorkBuddy/2026-08-13-11-31-35/unicorn-show-app
gh repo create the-unicorn-show --public --source=. --remote=origin --push
```

## 第三步：部署到 Vercel

1. 访问 https://vercel.com 用 GitHub 账号登录
2. `Add New...` → `Project` → 导入 `the-unicorn-show` 仓库
3. 框架自动识别为 Vite，无需改动
4. `Deploy`

### 绑定自定义域名 alan.livestudio2.com

1. Vercel 项目 → `Settings` → `Domains` → 添加 `alan.livestudio2.com`
2. 在域名 DNS 服务商处添加 CNAME 记录：

| 类型 | 名称 | 值 |
| --- | --- | --- |
| CNAME | alan | cname.vercel-dns.com |

3. 等待 DNS 生效（通常几分钟至48 小时），Vercel 会自动签发 SSL 证书

## 相关文件

- 设计系统规范：`/Users/studio2/WorkBuddy/2026-08-22-14-55-28/design-system-the-unicorn-show.md`
- 运营原型：`/Users/studio2/WorkBuddy/2026-08-22-14-50-05/unicorn-ops-prototype.html`
- 参考 PDF：`/Users/studio2/Desktop/名片/Alan/THE UNICORN SHOW_2608.pdf`