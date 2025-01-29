import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedHeading from './ui/animated-heading';
import AnimatedText from './ui/animated-words';
import AnimatedContent from './ui/animated-content';

interface ExpertiseArea {
  title: string;
  description: string;
}

const expertiseAreas: ExpertiseArea[] = [
  {
    title: "Accessibility",
    description: "Dedicated to creating inclusive web experiences that are accessible to all users, regardless of their abilities."
  },
  {
    title: "Performance",
    description: "Focused on optimizing web applications for speed and efficiency to enhance user experience and engagement."
  },
  {
    title: "Responsive Design",
    description: "Expert in crafting websites that provide an optimal viewing experience across a wide range of devices."
  },
  {
    title: "SEO Optimization",
    description: "Skilled in optimizing websites to rank higher in search engine results, increasing visibility and traffic."
  },
];

const Offer: React.FC = () => {
  return (
    <section id='offer' className="h-[120vh] p-[4%] bg-background">
      <AnimatedHeading
        tag='h2'
        className="unselectable text-heading-2 font-anton text-center mt-4 mb-4 py-8 overflow-hidden"
      >
        <AnimatedText text='What I focus on' split={true} />
      </AnimatedHeading>
      <AnimatedContent delay={0.7}>
        <Accordion type="single" collapsible>
          {expertiseAreas.map((area, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-anton text-heading-4">
                {area.title}
              </AccordionTrigger>
              <AccordionContent className="text-body-1 text-foreground">
                {area.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedContent>
    </section>
  );
};

export default Offer;