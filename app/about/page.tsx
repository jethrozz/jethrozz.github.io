import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, Github, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PixelSeparator } from "@/components/pixel-separator";
import { PixelTimeline } from "@/components/pixel-timeline";
import { WorksCard } from "@/components/works-card";

import {
  featuredWorkSlugs,
  resumeEducation,
  resumeExperience,
  resumeProfile,
  resumeSkills,
} from "@/lib/resume";
import { getWorks } from "@/lib/content";

export const metadata = {
  title: "简历",
  description: "Jethrozz 的个人简历——工作经历、技能与精选项目。",
};

export default function AboutPage() {
  const featuredWorks = getWorks().filter((work) =>
    featuredWorkSlugs.includes(work.slug)
  );

  return (
    <div className="pixel-grid min-h-screen">
      <section className="container mx-auto px-4 py-16">
        {/* 个人信息卡 */}
        <div className="pixel-card p-8 max-w-3xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <div className="relative w-36 h-36 shrink-0 pixel-borders-light overflow-hidden">
            <Image
              src={resumeProfile.avatar}
              alt={resumeProfile.name}
              fill
              className="object-cover"
              style={{ imageRendering: "pixelated" }}
            />
          </div>

          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold mb-2">{resumeProfile.name}</h1>
            <p className="font-bold mb-4">{resumeProfile.role}</p>

            <ul className="space-y-1 text-muted-foreground mb-6">
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <MapPin size={16} />
                {resumeProfile.location}
              </li>
              {resumeProfile.email && (
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <Mail size={16} />
                  <a href={`mailto:${resumeProfile.email}`} className="hover:text-primary transition-colors">
                    {resumeProfile.email}
                  </a>
                </li>
              )}
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <Github size={16} />
                <a
                  href={resumeProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>

            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <Button asChild className="pixel-button">
                <a href={resumeProfile.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub 主页
                </a>
              </Button>
              <Button asChild variant="outline" className="pixel-button">
                <a href={`mailto:${resumeProfile.email}`}>
                  <Mail className="mr-2 h-5 w-5" />
                  发邮件
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* 关于我 */}
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">关于我</h2>
          <div className="space-y-4">
            {resumeProfile.bio.map((paragraph, index) => (
              <p key={index} className="text-lg text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <PixelSeparator />

        {/* 技能 */}
        <div className="max-w-3xl mx-auto mt-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">技能</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
            {resumeSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span>{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-4 border-2 border-foreground bg-muted">
                  <div
                    className="h-full bg-primary"
                    style={{ width: `${skill.level}%`, boxShadow: "inset -4px 0 0 rgba(0,0,0,0.25)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <PixelSeparator />

        {/* 工作经历 */}
        <div className="max-w-3xl mx-auto mt-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">经历</h2>
          <PixelTimeline items={resumeExperience} />
        </div>

        {/* 教育背景 */}
        {resumeEducation.length > 0 && (
          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">教育背景</h2>
            <PixelTimeline items={resumeEducation} />
          </div>
        )}

        <PixelSeparator />

        {/* 精选项目 */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">精选项目</h2>
            <Button asChild variant="outline" className="pixel-button">
              <Link href="/works" className="flex items-center">
                全部作品
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWorks.map((work, index) => (
              <WorksCard
                key={work.slug}
                title={work.title}
                description={work.description}
                slug={work.slug}
                imageUrl={work.imageUrl}
                tags={work.tags}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
