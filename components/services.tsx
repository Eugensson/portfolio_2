import Image from "next/image";

import { SERVICES_DATA } from "@/constants";

export const Services = () => {
  return (
    <section className="relative z-40" id="services">
      <div className="container">
        <ul className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 -top-12 place-items-center lg:place-items-stretch">
          {SERVICES_DATA.map(({ icon, title, description }, index) => {
            return (
              <li
                key={index}
                className="bg-white shadow-custom p-6 max-w-[350px] md:max-w-none rounded-lg"
              >
                <Image
                  src={icon}
                  width={48}
                  height={48}
                  className="mb-4"
                  alt="Service Icon"
                />
                <h3 className="text-xl text-primary font-semibold mb-3">
                  {title}
                </h3>
                <p className="text-sm">{description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
