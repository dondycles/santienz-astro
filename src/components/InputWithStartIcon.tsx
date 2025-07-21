import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

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
        className={cn('peer text-foreground placeholder:text-muted-foreground ps-9', className)}
        name={name}
      />
      <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
        <Search className="text-tertiary" size={16} aria-hidden="true" />
      </div>
    </div>
  );
}
