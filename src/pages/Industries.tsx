import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Heart, 
  ShoppingCart, 
  GraduationCap, 
  Car, 
  Smartphone,
  Landmark,
  Plane,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Heart,
      title: "Healthcare & Pharmaceuticals",
      description: "Comprehensive research for healthcare providers, pharmaceutical companies, medical device manufacturers, and healthcare technology firms.",
      expertise: [
        "Clinical trial design and patient recruitment",
        "Medical device usability and market research", 
        "Healthcare provider satisfaction surveys",
        "Pharmaceutical market access studies",
        "Healthcare technology adoption research",
        "Patient experience and outcome studies"
      ],
      caseStudy: "Helped a leading pharmaceutical company conduct market research for a new diabetes medication, resulting in successful FDA approval and market launch strategy."
    },
    {
      icon: Building2,
      title: "Business & Professional Services",
      description: "Strategic research for B2B companies, consulting firms, financial services, and professional service organizations.",
      expertise: [
        "B2B market segmentation and targeting",
        "Professional services demand analysis",
        "Employee satisfaction and engagement surveys",
        "Business model evaluation and optimization",
        "Competitive intelligence and benchmarking",
        "Service delivery performance metrics"
      ],
      caseStudy: "Conducted comprehensive market analysis for a consulting firm, identifying new service opportunities that increased revenue by 35%."
    },
    {
      icon: ShoppingCart,
      title: "Retail & Consumer Goods",
      description: "Consumer research for retail chains, e-commerce platforms, consumer packaged goods companies, and brand manufacturers.",
      expertise: [
        "Consumer behavior and shopping journey analysis",
        "Brand perception and loyalty studies",
        "Product development and testing research",
        "Retail market sizing and opportunity assessment",
        "E-commerce user experience research",
        "Pricing strategy and elasticity studies"
      ],
      caseStudy: "Executed consumer research for a major retail chain, optimizing store layouts and product placement to increase sales by 28%."
    },
    {
      icon: Smartphone,
      title: "Technology & Software",
      description: "Research solutions for technology companies, software developers, SaaS providers, and digital platforms.",
      expertise: [
        "User experience and interface research",
        "Technology adoption and usage studies",
        "Software feature validation and testing",
        "Developer ecosystem research",
        "Digital transformation market analysis",
        "Cybersecurity awareness and compliance studies"
      ],
      caseStudy: "Supported a SaaS company's product development with user research, leading to a 45% increase in user engagement and retention."
    },
    {
      icon: GraduationCap,
      title: "Education & Training",
      description: "Educational research for schools, universities, online learning platforms, and corporate training organizations.",
      expertise: [
        "Student satisfaction and learning outcomes",
        "Educational technology effectiveness studies",
        "Curriculum development and assessment research",
        "Teacher training and development surveys",
        "Online learning engagement analysis",
        "Educational market trends and opportunities"
      ],
      caseStudy: "Evaluated online learning platform effectiveness for a university, improving student completion rates by 40%."
    },
    {
      icon: Landmark,
      title: "Government & Public Sector",
      description: "Public sector research for government agencies, NGOs, policy organizations, and public service providers.",
      expertise: [
        "Public policy impact assessment",
        "Citizen satisfaction and service quality surveys",
        "Government program evaluation research",
        "Public health and safety studies",
        "Economic impact analysis",
        "Social research and community studies"
      ],
      caseStudy: "Conducted public policy impact research for a city government, informing infrastructure investment decisions worth $50M."
    },
    {
      icon: Car,
      title: "Automotive & Transportation",
      description: "Research for automotive manufacturers, transportation companies, logistics providers, and mobility solutions.",
      expertise: [
        "Vehicle feature preference research",
        "Transportation usage and behavior studies",
        "Automotive market sizing and trends",
        "Electric vehicle adoption research",
        "Logistics and supply chain optimization",
        "Mobility service satisfaction surveys"
      ],
      caseStudy: "Analyzed electric vehicle market trends for an automotive manufacturer, guiding their $2B investment in EV technology."
    },
    {
      icon: Plane,
      title: "Travel & Hospitality",
      description: "Tourism research for hotels, airlines, travel agencies, and destination management organizations.",
      expertise: [
        "Travel behavior and destination research",
        "Hotel guest satisfaction surveys",
        "Tourism market analysis and trends",
        "Travel booking behavior studies",
        "Hospitality service quality research",
        "Tourism economic impact assessment"
      ],
      caseStudy: "Researched travel preferences for a hotel chain, optimizing their service offerings and increasing guest satisfaction by 30%."
    }
  ];

  const researchCapabilities = [
    "Industry-specific questionnaire design",
    "Regulatory compliance and ethical standards",
    "Specialized sampling methodologies", 
    "Sector-relevant data analysis techniques",
    "Industry benchmarking and best practices",
    "Regulatory and compliance research"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industry <span className="gradient-text">Expertise & Focus</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Deep industry knowledge combined with advanced research methodologies to deliver 
              insights that drive sector-specific business success across multiple verticals.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-12">
            {industries.map((industry, index) => (
              <Card key={index} className="hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                        <industry.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">{industry.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{industry.description}</p>
                    <div className="bg-secondary/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-secondary mb-2">Case Study:</h4>
                      <p className="text-sm text-muted-foreground">{industry.caseStudy}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold mb-4">Our Industry Expertise:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {industry.expertise.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Capabilities */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Industry-Specific Research Capabilities</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our research approach is tailored to each industry's unique characteristics, 
                regulations, and market dynamics. We understand that one size doesn't fit all.
              </p>
              <div className="space-y-4 mb-8">
                {researchCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{capability}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="btn-primary">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="animate-fade-in lg:animate-slide-up">
              <img 
                src="/lovable-uploads/95686493-cf1e-4c39-a4b9-da664d9a864e.png"
                alt="Industry research analysis"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Focus Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="/lovable-uploads/1d6819b5-8f9c-416b-a7a1-09c6ed96946e.png"
                alt="Healthcare research professional"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Specialized in <span className="text-primary">Healthcare Research</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Healthcare research requires specialized knowledge of regulatory requirements, 
                ethical considerations, and industry-specific methodologies. Our team has extensive 
                experience in healthcare research across multiple domains.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  "Clinical Research Support",
                  "Patient Experience Studies", 
                  "Healthcare Provider Research",
                  "Medical Device Validation",
                  "Pharmaceutical Market Research",
                  "Healthcare Technology Adoption"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-primary/5 p-3 rounded-lg">
                    <Heart className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="btn-secondary">
                <Link to="/contact">
                  Discuss Healthcare Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
              Need Research Expertise for Your Industry?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Our industry specialists are ready to design and execute research solutions 
              tailored to your sector's unique challenges and opportunities.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                Get Industry-Specific Research
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;