import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbSchema } from "../seo/BreadcrumbSchema";

export interface BreadcrumbItem {
    name: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <>
            <BreadcrumbSchema items={items} />
            <nav aria-label="Breadcrumb" className="mb-6 flex">
                <ol className="flex items-center space-x-2 text-sm text-muted-foreground whitespace-nowrap overflow-x-auto pb-2 scrollbar-none">
                    <li>
                        <Link
                            href="/"
                            className="flex items-center hover:text-primary transition-colors"
                            aria-label="Home"
                        >
                            <Home className="h-4 w-4" />
                        </Link>
                    </li>
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;

                        return (
                            <li key={item.name} className="flex items-center space-x-2">
                                <ChevronRight className="h-4 w-4" />
                                {isLast ? (
                                    <span className="font-medium text-foreground" aria-current="page">
                                        {item.name}
                                    </span>
                                ) : (
                                    <Link
                                        href={item.href || "#"}
                                        className="hover:text-primary transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
}
