import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace these with your EmailJS credentials
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_email: 'statusclarity@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });

    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact us directly at statusclarity@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "statusclarity@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "B 14 Rajori Garden West Delhi",
      description: "Delhi 110027, India"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      description: "IST (Indian Standard Time)"
    }
  ];

  const services = [
    "Business Research",
    "Qualitative Research",
    "Online Research", 
    "Healthcare Research",
    "Primary Research",
    "Market Research",
    "Secondary Research",
    "Statistical Analysis"
  ];

  const whyChooseUs = [
    "Expert research team with 10+ years experience",
    "Industry-specific knowledge and methodologies",
    "Advanced statistical analysis and reporting",
    "Timely delivery with actionable insights",
    "Competitive pricing and flexible packages",
    "24/7 project support and communication"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Discuss Your <span className="gradient-text">Research Needs</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to transform your business with data-driven insights? Get in touch with our 
              research experts to discuss your project requirements and objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="animate-fade-in hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service">Research Service Required</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-input rounded-md bg-background"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your research objectives, timeline, and any specific requirements..."
                        rows={6}
                        className="mt-1"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="animate-fade-in hover-lift" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-foreground mb-1">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Why Choose Us */}
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-lg">Why Choose Clarity Research?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {whyChooseUs.map((reason, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{reason}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quick Response Guarantee</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We understand that time is critical for your research projects. Our team is committed 
              to providing prompt, professional responses to all inquiries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { time: "< 2 Hours", label: "Initial Response", desc: "Acknowledgment and next steps" },
                { time: "< 24 Hours", label: "Detailed Proposal", desc: "Comprehensive project outline" },
                { time: "< 48 Hours", label: "Project Kickoff", desc: "Ready to start your research" }
              ].map((item, index) => (
                <div key={index} className="animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{item.time}</div>
                  <div className="text-lg font-semibold mb-1">{item.label}</div>
                  <div className="text-muted-foreground text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Alternative Ways to Connect</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Prefer a different communication method? We're flexible and ready to connect with you 
              through your preferred channel.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/10 border-white/20 hover-lift">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 mx-auto mb-4 text-primary-foreground" />
                  <h3 className="text-lg font-semibold mb-2 text-primary-foreground">Direct Email</h3>
                  <p className="text-primary-foreground/80 text-sm mb-3">
                    Send us your research requirements directly
                  </p>
                  <a 
                    href="mailto:statusclarity@gmail.com" 
                    className="text-secondary hover:underline font-medium"
                  >
                    statusclarity@gmail.com
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 hover-lift">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 mx-auto mb-4 text-primary-foreground" />
                  <h3 className="text-lg font-semibold mb-2 text-primary-foreground">Schedule a Call</h3>
                  <p className="text-primary-foreground/80 text-sm mb-3">
                    Book a consultation to discuss your project
                  </p>
                  <Button variant="secondary" size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Schedule Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;