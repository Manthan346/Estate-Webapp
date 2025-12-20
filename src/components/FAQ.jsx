import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Badge } from '../components/ui/badge';
import Title from './Title';

function FAQ() {
    const faqs = [
    {
      question: "What services does Chaahat Homes provide?",
      answer: "Chaahat Homes provides comprehensive real estate services including residential and commercial property sales, investment consultation, property management, and end-to-end assistance in property transactions. We specialize in helping clients find their dream properties in Gurgaon and surrounding areas."
    },
    {
      question: "How long has Chaahat Homes been in business?",
      answer: "Chaahat Homes Infratech Pvt Ltd was established in 2007 and has been serving customers for over 15 years. We have built a strong reputation as a preferred real estate IPA (Indian Property Associate) in Gurgaon."
    },
    {
      question: "What areas do you cover?",
      answer: "While we specialize in Gurgaon, we work with a network of 20+ professional Pan India builders, allowing us to help clients find properties across India. Our primary focus is on commercial and residential spaces in Gurgaon and the NCR region."
    },
    {
      question: "How can I contact Chaahat Homes?",
      answer: "We provide a 24/7 customer care helpline backed by professionals. You can reach us through our dedicated customer care number, email, or visit our office at M3M TeePoint, South Block, 6th Floor, Sector 65, Gurugram, Haryana 122002."
    },
    {
      question: "What makes Chaahat Homes different from other real estate companies?",
      answer: "We stand out through our dedicated 24/7 customer support, association with 20+ professional builders, systematic process that makes property purchase easy and quick, and our commitment to customer satisfaction. We have served lakhs of happy customers with our personalized service approach."
    },
    {
      question: "Do you assist with both residential and commercial properties?",
      answer: "Yes, we provide comprehensive services for both residential and commercial properties. Whether you're looking for your dream home or a commercial space for your business, our experienced team can help you find the perfect property that matches your requirements and budget."
    },
    {
      question: "How do you ensure customer satisfaction?",
      answer: "Customer satisfaction is our ultimate goal. We achieve this by understanding customer requirements in depth, providing quality service, maintaining transparency throughout the process, and offering continuous support through our dedicated customer care team. We strive to maximize customer return on investment."
    },
    {
      question: "Are you registered with RERA?",
      answer: "Yes, Chaahat Homes is RERA registered. Our Agent RERA (Gurgaon) registration number is HRERA-949/2017/1154, ensuring compliance with real estate regulations and providing you with secure and transparent transactions."
    }
  ];
  return (
    <div>
        <section className="bg-secondary/30 py-16 mt-10 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
          
            <h2 className="text-4xl md:text-5xl grid grid-cols-1 font-bold text-foreground mb-4">
             <Title Title1={"FREQUENTLY"}  Title2={"ASKED "} Title3={"QUESTIONS"} />
            </h2>
           
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  )
}

export default FAQ