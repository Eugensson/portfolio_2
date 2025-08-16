import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";

export const Header = () => {
  return (
    <header className="absolute z-30 w-full py-8 xl:py-12">
      <div className="container flex flex-col lg:flex-row items-center gap-4 lg:justify-between">
        <Logo />
        <div className="flex items-center gap-12">
          <Nav
            containerStyles="hidden xl:flex"
            listStyles="flex items-center gap-6"
            linkStyles="text-primary font-primary text-lg tracking-[1.4px] transition-all duration-300 cursor-pointer"
          />
          <Socials
            containerStyles="flex item-center gap-2"
            iconStyles="text-base size-9 bg-primary text-white flex items-center justify-center rounded-full hover:bg-primary/80 transition-all duration-300"
          />
        </div>
      </div>
    </header>
  );
};
