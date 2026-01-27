import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MenuIcon from "~/assets/icons/MenuIcon.svg";
import type { Page } from "~/data/content";

type MobileMenuProps = {
  pages: Page[];
  pathname: string;
};

// TODO: IMPORT PAGES TYPE
export function MobileMenu({ pages, pathname }: MobileMenuProps) {
  // TODO: refactor pathname
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  const cleanPathname = pathname.replace(basePath, "") || "/";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="p-2 rounded-md active:scale-95"
        >
          <img
            src={MenuIcon.src ?? MenuIcon}
            className="h-8 w-8 hover:cursor-pointer pointer-events-none"
            alt=""
            draggable={false}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`mr-2`}>
        <DropdownMenuGroup>
          {pages.map((page) => {
            const href = `${import.meta.env.BASE_URL.replace(/\/$/, "")}${page.url}`;

            return (
              <DropdownMenuItem
                key={page.title}
                className="text-2xl hover:cursor-pointer"
                asChild
              >
                <a
                  href={href}
                  className={
                    cleanPathname === page.url
                      ? "font-bold"
                      : "hover:text-gray-500 font-medium"
                  }
                >
                  {page.title}
                </a>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
