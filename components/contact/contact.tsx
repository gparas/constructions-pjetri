import EmailIcon from "@/icons/email";
import LocationIcon from "@/icons/location";
import PhoneIcon from "@/icons/phone";

const CONTACT_INFO = [
  {
    title: "Καλέστε Μας",
    description: "+30 699 7833718",
    href: "tel:+306997833718",
    target: "",
    icon: PhoneIcon,
  },
  {
    title: "Επισκεφθείτε Μας",
    description: "Ρουμπέση 68, Νέος Κόσμος, 11744",
    href: "https://www.google.com/maps/dir/37.9433929,23.7220232/constructions-pjetri/@37.9470022,23.7137064,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14a1bd24e7ba30a7:0x7d02add3c5cafb6d!2m2!1d23.7265408!2d37.9532356?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D",
    target: "_blank",
    icon: LocationIcon,
  },
  {
    title: "Στείλτε Μας Email",
    description: "info@constructions-pjetri.gr",
    href: "mailto:info@constructions-pjetri.gr",
    target: "",
    icon: EmailIcon,
  },
];
const Contact = () => {
  return (
    <section className="py-12 text-center">
      <div className="container">
        <header className="mb-12">
          <h2 className="mb-2">Επικοινωνήστε Μαζί Μας</h2>
          <p className="text-lg md:text-xl">
            Είμαστε εδώ για να απαντήσουμε σε κάθε σας ερώτηση.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
          {CONTACT_INFO.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index}>
                <Icon width={56} height={56} className="mx-auto text-primary" />
                <h3 className="mb-1 mt-6 text-lg">{item.title}</h3>
                <a
                  href={item.href}
                  target={item.target}
                  rel="noopener noreferrer"
                >
                  {item.description}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
