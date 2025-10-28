import { Icons } from "@/components/icons";
import { BorderText } from "@/components/ui/border-number";
import { siteConfig } from "@/lib/config";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex flex-col gap-y-5 rounded-lg px-7 py-5 container">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Image
                  src="/hashirdarkbglogo.png" // ✅ your file name in the /public folder
                  alt="Brand Logo"
                  width={40} // adjust size
                  height={40}
                  className="w-auto h-8" // optional Tailwind classes for responsive sizing
                  priority // ensures it loads quickly
                />
          <h2 className="text-lg font-bold text-foreground">
            {siteConfig.name}
          </h2>
        </div>

        <div className="flex gap-x-2">
          {siteConfig.footer.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="flex h-5 w-5 items-center justify-center text-muted-foreground transition-all duration-100 ease-linear hover:text-foreground hover:underline hover:underline-offset-4"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-y-5 md:flex-row md:items-center">
        <ul className="flex flex-col gap-x-5 gap-y-2 text-muted-foreground md:flex-row md:items-center">
          {siteConfig.footer.links.map((link, index) => (
            <li
              key={index}
              className="text-[15px]/normal font-medium text-muted-foreground transition-all duration-100 ease-linear hover:text-foreground hover:underline hover:underline-offset-4"
            >
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between text-sm font-medium tracking-tight text-muted-foreground">
          <p>{siteConfig.footer.bottomText}</p>
        </div>
      </div>
      
    </footer>
  );
}
