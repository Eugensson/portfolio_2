import { CardList } from "@/components/card-list";
import { AnimatedText } from "@/components/animated-text";

export const Journey = () => {
  return (
    <section id="journey">
      <div className="container">
        <AnimatedText
          text="My Professional Journey"
          textStyles="h2 mb-8 text-center"
        />
        <CardList />
      </div>
    </section>
  );
};
