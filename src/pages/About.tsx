import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Target, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "We deliver accurate, reliable research with meticulous attention to detail."
    },
    {
      icon: Users,
      title: "Expertise",
      description: "Our team brings decades of combined experience across multiple industries."
    },
    {
      icon: Award,
      title: "Quality",
      description: "Committed to excellence in every research project we undertake."
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "Ethical research practices and transparent methodologies in all our work."
    }
  ];

  const achievements = [
    "500+ successful research projects completed",
    "50+ clients across various industries", 
    "10+ years of research excellence",
    "99% client satisfaction rate",
    "Industry-leading analytical methodologies",
    "Expert team with advanced certifications"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Clarity Research</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Founded with the vision of transforming business decision-making through precision research, 
                Clarity Research has emerged as a leading quantitative research company serving clients 
                across diverse industries.
              </p>
              <div className="space-y-4">
                {achievements.slice(0, 3).map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in lg:animate-slide-up">
              <img 
                src="/lovable-uploads/344ba6c0-f3a2-40f6-847c-7e4fafb8e55c.png"
                alt="Team collaboration"
                className="w-full h-auto rounded-2xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="animate-fade-in hover-lift">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with actionable insights through comprehensive quantitative research, 
                  enabling informed decision-making and strategic growth. We are committed to delivering 
                  precise, reliable, and timely research solutions that drive business success.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in hover-lift" style={{animationDelay: "0.2s"}}>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-secondary">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the globally recognized leader in quantitative research, setting industry standards 
                  for excellence, innovation, and integrity. We envision a future where data-driven insights 
                  transform businesses and create sustainable competitive advantages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our research methodologies and client relationships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Approach */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="/lovable-uploads/f6845acb-b853-490b-a5b1-7ee1552ff4ce.png"
                alt="Research methodology"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Research Approach</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We employ a systematic, multi-layered approach to research that ensures accuracy, 
                reliability, and actionable insights for our clients.
              </p>
              <div className="space-y-4">
                {[
                  "Comprehensive data collection from primary and secondary sources",
                  "Advanced statistical analysis and modeling techniques", 
                  "Industry-specific expertise and contextual understanding",
                  "Rigorous quality control and validation processes",
                  "Clear, actionable reporting and strategic recommendations"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Research Team</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              Our multidisciplinary team combines advanced academic credentials with practical industry experience. 
              We bring together statisticians, data scientists, market researchers, and industry specialists 
              to deliver comprehensive research solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { metric: "PhD & Masters", label: "Advanced Degrees" },
                { metric: "10+ Years", label: "Average Experience" },
                { metric: "Multiple Industries", label: "Sector Expertise" }
              ].map((stat, index) => (
                <div key={index} className="animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="text-2xl md:text-3xl font-bold mb-2">{stat.metric}</div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;