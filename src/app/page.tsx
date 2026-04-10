"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="mediumSizeLargeTitles"
        background="none"
        cardStyle="gradient-radial"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Rise Bakery"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "plain",
      }}
      title="Freshly Baked, Daily."
      description="Artisan breads and pastries handcrafted with love, fresh out of our oven to your table every single morning."
      tag="Est. 2024"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/freshly-halved-baked-bread-dusted-with-flour-wooden-table_23-2147975181.jpg",
          imageAlt: "Freshly baked sourdough bread close up",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/homemade-cookies-row-white-plate_114579-66092.jpg",
          imageAlt: "Assorted french pastries bakery display",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/chef-rolling-dough-triangle-croissant_23-2148742177.jpg",
          imageAlt: "Baker kneading dough in rustic kitchen",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-delicious-baked-bread-pastry-shop_23-2150379533.jpg",
          imageAlt: "Bakery shelves full of artisan breads",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-delicious-cinnamon-rolls-covered-white-glaze-black-table_181624-20360.jpg",
          imageAlt: "Delicious cinnamon rolls warm glaze",
        },
      ]}
      mediaAnimation="slide-up"
      tagIcon={Sparkles}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Our Passion for Baking"
      description="At Rise Bakery, we believe that simple, quality ingredients are the secret to the perfect loaf. Our master bakers follow traditional recipes, ensuring every piece reflects our commitment to craft."
      metrics={[
        {
          value: "12",
          title: "Artisan Loaves",
        },
        {
          value: "5k",
          title: "Satisfied Customers",
        },
        {
          value: "24",
          title: "Hours Fermented",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-woman-working-bakery_23-2150273157.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
      imageAlt="Bakery interior warm lighting cozy atmosphere"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Sourdough Boule",
          price: "$8.00",
          variant: "Classic",
          imageSrc: "http://img.b2bpic.net/free-photo/rye-bread-roll-wooden-board-with-plant_114579-40676.jpg",
          imageAlt: "classic sourdough loaf rustic photography",
        },
        {
          id: "p2",
          name: "Butter Croissant",
          price: "$4.50",
          variant: "Pastry",
          imageSrc: "http://img.b2bpic.net/free-photo/croissant-wooden-kitchen-towel-flat-lay_176474-8145.jpg",
          imageAlt: "buttery french croissant golden crust",
        },
        {
          id: "p3",
          name: "Rustic Rye",
          price: "$9.00",
          variant: "Bread",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-cake-with-parchment-paper-envelope_23-2148368313.jpg",
          imageAlt: "artisan rustic rye bread loaf",
        },
        {
          id: "p4",
          name: "Blueberry Danish",
          price: "$5.00",
          variant: "Pastry",
          imageSrc: "http://img.b2bpic.net/free-photo/side-close-view-plate-sweet-with-berries-flour-tea-sieve-chocolate-nuts-side-marble-background_140725-133904.jpg",
          imageAlt: "fresh blueberry danish pastry close up",
        },
        {
          id: "p5",
          name: "Cinnamon Roll",
          price: "$4.00",
          variant: "Sweet",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-cinnamon-rolls_23-2148904668.jpg",
          imageAlt: "cinnamon roll icing drizzle sweet",
        },
        {
          id: "p6",
          name: "French Baguette",
          price: "$3.50",
          variant: "Classic",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-baguettes-left-side-black-background-with-copy-space_141793-5213.jpg",
          imageAlt: "french baguette bread golden crust",
        },
      ]}
      title="Today's Selection"
      description="Everything in our shop is made from scratch using locally sourced, organic flour."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Alice M.",
          role: "Foodie",
          company: "Local Blog",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/selfie-portrait-cute-brunette-girl-with-short-hair-sitting-table-gray-plaid-terrace-restaurant-she-wears-blue-shirt-looks-happy_197531-971.jpg",
          imageAlt: "happy customer portrait young woman",
        },
        {
          id: "2",
          name: "Bob D.",
          role: "Regular",
          company: "Neighbor",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-woman-holding-coffee-cup-sitting-front-man-taking-bottle-from-shelf_23-2147901258.jpg",
          imageAlt: "satisfied patron portrait casual style",
        },
        {
          id: "3",
          name: "Claire L.",
          role: "Designer",
          company: "Studio",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-eating-croissant-cafe_1170-630.jpg",
          imageAlt: "man enjoying breakfast bakery shop",
        },
        {
          id: "4",
          name: "David W.",
          role: "Architect",
          company: "Firm",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-young-woman-sitting-cafe-holding-takeaway-coffee-cup_23-2148148111.jpg",
          imageAlt: "portrait happy woman laughing cafe",
        },
        {
          id: "5",
          name: "Eve K.",
          role: "Artist",
          company: "Gallery",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-holding-cup-coffee-coffee-shop_1170-2061.jpg",
          imageAlt: "smiling male portrait coffee break",
        },
      ]}
      title="Loved by Neighbors"
      description="Don't just take our word for it—hear what the local community has to say."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      title="Visit Our Shop"
      description="Come grab a fresh loaf before we sell out! Sign up for our newsletter to get weekly specials."
      inputPlaceholder="Enter your email"
      buttonText="Subscribe"
      tag="Visit Us"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Rise Bakery"
      copyrightText="© 2025 Rise Bakery | Handcrafted with passion"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
