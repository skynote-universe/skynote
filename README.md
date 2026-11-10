# SkyNote

SkyNote 是可扩展的无限画布 SDK。这个工作区把四个基础 SDK 仓库装配到一起，供贡献者联调和运行示例。

[文档](https://docs.skynote.top/) · [在线白板](https://canvas.skynote.top/) · [演练场](https://playground.skynote.top/)

如果要把 SkyNote 接入自己的应用，请参阅[快速开始](https://docs.skynote.top/guide/getting-started)中的安装状态和接入示例。

## 从源码运行

需要 Git、Node.js 22.12 或更新版本，以及 pnpm 10.12.4。在本仓根目录运行：

```sh
node scripts/bootstrap.mjs
pnpm install --frozen-lockfile
pnpm dev
```

打开 Vite 输出的本地地址，即可看到一张可编辑的便签。运行 `pnpm verify` 可检查类型、执行四个 SDK 的测试并构建 SDK 和示例。

四个包分别维护文档模型和事务（Core）、基础节点与交互（Plugins Basic）、编辑器集成（Editor）和 Leafer 渲染（Renderer Leafer）。检出路径和固定版本见 [sdk-revisions.json](./sdk-revisions.json)。

[贡献指南](./CONTRIBUTING.md) · [MIT 许可证](./LICENSE)
