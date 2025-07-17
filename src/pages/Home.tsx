import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, Users, Target, Globe, CheckCircle } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Business Research",
      description: "Comprehensive business intelligence and market analysis to drive strategic decisions."
    },
    {
      icon: Users,
      title: "Qualitative Research", 
      description: "In-depth insights through interviews, focus groups, and observational studies."
    },
    {
      icon: Target,
      title: "Market Research",
      description: "Strategic market analysis to identify opportunities and competitive advantages."
    },
    {
      icon: Globe,
      title: "Healthcare Research",
      description: "Specialized research solutions for healthcare industry and medical markets."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Industry Clients" },
    { number: "10+", label: "Years Experience" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Precision Research for 
                <span className="gradient-text"> Strategic Insights</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Transform your business decisions with our comprehensive quantitative research solutions. 
                We deliver actionable insights across all industries with unmatched precision and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="btn-primary group">
                  <Link to="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="animate-fade-in lg:animate-slide-up">
              <img 
                src="/lovable-uploads/95686493-cf1e-4c39-a4b9-da664d9a864e.png"
                alt="Professional research analysis"
                className="w-full h-auto rounded-2xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Research Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive research solutions tailored to your industry needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="/lovable-uploads/1d6819b5-8f9c-416b-a7a1-09c6ed96946e.png"
                alt="Professional researcher at work"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Clarity Research?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over a decade of experience in quantitative research, we deliver precise, 
                actionable insights that drive business success across multiple industries.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Expert team with industry-specific knowledge",
                  "Advanced analytical methodologies",
                  "Comprehensive data collection processes",
                  "Timely delivery with precision accuracy"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="btn-secondary">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with Data-Driven Insights?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how our research expertise can help you make informed decisions 
              and achieve your business objectives.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                Start Your Research Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;