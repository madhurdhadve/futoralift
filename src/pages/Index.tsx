import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Rocket, Target, Zap, TrendingUp, Palette, Code, Share2, BarChart, Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-midnight text-offwhite font-inter">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 md:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-phoenix1/20 via-midnight to-midnight" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-phoenix1/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left space-y-6 animate-fade-in">
              <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
                BRAND<span className="text-phoenix1">L1FT</span>
              </h1>
              <p className="text-3xl md:text-4xl font-semibold text-cyan">
                Lifting Brands to New Heights 🚀
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground font-poppins">
                A Name Your Brand Needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <Button size="lg" className="bg-phoenix1 hover:bg-phoenix2 text-white shadow-lg hover:shadow-xl hover:shadow-phoenix1/50 transition-all active:scale-95">
                  Start Your Project
                </Button>
                <Button size="lg" variant="outline" className="border-phoenix2 text-phoenix1 hover:bg-phoenix1/10">
                  View Our Work
                </Button>
              </div>
            </div>
            
            <div className="relative flex justify-center animate-scale-in">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-phoenix1 to-cyan rounded-full blur-2xl opacity-40 animate-pulse" />
                <Rocket className="relative w-full h-full text-phoenix1 drop-shadow-2xl" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-charcoal/50">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-poppins font-bold text-4xl md:text-5xl">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're a creative powerhouse dedicated to elevating brands through strategic marketing, stunning design, and performance-driven campaigns. Our mission is simple: make your brand unforgettable.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: "Clients", value: "50+" },
                { label: "Campaigns", value: "200+" },
                { label: "Avg ROI", value: "3.5x" }
              ].map((stat, i) => (
                <Card key={i} className="bg-charcoal border-phoenix1/20 hover:border-phoenix1 transition-colors text-center">
                  <CardContent className="pt-6">
                    <p className="text-3xl font-bold text-phoenix1 font-poppins">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Strategic Focus", desc: "Data-driven decisions that hit the mark" },
              { icon: Zap, title: "Rapid Execution", desc: "From concept to launch in record time" },
              { icon: TrendingUp, title: "Growth Mindset", desc: "Scalable solutions that evolve with you" },
              { icon: Palette, title: "Creative Excellence", desc: "Designs that captivate and convert" }
            ].map((item, i) => (
              <Card key={i} className="bg-charcoal border-border hover:border-phoenix1 hover:-translate-y-2 hover:shadow-xl hover:shadow-phoenix1/20 transition-all group">
                <CardHeader>
                  <item.icon className="w-12 h-12 text-cyan mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-poppins">{item.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-charcoal/50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Palette, title: "Brand Identity", desc: "Logo, colors, voice—your complete brand DNA" },
              { icon: Code, title: "Web Development", desc: "Fast, beautiful, conversion-optimized sites" },
              { icon: Share2, title: "Social Media", desc: "Content that engages and grows your audience" },
              { icon: BarChart, title: "Performance Marketing", desc: "Paid ads that deliver measurable ROI" },
              { icon: TrendingUp, title: "SEO & Analytics", desc: "Rank higher, understand your customers" },
              { icon: Zap, title: "Campaign Strategy", desc: "End-to-end campaigns that move the needle" }
            ].map((service, i) => (
              <Card key={i} className="bg-charcoal border-border hover:border-cyan hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan/20 transition-all group">
                <CardHeader>
                  <service.icon className="w-10 h-10 text-phoenix1 mb-3 group-hover:text-cyan transition-colors" />
                  <CardTitle className="text-lg font-poppins">{service.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{service.desc}</CardDescription>
                  <a href="#" className="text-cyan text-sm hover:underline inline-flex items-center gap-1 pt-2">
                    Learn more →
                  </a>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-center mb-16">Choose Your Package</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: "$2,999",
                recommended: false,
                features: ["Brand Identity", "5-Page Website", "Social Media Setup", "1 Month Support"]
              },
              {
                name: "Growth",
                price: "$5,999",
                recommended: true,
                features: ["Everything in Starter", "SEO Optimization", "Content Strategy", "3-Month Campaign", "Analytics Dashboard"]
              },
              {
                name: "Enterprise",
                price: "Custom",
                recommended: false,
                features: ["Everything in Growth", "Dedicated Team", "Unlimited Revisions", "12-Month Retainer", "Priority Support"]
              }
            ].map((pkg, i) => (
              <Card 
                key={i} 
                className={`relative ${pkg.recommended ? 'border-cyan shadow-xl shadow-cyan/20 scale-105' : 'border-border'} bg-charcoal hover:-translate-y-2 transition-all`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan text-midnight px-4 py-1 rounded-full text-sm font-semibold">
                    Recommended
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-poppins">{pkg.name}</CardTitle>
                  <p className="text-4xl font-bold text-phoenix1 mt-4">{pkg.price}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <span className="text-cyan mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${pkg.recommended ? 'bg-cyan text-midnight hover:bg-cyan/90' : 'bg-phoenix1 hover:bg-phoenix2'}`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-charcoal/50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-center mb-16">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We learn your brand, goals, and audience" },
              { step: "02", title: "Strategy", desc: "Custom roadmap tailored to your vision" },
              { step: "03", title: "Execution", desc: "Design, develop, and deploy with precision" },
              { step: "04", title: "Optimize", desc: "Measure, refine, and scale for growth" }
            ].map((phase, i) => (
              <div key={i} className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-phoenix1 to-transparent" />
                )}
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-phoenix1 flex items-center justify-center text-2xl font-bold font-poppins">
                    {phase.step}
                  </div>
                  <h3 className="font-poppins font-semibold text-xl">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - exact DOM structure as specified */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-center mb-16">Meet the Team</h2>
          <Card className="bg-charcoal border-phoenix1/20 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12 space-y-8">
              <span className="team-founder block">
                <div className="member flex flex-col items-center text-center space-y-4 group">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-phoenix1 to-cyan p-1 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-phoenix1/50 transition-all">
                    <div className="w-full h-full rounded-full bg-charcoal flex items-center justify-center text-4xl font-bold">
                      MD
                    </div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Madhur Dhadve</h3>
                    <p className="text-phoenix1 text-sm">Founder</p>
                    <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                      Visionary leader with a passion for building brands that resonate and drive real business growth.
                    </p>
                  </div>
                </div>
              </span>
              
              <span className="team-cofounders grid md:grid-cols-2 gap-8">
                <div className="member flex flex-col items-center text-center space-y-4 group">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-phoenix1 to-cyan p-1 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan/50 transition-all">
                    <div className="w-full h-full rounded-full bg-charcoal flex items-center justify-center text-4xl font-bold">
                      SM
                    </div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Shreeyash Mohodkar</h3>
                    <p className="text-cyan text-sm">Co-founder</p>
                    <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                      Creative strategist who transforms ideas into compelling campaigns that connect and convert.
                    </p>
                  </div>
                </div>
                
                <div className="member flex flex-col items-center text-center space-y-4 group">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-phoenix1 to-cyan p-1 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan/50 transition-all">
                    <div className="w-full h-full rounded-full bg-charcoal flex items-center justify-center text-4xl font-bold">
                      RS
                    </div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Rushal Shinde</h3>
                    <p className="text-cyan text-sm">Co-founder</p>
                    <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                      Technical mastermind ensuring every project is delivered with precision and excellence.
                    </p>
                  </div>
                </div>
              </span>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-charcoal/50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-center mb-16">Start Your Project</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-charcoal border-border">
              <CardHeader>
                <CardTitle className="font-poppins">Get in Touch</CardTitle>
                <CardDescription>Fill out the form and we'll reach out within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" className="bg-midnight border-border focus:border-phoenix1 focus:ring-phoenix1" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-midnight border-border focus:border-phoenix1 focus:ring-phoenix1" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your project..." className="bg-midnight border-border focus:border-phoenix1 focus:ring-phoenix1 min-h-32" />
                </div>
                <Button className="w-full bg-phoenix1 hover:bg-phoenix2 text-lg py-6">
                  Start a Project
                </Button>
              </CardContent>
            </Card>
            
            <div className="space-y-6 flex flex-col justify-center">
              <h3 className="font-poppins font-semibold text-2xl">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-phoenix1 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">hello@brandl1ft.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-phoenix1 mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-phoenix1 mt-1" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Remote-First, Serving Globally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 bg-midnight border-t border-border">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-poppins font-bold text-xl text-phoenix1 mb-4">BRANDL1FT</h4>
              <p className="text-sm text-muted-foreground">Lifting brands to new heights</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-phoenix1 transition-colors">Brand Identity</a></li>
                <li><a href="#" className="hover:text-phoenix1 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-phoenix1 transition-colors">Social Media</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-phoenix1 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-phoenix1 transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-phoenix1 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-phoenix1 transition-colors">Twitter</a>
                <a href="#" className="text-muted-foreground hover:text-phoenix1 transition-colors">LinkedIn</a>
                <a href="#" className="text-muted-foreground hover:text-phoenix1 transition-colors">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 BrandL1ft. All rights reserved. Lifting brands to new heights 🚀</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-charcoal border-t border-phoenix1 p-4 flex gap-3 z-50">
        <Button className="flex-1 bg-phoenix1 hover:bg-phoenix2">
          Start Project
        </Button>
        <Button size="icon" variant="outline" className="border-phoenix1 text-phoenix1">
          <Phone className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
