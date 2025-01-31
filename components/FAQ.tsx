import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen: initialOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <div className="border-b border-gray-200 last:border-0 xl:w-[1280px] w-full">
      <button
        className="flex w-full items-center justify-between py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex-1 font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 shrink-0 text-gray-500" />
        ) : (
          <ChevronDown className="h-6 w-6 shrink-0 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What services does Crib offer?",
      answer:
        "Crib provides comprehensive luxury property management services including property maintenance, tenant screening, rent collection, 24/7 emergency response, marketing, and financial reporting. We specialize in high-end residential and commercial properties.",
      isOpen: true,
    },
    {
      question: "How do I get started with Crib?",
      answer:
        "Getting started is simple. Schedule a consultation through our website or contact our team directly. We'll assess your property management needs, provide a detailed proposal, and create a customized management plan for your property.",
    },
    {
      question: "What areas do you service?",
      answer:
        "We currently service major metropolitan areas and luxury destinations across the country. Contact our team to verify if we operate in your specific location.",
    },
    {
      question:
        "What makes Crib different from other property management companies?",
      answer:
        "Crib stands out through our dedication to luxury service, attention to detail, and use of cutting-edge technology. We offer personalized solutions, have extensive experience in high-end property management, and maintain the highest standards of professionalism.",
    },
    {
      question: "What are your management fees?",
      answer:
        "Our management fees vary based on the services required, property type, and location. We offer transparent pricing with no hidden fees. Contact us for a detailed quote tailored to your property.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center max-w-screen-xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about our luxury property
            management services
          </p>
        </div>
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={faq.isOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
