import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";

export function MobileDrawer() {
  return (
    <Drawer>
      <DrawerTrigger>
        <IoMenuSharp className="text-2xl" />
      </DrawerTrigger>
      <DrawerContent>
        
        <DrawerFooter>
          <Link
            href="/Hashir-AiMERN.pdf"
            className={cn(
    buttonVariants({ variant: "default" }),
    "h-8 rounded-lg bg-zinc-50 dark:bg-zinc-900 ring-1 ring-zinc-300 dark:ring-zinc-800 text-zinc-400 group tracking-tight font-medium px-4 flex items-center justify-center"
  )}
          >
            Resume
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
