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
      description: "Cada botella de Jinja Beer es elaborada con dedicación y cuidado, siguiendo técnicas tradicionales de fermentación."
    },
    {
      icon: icon2,
      title: "Hecho en Argentina",
      description: "Orgullosamente producido en Córdoba, apoyando a productores locales y manteniendo altos estándares de calidad."
    },
    {
      icon: icon3,
      title: "100% Vegano",
      description: "Nuestra bebida es completamente vegana, apta para quienes siguen una alimentación basada en plantas."
    },
    {
      icon: icon4,
      title: "Libre de T.A.C.C",
      description: "Perfecto para celíacos y quienes buscan productos libres de gluten. Disfruta sin preocupaciones."
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
