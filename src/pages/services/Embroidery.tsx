import { motion } from 'framer-motion';
import { Card, CardContent } from '../../components/ui/card';

export function Embroidery() {
    return (
        <div className="pt-20 min-h-screen bg-black relative">
            {/* Hero Image */}
            <div className="absolute inset-0 z-0 h-[60vh]">
                <img src="/assets/embroidery.png" alt="Embroidery" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10 pt-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">Embroidery</h1>
                    <p className="text-2xl text-gray-200 max-w-2xl font-light">
                        Precision threading. 3D textured branding. Premium detailing.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                    {['3D Puff', 'Chenille Patches', 'Chain Stitch', 'Sequins', 'Applique', 'Gold/Silver Thread'].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="glass border-0 h-40 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <h3 className="text-2xl font-bold text-white">{item}</h3>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
