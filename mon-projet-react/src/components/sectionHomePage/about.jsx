import React from 'react';
import ContentCard from '../contenueCard';

const AboutSection = () => {
  return (
    <div className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              À propos de nous
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Découvrez notre entreprise et notre mission.
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <h3 className="text-2xl font-bold text-gray-900">Notre histoire</h3>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                Notre entreprise a été fondée en 2010 avec pour mission de fournir
                des solutions innovantes à nos clients. Depuis, nous avons
                connu une croissance constante et sommes devenus un acteur
                majeur dans notre secteur d'activité.
              </p>
              <div className="mt-6">
                <h4 className="text-lg font-bold text-gray-900">Nos valeurs</h4>
                <ul className="mt-3 space-y-3">
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-gray-500">
                      Fournir un service de qualité à nos clients
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-gray-500">
                      Travailler en équipe et encourager l'innovation
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-gray-500">
                      Être à l'écoute de nos clients et répondre à leurs besoins
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ContentCard
            title="Feature 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ContentCard
            title="Feature 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ContentCard
            title="Feature 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;