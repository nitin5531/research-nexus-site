import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  Users, 
  Globe, 
  Target, 
  Search, 
  FileText, 
  Microscope,
  TrendingUp,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Business Research",
      description: "Comprehensive business intelligence and strategic analysis to inform critical business decisions and growth strategies.",
      features: [
        "Market analysis and competitive intelligence",
        "Business model evaluation and optimization",
        "Strategic planning and feasibility studies",
        "Performance benchmarking and analytics"
      ]
    },
    {
      icon: Users,
      title: "Qualitative Research",
      description: "In-depth insights through interviews, focus groups, and observational studies to understand customer behavior and preferences.",
      features: [
        "Focus group discussions and moderation",
        "In-depth interviews and ethnographic studies",
        "Consumer behavior analysis",
        "Brand perception and positioning research"
      ]
    },
    {
      icon: Globe,
      title: "Online Research",
      description: "Digital research methodologies leveraging online platforms and tools for comprehensive data collection and analysis.",
      features: [
        "Online surveys and questionnaire design",
        "Social media sentiment analysis",
        "Digital consumer journey mapping",
        "Web analytics and user behavior studies"
      ]
    },
    {
      icon: Microscope,
      title: "Healthcare Research",
      description: "Specialized research for healthcare organizations, pharmaceutical companies, and medical device manufacturers.",
      features: [
        "Clinical trial support and patient research",
        "Healthcare market access studies",
        "Medical device usability research",
        "Healthcare provider satisfaction surveys"
      ]
    },
    {
      icon: Search,
      title: "Primary Research",
      description: "Original data collection through surveys, interviews, and direct observation to gather first-hand insights.",
      features: [
        "Custom survey design and implementation",
        "Field research and data collection",
        "Interview protocols and execution",
        "Observational studies and ethnography"
      ]
    },
    {
      icon: Target,
      title: "Market Research",
      description: "Strategic market analysis to identify opportunities, assess competition, and understand market dynamics.",
      features: [
        "Market sizing and opportunity assessment",
        "Competitive landscape analysis",
        "Consumer segmentation and targeting",
        "Product positioning and pricing research"
      ]
    },
    {
      icon: FileText,
      title: "Secondary Research",
      description: "Comprehensive analysis of existing data sources to provide valuable insights and market intelligence.",
      features: [
        "Industry reports and trend analysis",
        "Literature reviews and meta-analysis",
        "Database research and data mining",
        "Regulatory and compliance research"
      ]
    },
    {
      icon: TrendingUp,
      title: "Statistical Analysis",
      description: "Advanced statistical modeling and data analysis to uncover patterns, trends, and predictive insights.",
      features: [
        "Descriptive and inferential statistics",
        "Predictive modeling and forecasting",
        "Regression analysis and correlation studies",
        "Advanced analytics and machine learning"
      ]
    }
  ];

  const researchProcess = [
    {
      step: "01",
      title: "Research Design",
      description: "We collaborate with clients to define objectives, methodology, and success metrics."
    },
    {
      step: "02", 
      title: "Data Collection",
      description: "Systematic gathering of primary and secondary data using proven methodologies."
    },
    {
      step: "03",
      title: "Analysis & Insights",
      description: "Advanced statistical analysis and interpretation to extract meaningful insights."
    },
    {
      step: "04",
      title: "Reporting & Recommendations",
      description: "Clear, actionable reports with strategic recommendations for implementation."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="gradient-text">Research Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              From business intelligence to healthcare research, we provide end-to-end quantitative 
              research solutions tailored to your specific industry needs and objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift animate-fade-in h-full" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Process */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Research Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach ensuring quality, accuracy, and actionable insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchProcess.map((process, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
                {index < researchProcess.length - 1 && (
                  <ArrowRight className="hidden lg:block h-6 w-6 text-primary mx-auto mt-8 opacity-30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Analysis Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="/lovable-uploads/8bb17fb6-4440-4c2e-8826-ff8b535a9a65.png"
                alt="Data analysis and research"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced Data Analytics</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our research goes beyond basic data collection. We employ sophisticated analytical 
                techniques and cutting-edge tools to extract meaningful insights from complex datasets.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Statistical modeling and predictive analytics",
                  "Machine learning algorithms for pattern recognition",
                  "Advanced visualization and dashboard creation",
                  "Real-time data processing and analysis",
                  "Custom reporting and executive summaries"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="btn-primary">
                <Link to="/contact">
                  Discuss Your Research Needs
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
              Ready to Get Started with Your Research Project?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let our expert team design and execute a research strategy that delivers 
              the insights you need to make informed business decisions.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                Start Your Project Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;