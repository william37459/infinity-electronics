import { ChevronLeft, ChevronRight, Circle } from "lucide-react";

export default function HeroSkeleton() {
    return (
        <div className="h-[50vh] overflow-hidden relative flex items-center justify-between p-4">
            <ChevronLeft className="px-2" size={42}/>
            <div className="flex self-end gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
                <Circle key={i} size={16} color="grey" fill="grey" />
            ))}
            </div>
            <ChevronRight className="px-2" size={42}/>
        </div>
    )
}
