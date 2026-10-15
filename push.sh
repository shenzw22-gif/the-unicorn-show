#!/bin/bash
# THE UNICORN SHOW 一键推送脚本
#
# 背景：本机沙箱无法写入 macOS 系统钥匙串，gh 的 credential helper 装不上，
#因此直接读取 GH_CONFIG_DIR 下的 token 注入推送。
#
# 用法：./push.sh 或 ./push.sh "提交信息"

set -e

export PATH="$HOME/.local/bin:$PATH"
export GH_CONFIG_DIR="$HOME/.config/gh-nokeychain"

REPO_DIR="/Users/studio2/WorkBuddy/2026-08-13-11-31-35/unicorn-show-app"
REPO="shenzw22-gif/the-unicorn-show"

cd "$REPO_DIR"

# 有待提交内容（含未跟踪文件）则先提交
if [ -n "$(git status --porcelain)" ]; then
  MSG="${1:-chore: 更新内容}"
  git add -A
  git commit -m "$MSG

Co-Authored-By: WorkBuddy <workbuddy@tencent.com>"
  echo "已提交：$MSG"
fi

# 无新增提交则直接退出
if git log origin/main..HEAD --oneline 2>/dev/null | grep -q .; then
  TOKEN=$(grep -m1 'oauth_token:' "$GH_CONFIG_DIR/hosts.yml" | sed 's/.*oauth_token:[[:space:]]*//')

  if [ -z "$TOKEN" ]; then
    echo "错误：未能读取 GitHub token，请先执行 gh auth login" >&2
    exit 1
  fi

  git push "https://x-access-token:${TOKEN}@github.com/${REPO}.git" main 2>&1 |
    sed "s|https://x-access-token:${TOKEN}@|https://|"

  echo "已推送到 $REPO"
else
  echo "无新增提交，无需推送"
fi