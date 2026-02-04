import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';

export function Manufacturing() {
    const processes = [
        {
            title: "Screen Printing",
            description: "High-definition prints using plastisol, water-based, and discharge inks. Puff, HD, and foil variations available.",
            imageUrl: "/assets/screen-printing.png"
        },
        {
            title: "Embroidery",
            description: "Precision embroidery for logos and artwork. 3D Puff, chenille, and intricate stitching capabilities across all garment types.",
            imageUrl: "/assets/embroidery.png"
        },
        {
            title: "Pattern Making & Grading",
            description: "Expert digital pattern making to ensure the perfect fit (oversized, slim, boxy) across all size ranges from XS to 5XL.",
            imageUrl: "/assets/pattern-making.png"
        },
        {
            title: "Dyeing & Washes",
            description: "Specialized garment dyeing techniques including Acid Wash, Tie-Dye, Sun-Fade, and Enzyme Wash for that vintage aesthetic.",
            imageUrl: "/assets/fabrics-hero.png"
        },
        {
            title: "Cut & Sew",
            description: "Complete garment construction from fabric roll to finished product. Specialized in complex paneling and heavy-duty stitching.",
            imageUrl: "/assets/hero-main.png"
        },
        {
            title: "Finishing & Packaging",
            description: "Custom hangtags, neck labels, polybags, and barcode stickering ready for direct retail or warehouse shipment.",
            imageUrl: "/assets/designing.png"
        }
    ];

    return (
        <div className="pt-32 pb-24 px-4 min-h-screen bg-black relative">
            {/* Ambient Backlights */}
            <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-40 left-10 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 opacity-90">
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        Manufacturing Processes
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto font-light"
                    >
                        We combine traditional craftsmanship with modern technology to deliver
                        superior quality across every stage of production.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {processes.map((process, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="glass overflow-hidden border-0 group rounded-3xl h-full flex flex-col">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={process.imageUrl}
                                        alt={process.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 moody-image"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                <CardContent className="p-8 flex-1 flex flex-col justify-center">
                                    <h3 className="text-3xl font-bold text-white mb-4">{process.title}</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                                        {process.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
