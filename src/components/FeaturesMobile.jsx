import Section from './Section';
import icon1 from '../assets/features/icon1.svg'; // Replace with actual path to your SVG icon
import icon2 from '../assets/features/icon2.svg'; // Replace with actual path to your SVG icon
import icon3 from '../assets/features/icon3.svg'; // Replace with actual path to your SVG icon
import icon4 from '../assets/features/icon4.svg'; // Replace with actual path to your SVG icon

function Features() {
  const features = [
    {
      icon: icon1,
      title: "Artesanal",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    },
    {
      icon: icon2,
      title: "Hecho en Argentina",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    },
    {
      icon: icon3,
      title: "100% Vegano",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    },
    {
      icon: icon4,
      title: "Libre de T.A.C.C",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    }
  ];

  return (
    <section className="lg:hidden relative w-full h-full bg-gradient-to-r from-color-2 to-color-3 flex items-center justify-center">
      <Section className="w-full h-full" id="features">
        <div className="h-full flex flex-row flex-wrap items-center justify-between">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center p-4 w-full sm:w-1/2 lg:w-1/4 h-full text-center"
            >
              <img src={feature.icon} alt={`${feature.title} icon`} className="w-15 h-15 mb-2" />
              <h3 className="font-semibold mb-1 body-1">{feature.title}</h3>
              <p className="body-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </section>
  );
}

export default Features;
