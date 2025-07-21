import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

export default function LinkButton({
  title,
  href,
  className,
}: {
  title: string;
  href: string;
  className?: string;
}) {
  return (
    <Button asChild variant="link" className={cn('mx-auto', className)}>
      <a href={href}>
        <span>{title}</span> <ChevronRight />
      </a>
    </Button>
  );
}
