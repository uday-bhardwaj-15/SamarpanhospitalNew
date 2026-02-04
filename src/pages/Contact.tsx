"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Ambulance, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 755 402 6900","+91 942 449 1234"],
    color: "primary",
  },
  {
    icon: Ambulance,
    title: "Emergency",
    details: ["24/7 Available"],
    color: "accent",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["samarpanhospitalonline@gmail.com", ],
    color: "primary",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Samarpan Hospital Kidney and Multispeciality Center", "Near Berchha Mawa Bhandar,", "Viceroy Park Rd, Rohit Nagar", "Bawadiya Kalan, Bhopal, MP 462039"],
    color: "primary",
  },
];

const departments = [
  "General Inquiry",
  "Nephrology",
  "Dialysis Unit",
  "Kidney Transplant",
  "ICU & Critical Care",
  "Diagnostics Lab",
  "Billing & Insurance",
  "Career Opportunities",
];

const Contact = () => {
  const { toast } = useToast();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (isSubmitting) return;

  setIsSubmitting(true);

  const [firstName, ...lastNameArr] = formData.name.trim().split(" ");
  const lastName = lastNameArr.join(" ") || "N/A";

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.department,
        department: formData.department,
        reason: "Contact Page - Samarpan Hospital",
        message: formData.message,
        preferredContact: "Email",
        isEmergency: false,
      }),
    });

    if (!res.ok) throw new Error("Failed");

    toast({
      title: "Message Sent Successfully",
      description: "Samarpan Hospital will contact you shortly.",
    });
setShowSuccessModal(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      message: "",
    });
  } catch (error) {
    toast({
      title: "Message Failed",
      description: "Please try again or call Samarpan Hospital directly.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="badge-primary mb-4">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Contact
              <span className="text-gradient"> Us</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions? We're here to help. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="premium-card p-6 text-center group hover:border-primary/30 transition-colors">
                <div className={`w-14 h-14 rounded-2xl bg-${info.color}/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <info.icon className={`w-7 h-7 text-${info.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="premium-card p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Send us a Message</h2>
                  <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Full Name *</label>
                    <Input
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                    <Input
                      required
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                    <Select value={formData.department} onValueChange={(value) => setFormData({ ...formData, department: value })}>
                      <SelectTrigger className="h-12 rounded-xl">
                        <SelectValue placeholder="Select Subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message *</label>
                  <Textarea
                    required
                    placeholder="Your Message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[150px] rounded-xl resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <div className="premium-card overflow-hidden h-80">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5303480564453!2d77.4388285!3d23.187335299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43bcee391d45%3A0xd4fdab7bbe752ef!2sSamarpan%20Hospital%20Kidney%20and%20Multispeciality%20Center!5e0!3m2!1sen!2sin!4v1770205933221!5m2!1sen!2sin"  width="100%" height="auto"  loading="lazy" className="w-full h-full"></iframe>
                </div>
              </div>

              {/* Working Hours */}
              <div className="premium-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Working Hours</h3>
                    <p className="text-sm text-muted-foreground">We're here when you need us</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="text-foreground">Mon - Sat</span>
                    <span className="text-primary font-medium">8:00 AM - 5:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="text-foreground">Sun</span>
                    <span className="text-primary font-medium">Closed</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-foreground font-medium">Emergency & Dialysis</span>
                    <span className="text-accent font-bold">24/7 Available</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="premium-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Quick Actions</h3>
                    <p className="text-sm text-muted-foreground">Get the help you need</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-sm">Call Reception</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex-col gap-2 border-accent/30 hover:bg-accent/5">
                    <Ambulance className="w-5 h-5 text-accent" />
                    <span className="text-sm">Emergency</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-sm">Email Us</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <span className="text-sm">WhatsApp</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="premium-card p-10 md:p-16 text-center bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Have More Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Check out our frequently asked questions or speak with our patient care team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Phone className="w-5 h-5" />
                Call Now: +91 755 402 6900
              </Button>
              <Button variant="outline" size="lg">
                View FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>
<Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
  <DialogContent className="max-w-md text-center">
    <DialogHeader>
      <div className="flex justify-center mb-4">
        <CheckCircle2 className="w-14 h-14 text-green-500" />
      </div>
      <DialogTitle className="text-2xl">
        Message Sent Successfully
      </DialogTitle>
      <DialogDescription className="text-muted-foreground mt-2">
        Thank you for contacting <strong>Samarpan Hospital</strong>.<br />
        Our team will get back to you within 24 hours.
      </DialogDescription>
    </DialogHeader>

    <Button
      className="mt-6 w-full"
      onClick={() => setShowSuccessModal(false)}
    >
      Close
    </Button>
  </DialogContent>
</Dialog>

      <Footer />
    </div>
  );
};

export default Contact;
