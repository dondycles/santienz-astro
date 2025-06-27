import { useId } from "react";
import { AtSignIcon, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function InputWithStartIcon({
  id,
  name,
  className,
}: {
  id: string;
  name: string;
  className?: string;
}) {
  return (
    <div className="relative">
      <Input
        id={id}
        className={cn(
          "peer ps-9 text-foreground placeholder:text-muted-foreground",
          className,
        )}
        name={name}
      />
      <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
        <Search size={16} aria-hidden="true" />
      </div>
    </div>
  );
}
