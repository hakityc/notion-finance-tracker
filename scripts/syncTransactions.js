const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const A_TABLE_ID = process.env.A_TABLE_ID;
const B_TABLE_ID = process.env.B_TABLE_ID;

async function syncAccountsToBTable() {
    console.log("🔄 正在同步 Notion 账户数据...");

    const aTableData = await notion.databases.query({ database_id: A_TABLE_ID });

    const accounts = new Set();
    aTableData.results.forEach((page) => {
        const accountProperty = page.properties["账户"];
        if (accountProperty?.select?.name) {
            accounts.add(accountProperty.select.name);
        }
    });

    const bTableData = await notion.databases.query({ database_id: B_TABLE_ID });
    const existingNames = new Set(
        bTableData.results.map((page) => page.properties["名称"]?.title?.[0]?.text?.content)
    );

    for (const account of accounts) {
        if (!existingNames.has(account)) {
            console.log(`✅ 新增账户：${account}`);
            await notion.pages.create({
                parent: { database_id: B_TABLE_ID },
                properties: {
                    "名称": { title: [{ text: { content: account } }] },
                    "账户": { rich_text: [{ text: { content: account } }] },
                },
            });
        }
    }
}

syncAccountsToBTable();
