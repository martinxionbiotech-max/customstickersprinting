# Custom Stickers Printing — 全站内容深度审计

> **2026-11-21 实施更新（在审计之后执行）：**
> - P0 中文、数字、日期、产品家族、条款窗口已修复；英文站中文扫描为 **0**。
> - 新增 **8 个知识枢纽页**（含 hang tags）、**4 篇 hang tags 文章**、**1 个 apparel 行业页**、**1 个 declarations 页**。
> - 知识文章 40→45；产品 15；行业 4→5；页面 77→92；sidecar 59→65。
> - 19 篇薄弱知识文章、15 个产品页、4 个行业页、Privacy/Terms/Contact/Quote 已扩写；产品 FAQ 产品化。
> - 当前构建：**92 个可索引页，0 断链、0 孤儿、标题/描述全部合规、0 页缺 JSON-LD**。
> - 仍阻塞：`www` DNS（无 Cloudflare 凭据）、`hello@` 邮箱别名（无邮箱后台权限）。
> - **视觉策略已改为工业 SVG 原理图**：15 个产品与印刷机示意图均为矢量线稿，旧产品照片和合作印厂照片已从 `public/` 移除；所有产品页、页脚和 `/declarations/#photography` 均标注“为保护客户隐私，未经书面许可不展示真实印刷品照片”。
> 本报告以下数字保留审计时点（2026-11-21 早先构建）作为对比基线。

- **审计日期**：2026-11-21
- **审计对象**：`https://customstickersprinting.com`（本地构建 + 线上抓取）
- **本地仓库**：`/home/ubuntu/work/customstickersprinting`，`main`，`eca4aeb`
- **审计范围**：77 个可索引页面（另有 `404.html`）、15 个产品页、40 篇知识文章、4 个行业页、核心/信任页、结构化数据、内链、AIO、E-E-A-T、转化路径
- **数据来源**：`npm run build` 产物、`static-site-content-audit/scripts/site-audit.py`、自建 Python 抽取、线上 HTTP/DNS 检查、git 历史
- **限制**：没有 GSC/GA4 数据，也没有真实询盘/成交数据；本报告不预测排名，也不把页面字数等同于排名。评分为本报告口径，用于排优先级。

---

## 0. 结论先行

**综合评分：70/100。基础很好，但还没到可以大规模投放或继续堆文章的程度。**

| 维度 | 分数 | 判断 |
|---|---:|---|
| 内容深度与原创性 | 68/100 | 观点具体、有实操细节；但 19/40 篇文章正文不足 500 词，14/15 个产品正文不足 500 词 |
| SEO / AIO | 78/100 | 技术 SEO 很干净；缺 7 个主题枢纽页、产品图、部分 schema 细节 |
| E-E-A-T / 信任 | 66/100 | 主体、USCC、D-U-N-S、无虚假证书是强项；但个人名邮箱、英文站中文、21/40 篇无来源 |
| 转化与信息架构 | 62/100 | 询盘路径清楚，但 12/15 个产品无图，报价页偏薄，无表单 |

**最需要先处理的 6 件事（P0）：**

1. **英文站 77/77 页都出现中文**：`legalNameZh` 进入 `Organization.alternateName`、页脚、About/Contact、`llms.txt`。按你给英文站的硬规则，这是上线级问题。
2. **全站公开邮箱是 `martin@`**：个人名出现在页脚、CTA、schema、Contact，和“只展示公司主体、不出现个人姓名”的规则冲突。
3. **至少 3 处数字/表述错误仍在**：成本表 50,000 件合计、wrap 计算“37.7 mm × 5”、8 oz 铁罐 230×45 与 240×45 冲突。
4. **40 篇文章的 `datePublished` 全是 2026-11-01**，早于仓库首次提交 2026-11-07；这不是可信的发布时间信号。
5. **`products/` 页写“Two product families”，首页写“Three product families”**：hang tags 已是第三个产品家族。
6. **Terms 写 7 天索赔，Refund 写 14 天**：同一件事两个窗口，客户会拿这个争执。

**一句话判断：** 这不是“内容太差”，而是“底子很诚实、技术很干净，但内容厚度和视觉证据不够，且有若干会被买家/谷歌一眼看出的硬伤”。先修 P0，再做 7 个枢纽页和 12 张产品图；不要先加第 41 篇文章。

---

## 1. 站点事实表

| 项目 | 实测 |
|---|---|
| 可索引 HTML | 77 页（另有 404） |
| sitemap | 77 个 `<loc>`，自定义 `sitemap.xml`；没有 `sitemap-0.xml`，不是缺失 |
| 产品 | 15 个：labels 8、stickers 6、tags 1 |
| 知识文章 | 40 篇，7 个 pillar |
| 行业页 | 4 个：beauty、candle、food、ecommerce |
| 产品正文 | 386–739 源词；中位数 426；14/15 低于 500 |
| 知识正文 | 332–2,321 源词；中位数 532；19/40 低于 500 |
| 渲染后知识页 | 中位数 901 词，最低 702；模板/FAQ/CTA 把字数撑高了 |
| 产品图 | 3/15：custom-stickers、logo-stickers、hang-tags |
| 标题 | 0 个超 60 字符；0 个重复；0 个空 |
| 描述 | 全部 140–155 字符；0 个重复 |
| H1 | 77/77 恰好 1 个 |
| canonical | 77/77 有；0 个重复 |
| noindex | 0 |
| 断链 | 0 |
| 孤儿页 | 0（按导航/页脚计）；点击深度 0:1、1:32、2:44 |
| JSON-LD | 0 页缺失；Organization/WebSite/Breadcrumb/FAQ/Article/Service 齐全 |
| llms.txt | 105 个 URL，全部 200；但 product/industry 的 `.md` 侧车未列入 |
| Markdown 侧车 | 59/77；18 个静态页没有 |
| 线上一致性 | 本地 CSS `_slug_.DLZTojVg.css` 与线上引用一致；sitemap 77 与线上一致 |
| www | `www.customstickersprinting.com` **无 DNS 解析** |
| 分析/追踪 | 无 GA4、无 GSC 验证、无第三方脚本；隐私页声明与此一致 |
| 性能基本面 | 无 JS；CSS 8 KB；首页 HTML 约 16 KB；产品图 52–80 KB WebP |

---

## 2. 做得好的地方（不要改坏）

1. **主体信息是真的、可核验的。** `Yiwu Dingwei Trading Company`、USCC `92330782MA8GW3PLXB`、D-U-N-S `585974555`、Yiwu/Zhejiang；About 明确写“不拥有工厂、生产在合作印厂”，并给出 gsxt/dnb 核验路径。这比大多数供应商站诚实。
2. **不伪造证书、价格、客户案例。** About/Editorial 明确写不展示无法提供的证书、不写自编评价、不把 mock-up 当实拍；这在标签/食品接触类目里是加分项。
3. **知识库有真正的“立场”。** 40/40 篇文章有 `Our view`，不是“一方面另一方面”的废话；例如“upscaling 是最常见的假修复”“50 units 时 setup 占价格大部分”。
4. **技术 SEO 干净。** 标题/描述全部在范围内、无重复、无断链、无孤儿、全部有 canonical/H1/JSON-LD；`llms.txt` 105 个 URL 全部 200。
5. **性能基础好。** 无 JS、CSS 仅 8 KB、无第三方字体、产品图 WebP；内容站最容易犯的“装一堆插件”问题这里没有。
6. **原创性在正文层面成立。** 按正文 5-gram 计算，产品之间、知识文章之间 **0 对超过 0.12**；85 对“近似重复”来自模板/FAQ/CTA，不是正文抄袭。不要因为审计脚本的 85 对就去合并页面。

---

## 3. P0：上线/投放前必须修

### P0-1 英文站出现中文（77/77 页）

**证据：**

- `src/data/site.ts:22`：`legalNameZh: '义乌市丁威贸易商行'`
- `src/data/site.ts:29`：`businessType: 'individual business (个体工商户)'`
- `src/layouts/BaseLayout.astro:32`：`alternateName: [site.company.legalNameZh, ...]` → 每个页面 JSON-LD 都有中文
- `src/components/Footer.astro:59`：页脚显示中文法定名
- `src/pages/about.astro:12/19/28/30`：meta description、正文、表格、`统一社会信用代码`
- `src/pages/contact.astro:50`：Legal entity 显示中文
- `src/pages/llms.txt.ts:56`：`Legal name: 义乌市丁威贸易商行 ...`

**实测：** `dist` 下 77/77 个 sitemap 页面都含中文；`404.html` 和 `dist/llms.txt` 也有。产品图片里的包装中文可接受，但**文本层**不行。

**修法：**

- 英文站只保留 `Yiwu Dingwei Trading Company`；中文法定名只放内部记录、发票、合同，不上公开页面。
- `businessType` 改为 `individual business (sole proprietorship)` 或 `individual business`。
- About 的 `统一社会信用代码` 改为 `Unified Social Credit Code (USCC)`。
- `llms.txt` 改为纯英文。
- 修完跑：`grep -RIlP '[\x{4e00}-\x{9fff}]' dist --include='*.html' --include='*.txt' --include='*.xml'`，目标 0。

### P0-2 公开邮箱使用个人名 `martin@`

**证据：** `src/data/site.ts:13`；`dist` 中 78 个 HTML（77 页 + 404）都出现；页脚、CTA、Organization、ContactPoint、About、Contact 全在用。

按你“对外只用公司主体、不出现个人姓名”的规则，`martin@` 是个人名。建议：

- 建 `hello@customstickersprinting.com` 或 `sales@customstickersprinting.com`，确认能收信后全站替换；
- 保留 `martin@` 作为内部别名/转发，不对外展示；
- 替换后检查 `mailto:`、schema `email`、页脚、`llms.txt`、所有 CTA。

> 注意：不要只改字符串不建邮箱；否则询盘会静默丢失。

### P0-3 三处仍然存在的数字错误

#### (a) 成本表 50,000 件合计对不上

`src/content/knowledge/custom-label-printing-cost.md:120`：

```
| 50,000 | $0.004 | $0.035 | $0.039 | $1,950 |
```

按表内数字：`190 + 50,000 × 0.035 = $1,940`，不是 `$1,950`。按四舍五入后的 `$0.039 × 50,000 = $1,950` 又是另一个口径。**同一行不能同时成立。**

建议：合计改 `$1,940`，unit 改 `$0.0388`；或明确写“按 rounded unit price 计”。不要保留现在这种“乘出来是 1,950、加起来是 1,940”的状态。

#### (b) Wrap 计算把“六次重复”写成“五次”

`src/content/knowledge/label-wrap-calculation.md:117`：

> 226 ÷ 40 = 5.65，so five repeats need 200 mm and six need 240 mm. Neither is 226. The options are to adjust the repeat to **37.7 mm (five repeats)** …

`37.7 × 5 = 188.5`，不是 226；`37.7 × 6 = 226.2`。应改为 **six repeats**，或把五次的 repeat 改为 **45.2 mm**。

#### (c) 8 oz 铁罐 230×45 与 240×45 冲突

- `label-size-guide.md` 和 `label-size-for-tins-tubes-pouches.md` 表格：**240 × 45**
- `label-size-for-tins-tubes-pouches.md:14` FAQ：**230 × 45**

75 mm 直径：`75 × π + 4 = 239.6 mm`，240 才对；230 包不上一圈。FAQ 改成 240。

> 这说明上一次“deep audit 修了 4 个数”只修了部分文件，跨文件比对没有做全。建议把这三处修完后，对成本/尺寸类表格做一次机器复算，而不是人工扫。

### P0-4 文章日期不可信

**证据：**

- `src/pages/knowledge/[slug].astro:55`：`datePublished: "2026-11-01"`，40/40 篇相同
- `:56`：`dateModified: `${d.updated}-01``；40 篇 `updated` 全部 `2026-11`，所以全是 `2026-11-01`
- 仓库第一次提交：`2026-11-07`（`f1b565f`）

这不是“文章都在 11 月 1 日发布”能解释的：站点 11 月 7 日才建。至少应视为**不可验证的批量日期**，不能当真实发布时间。

**修法：**

- 给每篇加 `published` / `reviewed` 字段，取真实日期；
- 如果真实日期不可考，用 git 首次提交/最后修改日期，不要回填 11-01；
- Article schema 的 `datePublished`/`dateModified` 用这些字段；
- 页面上的 `Updated 2026-11` 可以保留，但不要伪装成精确日期。

### P0-5 “Two product families” vs “Three product families”

- `src/pages/products/index.astro:18`：**Two product families**
- `src/pages/index.astro:91`：**Three product families**

实际是 labels 8 + stickers 6 + tags 1。产品索引页这句话会让用户以为 hang tags 不存在。改为 `Three product families`，或写 `Labels, stickers and printed tags`。

### P0-6 Terms 7 天 vs Refund 14 天

- `src/pages/terms.astro:33`：缺陷/不符，**7 天**内提出
- `src/pages/refund-policy.astro:38`：我方责任，**14 天**内提出
- `src/pages/shipping-delivery.astro:47`：运输损坏/短少，**7 天**内提出

这不是“不同情况不同窗口”写清楚了，而是同一类“我方责任/缺陷”出现 7 与 14 两个数字。建议做成一张矩阵：

| 情形 | 窗口 | 处理 |
|---|---:|---|
| 运输损坏/短少 | 7 天 | 补发/退款，代客向承运人索赔 |
| 我方生产/规格错误 | 14 天 | 重印/退款 |
| 已批准稿件的文件错误 | 14 天 | 按成本价重印 |
| 颜色正常公差 | — | 不算缺陷 |

然后 Terms 和 Refund 都引用这张矩阵。

---

## 4. 内容深度审计

### 4.1 产品页：14/15 正文不足 500 词

| 产品 | 源词 | 渲染词 | 产品图 |
|---|---:|---:|---|
| custom-labels | 473 | 887 | 无 |
| food-labels | 456 | 827 | 无 |
| bottle-labels | 445 | 809 | 无 |
| roll-labels | 442 | 819 | 无 |
| cosmetic-labels | 440 | 818 | 无 |
| clear-labels | 433 | 792 | 无 |
| sticker-sheets | 426 | 798 | 无 |
| clear-stickers | 424 | 787 | 无 |
| waterproof-labels | 420 | 781 | 无 |
| die-cut-stickers | 417 | 788 | 无 |
| jar-labels | 406 | 778 | 无 |
| custom-stickers | 400 | 806 | **有** |
| logo-stickers | 400 | 778 | **有** |
| vinyl-stickers | 386 | 760 | 无 |
| hang-tags | 739 | 1,153 | **有** |

**问题不是“模板字少”，而是“模板把字数撑到 800，但独有正文只有 400”。** 对 B2B 产品页，400 词通常只能覆盖“是什么 + 材料表 + 下单”，不足以覆盖：

- 这个产品不适合什么表面/环境；
- 与相邻产品怎么选（如 bottle vs jar vs roll）；
- 常见失败模式与验收标准；
- 真实应用照片/样品；
- 产品特定的 3–5 个 FAQ。

**另外：15 个产品页共用同一组 3 个 FAQ**（最低起订、交期、文件要求），只是把产品名替换。156 个 FAQ 问题中，`How long does production take?` 出现 16 次，`What artwork do you need?` 出现 16 次。可见但模板化，Google 也不会因为重复 FAQ 给额外富媒体。

**建议：**

- 每个产品正文至少 600–800 源词；
- 每个产品 2–3 个**产品特定**问题，例如：
  - bottle labels：`Will a wrap label lift on a 30 mm dropper?`
  - food labels：`Can the same adhesive handle freezer and hot-fill?`
  - hang tags：`350 or 400 gsm for foil?`
- 每个产品加“不适合”段：什么表面、什么环境、什么数量不建议用这个产品；
- 12 个缺图产品补真实实拍（旧站/工厂素材），不要 AI 图；图片里可以有包装中文，但页面文本不要中文。

### 4.2 知识库：40 篇，厚度两极分化

**分布（源正文，不含 FAQ/CTA）：**

| 区间 | 篇数 |
|---|---:|
| < 500 词 | **19** |
| 500–699 | 8 |
| 700–999 | 9 |
| ≥ 1,000 | 4 |

中位数 **532 词**；最深 2,321（label-size-guide）、2,138（custom-label-printing-cost）、1,941（marketplace-label-requirements）。

**19 篇低于 500 词的文章：**

| 文章 | 源词 |
|---|---:|
| production-lead-time | 333 |
| sticker-adhesive-guide | 332 |
| sticker-thickness-durability | 341 |
| label-durability-by-material | 376 |
| label-adhesive-by-surface | 378 |
| print-colour-consistency | 379 |
| artwork-file-formats | 380 |
| print-resolution | 384 |
| spot-uv-special-finishes | 394 |
| foil-stamping-and-embossing | 399 |
| samples-and-proofs | 404 |
| clear-label-materials | 405 |
| gloss-vs-matte-finish | 409 |
| dieline-preparation | 414 |
| vinyl-vs-paper-stickers | 435 |
| what-is-moq | 446 |
| cmyk-vs-rgb | 471 |
| what-affects-label-pricing | 482 |
| digital-vs-flexographic-printing | 486 |

这些不是“短而精”全部成立：`sticker-adhesive-guide`、`production-lead-time`、`label-durability-by-material` 都是高商业意图问题，332–376 词加 2 个 FAQ 不足以覆盖表面类型、失效模式、测试方法和边界条件。

**来源覆盖：**

- 30 条外部引用，分布在 **19/40** 篇文章；**21 篇 0 来源**。
- 引用域名：ISO、ASTM、FINAT、NIST、EUR-Lex、Amazon Seller Central、GSXT、D&B；权威性本身不错。
- ISO/GSXT 对自动抓取返回 403，不等于断链；但不能据此说“已全文核验”。
- `Article.citation` 只对有 `sources` 的文章生成；没有来源的文章在 schema 里也没有 citation。

**判断：** 知识库的“观点”比“证据”强。40/40 有 `Our view` 是优点；但 21/40 没有来源，且 19 篇偏薄，导致“有立场、缺依据”的比例不低。不要给每篇硬塞引用；优先给涉及标准、法规、测试方法的文章补来源。

### 4.3 行业页：4/4 都偏薄

| 行业页 | 源词 | 渲染词 | 知识链接 |
|---|---:|---:|---|
| beauty-skincare | 403 | 630 | 0 |
| ecommerce | 383 | 630 | 0 |
| candle-fragrance | 355 | 592 | 0 |
| food-beverage | 336 | 558 | 0 |

它们有明确的痛点、材料表和 2 个行业 FAQ，方向是对的；但：

- 没有一篇知识文章的反向链接；
- 监管相关句子（US/UK/EU 标签要求）没有引用；
- 每页只有 2 个 FAQ；
- 没有“这个行业最常出现的 3 个失败案例”；
- 没有把行业页和对应产品/文章组成 cluster。

**建议：** 每个行业页扩到 700–900 源词，加 4–6 条知识链接（如 food → waterproof/durability/retail packaging；beauty → adhesive/clear labels；candle → adhesive/heat；ecommerce → MOQ/FNSKU），并把监管句子补到 FDA FPLA / EU 1169/2011 等来源。

### 4.4 核心/信任页

| 页面 | 渲染词 | 判断 |
|---|---:|---|
| About | 853 | 强，保留；但含中文和 `martin@` |
| Refund | 679 | 合格；与 Terms 的窗口冲突 |
| Editorial standards | 583 | 方向很好，略短；可补“谁审、怎么改、勘误记录” |
| FAQ | 567 | 合格 |
| Cookies | 404 | 偏薄但可接受（无追踪） |
| Privacy | 369 | 偏薄；缺 UK GDPR/CCPA 说明 |
| Terms | 361 | 偏薄；缺完整交付/付款/管辖条款 |
| Shipping | 302 | 偏薄；与 Refund 的 7 天窗口要统一 |
| Contact | 265 | 偏薄；但信息齐全 |
| Request a quote | 198 | 功能性页面；故意不放表单，可接受，但需要更多信任元素 |
| Products index | 419 | 有“Two product families”错误 |

**建议：**

- Privacy 扩到 700–900 词，补 UK GDPR、CCPA/CPRA、数据控制者、保留期限、投诉路径；
- Terms 扩到 700–900 词，补付款、交付/Incoterms、验收、管辖、不可抗力；
- 新增 `/declarations/`：明确“能提供什么、不能提供什么”（营业执照、DUNS、材料数据表；不声称工厂/证书）；
- Contact 补“首次询盘模板”和“响应时间”即可，不必写长。

### 4.5 模板化与原创性

**好消息：** 按正文 5-gram，产品之间、知识文章之间 **0 对 >0.12**；没有正文抄袭/拼接。渲染页的 85 对 >0.12、最高 0.208，来自共享模板（页头/CTA/FAQ/相关阅读），不是内容重复。

**坏消息：**

- 40/40 篇知识文章都有同一个 H2：`What this means for buyers`；
- 15/15 个产品页都有 `Ordering`，13/15 有 `Quantity and cost`；
- 15/15 个产品页共用 3 个 FAQ；
- 4/4 个行业页都有 `What to send for a quote`。

这不会触发重复内容惩罚，但会让读者和 AI 摘要觉得“每页都一样”。建议：

- 按主题改写结论标题，例如 `What I would specify for a chilled bottle`、`What changes at 5,000 units`；
- 产品 FAQ 产品化；
- 行业页结尾用行业特定检查表，不要同一段模板。

---

## 5. SEO / AIO 审计

### 5.1 强项

- 77/77 标题 ≤60；中位数 47；0 重复；0 空。
- 77/77 描述 140–155；中位数 146；0 重复。
- 77/77 恰好 1 个 H1；0 noindex；0 canonical 缺失/重复。
- 0 断链；0 孤儿；点击深度 0–2。
- 0 页缺 JSON-LD；FAQ 62 页、Article 40 页、Service 15 页。
- `llms.txt` 105 个 URL 全部 200；robots 允许 GPTBot/OAI-SearchBot/ClaudeBot/PerplexityBot/Google-Extended。
- 无 JS、CSS 8 KB；性能基本面好。

### 5.2 需要修的结构问题

1. **7 个 pillar 没有独立 hub 页。** 现在只有 `/knowledge/` 一个总索引，每个 pillar 只有一句 intro；文章面包屑里的 `Artwork preparation` 等全部指向 `/knowledge/`，造成同一层级重复。应建：
   - `/knowledge/label-sizing/`
   - `/knowledge/label-cost/`
   - `/knowledge/marketplace-labels/`
   - `/knowledge/label-materials/`
   - `/knowledge/sticker-materials/`
   - `/knowledge/printing/`
   - `/knowledge/artwork/`
   每个 600–1,000 词，定义问题、给选择框架、链到 5–8 篇文章和 2–3 个产品。
2. **Hang tags 没有知识 cluster。** 1 个产品、0 篇知识、0 个行业页；而它是三大产品家族之一。补 4–6 篇：卡纸克重、尺寸/孔位、eyelet/string、foil/emboss、hang tag vs label、artwork/dieline。再加一个 apparel/accessories 行业页。
3. **3 个信任页没有正文内链。** `/shipping-delivery/`、`/cookies/`、`/refund-policy/` 在 `<main>` 内 0 个入链，只靠页脚；产品页/FAQ/报价页应上下文链接。
4. **4 个行业页只被首页和行业索引链接 2 次**，没有知识文章链入；加行业→知识、知识→行业。
5. **Breadcrumb 有重复项。** 知识文章面包屑：Home > Knowledge > Artwork preparation > 文章，其中 `Artwork preparation` 指向 `/knowledge/`，与上一层重复；建 hub 后改为指向 hub。
6. **12/15 产品页无图**：这是内容/转化问题，也是 OG 问题；12 个产品页的 `og:image` 用默认品牌图，不是产品图。
7. **Service.offers 不完整。** 15 个产品页的 Service schema 有 `Offer`，但只有 `priceSpecification.description`，没有 price/priceCurrency/availability。既然是 quote-only，最干净的是**删掉 `offers`**；不要给 Google 一个不可定价的 Offer。
8. **Article 缺 image；Organization 缺 logo/sameAs。** 加真实 logo（已有 favicon，但需要 512×512 PNG），`sameAs` 只加真实存在的公开资料页；没有就不要编。
9. **sitemap 无 lastmod。** 可加真实 `lastVerified/updated`，不要全站同一个日期。
10. **`llms.txt` 缺 19 个 sidecar 链接。** 15 个产品 + 4 个行业的 `.md` 已生成，但 llms 只列 HTML；知识库列了 HTML+MD。补上后 105→124，AIO parity 更完整。
11. **18 个静态页没有 `.md` 侧车。** 如果目标是 AIO，至少给 About/FAQ/How to order/Request a quote/行业索引补；不补也可以，但不要声称“所有页面都有 markdown twin”。

### 5.3 关键词/内容缺口

| 优先级 | Cluster | 现状 | 缺口 |
|---|---|---|---|
| P1 | Hang tags | 1 产品、0 文章、0 行业 | 卡纸/尺寸/孔位/eyelet/string/foil；apparel 行业页 |
| P1 | 法规/合规 | 2 篇文章部分覆盖；food/cosmetic 产品页无引用 | FPLA、EU 1169/2011、化妆品、蜡烛安全、食品接触材料；每篇给来源 |
| P1 | 应用/故障 | 散落在多篇 | 边缘起翘、气泡、皱纹、低温/油面/回收塑料粘接、存储；可做 4–5 篇 cluster |
| P2 | Amazon/FNSKU 商业页 | 只有知识文章 | 一个商业 landing page（不是 Product schema）承接 “FNSKU labels” 询盘 |
| P2 | 模板/工具 | 5 篇 artwork 文章 | 可下载 dieline/bleed 模板 + 检查表；不要做假计算器 |
| P2 | 可持续/材料 | 无 | 可回收性、EPR、PFAS；没有可核验依据就不要写“环保” |
| P2 | 价格工具 | 成本文章强 | 可以做“illustrative calculator”，但必须标注假设，不能伪装真实报价 |

---

## 6. E-E-A-T 审计（66/100）

| 维度 | 证据 | 判断 |
|---|---|---|
| Experience | 具体失败模式、数量、材料、应用条件；“we would” 立场；3 张真实产品图 | 强，但视觉证据只覆盖 3/15 产品 |
| Expertise | 标准引用、成本/尺寸公式、材料表；但也有 3 处数字错误和 19 篇薄文 | 中上，需修算术 |
| Authoritativeness | 真实法定主体、USCC、D-U-N-S、gsxt/dnb 核验路径；30 条权威引用/19 篇 | 中；21/40 无来源、无 named reviewer、无 sameAs |
| Trust | 不伪造证书/工厂/评价；退款政策；付款防诈提示；隐私页 | 中上；但 `martin@`、中文、7/14 天冲突、隐私/条款偏薄 |
| Transparency | 明确“不拥有工厂”“不展示无法提供的证书”；报价制 | 强；这是本站最好的差异点 |

**关键判断：**

- 这个站不需要编“15 年经验”“ISO 9001”“FDA 认证”来提升 E-E-A-T；那会毁掉它现在最值钱的诚实。
- 需要的是：**真实日期、真实图片、可核验来源、明确的审稿角色、统一的条款**。
- 食品/化妆品标签属于 YMYL-adjacent（合规/安全），Google 对“谁写的、依据什么”更敏感；不要只靠“team” 签名。

---

## 7. 内链与信息架构

- 全局导航/页脚能到达所有页面，所以“孤儿 0”成立；但正文内链有断层：
  - 0 个 main-content 入链：`/shipping-delivery/`、`/cookies/`、`/refund-policy/`
  - 1 个：`/contact/`、`/faq/`、`/how-to-order/`、`/privacy/`、`/terms/`
  - 知识文章入链 2–18 个；最少的 `label-durability-by-material`、`sticker-thickness-durability` 只有 2 个。
- 产品 → 知识链接 3–5 条，做得不错；知识 → 产品 2–3 个，也不错。
- 行业页没有知识链接；知识文章也没有行业链接。
- 7 个 pillar 没有 hub，导致“cluster”只是知识索引上的分组，不是真正的主题权威结构。

**建议：**

- 每个产品页上下文链接 shipping/refund/quote；
- 每个行业页加 4–6 篇知识；
- 建 7 个 hub，hub ↔ 文章 ↔ 产品三向链接；
- 修面包屑，别让同一层重复指向 `/knowledge/`。

---

## 8. 转化路径

**做得对的：**

- 不伪造价格，统一 quote-based；
- MOQ 50、7–12 工作日、US/UK/EU 标准市场写得很清楚；
- 邮件 + WhatsApp 双通道；报价模板可复制；
- About/Refund/付款防诈提示能降低首次大额转账的顾虑；
- 没有假 logo wall、假评价、假证书。

**问题：**

- 12/15 产品页没有任何图片，用户看不到“做出来是什么样”；
- `/request-a-quote/` 只有 198 词，虽然模板实用，但缺少“凭什么信你”的元素；
- 无表单/文件上传；对不习惯 WhatsApp 的欧美买家，mailto 是摩擦；
- 产品页没有“样品政策/谁审稿/失败重印”近 CTA 的简短 reassurance；
- 没有案例（这是编辑政策选择，不是错误），但可以用匿名“问题→处理→结果”替代，前提是真实。

**建议：**

- 先补 12 张真实产品图；这比改文案更能提升询盘质量。
- 报价页加：`No payment until proof approval`、`Physical sample available`、`Reply within one working day`、`US/UK/EU shipping` 四个短信任点（都已在别处出现过，不新增承诺）。
- 如果做表单，必须 fail-closed（无邮件配置就报错），不要假装发送成功；静态站可先保留 mailto + 结构化模板。

---

## 9. 优先级行动清单

### P0 — 本周（1–2 天）

| # | 动作 | 验收 |
|---|---|---|
| 1 | 移除英文站中文：site.ts / Footer / About / Contact / llms | `grep` 中文 = 0（图片内除外） |
| 2 | 建 `hello@`/`sales@` 并全站替换 `martin@` | 0 个 `martin@`；测试收信 |
| 3 | 修 3 处数字：50,000 合计、37.7×5、230×45 | 机器复算 0 差异 |
| 4 | 修 Article 日期 | 40 篇有真实日期；不再全部 11-01 |
| 5 | 修 “Two product families” | 全站统一 three |
| 6 | 统一 7/14 天索赔窗口 | Terms/Refund/Shipping 一张矩阵 |

### P1 — 2–3 周

| # | 动作 | 验收 |
|---|---|---|
| 7 | 补 12 张真实产品图 | 15/15 有图；OG 用产品图 |
| 8 | 扩写 19 篇 <500 词文章 | 40/40 ≥700 源词（优先 10 篇高意图） |
| 9 | 建 7 个 pillar hub + 修面包屑 | 7 个 hub 各 600–1,000 词；文章面包屑指向 hub |
| 10 | 建 hang tags cluster + apparel 行业页 | 4–6 篇文章 + 1 行业页 + 产品互链 |
| 11 | 建法规/合规 cluster | 5–6 篇，带 FDA/EU/CPSC 等真实来源 |
| 12 | 扩 4 个行业页 | 每页 700–900 源词 + 4–6 知识链接 |
| 13 | 扩 Privacy/Terms/Contact/Quote | Privacy/Terms ≥700；加 declarations 页 |
| 14 | 加 shipping/refund/cookies 上下文链接 | 0 个“仅页脚可达”的信任页 |
| 15 | Service schema 清理；Organization logo/sameAs；Article image；sitemap lastmod | 0 个不完整 Offer；schema 校验通过 |

### P2 — 持续

| # | 动作 |
|---|---|
| 16 | 改写 40 个相同 `What this means for buyers` 标题；产品 FAQ 产品化 |
| 17 | `llms.txt` 补 15 产品 + 4 行业 `.md`（105→124）；必要时补核心页侧车 |
| 18 | 统一英式/美式拼写（本站以 colour/centre 为主，但 customization 18 次、customisation 0 次） |
| 19 | 12 个产品页补产品 OG；3 张图加 `srcset` |
| 20 | 修 `www` DNS/301；加 `_headers`（CSP/HSTS/X-Frame/Permissions-Policy） |
| 21 | 接 GSC/GA4 前先改隐私页；没有测量就不要谈“流量增长” |

---

## 10. 验收指标（建议）

**P0 完成：**

- 0 个中文出现在 `dist` 的 HTML/TXT/XML（图片内除外）
- 0 个 `martin@`
- 3 处数字复算 0 差异
- 40 篇文章日期不全相同，且不早于仓库首次提交（除非有真实证据）
- 0 个 “Two product families”
- Terms/Refund/Shipping 的索赔窗口一致

**P1 完成：**

- 15/15 产品有真实图；15/15 产品正文 ≥600 源词
- 40/40 知识文章 ≥700 源词；至少 25/40 有 1 条以上可核验来源（涉及标准/法规的必须）
- 7 个 hub 上线；所有知识面包屑指向 hub
- 4 个行业页 ≥700 源词，且各有 4–6 条知识链接
- Privacy/Terms ≥700 词；有 declarations 页
- 0 个信任页只靠页脚入链
- `llms.txt` 124 个 URL 全部 200

**P2 完成：**

- 40 个结论标题不再完全相同
- 产品 FAQ 不再 15 页共用 3 题
- 77/77 页面有明确 OG（产品页用产品图）
- `www` 可访问并 301 到 apex
- GSC 有验证；4–8 周后看 impressions/clicks，而不是拍脑袋

---

## 附录 A：页面级数据

完整 77 页的 `type/url/title/H1/description length/rendered words/source words/sources/FAQ/images` 见：

- `docs/audit-pages-2026-11.csv`

## 附录 B：本次审计的关键命令/口径

```bash
npm run build
python3 ~/.hermes/skills/devops/static-site-content-audit/scripts/site-audit.py dist
```

- 正文 5-gram 去重：对 `src/content/{products,knowledge}/*.md` 的正文（不含 frontmatter）计算 5-gram Jaccard；产品/知识各自比较。
- 渲染页 5-gram：对 `dist/**/index.html` 的 `<main>` 文本计算；85 对 >0.12 主要来自模板。
- 中文扫描：`src` 与 `dist` 全量 `[\u4e00-\u9fff]`。
- 线上状态：`curl` apex/www；本地 CSS hash 与线上引用比对。
- 未使用 Lighthouse/CrUX；本报告不声称 Core Web Vitals 分数。

---

## 附录 C：不要做的 5 件事

1. **不要**为了“看起来专业”编 ISO 9001/FDA/工厂照片；About 已经明确不这么做，编了反而毁信任。
2. **不要**因为 85 对近似重复就合并产品页；正文层面 0 对重复，问题是模板，不是内容。
3. **不要**给 quote-only 产品硬加 `Product` + 假价格；Service 可以保留，但不完整的 Offer 应删。
4. **不要**先加第 41 篇文章；19 篇薄文、7 个 hub、12 张图没解决前，新增只会稀释。
5. **不要**把 `martin@` 直接改成 `hello@` 而不建邮箱；这会让询盘静默丢失。
