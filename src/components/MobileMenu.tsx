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
          {pages.map((page) => (
            <a
              key={page.title}
              href={`${import.meta.env.BASE_URL}${page.url.replace(/^\//, "")}`}
              className={`${
                pathname === page.url
                  ? "font-bold"
                  : "hover:text-gray-500 font-medium"
              }`}
            >
              <DropdownMenuItem className={`text-2xl hover:cursor-pointer`}>
                {page.title}
              </DropdownMenuItem>
            </a>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
