import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from 'next/dynamic';
import { Providers } from "./providers";
import { PixelHeader } from "@/components/pixel-header";
import { PixelFooter } from "@/components/pixel-footer";

const CustomCursor = dynamic(() => import('@/components/custom-cursor'), {
  ssr: false,
  loading: () => null
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jz's Blog",
  description: "Jethrozz 的像素风个人站：后端 & Agent 工程师、独立开发爱好者的文章、随想与作品。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <CustomCursor />
          <PixelHeader />
          <main className="pt-24">{children}</main>
          <PixelFooter />
        </Providers>
      </body>
    </html>
  );
}