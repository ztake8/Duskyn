import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { motion } from 'framer-motion';

export function ProductCategories() {
  const categories = [
    {
      title: 'T-Shirts & Tops',
      items: 'Premium cotton tees, graphic prints, oversized fits',
      image: 'https://images.unsplash.com/photo-1595183948036-e0de97d1c94f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zd2VhciUyMGFwcGFyZWx8ZW58MXx8fHwxNzYyODA2NjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Hoodies & Sweatshirts',
      items: 'Fleece hoodies, pullover sweatshirts, zip-up styles',
      image: 'https://images.unsplash.com/photo-1511742667815-af572199b23a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwZmFzaGlvbiUyMGNsb3RoaW5nfGVufDF8fHx8MTc2MjgwNjY4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Bottoms',
      items: 'Cargo pants, joggers, denim, straight fit, tapered styles',
      image: 'https://images.unsplash.com/photo-1701964620877-5653b8a7280e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjB0ZXh0aWxlJTIwbWF0ZXJpYWx8ZW58MXx8fHwxNzYyNzU1NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Co-ord Sets & Outerwear',
      items: 'Matching sets, overshirts, jackets, windbreakers',
      image: 'https://images.unsplash.com/photo-1606053929013-311c13f97b5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMHByb2R1Y3Rpb24lMjBmYWN0b3J5fGVufDF8fHx8MTc2Mjc3MzgzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-white"
          >
            Product Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
          >
            We manufacture across all major menswear segments with premium fabrics and finishing
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 rounded-3xl relative h-80">
                <ImageWithFallback
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-200 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {category.items}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
