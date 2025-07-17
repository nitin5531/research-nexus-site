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
      <section className="relative section-padding overflow-hidden particle-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-float" style={{animationDelay: "2s"}}></div>
        
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
            <div className="animate-fade-in">
              <div className="space-y-2 mb-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                  Leading Research Excellence
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Precision Research for 
                  <span className="gradient-text block mt-2"> Strategic Insights</span>
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
                Transform your business decisions with our comprehensive quantitative research solutions. 
                We deliver actionable insights across all industries with unmatched precision and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button asChild size="lg" className="btn-primary group">
                  <Link to="/contact">
                    <span className="relative z-10">Get Started Today</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-primary/30 hover:bg-primary/5 backdrop-blur-sm">
                  <Link to="/services">
                    <span className="font-semibold">Our Services</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="animate-fade-in lg:animate-slide-up relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
                <img 
                  src="/lovable-uploads/95686493-cf1e-4c39-a4b9-da664d9a864e.png"
                  alt="Professional research analysis"
                  className="relative w-full h-auto rounded-3xl shadow-2xl hover-tilt modern-card"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-ultra to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="container-custom relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="absolute -top-2 -left-2 w-3 h-3 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-primary-foreground/90 text-sm md:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Research <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive research solutions tailored to your industry needs with cutting-edge methodologies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="modern-card p-8 text-center group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-10 w-10 text-primary group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-gradient-to-br from-muted/30 via-background to-muted/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <img 
                  src="/lovable-uploads/1d6819b5-8f9c-416b-a7a1-09c6ed96946e.png"
                  alt="Professional researcher at work"
                  className="relative w-full h-auto rounded-3xl shadow-2xl hover-tilt modern-card"
                />
              </div>
            </div>
            <div className="animate-fade-in space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                  Why Choose Us
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Choose <span className="text-gradient">Clarity Research?</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  With over a decade of experience in quantitative research, we deliver precise, 
                  actionable insights that drive business success across multiple industries.
                </p>
              </div>
              <div className="space-y-4 mb-10">
                {[
                  "Expert team with industry-specific knowledge",
                  "Advanced analytical methodologies",
                  "Comprehensive data collection processes",
                  "Timely delivery with precision accuracy"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-lg group-hover:text-primary transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="btn-secondary">
                <Link to="/about">
                  <span className="relative z-10">Learn More About Us</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float" style={{animationDelay: "3s"}}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl animate-float" style={{animationDelay: "1.5s"}}></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              Ready to Transform Your Business?
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
              Transform Your Business with 
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Data-Driven Insights
              </span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
              Let's discuss how our research expertise can help you make informed decisions 
              and achieve your business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                <Link to="/contact">
                  <span className="font-bold">Start Your Research Project</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                <Link to="/services">
                  <span className="font-semibold">Explore Our Services</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;