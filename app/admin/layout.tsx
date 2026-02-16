import { AdminSidebar } from "@/components/admin/sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { UserCircle } from "lucide-react"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40 md:flex-row">
            <AdminSidebar />
            <div className="flex flex-col flex-1">
                <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6 lg:h-[60px]">
                    <div className="flex-1">
                        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
                    </div>
                    <ModeToggle />
                    <UserCircle className="h-8 w-8 text-muted-foreground" />
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}
