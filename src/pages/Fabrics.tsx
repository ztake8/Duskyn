import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '../components/ui/card';

export function Fabrics() {
    const fabrics = [
        {
            title: "Premium Cotton",
            description: "100% organic, combed, and ring-spun cotton options available in various GSMs (180-320). Perfect for premium streetwear tees and hoodies.",
            features: ["Bio-washed", "Pre-shrunk", "Sustainable sourcing"]
        },
        {
            title: "French Terry & Fleece",
            description: "High-quality looped back French Terry and brushed fleece for superior warmth and comfort. Ideal for heavyweight hoodies and joggers.",
            features: ["300-500 GSM", "Soft handfeel", "Anti-pilling treatment"]
        },
        {
            title: "Technical Blends",
            description: "Performance fabrics mixing cotton with polyester, elastane, or modal for stretch, durability, and moisture wicking.",
            features: ["4-way stretch", "Moisture wicking", "Shape retention"]
        },
        {
            title: "Denim & Twill",
            description: "Rigid and stretch denim options in various weights and washes, plus durable cotton twills for cargo pants and jackets.",
            features: ["Custom washes", "Heavy duty", "Vintage finishes"]
        },
        {
            title: "Sustainable Sustainable",
            description: "Eco-friendly options including Recycled Polyester (rPET), Organic Cotton (GOTS), and Bamboo blends.",
            features: ["Certified Sustainable", "Low carbon footprint", "Soft texture"]
        },
        {
            title: "Specialty Knits",
            description: "Waffle knits, ribs, and interlock fabrics for unique textures and structural garments.",
            features: ["Textured surface", "Breathable", "Premium drape"]
        }
    ];

    return (
        <div className="min-h-screen bg-black relative">
            <div className="absolute inset-0 z-0 h-[50vh]">
                <img src="/assets/fabrics-hero.png" alt="Fabrics" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black" />
            </div>

            {/* Ambient Backlights */}
            <div className="absolute top-[40vh] left-10 w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-[60vh] right-10 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 pt-48 px-4">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        Fabric Library
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto font-light"
                    >
                        The foundation of every great garment is exceptional fabric.
                        Explore our curated selection of premium textiles designed for modern streetwear.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {fabrics.map((fabric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full glass border-0 hover:bg-white/5 transition-all duration-300 group">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-white mb-3 group-hover:text-purple-400 transition-colors">{fabric.title}</CardTitle>
                                    <CardDescription className="text-gray-400 text-base mb-6 leading-relaxed">
                                        {fabric.description}
                                    </CardDescription>
                                    <div className="flex flex-wrap gap-2">
                                        {fabric.features.map((feature, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
