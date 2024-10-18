// import React from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select"
// import { ChevronLeft, ChevronRight } from 'lucide-react'
// export default function Pagination() {
//     return (
//         <div className="flex justify-between items-center mt-4">
//             <div className="flex items-center space-x-2">
//                 <Button
//                     variant="outline"
//                     size="icon"
//                     onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                     disabled={currentPage === 1}
//                 >
//                     <ChevronLeft className="h-4 w-4" />
//                 </Button>
//                 <Button
//                     variant={currentPage === 1 ? "default" : "outline"}
//                     size="sm"
//                     onClick={() => setCurrentPage(1)}
//                 >
//                     1
//                 </Button>
//                 <Button variant="outline" size="sm" onClick={() => setCurrentPage(2)}>
//                     2
//                 </Button>
//                 <Button variant="outline" size="sm" onClick={() => setCurrentPage(3)}>
//                     3
//                 </Button>
//                 <Button
//                     variant="outline"
//                     size="icon"
//                     onClick={() => setCurrentPage((prev) => prev + 1)}
//                 >
//                     <ChevronRight className="h-4 w-4" />
//                 </Button>
//             </div>
//             <div className="flex items-center space-x-2">
//                 <span className="text-sm text-gray-500">Show:</span>
//                 <Select defaultValue="10">
//                     <SelectTrigger className="w-[100px]">
//                         <SelectValue placeholder="10 rows" />
//                     </SelectTrigger>
//                     <SelectContent>
//                         <SelectItem value="10">10 rows</SelectItem>
//                         <SelectItem value="20">20 rows</SelectItem>
//                         <SelectItem value="50">50 rows</SelectItem>
//                     </SelectContent>
//                 </Select>
//             </div>
//         </div>
//     )
// }
