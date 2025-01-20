import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import { Space_Mono, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/footer";
import "@/styles/globals.css";

const sansFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  weight: "400",
});

const monoFont = Space_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "R2CN - RISC-V Rust for Cloud Native 开源实习计划",
  metadataBase: new URL("https://r2cn.dev"),
  description:
    "R2CN（RISC-V Rust for Cloud Native）开源实习计划由中科院软件所、华为等机构联合主办，目标是培养RISC-V、Rust技术领域人才、构建RISC-V云原生技术栈创新生态。 R2CN开源实习计划通过培养精通Rust编程语言、熟悉RISC-V架构的开源开发者，为开源生态发展培养人才。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sansFont.variable} ${monoFont.variable} font-regular antialiased tracking-wide`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="sm:container mx-auto w-[90vw] h-auto scroll-smooth">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
