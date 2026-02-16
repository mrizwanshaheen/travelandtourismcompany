import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AdminSidebar } from "@/components/admin-sidebar";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LuxeAdmin | Dashboard",
  description: "Luxury Travel Platform Admin Panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen bg-background text-foreground">
            <AdminSidebar />
            <div className="flex-1 flex flex-col">
              <header className="h-16 border-b border-border flex items-center justify-between px-8 bg-background/50 backdrop-blur-md sticky top-0 z-40">
                <div className="text-sm font-medium text-muted-foreground">
                  Welcome back, <span className="text-white font-bold">Admin</span>
                </div>
                <div className="flex items-center gap-4">
                  <ModeToggle />
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                    <span className="text-xs font-bold text-primary">AD</span>
                  </div>
                </div>
              </header>
              <main className="p-8 flex-1">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
