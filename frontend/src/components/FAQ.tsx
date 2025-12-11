import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does the system connect cargo owners with vehicles?",
    answer:
      "Cargo owners post transport requests with route, dates, and cargo type. Verified vehicle owners receive matching requests and can accept trips instantly.",
  },
  {
    question: "Is it safe to trust drivers and vehicle owners on the platform?",
    answer:
      "Yes. Every driver and vehicle owner goes through KYC, ID verification, and rating/review checks before they can operate on the platform.",
  },
  {
    question: "Can I track my cargo in real time?",
    answer:
      "Yes. Shipments can be tracked via GPS so you can follow progress from pickup to delivery in real time.",
  },
  {
    question: "Which countries does the app cover?",
    answer:
      "The focus markets include Tanzania, Kenya, Uganda, Rwanda, Burundi, DR Congo, and Zambia, starting with major cities like Dar es Salaam, Nairobi, Kampala, and Kigali.",
  },
  {
    question: "How does pricing work?",
    answer:
      "The system provides transparent, route-based estimates. Final prices are agreed before the trip is confirmed, helping avoid unexpected costs.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept mobile money (M-Pesa, Airtel Money), bank transfers, and digital wallets for secure and convenient transactions.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-slate-900">
          Frequently asked questions
        </h2>
        <div className="grid gap-8 border-t border-slate-200 pt-8 md:gap-16 md:grid-cols-2">
          {/* Left column */}
          <div className="space-y-10">
            {faqs.slice(0, 3).map((item) => (
              <div key={item.question}>
                <h3 className="mb-4 flex items-center text-lg font-medium text-slate-900">
                  <HelpCircle className="mr-2 h-5 w-5 flex-shrink-0 text-#2d6a2a" />
                  {item.question}
                </h3>
                <p className="text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-10">
            {faqs.slice(3).map((item) => (
              <div key={item.question}>
                <h3 className="mb-4 flex items-center text-lg font-medium text-slate-900">
                  <HelpCircle className="mr-2 h-5 w-5 flex-shrink-0 text-#2d6a2a" />
                  {item.question}
                </h3>
                <p className="text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
