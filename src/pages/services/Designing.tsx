import { motion } from 'framer-motion';
import { Card } from '../../components/ui/card';

export function Designing() {
    return (
        <div className="pt-20 min-h-screen bg-black relative">
            <div className="absolute inset-0 z-0 h-[60vh]">
                <img src="/assets/designing.png" alt="Designing" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10 pt-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">Designing</h1>
                    <p className="text-2xl text-gray-200 max-w-2xl font-light">
                        From concept to technical pack. We design the future of streetwear.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 pb-20">
                    {[
                        { title: 'Tech Packs', desc: 'Detailed manufacturing specifications including measurements, fabrics, and grading rules.' },
                        { title: 'Pattern Making', desc: 'Digital pattern creation for perfect fits - Oversized, Boxy, Slim, or Custom.' },
                        { title: 'Trend Analysis', desc: 'Forecasting global streetwear trends to keep your brand ahead of the curve.' }
                    ].map((item, i) => (
                        <Card key={i} className="glass p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
