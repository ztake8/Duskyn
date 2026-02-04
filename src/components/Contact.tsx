import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-white">Get in Touch</h2>
            <p className="text-xl text-gray-300 mb-12 font-light">
              Ready to start your production journey? Contact us for quotes, samples, or general inquiries.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 glass rounded-xl">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Visit Us</h3>
                  <p className="text-gray-400">
                    DUSKYN Pvt. Ltd.<br />
                    2207, Tower B, Bhutani Alphathum<br />
                    Sector 90, Noida – 201305<br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 glass rounded-xl">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                  <p className="text-gray-400">support@duskyn.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 glass rounded-xl">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Name</label>
                  <Input placeholder="John Doe" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/20 focus:ring-0 rounded-xl py-6" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <Input placeholder="john@brand.com" type="email" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/20 focus:ring-0 rounded-xl py-6" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Subject</label>
                <Input placeholder="Production Inquiry" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/20 focus:ring-0 rounded-xl py-6" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <Textarea
                  placeholder="Tell us about your project..."
                  className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/20 focus:ring-0 rounded-xl resize-none"
                />
              </div>

              <Button size="lg" className="w-full h-14 bg-white text-black hover:bg-gray-200 rounded-xl text-lg font-medium">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
