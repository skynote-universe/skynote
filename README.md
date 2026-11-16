# SkyNote 星河云谱

**让想法展开，让灵感相连。**

SkyNote 是一个可扩展的无限画布 SDK，也是一款可在线使用的白板。你可以在画布上记录灵感、连接内容、梳理复杂关系，也可以把同一套画布能力嵌入自己的应用。

[文档](https://docs.skynote.top/) · [在线白板](https://canvas.skynote.top/) · [代码演练场](https://playground.skynote.top/)

## 我们为什么做 SkyNote

一个想法可能从一句话、一张图或一条随手画下的线开始。刚开始时，内容可以自由摆放。线索越来越多时，再用连线、画框或布局把关系整理清楚。我们想让更多人用上这样的视觉思考工具，也让开发者能从一张画布开始，逐步做出适合自己用户的产品。

- **让操作跟上思路。** 选取、拖动、缩放和编辑需要及时反馈。内容变多时，画布仍应易于操作。
- **让用户掌控内容。** 编辑有明确的结果，可以撤销重做。文档用可序列化的数据表达，便于宿主保存、导入和迁移。
- **让画布适合不同产品。** 文档模型和编辑事务由平台中立的内核负责。渲染和交互通过公开接口接入，开发者可以按需要加入新的节点、工具和表现形式。

我们希望 SkyNote 能长期承载视觉思考与结构化创作。当前优先打磨本地编辑和 SDK 接入。跨设备同步与多人协作是长期方向。

## 体验与接入

在线白板可以体验便签、文字、图形、连线、本地保存和导出。演练场支持编辑 JavaScript 或 TypeScript 并查看实际画布，也提供思维导图、内容表格、画笔和钢笔的免费交互体验。[在线白板](https://canvas.skynote.top/) · [示例目录](https://docs.skynote.top/examples/)

接入自己的应用时，可以从 `SkyNoteEditor` 和 Leafer 渲染器开始，创建编辑器、挂载容器并插入第一个节点。首个公开版本为 `0.1.0-beta.1`。[快速开始](https://docs.skynote.top/guide/getting-started)

```sh
npm install @skynote/editor@beta @skynote/renderer-leafer@beta
```

## 基础 SDK

| 包 | 职责 | 文档 |
| --- | --- | --- |
| `@skynote/core` | 平台中立的文档模型、事务、历史和插件协议 | [Core](https://docs.skynote.top/api/core) |
| `@skynote/editor` | 装配内核、基础插件与渲染适配器，提供面向应用的编辑器接口 | [Editor](https://docs.skynote.top/api/editor) |
| `@skynote/plugins-basic` | 基础节点、选区、变换、吸附等通用能力 | [基础插件](https://docs.skynote.top/api/plugins-basic) |
| `@skynote/renderer-leafer` | 基于 LeaferJS 的浏览器画布渲染和输入适配 | [Leafer 渲染器](https://docs.skynote.top/api/renderer-leafer) |

## 从源码运行

本仓是 SDK 的开发工作区。装配脚本会按固定提交检出源码，便于跨包联调和复现问题。[SDK 提交清单](./sdk-revisions.json)

需要 Git、Node.js 22.12 或更高版本，以及 pnpm 10.12.4。运行以下命令从公开仓库检出四个 SDK 的固定版本。

```sh
git clone https://github.com/skynote-universe/skynote.git
cd skynote
node scripts/bootstrap.mjs
pnpm install --frozen-lockfile
pnpm dev
```

打开 Vite 输出的地址，即可看到一张可编辑的便签。运行 `pnpm verify` 会检查类型、测试并构建工作区中的 SDK 和示例。

高级插件可按各插件仓 README 中的指引检出到 `pro/`，并在此工作区运行类型检查与测试。基础 SDK 的装配命令只检出 `core/` 下的四个 SDK。

## 参与贡献

欢迎分享你用 SkyNote 做了什么、遇到了哪些接入问题，也欢迎贡献可复现的示例、文档改进和 SDK 修复。报告问题时，请附上包版本、复现步骤和预期行为。修改 SDK 时向对应包仓提交 PR。工作区脚本和示例的变更提交到本仓。[问题反馈](https://github.com/skynote-universe/skynote/issues) · [贡献指南](./CONTRIBUTING.md)

## 许可证

本仓、四个基础 SDK 和画笔插件采用 MIT 许可证。思维导图、内容表格和钢笔采用各自仓库中的 SkyNote 高级插件源码可见许可证。四个插件均可免费在线体验。[本仓许可证](./LICENSE)
