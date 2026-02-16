import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"

export default function ProductsPage() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Products</h2>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Add Product
                </Button>
            </div>

            <div className="flex items-center gap-2">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search products..." className="pl-9" />
                </div>
                <Button variant="outline">Filter</Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>All Tours</CardTitle>
                </CardHeader>
                <CardContent>
                    <table className="w-full text-sm text-left">
                        <thead className="text-muted-foreground bg-muted/50 border-b">
                            <tr>
                                <th className="p-4">Name</th>
                                <th className="p-4">Status</th>
                                <th className="p-4">Price</th>
                                <th className="p-4">Bookings</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b hover:bg-muted/50">
                                <td className="p-4 font-medium">Paris Day Trip</td>
                                <td className="p-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span></td>
                                <td className="p-4">$120.00</td>
                                <td className="p-4">250</td>
                                <td className="p-4 text-right"><Button variant="ghost" size="sm">Edit</Button></td>
                            </tr>
                            <tr className="border-b hover:bg-muted/50">
                                <td className="p-4 font-medium">Santorini Sunset</td>
                                <td className="p-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span></td>
                                <td className="p-4">$85.00</td>
                                <td className="p-4">120</td>
                                <td className="p-4 text-right"><Button variant="ghost" size="sm">Edit</Button></td>
                            </tr>
                            <tr className="border-b hover:bg-muted/50">
                                <td className="p-4 font-medium">Swiss Alps</td>
                                <td className="p-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Draft</span></td>
                                <td className="p-4">$250.00</td>
                                <td className="p-4">0</td>
                                <td className="p-4 text-right"><Button variant="ghost" size="sm">Edit</Button></td>
                            </tr>
                        </tbody>
                    </table>
                </CardContent>
            </Card>
        </div>
    )
}
