"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BrainCircuitIcon, CodeIcon, PaintbrushIcon, GamepadIcon } from "lucide-react";

const skills = [
  { name: "后端开发", icon: <CodeIcon className="h-6 w-6" />, level: 95 },
  { name: "Agent 开发", icon: <BrainCircuitIcon className="h-6 w-6" />, level: 85 },
  { name: "全栈开发", icon: <PaintbrushIcon className="h-6 w-6" />, level: 80 },
  { name: "游戏开发（计划中）", icon: <GamepadIcon className="h-6 w-6" />, level: 30 },
];

export function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">关于我</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative h-[400px] w-full">
            <div className="absolute inset-4 border-4 border-primary z-0"></div>
            <div className="absolute inset-0 pixel-card overflow-hidden">
              <Image
                src="/images/avatar.png"
                alt="Jethrozz 的头像"
                fill
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold">你好，我是 Jethrozz</h3>

          <p className="text-lg">
            8 年经验的后端开发者，具备大型系统的设计与开发能力；现在也写全栈、做 Agent。黑客松爱好者——Sui Overflow 2025 全球前 100。
          </p>

          <p className="text-lg">
            业余时间是一名独立开发爱好者，正在做自己的产品，未来还想做游戏。这个博客记录开发笔记、随想与作品。
          </p>

          <div className="space-y-4 mt-8">
            <h4 className="text-xl font-bold">我的技能</h4>

            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-2 p-2 bg-primary text-black">
                        {skill.icon}
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="font-bold">{skill.level}%</span>
                  </div>

                  <div className="h-6 w-full bg-gray-200 dark:bg-gray-700 border-2 border-black">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-primary"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
