import { Logo } from "@/components/logo";

export const Footer = () => {
  return (
    <footer className="py-12 bg-primary">
      <div className="container">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <Logo light />
          <p className="text-white/70 font-light">
            Copyright &copy; 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
