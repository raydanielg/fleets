import Image from "next/image";
import { CheckCircle } from "lucide-react";

const earnSections = [
  {
    title: "Work with tools you already use",
    description:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toll, and deploy changes with ease.",
    features: [
      "Continuous integration and deployment",
      "Development workflow",
      "Knowledge management",
    ],
    footerText:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
    image: "/images/man-working-as-truck-driver-posing_23-2151489687.jpg",
    imagePosition: "right",
  },
  {
    title: "We invest in the world's potential",
    description:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toll, and deploy changes with ease.",
    features: [
      "Global reach and support",
      "Community driven",
      "Sustainable growth",
    ],
    footerText:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
    image: "/images/row-green-trucks-with-word-green-front_789498-322.jpg",
    imagePosition: "left",
  },
];

export function EarnWithFleet() {
  return (
    <section id="earn" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
        {earnSections.map((section, idx) => (
          <div
            key={idx}
            className={`grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center ${
              section.imagePosition === "left" ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            {/* Content */}
            <div
              className={`flex flex-col justify-center ${
                section.imagePosition === "left" ? "lg:col-start-2" : ""
              }`}
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {section.title}
              </h2>
              <p className="mt-4 text-base text-slate-600">
                {section.description}
              </p>

              {/* Features list */}
              <div className="mt-6 space-y-3">
                {section.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2d6a2a]" />
                    <span className="text-sm font-medium text-slate-900">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm text-slate-600">
                {section.footerText}
              </p>
            </div>

            {/* Image */}
            <div
              className={`flex items-center justify-center animate-fade-in ${
                section.imagePosition === "left" ? "lg:col-start-1" : ""
              }`}
            >
              <div className="relative h-80 w-full overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
