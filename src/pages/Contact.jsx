import React from "react";

export default function Contact() {
  const contacts = [
    {
      icon: "📧",
      title: "Email",
      value: "rifaldo.s1704@gmail.com",
      link: "mailto:rifaldo.s1704@gmail.com",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/rifaldosaputra",
      link: "https://linkedin.com/in/rifaldosaputra",
    },
    {
      icon: "📍",
      title: "Lokasi",
      value: "Padang, Sumatera Barat",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Informasi Kontak</h2>

        {/* Grid horizontal untuk 3 item */}
        <div className="grid md:grid-cols-3 gap-6 justify-center">
          {contacts.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl border shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-words"
                >
                  {item.value}
                </a>
              ) : (
                <p>{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
