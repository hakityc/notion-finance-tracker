# Notion Sync Automation

## 📌 项目介绍

本项目用于自动同步 Notion 账户数据，并支持未来扩展记账数据同步、统计报表等功能。利用 **GitHub Actions** 进行定时任务调度，实现 **完全免费**、**自动化** 的 Notion 数据管理。

## 📂 目录结构

```bash
notion-sync/
│── .github/
│   ├── workflows/
│   │   ├── sync_accounts.yml      # 任务1：同步账户数据
│   │   ├── sync_transactions.yml  # 任务2：同步记账数据（后续可添加）
│   │   ├── generate_report.yml    # 任务3：生成统计报表（后续可添加）
│── scripts/
│   ├── syncAccounts.js            # 任务1：同步账户数据
│   ├── syncTransactions.js        # 任务2：同步收支数据
│   ├── generateReport.js          # 任务3：生成统计报表
│── package.json                   # 依赖管理
│── README.md                       # 说明文档
```

## 🔧 功能列表

### ✅ 任务1：同步账户数据

- 作用：从 **A 表** 获取账户列表，并更新到 **B 表**。
- 代码文件：`scripts/syncAccounts.js`
- GitHub Actions 任务：`.github/workflows/sync_accounts.yml`

### ⏳ 任务2（后续扩展）：同步记账数据

- 作用：同步 A 表中的收支数据到 B 表。
- 代码文件：`scripts/syncTransactions.js`
- GitHub Actions 任务：`.github/workflows/sync_transactions.yml`

### ⏳ 任务3（后续扩展）：生成统计报表

- 作用：计算当月总收入、总支出，并同步到 Notion 报表页。
- 代码文件：`scripts/generateReport.js`
- GitHub Actions 任务：`.github/workflows/generate_report.yml`

## 🚀 部署指南

### 1️⃣ 创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 创建新仓库（建议 **私有**）
3. 本地克隆仓库：

   ```sh
   git clone https://github.com/your-username/notion-sync.git
   cd notion-sync
   ```

### 2️⃣ 获取 Notion API Key

1. 进入 [Notion Developer](https://www.notion.so/my-integrations)
2. 创建新的 **Integration**，获取 **API Key**
3. 关联 Integration 到 Notion 记账数据库

### 3️⃣ 在 GitHub 添加 Secrets

在 **GitHub 仓库 > Settings > Secrets** 里添加：

| Secret 名称 | 作用 |
|-------------|------|
| `NOTION_API_KEY` | Notion API 密钥 |
| `A_TABLE_ID` | 记账表（A 表）的 Database ID |
| `B_TABLE_ID` | 账户表（B 表）的 Database ID |

### 4️⃣ 提交代码 & 启动 GitHub Actions

```sh
git add .
git commit -m "初始化 Notion 同步脚本"
git push origin main
```

进入 GitHub **Actions**，点击 **Run workflow** 手动触发，或等待 **5 分钟自动执行**。

## 🎯 未来扩展

- 📌 **邮件/微信通知**：同步成功后发送提醒
- 📊 **数据统计**：按类别、时间生成 Notion 统计表
- 🔗 **API 集成**：与第三方记账工具对接
