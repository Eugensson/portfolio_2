import Image from "next/image";

interface CardProps {
  type: "experience" | "education" | "skills";
  name?: string;
  icon?: React.ElementType;
  company?: string;
  institution?: string;
  logoUrl?: string;
  qualification?: string;
  position?: string;
  duration?: string;
  description: string;
}

export const Card = ({
  type,
  name,
  icon: Icon,
  company,
  duration,
  logoUrl,
  institution,
  qualification,
  position,
  description,
}: CardProps) => {
  const renderTitle = () => {
    switch (type) {
      case "experience":
        return position;
      case "education":
        return qualification;
      case "skills":
        return name;
    }
  };

  const renderSubtitle = () => {
    switch (type) {
      case "experience":
        return company;
      case "education":
        return institution;
      case "skills":
        return duration;
    }
  };

  return (
    <div className="w-full h-[300px] overflow-hidden flex items-center sticky top-12">
      <div className="w-full h-[270px] border border-accent/80 bg-[#f4ffff] rounded-lg">
        <div className="flex flex-col h-full">
          <div className="h-[80px] xl:h-[68px] bg-white flex flex-col xl:flex-row justify-center xl:justify-between items-center px-6 md:px-[84px] rounded-tl-lg rounded-tr-lg">
            <div className="flex gap-2">
              <Image
                src="/assets/journey/shape.svg"
                width={16}
                height={16}
                alt="Shape icon"
                style={{ width: "auto", height: "auto" }}
              />
              <h3 className="text-lg font-semibold text-primary">
                {renderTitle()}
              </h3>
            </div>
            {type !== "skills" && <p className="text-base">{duration}</p>}
          </div>
          <div className="flex flex-1 items-center justify-center xl:justify-start md:py-8 md:px-16">
            <div className="flex flex-col xl:flex-row items-center xl:items-start gap-4 text-center xl:text-left xl:gap-10 px-4 xl:px-0">
              {type === "skills" ? (
                <div className="w-max xl:w-[300px] h-full relative flex justify-center items-center">
                  {Icon && <Icon className="text-5xl text-primary/90" />}
                </div>
              ) : (
                <div className="relative w-[300px] h-[30px] xl:h-[44px]">
                  <Image
                    src={logoUrl || ""}
                    fill
                    alt="Logo"
                    className="object-contain"
                  />
                </div>
              )}
              <div className="xl:border-l xl:border-secondary/10 xl:pl-12 w-full">
                <h3 className="hidden xl:flex h3 mb-2 xl:mb-4">
                  {renderSubtitle()}
                </h3>
                <p className="text-base max-w-[660px]">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
