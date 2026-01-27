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
        <button>
          <img
            src={MenuIcon.src ?? MenuIcon}
            className="h-8 w-8 hover:cursor-pointer"
            alt=""
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`mr-2`}>
        <DropdownMenuGroup>
          {pages.map((page) => {
            const href = `${import.meta.env.BASE_URL.replace(/\/$/, "")}${page.url}`;

            return (
              <a
                key={page.title}
                href={href}
                className={
                  cleanPathname === page.url
                    ? "font-bold"
                    : "hover:text-gray-500 font-medium"
                }
              >
                <DropdownMenuItem className="text-2xl hover:cursor-pointer">
                  {page.title}
                </DropdownMenuItem>
              </a>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
