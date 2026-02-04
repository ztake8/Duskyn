import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="glass border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">DUSKYN</h3>
            <p className="text-gray-400 max-w-sm font-light leading-relaxed">
              Premium streetwear manufacturing partnering with ambitious brands worldwide.
              Quality, precision, and reliability in every stitch.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { label: 'About', path: '/#about' },
                { label: 'Fabrics', path: '/fabrics' },
                { label: 'Manufacturing', path: '/manufacturing' },
                { label: 'Embroidery', path: '/services/embroidery' },
                { label: 'Designing', path: '/services/designing' },
                { label: 'Contact', path: '/#contact' }
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.path} className="text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Connect</h4>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} DUSKYN Manufacturing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
