
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Mail, Phone, MapPin, Send, AtSign, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
      duration: 5000,
    });
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl">
        <h1 className="page-title flex items-center justify-center gap-3">
          <Mail className="h-8 w-8 text-vintage-brown" />
          Contact Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Contact Info */}
          <div className="vintage-paper">
            <h2 className="text-2xl font-bold text-vintage-brown mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-vintage-orange/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-5 w-5 text-vintage-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-vintage-brown mb-1">Phone</h3>
                  <p className="text-vintage-brown/80">09673779191</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-vintage-green/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <AtSign className="h-5 w-5 text-vintage-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-vintage-brown mb-1">Email</h3>
                  <p className="text-vintage-brown/80">Soferhandsome@.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-vintage-purple/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-vintage-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-vintage-brown mb-1">Location</h3>
                  <p className="text-vintage-brown/80">Sa bahay nyo</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-vintage-brown mb-4">Best Time to Reach Me</h3>
              <div className="bg-white/50 rounded-lg p-4">
                <p className="text-vintage-brown/80">
                  I'm most responsive during weekday afternoons and evenings. Feel free to reach out anytime and I'll get back to you as soon as possible!
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="retro-card">
            <h2 className="text-2xl font-bold text-vintage-brown mb-6 flex items-center">
              <Send className="h-5 w-5 mr-2 text-vintage-orange" />
              Send a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-vintage-brown font-medium mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="retro-input w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-vintage-brown font-medium mb-1">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="retro-input w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-vintage-brown font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What would you like to say?"
                  className="retro-input w-full min-h-[150px]"
                  required
                />
              </div>
              
              <Button type="submit" className="retro-button w-full">
                Send Message
              </Button>
              
              <p className="text-center text-vintage-brown/60 text-sm">
                I'll respond as soon as possible!
              </p>
            </form>
          </div>
        </div>
        
        {/* Connect Section */}
        <div className="vintage-paper text-center">
          <h2 className="text-2xl font-bold text-vintage-brown mb-6">Let's Connect</h2>
          
          <p className="text-vintage-brown/80 mb-6 max-w-2xl mx-auto">
            Whether you have a question, want to collaborate, or just want to say hello, I'd love to hear from you. Feel free to reach out through any of the methods above.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="retro-button flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              School Website
            </a>
            <Button variant="outline" className="border-2 border-vintage-brown text-vintage-brown hover:bg-vintage-brown hover:text-white">
              Download Contact Card
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
