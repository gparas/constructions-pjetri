import EmailIcon from "@/icons/email";
import LocationIcon from "@/icons/location";
import PhoneIcon from "@/icons/phone";

const CONTACT_INFO = [
  {
    title: "Καλέστε Μας",
    description: "+30 699 7833718",
    icon: PhoneIcon,
  },
  {
    title: "Επισκεφθείτε Μας",
    description: "Ρουμπέση 68, Νέος Κόσμος, 11744",
    icon: LocationIcon,
  },
  {
    title: "Στείλτε Μας Email",
    description: "info@constructions-pjetri.gr",
    icon: EmailIcon,
  },
];
const Contact = () => {
  return (
    <section className="text-center">
      <div className="container">
        <header className="mb-12">
          <h2 className="mb-2">Επικοινωνήστε Μαζί Μας</h2>
          <p className="subtitle">
            Είμαστε εδώ για να απαντήσουμε σε κάθε σας ερώτηση.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
          {CONTACT_INFO.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index}>
                <Icon width={40} height={40} className="fill-primary mx-auto" />
                <h3 className="mb-1 mt-6 text-lg font-semibold">
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
