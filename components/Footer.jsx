import Phone from '#icons/phone.svg';
import Location from '#icons/location.svg';
import Mail from '#icons/mail.svg';
import Clock from '#icons/clock.svg';
import ContactCard from '#components/ContactCard';

export default function Footer() {
  return (
    <footer
      className="flex flex-col bg-gray-800 min-h-[20rem]"
      style={{
        backgroundImage: 'url(/assets/world.png)',
        backgroundSize: 'contain',
      }}
    >
      <div className="max-w-screen-xl w-full mx-auto py-8 flex-1">
        <h1 className="font-medium text-2xl text-center text-white font-lora mb-10">
          HizirTransfer
        </h1>
        <div className="grid grid-rows-4 md:(grid-cols-4 grid-rows-1)">
          <ContactCard
            icon={<Phone width="24px" />}
            topLabel="0(550) 680-34-12"
            bottomLabel="Round-the-clock"
            className="border-dashed py-6 <md:border-b-2 md:border-r-2 border-gray-500 border-opacity-40"
            type="footer"
          />
          <ContactCard
            icon={<Location width="24px" />}
            topLabel="Somewhere In Turkey"
            bottomLabel="123456"
            className="border-dashed py-6 <md:border-b-2 md:border-r-2 border-gray-500 border-opacity-40"
            type="footer"
          />
          <ContactCard
            icon={<Mail width="24px" />}
            topLabel="info@hizirtransfer.com"
            bottomLabel="support@hizirtransfer.com"
            className="border-dashed py-6 <md:border-b-2 border-r-2 border-gray-500 border-opacity-40"
            type="footer"
          />
          <ContactCard
            icon={<Clock width="24px" />}
            topLabel="Opening Hours"
            bottomLabel="07:00 - 16:00"
            className="py-6 md:py-0"
            type="footer"
          />
        </div>
      </div>
      <div className="bg-gray-900 text-center py-6 text-white">
        <span>Copyright &copy; 2021 - </span>
        <span className="text-yellow-300 font-sans font-medium">
          HizirTransfer
        </span>
      </div>
    </footer>
  );
}
