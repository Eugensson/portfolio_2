import Image from "next/image";

import { AnimatedText } from "@/components/animated-text";
import { FeedbackForm } from "@/components/feedback-form";

export const Contact = () => {
  return (
    <section className="pt-8 xl:pt-12 pb-32" id="contact">
      <div className="container">
        <div className="flex flex-col xl:flex-row items-center gap-16">
          <div className="flex-1 mx-auto xl:mx-0 flex flex-col">
            <AnimatedText
              text="Let's Work Together"
              textStyles="h2 mb-12 text-center xl:text-left"
            />
            <FeedbackForm />
          </div>
          <div className="hidden xl:block relative w-[577px] h-[664px] rounded-lg overflow-hidden">
            <Image
              src="/assets/contact/img.jpg"
              fill
              quality={100}
              alt="Contact image"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
