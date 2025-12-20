import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

import { Building2, Users, Award, Target, TrendingUp, Heart } from 'lucide-react';
import FAQ from '../components/FAQ';
import heroimg from '../assets/heroimg.png'
import Title from '../components/Title';
export default function AboutUs() {
  const features = [
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "Dedicated Customer Care Number",
      description: "PrimeNest Reality provide a 24/7 running helpline number which is backed with professionals. We bring in a customer care team who will guide you through every step patiently to get the appropriate solutions you looking.",
      image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&h=400&fit=crop"
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Associated with Professional Builders",
      description: "PrimeNest Reality is a name connected to a network of 20+ professional Pan India builders which helps their customers to get the best property available in the real estate market.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "Served Lakhs of Happy customers",
      description: "PrimeNest Reality consist of dedicated and enthusiastic professionals in the business who have researched the market thoroughly. Their experience in the field leaves no loophole when it comes to providing the best property.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Systematic Process",
      description: "PrimeNest Reality in house some of the best professional in the market who have built-in a systematic process which has made the whole purchasing a property process easy and quick.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
    }
  ];

  const focus = [
    {
      icon: <Award className="w-10 h-10 text-primary" />,
      title: "Quality Service",
      description: "PrimeNest Reality endeavor to provides the best quality service for its customers to make maximum profits."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-primary" />,
      title: "Research & Learning",
      description: "A team with a good understanding of the real estate market keeps on learning new trends & innovations in the field."
    },
    {
      icon: <Heart className="w-10 h-10 text-primary" />,
      title: "Customer Satisfaction",
      description: "Our ultimate goal is to keep our customers happy by providing the best property in their budget."
    }
  ];

  

  return (
    <div className="min-h-3xl bg-background font-sans">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gradient-to-br from-primary/90 to-primary flex items-center justify-center">
        <div className="absolute inset-0  bg-cover bg-center">
            <img src={heroimg} className='object-cover h-150 w-full' alt="" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">About Us</h1>
          <div className="w-24 h-1 bg-primary-foreground mx-auto"></div>
        </div>
      </div>

      {/* Main About Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Badge variant="outline" className="mb-4">Since 2007</Badge>
            <div className='flex space-x-3'>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              PrimeNest 
            </h2>
            <h2 className='text-4xl md:text-5xl font-bold text-chart-3 mb-6'>Reality</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                PrimeNest Reality was Established in 2007, PrimeNest Reality Infratech Pvt Ltd is the preferred real estate IPA (Indian Property Associate) of Gurgaon for the commercial and residential spaces with the perfect investment opportunity and excellent service.
              </p>
              <p>
                We provide broad service to our customers and strive to maximize our customer return on investment. Our primary goal is to understand customer's requirements in depth and give total customers satisfaction who wants to invest and find their dream commercial and residential space in Gurgaon.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" 
              alt="PrimeNest Reality" 
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why PrimeNest Reality Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            
           <Title Title1={"WHY"} Title2={"PRIMENEST"} Title3={"REALITY"}  />
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className={`flex ${index % 2 === 0 ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'}`}>
                  <div className="md:w-1/2">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Prime Focus Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            
            <Title Title1={"OUR"} Title2={"PRIME"} Title3={"FOCUS"} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {focus.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
      
    </div>
  );
}