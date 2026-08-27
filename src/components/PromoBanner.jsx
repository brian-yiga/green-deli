import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PromoBanner() {
  const whatsappUrl =
    "https://wa.me/256772502605?text=Hello%20Green%20Deli%2C%20I%20am%20inquiring%20about%20Bulk%20and%20Wholesale%20Export%20Orders.";

  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto w-full py-6">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-r from-deli-charcoal via-[#1C2619] to-deli-charcoal border border-deli-botanical/30 p-8 md:p-12 text-white shadow-2xl"
      >
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-deli-gold/10 blur-[90px] rounded-[1.3rem] pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-deli-botanical/25 blur-[80px] rounded-[1.3rem] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Text Content */}
          <div className="flex flex-col text-center lg:text-left max-w-2xl">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-3">
              <span className="bg-deli-botanical text-white text-[9px] font-sans font-bold px-3 py-1 rounded-full uppercase tracking-[0.2em] shadow-sm">
                B2B & Global Export
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-deli-gold font-bold">
                Commercial Supply
              </span>
            </div>

            <h3 className="font-display text-3xl md:text-5xl uppercase tracking-tight leading-[1.05] text-white mb-4">
              Bulk & Wholesale <br className="hidden md:inline" />
              <span className="text-deli-gold">Export Orders</span>
            </h3>

            <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-xl mb-4">
              Equip your restaurant, hotel, culinary brand, or supermarket chain with peak-potency Ugandan spices. We offer custom commercial blends, private labeling, and pallet/container export shipping.
            </p>

            {/* Benefit Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3 text-[10px] font-sans uppercase tracking-widest text-white/80">
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                ✓ Direct Farm Pricing
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                ✓ Custom Milling & Blends
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                ✓ Global Air & Sea Freight
              </span>
            </div>
          </div>

          {/* Right CTA Actions */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-sans text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.4)] flex items-center justify-center gap-3 active:scale-95"
            >
              <img
                src="/assets/whatsapp-logo.png"
                alt="WhatsApp"
                className="w-5 h-5 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span>Inquire on WhatsApp</span>
              <span className="text-base group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            <Link
              to="/wholesale"
              className="w-full sm:w-auto text-center px-6 py-3 font-sans text-[10px] uppercase tracking-[0.2em] text-white/70 hover:text-white border border-white/20 hover:border-white/50 rounded-full transition-all"
            >
              View Wholesale Page
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
