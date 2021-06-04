import { ReactYouTubeLite } from 'react-youtube-lite';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Hero from '#components/Hero';
import SEO from '#components/SEO';

function ServiceBox({ src, title, desc }) {
  return (
    <div className="flex items-start gap-4 p-4">
      <img
        className="rounded-full w-20 h-20 object-cover"
        src={src}
        alt={title}
        style={{ aspectRatio: '1 / 1' }}
        width="80"
        height="80"
      />
      <div>
        <span className="block font-lora font-medium text-2xl text-yellow-200">
          {title}
        </span>
        <span className="font-sans text-sm text-true-gray-200 leading-relaxed">
          {desc}
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  const { t } = useTranslation('home');
  return (
    <>
      <SEO title="Home" />
      <Hero />
      <div className="bg-true-gray-800 px-4 py-10">
        <div className="w-full max-w-screen-lg mx-auto grid grid-rows-3 md:(grid-cols-3 grid-rows-1)">
          <ServiceBox
            src="/assets/one.jpg"
            alt={t('services.airport.title')}
            title={t('services.airport.title')}
            desc={t('services.airport.desc')}
          />
          <ServiceBox
            src="/assets/two.jpg"
            alt={t('services.business.title')}
            title={t('services.business.title')}
            desc={t('services.business.desc')}
          />
          <ServiceBox
            src="/assets/three.jpg"
            alt={t('services.events.title')}
            title={t('services.events.title')}
            desc={t('services.business.desc')}
          />
        </div>
      </div>

      <section
        className="max-w-screen-xl mx-auto min-h-[32rem] px-4 py-8 grid grid-rows-2 md:(grid-cols-2 grid-rows-1) items-center md:gap-6"
        style={{
          backgroundImage: "url('/assets/worldmap.png')",
          backgroundSize: 'cover',
        }}
      >
        <div className="<md:(row-start-2 row-end-3)">
          <span
            className="block font-lora text-[3.5rem] font-medium text-gray-800 mb-4"
            style={{ lineHeight: '1.25em' }}
          >
            <span className="block text-yellow-400">{t('promo.title')}</span>
            {t('promo.subtitle')}
          </span>
          <span className="block font-sans text-lg text-gray-800 leading-loose mb-6">
            {t('promo.desc')}
          </span>
          <button
            type="button"
            className="block px-6 py-3 bg-yellow-300 font-lora text-xl"
          >
            {t('promo.cta')}
          </button>
        </div>
        <div className="p-2 bg-white shadow-lg <md:(row-start-1 row-end-2)">
          <ReactYouTubeLite
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            title="Hizirtransfer Service"
          />
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['home', 'hero', 'navbar'])),
  },
});
