import { BotIcon, RocketIcon, DatabaseIcon, CompassIcon } from "lucide-react";

const services = [
  {
    title: "AI Agent 定制开发",
    description:
      "基于大模型 API 与 Dify/n8n 工作流，为你量身打造专属 Agent——客服、运营、创作，让 AI 真正替你干活。",
    icon: <BotIcon className="h-10 w-10" />,
  },
  {
    title: "AI 应用 MVP 开发",
    description:
      "从想法到上线最快只需数周：产品设计、前后端与 AI 能力一体化交付，帮你抢先验证市场。",
    icon: <RocketIcon className="h-10 w-10" />,
  },
  {
    title: "知识库与自动化",
    description:
      "RAG 知识库 + 流程自动化，把散落的文档与重复劳动，变成随问随答的企业智能助手。",
    icon: <DatabaseIcon className="h-10 w-10" />,
  },
  {
    title: "AI 落地咨询",
    description:
      "为中小企业与自媒体人梳理最值得投入的 AI 场景：出方案、选工具、陪跑落地，不走弯路。",
    icon: <CompassIcon className="h-10 w-10" />,
  },
];

export function ServicesSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">我的服务</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={service.title}
            style={{ animationDelay: `${index * 75}ms` }}
            className="pixel-card p-6 bg-white dark:bg-black pixel-card-animate transition-all duration-200 hover:-translate-y-2"
          >
            <div className="p-4 bg-primary text-black mb-6 inline-block border-2 border-black">
              {service.icon}
            </div>

            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
