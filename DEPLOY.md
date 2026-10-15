# THE UNICORN SHOW · 部署指南

## 项目位置

```
/Users/studio2/WorkBuddy/2026-08-13-11-31-35/unicorn-show-app/
```

> 注意：此目录埋在 WorkBuddy 时间戳会话目录内，路径不含 "alan" 字样。

## 当前状态（2026-10-16）

- Git 仓库已初始化，分支 `main`，3 次提交
- 生产构建已验证通过（`npm run build`）
- 本地开发服务器运行于 http://localhost:5173/
- **已推送到 GitHub**：https://github.com/shenzw22-gif/the-unicorn-show（public）
- Vercel 部署：**尚未执行**

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

## 环境说明：gh 的凭据路径

本机沙箱无法写入 macOS 系统钥匙串，因此 `gh` 使用独立配置目录，
该设置已写入 `~/.zshrc`，新终端自动生效：

```bash
export PATH="$HOME/.local/bin:$PATH"
export GH_CONFIG_DIR="$HOME/.config/gh-nokeychain"
```

凭据存放于 `$GH_CONFIG_DIR/hosts.yml`。若该变量丢失，`gh` 会退回默认路径
并报"未登录"，重新export 即可。

当前已登录账号：`shenzw22-gif`，token 权限 `repo` / `read:org` / `gist`。

## 第一步：创建远程仓库并推送（已完成）

仓库地址：https://github.com/shenzw22-gif/the-unicorn-show（public）

```bash
cd /Users/studio2/WorkBuddy/2026-08-13-11-31-35/unicorn-show-app
gh repo create the-unicorn-show --public --source=. --remote=origin --push
```

### 日常推送：用封装好的脚本

因为本机钥匙串受限，`git push` 直连会失败。用项目根目录的 `push.sh`：

```bash
./push.sh                  # 自动提交全部改动并推送
./push.sh "修复联系表单样式"   # 带提交信息
```

脚本会自动检测未跟踪文件、生成提交、读取 token 推送，并在输出中隐去凭据。

若偏好手动操作，token 注入方式为：

```bash
export GH_CONFIG_DIR="$HOME/.config/gh-nokeychain"
TOKEN=$(grep -m1 'oauth_token:' "$GH_CONFIG_DIR/hosts.yml" | sed 's/.*oauth_token:[[:space:]]*//')
git push "https://x-access-token:${TOKEN}@github.com/shenzw22-gif/the-unicorn-show.git" main
```

## 第二步：部署到 Vercel

1. 访问 https://vercel.com 用 GitHub 账号登录
2. `Add New...` → `Project` → 导入 `shenzw22-gif/the-unicorn-show`
3. 框架自动识别为 Vite，构建命令与输出目录无需改动
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