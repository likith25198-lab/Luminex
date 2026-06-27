import React, { useState,useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Globe, TrendingUp, DollarSign, Award, Target, ShoppingBag, Zap, 
  ArrowRight, CheckCircle2, Glasses, Smartphone, Layers, MoveUpRight, 
  Infinity as InfinityIcon, MessageCircle, Plane, GraduationCap, 
  MonitorPlay, Languages, Shield, Rocket, Star,
  // NEW ICONS BELOW:
 Sun, Link,  Gem,  Video, Store, ShoppingCart, Truck, Briefcase,Building2, UserCircle, ShieldCheck, BarChart3,  Activity, HeartHandshake, Headphones
} from 'lucide-react';

const slides = [
  {
    id: 1,
    type: "hero",
    title: "LUMINEX",
    subtitle: "Your world. Translated.",
    description: "Revolutionizing human connection by integrating AI into daily eyewear.",
    // Cyberpunk City Background
    bgImage: "/Untitled (52).png"
  },
  {
    id: 2,
    type: "mission-vision", // Changed type to trigger our new layout
    title: "The Core Purpose", 
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
    
    // Front Side Content (Mission)
    mission: {
      title: "OUR MISSION",
      subtitle: "Revolutionising Connection",
      color: "#00d2ff", // Cyan Neon
      icon: <Globe size={50} />,
      points: [
        "Enhance human connection via AI",
        "Integrate intelligence into daily eyewear",
        "Empower effortless, screen-free living",
        "Break language barriers instantly"
      ]
    },

    // Back Side Content (Vision)
    vision: {
      title: "OUR VISION",
      subtitle: "Empowering Freedom",
      color: "#FFD700", // Gold Neon
      icon: <Zap size={50} />,
      points: [
        "Lead India's intelligent wearables market",
        "Enable independence through technology",
        "Bridge the gap between human & machine",
        "Innovate for a world without boundaries"
      ]
    }
  },
  {
    id: 3,
    type: "product-duo",
    title: "The Product Duo",
    subtitle: "Two Flagships. One Vision.",
    products: [
      {
        name: "Luminex Vibe",
        tagline: "See life. Capture life.",
        color: "#FF416C",
        // Image: A camera lens/shutter icon
        backImage: "/public/Luminex vibe.png",
        features: [
          "Hands-Free 4K POV Recording",
          "Open-Ear Immersive Audio",
          "Instant Social Sharing",
          "Voice-Activated Controls"
        ]
      },
      {
        name: "Luminex Lingua",
        tagline: "Understand every voice.",
        color: "#00B4DB",
        // Image: Abstract sound wave/tech icon
        backImage: "/public/Luminex lingua.png",
        features: [
          "Real-Time In-Lens Subtitles",
          "Supports 50+ Languages",
          "Offline Translation Mode",
          "Conversation History Save"
        ]
      }
    ],
    // Neon Fashion Background
    bgImage: "https://images.unsplash.com/photo-1506803875326-89c0953a998c?q=80&w=2670&auto=format&fit=crop",
    video: "/Create_a_premium_cinematic_pr.mp4"
  },
  {
    id: 4,
    type: "market-analysis",
    title: "Market Analysis",
    subtitle: "2025 Landscape & Trends",
    bgImage: "/slide 4.png", // <--- Make sure this comma is here!
    
    // Section 1: Market Size
    marketStats: {
      value: "4.40B",
      unit: "USD",
      label: "Global Export Market (2024)",
      highlight: "China leads with 41.4% of global exports"
    },

    // Section 2: Market Leaders
    leaders: [
      { name: "Meta", share: 73, desc: "Ray-Ban Meta: Fashion + AI Ecosystem", color: "#0668E1" },
      { name: "Xiaomi", share: 9, desc: "Affordable, volume-driven AI Glasses", color: "#FF6900" },
      { name: "Alibaba", share: 8, desc: "Quark AI + Taobao Ecosystem", color: "#FF9900" },
      { name: "Lenovo", share: 5, desc: "Visual AI V1 (Enterprise/B2B)", color: "#E2231A" }
    ],

    // Section 3: Key Trends
    trends: [
      "Rapid AI model improvements",
      "Design partnerships increase adoption by 40–60%",
      "Privacy concerns (58%) create differentiation opportunity",
      "Battery life (>4 hours) critical for user adoption"
    ]
  },
  {
    id: 5,
    type: "target-growth",
    title: "Market & Growth", // Shortened title for minimalism
    bgImage: "/slide 5.png",
    
    // 1. Target Segments (Alternating colors)
    segments: [
      { label: "Business Pros", val: 32, sub: "$600–$900", color: "#00B4DB" }, // Blue
      { label: "Travelers", val: 28, sub: "$200–$400", color: "#00B4DB" },     // Blue
      { label: "Enterprise", val: 25, sub: "$400–$700", color: "#FF416C" },    // Pink
      { label: "Students", val: 10, sub: "$150–$300", color: "#FF416C" },      // Pink
      { label: "Access.", val: 5, sub: "$250–$500", color: "#fff" }            // White (Neutral)
    ],

    // 2. India Market
    india: {
      size: "$607.96M",
      growth: "11.9% CAGR",
      users: "400M+",
      langs: "Hindi, Eng, Tamil"
    },

    // 3. Critical Findings
    findings: [
      "Translation is universal across products",
      "Tiered pricing ($150–$900) essential",
      "Offline Mode boosts accuracy to 95%+",
      "Top ROI: Healthcare, Logistics, Mfg"
    ],

    // 4. Growth Drivers
    drivers: [
      "Rising travel demand (APAC +22%)",
      "Hardware costs dropping ($800 → $200)",
      "Regulations: EU AI Act, India Digital",
      "Enterprise adoption scaling up"
    ]
  },
  {
      id: 6,
      type: "landscape-intro",
      title: "Market Landscape",
      subtitle: "The Current Reality",
      bgImage: "/public/slide 6.png", // Futuristic Hologram
      text: "Smart glasses are merging with AR wearables, AI communication tools, and entertainment tech.",
      boxes: [
        { title: "Social & Entertainment", icon: <Glasses size={30} />, color: "#FF416C" },
        { title: "Real-time Translation", icon: <Globe size={30} />, color: "#00B4DB" }
      ]
    },

    // --- STORY PART 2: GROWTH ---
    {
      id: 7,
      type: "growth-vertical",
      title: "Growth Outlook",
      subtitle: "Why the market is rising",
      bgImage: "/public/slide 6.png", // Tech Ascent
      points: [
        { text: "Multilingual Communication Needs", icon: <MessageCircle size={24} /> }, // Note: If MessageCircle fails, use Globe
        { text: "AR/VR Ecosystem Expansion", icon: <Layers size={24} /> },
        { text: "AI-Driven Interaction Tools", icon: <Smartphone size={24} /> }
      ]
    },

    // --- STORY PART 3: CONVERGENCE (CLIMAX) ---
    {
      id: 8,
      type: "convergence-climax",
      title: "The Convergence",
      subtitle: "The Opportunity",
      bgImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2670&auto=format&fit=crop", // Merging Lights
      text: "The fusion of AR Smart Glasses and AI Translation creates a massive new category.",
      left: "AR Visuals",
      right: "AI Intelligence"
    },

    // --- OLD SLIDES MOVED DOWN ---
    {
    id: 9,
    type: "drivers-flow", // New layout type
    title: "Key Market Drivers",
    subtitle: "Primary Drivers of Demand",
    // High-quality abstract network video loop
    video: "/Minimal_Luminex_Smart_Glasses_Video.mp4",
    
    // The 4 Inputs
    drivers: [
      { icon: <Globe size={24} />, text: "Globalized communication → multilingual interactions essential.", color: "#00d2ff" },
      { icon: <Plane size={24} />, text: "Growth in international travel, tourism & cross-border movement.", color: "#00d2ff" },
      { icon: <GraduationCap size={24} />, text: "Digital learning expansion requiring real-time language support.", color: "#00d2ff" },
      { icon: <Glasses size={24} />, text: "Rising AR/VR entertainment ecosystems & immersive experiences.", color: "#FF416C" } // Pink accent for AR/VR
    ],

    // The Result
    implication: "Demand is shifting from basic wearables to intelligent, socially-aware smart glasses."
  },
    {
    id: 10,
    type: "competitive-gap", // New layout type
    title: "Competitive Landscape",
    subtitle: "Adjacent Categories, Not Substitutes",
    video: "/Luminex_Smart_Glasses_Promo_Video.mp4", // Dark Abstract
    
    // The Two Disconnected Categories
    competitors: [
      { title: "Entertainment", icon: <MonitorPlay size={40} />, desc: "Video glasses & Music wearables", color: "#FF416C" },
      { title: "Translation", icon: <Languages size={40} />, desc: "Handheld translators & Earbuds", color: "#00B4DB" }
    ],

    // The Insight
    insight: "There is no mainstream device combining social entertainment + real-time translation.",
    
    // The Opportunity
    gap: {
      title: "The Market Gap",
      text: "A socially intelligent, communication-first smart eyewear category remains largely untapped."
    }
  },
  {
    id: 11,
    type: "strategic-overview", // New layout type
    title: "Strategic Outlook",
    subtitle: "Opportunities, Barriers & Potential",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop", // Global futuristic view
    
    // 1. Competitive Advantage (The Good)
    advantages: [
      "Combine translation + entertainment + AI social features",
      "Hyper-personalized user experience",
      "Differentiation through software ecosystem"
    ],

    // 2. Barriers to Entry (The Challenge)
    barriers: [
      "High development costs",
      "Hardware partnerships required",
      "Need for incremental feature rollout",
      "Market adoption challenges"
    ],

    // 3. Market Potential (The Prize)
    potential: {
      value: "$50–60 Billion",
      year: "by 2030",
      desc: "Combined immersive, AR & translation market.",
      adopters: "Travel, Education, Content Creators"
    }
  },
  {
    id: 12,
    type: "brand-identity",
    title: "BRAND STRATEGY", // Updated Title
    bgImage: "/slide 6.png", 
    
    brandName: {
      tagline: "Illuminating the path to borderless connection."
    },

    pillars: [
      { title: "Clarity", desc: "Understand instantly.", icon: "Sun" },
      { title: "Connection", desc: "Frictionless talk.", icon: "Link" },
      { title: "Creativity", desc: "Capture moments.", icon: "Zap" },
      { title: "Confidence", desc: "Premium design.", icon: "Gem" }
    ],

    personality: ["Modern", "Intelligent", "Global", "Youthful", "Human"]
  },
  {
    id: 13,
    type: "go-to-market", // New type for this specific layout
    title: "Go-to-Market Strategy",
    subtitle: "Execution: Launch & Distribution",
    bgImage: "/slide 5.png", // Global connectivity/airport vibe
    
    // CONTENT BLOCK 1: Marketing
    marketingStrategy: [
      {
        title: "Campus & Youth Activation",
        icon: "GraduationCap",
        points: [
          "Live demo zones in B-schools & colleges.",
          "Real-time exchange student experiences.",
          "Gather early product evangelists."
        ]
      },
      {
        title: "Influencer & Travel Branding",
        icon: "Plane",
        points: [
          "Collabs with travel & tech creators.",
          "Showcase usage abroad in real scenarios.",
          "Targeting foreign film watchers."
        ]
      },
      {
        title: "High-Impact Content",
        icon: "Video",
        points: [
          "Viral videos: Street food auto-translation.",
          "Real-time business meeting demos.",
          "Multilingual social meetup highlights."
        ]
      }
    ],

    // CONTENT BLOCK 2: Distribution
    distributionStrategy: [
      {
        title: "Retail Presence (Touch)",
        icon: "Store",
        points: [
          "Flagship Stores: Hands-on AR demos.",
          "Premium Tech Retailers: High visibility.",
          "Airport Duty-Free: Captive international audience."
        ]
      },
      {
        title: "E-Commerce (Scale)",
        icon: "ShoppingCart",
        points: [
          "Official Website: Pre-orders & data.",
          "Amazon/Flipkart: Mass logistics scale.",
          "Subscription model integration."
        ]
      },
      {
        title: "Logistics Backbone (Speed)",
        icon: "Truck",
        points: [
          "Global carriers (DHL, FedEx).",
          "Regional fulfillment centers.",
          "Just-In-Time (JIT) manufacturing."
        ]
      },
      {
        title: "Strategic Partnerships (Reach)",
        icon: "Handshake",
        points: [
          "Telecom & Airline bundles.",
          "Language learning platform integrations.",
          "Corporate B2B deployment."
        ]
      }
    ]
  },
  {
    id: 14,
    type: "strategy-accordion",
    title: "Commercial & Growth Engine",
    bgImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop", // Modern corporate meeting / high-tech office
    
    // SECTION 1: SALES STRATEGY
    sales: {
      title: "Sales Strategy",
      subtitle: "Reaching B2C + B2B",
      channels: [
        { type: "Direct", desc: "Website + Flagship Stores", benefit: "Higher margins, deep insight." },
        { type: "Indirect", desc: "Retail + Telecom Partners", benefit: "Scale & regional reach." }
      ],
      segments: [
        { 
          type: "B2C Focus", 
          target: "Tech Enthusiasts, Students, Travelers", 
          msg: "Break Language Barriers • Enhance Experiences",
          icon: "UserCircle"
        },
        { 
          type: "B2B Focus", 
          target: "Hotels, Airlines, MNCs, Education", 
          msg: "Enable Seamless Global Collaboration",
          icon: "Building2"
        }
      ]
    },

    // SECTION 2: ECOSYSTEM STRATEGY
    ecosystem: {
      title: "Engagement Ecosystem",
      subtitle: "Retention & Loyalty",
      features: [
        { text: "Glass+ Loyalty System", icon: "HeartHandshake" },
        { text: "Premium AR & Translation Packs", icon: "Zap" },
        { text: "24/7 Support + Remote Diagnostics", icon: "Headphones" },
        { text: "Premium 1-Year Warranty", icon: "ShieldCheck" }
      ],
      kpis: [
        { label: "NPS Target", value: "+50", icon: "Activity" },
        { label: "Satisfaction", value: "98%", icon: "CheckCircle2" },
        { label: "Sales Growth", value: "Global", icon: "Globe" },
        { label: "CAC", value: "Optimized", icon: "BarChart3" }
      ]
    }
  },
  {
    id: 15,
    type: "price-reveal", // Unique type for this specific layout
    // We will use a dark, abstract light background for focus
    bgImage: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2672&auto=format&fit=crop", 
    header: "THE FUTURE OF WEARABLE AI",
    subheader: "Now Within Reach",
    priceMain: "₹10,999",
    priceMainLabel: "Starting at",
    pricePremium: "Up to ₹21,999 (Premium Model)",
    footer: "Advanced AI translation. Intelligent multimedia. Designed for everyday life."
  }
  ];


// --- 2. GLASSMORPHISM CARD COMPONENT ---
const GlassCard = ({ children, style }) => (
  <div style={{
    background: 'rgba(0, 0, 0, 0.6)', // Darker tint for readability
    backdropFilter: 'blur(20px)',     // The Blur Effect
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
    padding: '40px',
    color: 'white',
    ...style
  }}>
    {children}
  </div>
);
  const FlipCard = ({ product, onClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      // If parent passes an onClick (like in Slide 3), use it. 
      // Otherwise, default to the flip behavior.
      onClick={onClick ? onClick : () => setIsFlipped(!isFlipped)} 
      style={{ perspective: '1000px', width: '280px', height: '350px', cursor: 'pointer' }}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ width: '100%', height: '100%', transformStyle: 'preserve-3d', position: 'relative' }}
      >
        {/* FRONT OF CARD */}
        <div style={{
          position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden',
          background: `linear-gradient(135deg, ${product.color}22, rgba(0,0,0,0.8))`, backdropFilter: 'blur(20px)', borderRadius: '24px',
          borderTop: `4px solid ${product.color}`, border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px'
        }}>
          <h3 style={{ fontSize: '2.2rem', color: product.color, textShadow: `0 0 20px ${product.color}` }}>{product.name}</h3>
          <p style={{ fontSize: '1rem', fontStyle: 'italic', marginTop: '10px', opacity: 0.8 }}>{product.tagline}</p>
          <div style={{ marginTop: '30px', fontSize: '0.8rem', opacity: 0.5, border: '1px solid white', padding: '5px 10px', borderRadius: '20px' }}>
             Click to Details ↻
          </div>
        </div>

        {/* BACK OF CARD (Rotated 180deg) */}
        <div style={{
          position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden',
          background: `linear-gradient(135deg, ${product.color}44, rgba(0,0,0,0.95))`,
          borderRadius: '24px',
          borderTop: `4px solid ${product.color}`, 
          borderBottom: `1px solid ${product.color}`,
          transform: 'rotateY(180deg)',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', 
          padding: '30px 20px',
          boxShadow: `inset 0 0 30px rgba(0,0,0,0.8)`
        }}>
          
          <div style={{ 
            padding: '4px', borderRadius: '50%', 
            border: `1px dashed ${product.color}`, marginBottom: '20px',
            boxShadow: `0 0 15px ${product.color}40`
          }}>
            <img 
              src={product.backImage} 
              alt="icon" 
              style={{ 
                width:' 100px', height: '70px', borderRadius: '50%', objectFit: 'cover', display: 'block'
              }} 
            />
          </div>

          <h3 style={{ marginBottom: '20px', color: '#fff', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.8 }}>
            Specifications
          </h3>
          
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {product.features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                style={{ 
                  display: 'flex', alignItems: 'center', gap: '10px',
                  background: 'rgba(255,255,255,0.03)', 
                  padding: '10px 12px', borderRadius: '8px',
                  borderLeft: `3px solid ${product.color}`,
                  borderRight: '1px solid rgba(255,255,255,0.05)',
                  fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)'
                }}
              >
                <CheckCircle2 size={16} color={product.color} />
                <span style={{ fontWeight: '300' }}>{feature}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </div>
  );
};
const MissionFlipCard = ({ mission, vision }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Helper to render the modern list
  const renderList = (items, color) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', marginTop: '20px' }}>
      {items.map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + (i * 0.1) }}
          style={{ 
            display: 'flex', alignItems: 'center', gap: '15px',
            background: 'rgba(255,255,255,0.05)', padding: '12px 15px', borderRadius: '8px',
            borderLeft: `3px solid ${color}`,
            fontSize: '1rem', color: 'rgba(255,255,255,0.9)',
            textAlign: 'left'
          }}
        >
          <CheckCircle2 size={18} color={color} />
          <span>{item}</span>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div 
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: '1000px', width: '450px', height: '600px', cursor: 'pointer', margin: '0 auto' }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 20 }}
        style={{ width: '100%', height: '100%', transformStyle: 'preserve-3d', position: 'relative' }}
      >
        {/* FRONT: MISSION */}
        <div style={{
          position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden',
          background: `linear-gradient(135deg, ${mission.color}22, rgba(0,0,0,0.9))`,
          backdropFilter: 'blur(30px)', borderRadius: '30px',
          border: `1px solid ${mission.color}44`,
          boxShadow: `0 0 50px ${mission.color}22`,
          display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px'
        }}>
          <div style={{ color: mission.color, marginBottom: '20px', filter: `drop-shadow(0 0 10px ${mission.color})` }}>
            {mission.icon}
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', letterSpacing: '2px' }}>{mission.title}</h2>
          <p style={{ color: mission.color, textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '10px' }}>{mission.subtitle}</p>
          
          <div style={{ width: '50px', height: '3px', background: mission.color, marginBottom: '20px' }} />

          {renderList(mission.points, mission.color)}

          <div style={{ marginTop: 'auto', opacity: 0.5, fontSize: '0.9rem' }}>Click to see Vision ↻</div>
        </div>

        {/* BACK: VISION (Rotated) */}
        <div style={{
          position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden',
          background: `linear-gradient(135deg, ${vision.color}22, rgba(0,0,0,0.9))`,
          backdropFilter: 'blur(30px)', borderRadius: '30px',
          border: `1px solid ${vision.color}44`,
          boxShadow: `0 0 50px ${vision.color}22`,
          transform: 'rotateY(180deg)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px'
        }}>
          <div style={{ color: vision.color, marginBottom: '20px', filter: `drop-shadow(0 0 10px ${vision.color})` }}>
            {vision.icon}
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', letterSpacing: '2px' }}>{vision.title}</h2>
          <p style={{ color: vision.color, textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '10px' }}>{vision.subtitle}</p>
          
          <div style={{ width: '50px', height: '3px', background: vision.color, marginBottom: '20px' }} />

          {renderList(vision.points, vision.color)}

           <div style={{ marginTop: 'auto', opacity: 0.5, fontSize: '0.9rem' }}>Click to see Mission ↻</div>
        </div>

      </motion.div>
    </div>
  );
};

// --- 3. MAIN APP ---
const App = () => {
  
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [activeTab, setActiveTab] = useState('marketing');
  const [activePanel, setActivePanel] = useState('sales');
  const [isPriceRevealed, setIsPriceRevealed] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const nextSlide = () => { if (index < slides.length - 1) { setDirection(1); setIndex(index + 1); }};
  const prevSlide = () => { if (index > 0) { setDirection(-1); setIndex(index - 1); }};

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [index]);

  useEffect(() => {
    let timeout;
    const handleWheel = (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (e.deltaY > 50) nextSlide();
        if (e.deltaY < -50) prevSlide();
      }, 100);
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [index]);

  // SUPER CAVE ANIMATION VARIANTS
  const variants = {
    enter: (d) => ({ scale: d > 0 ? 0.2 : 2, opacity: 0, filter: 'blur(10px)', zIndex: 0 }),
    center: { scale: 1, opacity: 1, filter: 'blur(0px)', zIndex: 1, transition: { duration: 0.8, type: "spring" } },
    exit: (d) => ({ scale: d > 0 ? 2 : 0.2, opacity: 0, filter: 'blur(10px)', zIndex: 0, transition: { duration: 0.5 } })
  };

  const current = slides[index];

  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden', background: '#000', position: 'relative' }}>
      
      {/* BACKGROUND LAYER (Transitions Smoothly) */}
      {/* BACKGROUND LAYER (Handles Images AND Videos) */}
      <AnimatePresence mode='popLayout'>
        {current.video ? (
          <motion.div
            key={current.video}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }} // Adjust brightness here (0.5 = 50% dark)
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
          >
            <video 
              src={current.video} 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </motion.div>
        ) : (
          <motion.img 
            key={current.bgImage}
            src={current.bgImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
          />
        )}
      </AnimatePresence>

      {/* CONTENT LAYER */}
      <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <AnimatePresence custom={direction} mode='popLayout'>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ width: '80%', maxWidth: '1200px', textAlign: 'center' }}
          >
            {/* HERO */}
            {current.type === 'hero' && (
              <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                
                {/* 1. Main Title - Massive & Glowing */}
                <motion.h1 
                  initial={{ scale: 0.8, opacity: 0, filter: 'blur(20px)' }}
                  animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  style={{ 
                    fontSize: '10rem', // Massive size
                    fontWeight: '900', 
                    letterSpacing: '-8px',
                    lineHeight: '0.9',
                    background: 'linear-gradient(to bottom, #ffffff 0%, #888888 100%)', // Metallic Gradient
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 40px rgba(0, 210, 255, 0.4))', // Blue Neon Glow
                    marginBottom: '10px'
                  }}>
                  {current.title}
                </motion.h1>

                {/* 2. Subtitle - Spaced Out & Clean */}
                <motion.h2 
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  style={{ 
                    fontSize: '1.5rem', 
                    color: '#00d2ff', 
                    textTransform: 'uppercase', 
                    letterSpacing: '12px', // Wide spacing for modern look
                    marginBottom: '40px',
                    textShadow: '0 0 20px rgba(0, 210, 255, 0.8)'
                  }}>
                  {current.subtitle}
                </motion.h2>

                {/* 3. Description - Glass Card Fade In */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <GlassCard style={{ maxWidth: '600px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.8 }}>{current.description}</p>
                  </GlassCard>
                </motion.div>

                {/* 4. Floating Scroll Indicator (New) */}
                <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1, y: [0, 10, 0] }} // Up and down "floating" animation
                   transition={{ delay: 2, duration: 2, repeat: 9999, ease: "easeInOut" }}
                   style={{ position: 'absolute', bottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.6 }}
                >
                   <span style={{ fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '10px' }}></span>
                   <ArrowRight style={{ transform: 'rotate(90deg)' }} /> 
                </motion.div>

              </div>
            )}
            {/* MISSION / VISION */}
            {current.type === 'mission-vision' && (
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                
                {/* 1. ANIMATED TITLE CONTAINER */}
                <div style={{ position: 'relative', marginBottom: '50px', zIndex: 10 }}>
                  
                  {/* The Main Title: Slides Up + Blurs In */}
                  <motion.h1
                    initial={{ y: 80, opacity: 0, filter: 'blur(20px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    style={{ 
                      fontSize: '5rem', 
                      fontWeight: '800', 
                      lineHeight: '1',
                      // Metallic Blue/Gold Gradient to match Mission/Vision colors
                      background: 'linear-gradient(to bottom, #ffffff 40%, #00d2ff 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 0 30px rgba(0, 210, 255, 0.3))'
                    }}
                  >
                    {current.title}
                  </motion.h1>

                  {/* The Subtitle: Wide Spacing that tightens */}
                  <motion.p
                    initial={{ opacity: 0, letterSpacing: '20px' }}
                    animate={{ opacity: 1, letterSpacing: '6px' }}
                    transition={{ delay: 0.5, duration: 1.5, ease: "circOut" }}
                    style={{ 
                      fontSize: '1.2rem', 
                      color: '#fff', 
                      textTransform: 'uppercase', 
                      marginTop: '15px', 
                      opacity: 0.8 
                    }}
                  >
                    {current.subtitle}
                  </motion.p>

                  {/* Decorative Glowing Lines */}
                  <motion.div 
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: '150px', opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    style={{ 
                      height: '4px', 
                      background: '#00d2ff', 
                      margin: '20px auto 0', 
                      borderRadius: '2px',
                      boxShadow: '0 0 20px #00d2ff'
                    }} 
                  />
                </div>
                
                {/* The Single Center Card (Keep existing logic) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <MissionFlipCard mission={current.mission} vision={current.vision} />
                </motion.div>

              </div>
            )}
            {/* SPLIT */}
            {current.type === 'split' && (
              <div style={{ display: 'flex', gap: '30px' }}>
                {[current.left, current.right].map((item, i) => (
                   <GlassCard key={i} style={{ flex: 1, textAlign: 'left', transform: `translateY(${i * 40}px)` }}>
                     <div style={{ color: '#00d2ff', marginBottom: '20px' }}>{item.icon}</div>
                     <h2 style={{ fontSize: '2.5rem' }}>{item.title}</h2>
                     <p>{item.text}</p>
                   </GlassCard>
                ))}
              </div>
            )}

         {/* PRODUCT */}
            {/* --- SLIDE 3: PRODUCT DUO (Updated: No Tech Specs Button) --- */}
            {current.type === 'product-duo' && (
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                
                {/* STATE 1: DEFAULT VIEW (Title + 2 Cards) */}
                {!activeProduct && (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}
                  >
                    {/* TITLE BLOCK */}
                    <div style={{ marginBottom: '40px', position: 'relative', display: 'inline-block', marginTop: '40px' }}>
                      <motion.h2
                        layoutId="title-main"
                        style={{
                          fontSize: '5rem', fontWeight: '900', lineHeight: 1, textTransform: 'uppercase',
                          background: 'linear-gradient(to right, #FF416C 20%, #fff 50%, #00B4DB 80%)',
                          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: 0
                        }}
                      >
                        {current.title}
                      </motion.h2>
                      <motion.p style={{ fontSize: '1.2rem', color: '#fff', letterSpacing: '4px', marginTop: '10px', opacity: 0.8, textTransform: 'uppercase' }}>
                        {current.subtitle}
                      </motion.p>
                    </div>

                    {/* CARDS CONTAINER */}
                    <div style={{ display: 'flex', gap: '80px', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                      {current.products.map((p, i) => (
                        <motion.div 
                          key={i}
                          layoutId={`card-container-${p.name}`}
                          onClick={() => setActiveProduct(p)} // CLICK TRIGGER
                          whileHover={{ scale: 1.05, y: -10 }}
                          style={{ cursor: 'pointer' }}
                        >
                           <FlipCard product={p} onClick={() => setActiveProduct(p)} />
                        </motion.div>
                      ))}
                    </div>
                    
                    <p style={{ opacity: 0.5, marginTop: '20px', fontSize: '0.9rem' }}>Click a model to explore details</p>
                  </motion.div>
                )}

                {/* STATE 2: DETAILED SPLIT VIEW (Active Product) */}
                <AnimatePresence>
                  {activeProduct && (
                    <motion.div
                      layoutId={`card-container-${activeProduct.name}`}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      style={{ 
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
                        background: '#000', zIndex: 20, display: 'flex'
                      }}
                    >
                      {/* BACK BUTTON (Top Left) */}
                      <button 
                        onClick={() => setActiveProduct(null)}
                        style={{ 
                          position: 'absolute', 
                          top: '-300px',
                          left: '30px',
                          zIndex: 100,
                          background: 'rgba(255,255,255,0.1)', 
                          border: '1px solid rgba(255,255,255,0.2)', 
                          borderRadius: '50%',
                          width: '50px', 
                          height: '50px', 
                          cursor: 'pointer', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          backdropFilter: 'blur(10px)',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                        }}
                      >
                        <ArrowRight size={24} color="#fff" style={{ transform: 'rotate(180deg)' }} />
                      </button>

                      {/* LEFT SIDE: LARGE VISUAL */}
                      <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `radial-gradient(circle at center, ${activeProduct.color}22, #000)` }}>
                         {/* Large Product Image */}
                         <motion.img 
                           src={activeProduct.backImage} 
                           initial={{ scale: 0.8, opacity: 0 }} 
                           animate={{ scale: 1, opacity: 1 }} 
                           transition={{ delay: 0.2 }}
                           style={{ 
                             width: '90%',        // UPDATED SIZE
                             maxWidth: '800px',   // UPDATED SIZE
                             objectFit: 'contain', 
                             filter: `drop-shadow(0 0 50px ${activeProduct.color}66)` 
                           }}
                         />
                         {/* Decorative Background Text */}
                         <h1 style={{ 
                           position: 'absolute', fontSize: '15rem', opacity: 0.05, fontWeight: '900', 
                           color: '#fff', whiteSpace: 'nowrap', zIndex: 0, top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-90deg)'
                         }}>
                           {activeProduct.name.split(" ")[1]} 
                         </h1>
                      </div>

                      {/* RIGHT SIDE: CONTENT & SPECS */}
                      <div style={{ flex: 1, padding: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'rgba(255,255,255,0.02)' }}>
                        
                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                          <h5 style={{ color: activeProduct.color, fontSize: '1.2rem', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '10px' }}>
                             Flagship Model
                          </h5>
                          <h1 style={{ fontSize: '4rem', fontWeight: '900', color: '#fff', margin: 0, lineHeight: 1 }}>
                            {activeProduct.name}
                          </h1>
                          <p style={{ fontSize: '1.5rem', color: '#ccc', fontStyle: 'italic', marginTop: '10px', marginBottom: '40px' }}>
                            "{activeProduct.tagline}"
                          </p>
                        </motion.div>

                        {/* FEATURES LIST */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                          {activeProduct.features.map((feature, i) => (
                            <motion.div 
                              key={i}
                              initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 + (i * 0.1) }}
                              style={{ 
                                display: 'flex', alignItems: 'center', gap: '20px', 
                                padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px',
                                borderLeft: `4px solid ${activeProduct.color}`
                              }}
                            >
                               <CheckCircle2 color={activeProduct.color} size={24} />
                               <span style={{ fontSize: '1.2rem', color: '#fff' }}>{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* CTA Only */}
                        <motion.div 
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                          style={{ marginTop: '50px', display: 'flex', gap: '20px' }}
                        >
                           <div style={{ padding: '15px 30px', background: activeProduct.color, color: '#000', fontWeight: 'bold', borderRadius: '30px', fontSize: '1.1rem' }}>
                             Pre-Order Now
                           </div>
                        </motion.div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
            {/* CHART */}
            {/* MARKET ANALYSIS (Bento Grid Layout) */}
            {/* MARKET ANALYSIS (Bento Grid Layout) */}
            {/* MARKET ANALYSIS (Bento Grid Layout) */}
            {current.type === 'market-analysis' && (
              <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                
                {/* 1. NEW AESTHETIC TITLE */}
                <div style={{ marginBottom: '30px', textAlign: 'center' }}>
                  <motion.h1
                    initial={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
                    animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    style={{ 
                      fontSize: '4rem', 
                      fontWeight: '900', 
                      textTransform: 'uppercase',
                      letterSpacing: '-2px',
                      background: 'linear-gradient(to right, #fff, #00d2ff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 0 15px rgba(0, 210, 255, 0.4))'
                    }}
                  >
                    {current.title}
                  </motion.h1>
                  
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    style={{ height: '2px', background: '#00d2ff', margin: '5px auto', opacity: 0.5 }}
                  />

                  <motion.p
                    initial={{ opacity: 0, letterSpacing: '10px' }}
                    animate={{ opacity: 1, letterSpacing: '4px' }}
                    transition={{ delay: 0.5, duration: 1 }}
                    style={{ fontSize: '1.2rem', color: '#ccc', textTransform: 'uppercase' }}
                  >
                    {current.subtitle}
                  </motion.p>
                </div>

                {/* THE GRID CONTENT (Existing logic, adjusted height) */}
                <div style={{ width: '100%', flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.2fr', gridTemplateRows: '1fr 1.5fr', gap: '25px' }}>
                  
                  {/* 1. TOP LEFT: MARKET SIZE */}
                  <GlassCard style={{ 
                    gridColumn: '1 / 2', gridRow: '1 / 2', 
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', 
                    borderLeft: '5px solid #00d2ff',
                    background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                      <h3 style={{ fontSize: '1.2rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '2px', color: '#ccc' }}>{current.marketStats.label}</h3>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', margin: '10px 0' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00d2ff' }}>{current.marketStats.unit}</span>
                        <span style={{ fontSize: '5rem', fontWeight: '900', lineHeight: 1, color: '#fff' }}>{current.marketStats.value}</span>
                      </div>
                      <div style={{ background: 'rgba(0, 210, 255, 0.15)', padding: '8px 15px', borderRadius: '20px', color: '#00d2ff', fontSize: '0.9rem', display: 'inline-block' }}>
                         {current.marketStats.highlight}
                      </div>
                    </motion.div>
                  </GlassCard>

                  {/* 2. BOTTOM LEFT: KEY TRENDS */}
                  <GlassCard style={{ 
                    gridColumn: '1 / 2', gridRow: '2 / 3', 
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', 
                    borderLeft: '5px solid #D500F9',
                    background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                     <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#D500F9', display: 'flex', alignItems: 'center', gap: '10px' }}>
                       <TrendingUp size={24} /> Key Market Trends
                     </h3>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                       {current.trends.map((trend, i) => (
                         <motion.div 
                           key={i}
                           initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + (i * 0.1) }}
                           style={{ display: 'flex', alignItems: 'start', gap: '12px', fontSize: '1rem', textAlign: 'left', opacity: 0.9 }}
                         >
                           <CheckCircle2 size={18} color="#D500F9" style={{ marginTop: '3px', flexShrink: 0 }} />
                           <span>{trend}</span>
                         </motion.div>
                       ))}
                     </div>
                  </GlassCard>

                  {/* 3. RIGHT SIDE: MARKET LEADERS */}
                  <GlassCard style={{ 
                    gridColumn: '2 / 3', gridRow: '1 / 3', 
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', 
                    borderTop: '5px solid #fff',
                    background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'left' }}>Market Leaders (2025)</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '100%' }}>
                      {current.leaders.map((leader, i) => (
                        <div key={i} style={{ width: '100%' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '1.1rem' }}>
                            <span style={{ fontWeight: 'bold' }}>{leader.name}</span>
                            <span style={{ color: leader.color, fontWeight: 'bold' }}>{leader.share}%</span>
                          </div>
                          <div style={{ width: '100%', height: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px', overflow: 'hidden' }}>
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${leader.share}%` }}
                              transition={{ delay: 0.5 + (i * 0.2), duration: 1.5, ease: "easeOut" }}
                              style={{ height: '100%', background: leader.color, borderRadius: '6px', boxShadow: `0 0 10px ${leader.color}` }}
                            />
                          </div>
                          <p style={{ fontSize: '0.9rem', opacity: 0.6, marginTop: '5px', textAlign: 'left', fontStyle: 'italic' }}>{leader.desc}</p>
                        </div>
                      ))}
                    </div>
                  </GlassCard>

                </div>
              </div>
            )}
            {/* TARGET MARKET & GROWTH (Minimalist Layout) */}
            {/* TARGET MARKET & GROWTH (Minimalist Layout) */}
            {current.type === 'target-growth' && (
              <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column' }}>
                
                {/* --- PASTE THE NEW TITLE HERE --- */}
                <div style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                  
                  {/* TOP LINE: Slides in from Left */}
                  <motion.h1
                    initial={{ x: -100, opacity: 0, filter: 'blur(10px)' }}
                    animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ 
                      fontSize: '4rem', fontWeight: '900', lineHeight: '0.9', color: '#ffffff', 
                      textTransform: 'uppercase', letterSpacing: '-2px', margin: 0
                    }}
                  >
                    TARGET MARKET,
                  </motion.h1>

                  {/* BOTTOM LINE: Slides in from Right */}
                  <motion.h1
                    initial={{ x: 100, opacity: 0, filter: 'blur(10px)' }}
                    animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                    style={{ 
                      fontSize: '3.5rem', fontWeight: '900', lineHeight: '1.1',
                      background: 'linear-gradient(to right, #FF416C, #00B4DB)', 
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                      textTransform: 'uppercase', letterSpacing: '-1px', margin: 0
                    }}
                  >
                    GROWTH INSIGHTS & DRIVERS
                  </motion.h1>

                  {/* DECORATIVE LINE */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '120px' }}
                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                    style={{ height: '6px', background: '#fff', marginTop: '15px', borderRadius: '4px' }}
                  />
                </div>
                {/* -------------------------------- */}

                {/* THE 2x2 GRID (This stays the same as before) */}
                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '30px' }}>
                   {/* ... keep your existing GlassCards here ... */}
                   {/* If you lost the grid code, let me know and I will send the FULL slide block again */}
                   
                   {/* QUADRANT 1: SEGMENTS */}
                  <GlassCard style={{ background: 'rgba(0,0,0,0.6)', borderTop: '2px solid #00B4DB', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ textAlign: 'left', marginBottom: '20px', fontSize: '1.2rem', color: '#00B4DB', textTransform: 'uppercase', letterSpacing: '2px' }}>Target Segments</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      {current.segments.map((seg, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '0.9rem' }}>
                          <div style={{ width: '100px', textAlign: 'left', opacity: 0.8 }}>{seg.label}</div>
                          <div style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                            <motion.div 
                              initial={{ width: 0 }} animate={{ width: `${seg.val}%` }} 
                              transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                              style={{ height: '100%', background: seg.color, borderRadius: '3px' }}
                            />
                          </div>
                          <div style={{ width: '40px', textAlign: 'right', fontWeight: 'bold' }}>{seg.val}%</div>
                        </div>
                      ))}
                    </div>
                  </GlassCard>

                  {/* QUADRANT 2: INDIA MARKET */}
                  <GlassCard style={{ background: 'rgba(0,0,0,0.6)', borderTop: '2px solid #FF416C', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ textAlign: 'left', marginBottom: '20px', fontSize: '1.2rem', color: '#FF416C', textTransform: 'uppercase', letterSpacing: '2px' }}>India Market</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      {[
                        { label: "Market Size", val: current.india.size },
                        { label: "Growth", val: current.india.growth },
                        { label: "Users", val: current.india.users },
                        { label: "Languages", val: "4 Major" }
                      ].map((stat, i) => (
                        <div key={i} style={{ textAlign: 'left' }}>
                          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff', letterSpacing: '-1px' }}>{stat.val}</div>
                          <div style={{ fontSize: '0.8rem', opacity: 0.6, textTransform: 'uppercase' }}>{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </GlassCard>

                  {/* QUADRANT 3: FINDINGS */}
                  <GlassCard style={{ background: 'rgba(0,0,0,0.6)', borderTop: '2px solid #00B4DB', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ textAlign: 'left', marginBottom: '20px', fontSize: '1.2rem', color: '#00B4DB', textTransform: 'uppercase', letterSpacing: '2px' }}>Key Findings</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {current.findings.map((item, i) => (
                        <motion.div 
                          key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + (i * 0.1) }}
                          style={{ display: 'flex', gap: '15px', textAlign: 'left', fontSize: '1rem', opacity: 0.9 }}
                        >
                          <div style={{ width: '6px', height: '6px', background: '#00B4DB', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                          <span>{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </GlassCard>

                  {/* QUADRANT 4: DRIVERS */}
                  <GlassCard style={{ background: 'rgba(0,0,0,0.6)', borderTop: '2px solid #FF416C', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ textAlign: 'left', marginBottom: '20px', fontSize: '1.2rem', color: '#FF416C', textTransform: 'uppercase', letterSpacing: '2px' }}>Growth Drivers</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {current.drivers.map((item, i) => (
                        <motion.div 
                          key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + (i * 0.1) }}
                          style={{ display: 'flex', gap: '15px', textAlign: 'left', fontSize: '1rem', opacity: 0.9 }}
                        >
                          <div style={{ width: '6px', height: '6px', background: '#FF416C', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                          <span>{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </GlassCard>

                </div>
              </div>
            )}
            {/* --- STORY 1: LANDSCAPE INTRO (Rotating Hero) --- */}
            {current.type === 'landscape-intro' && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
                
                {/* 1. Rotating Glasses Silhouette */}
                <motion.div
                  animate={{ rotateY: 360, rotateX: 10 }}
                  transition={{ duration: 10, repeat: 9999, ease: "linear" }}
                  style={{ marginBottom: '40px', filter: 'drop-shadow(0 0 20px rgba(0,210,255,0.5))' }}
                >
                  <Glasses size={120} color="#fff" strokeWidth={1} />
                </motion.div>

                {/* 2. Text Content */}
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '10px' }}>
                  {current.title}
                </motion.h1>
                <p style={{ fontSize: '1.5rem', maxWidth: '700px', opacity: 0.8, marginBottom: '50px' }}>{current.text}</p>

                {/* 3. Floating Breakdown Boxes */}
                <div style={{ display: 'flex', gap: '30px' }}>
                  {current.boxes.map((box, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + (i * 0.2) }}
                    >
                      <GlassCard style={{ width: '300px', padding: '30px', borderTop: `4px solid ${box.color}`, background: 'rgba(0,0,0,0.6)' }}>
                        <div style={{ color: box.color, marginBottom: '15px' }}>{box.icon}</div>
                        <h3 style={{ fontSize: '1.2rem' }}>{box.title}</h3>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* --- STORY 2: GROWTH OUTLOOK (Rising Animation) --- */}
            {current.type === 'growth-vertical' && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginBottom: '50px' }}>
                   <h1 style={{ fontSize: '5rem', fontWeight: '900', background: 'linear-gradient(to top, #00B4DB, #fff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                     {current.title}
                   </h1>
                   <p style={{ fontSize: '1.2rem', letterSpacing: '5px', textTransform: 'uppercase', color: '#00B4DB' }}>{current.subtitle}</p>
                </motion.div>

                {/* Rising List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '600px' }}>
                  {current.points.map((pt, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + (i * 0.2), type: "spring" }}
                      style={{ 
                        display: 'flex', alignItems: 'center', gap: '20px',
                        background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '15px',
                        borderLeft: '4px solid #39FF14', backdropFilter: 'blur(10px)'
                      }}
                    >
                      <div style={{ color: '#39FF14' }}>{pt.icon}</div> 
                      {/* ^ If icon fails, replace {pt.icon} with <ArrowRight /> */}
                      <span style={{ fontSize: '1.2rem', fontWeight: '500' }}>{pt.text}</span>
                      <MoveUpRight style={{ marginLeft: 'auto', opacity: 0.5 }} />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* --- STORY 3: CONVERGENCE CLIMAX (Merging Animation) --- */}
            {current.type === 'convergence-climax' && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
                
                {/* 1. The Merging Animation */}
                <div style={{ position: 'relative', height: '200px', width: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '40px' }}>
                  {/* Left Circle (AR) */}
                  <motion.div
                    initial={{ x: -150, scale: 0.8, opacity: 0.5 }}
                    animate={{ x: -20, scale: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", repeat: 9999, repeatType: "reverse" }}
                    style={{ width: '150px', height: '150px', borderRadius: '50%', background: '#FF416C', position: 'absolute', mixBlendMode: 'screen', filter: 'blur(10px)' }}
                  />
                  {/* Right Circle (AI) */}
                  <motion.div
                    initial={{ x: 150, scale: 0.8, opacity: 0.5 }}
                    animate={{ x: 20, scale: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", repeat: 9999, repeatType: "reverse" }}
                    style={{ width: '150px', height: '150px', borderRadius: '50%', background: '#00B4DB', position: 'absolute', mixBlendMode: 'screen', filter: 'blur(10px)' }}
                  />
                  {/* Center Flash */}
                  <motion.div
                     animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
                     transition={{ duration: 2, repeat: 9999, repeatType: "reverse" }}
                     style={{ position: 'absolute', zIndex: 10, color: '#fff' }}
                  >
                    
                  </motion.div>
                </div>

                {/* 2. Text */}
                <motion.h1 
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
                  style={{ fontSize: '5rem', fontWeight: '900', marginBottom: '20px', textShadow: '0 0 30px rgba(255,255,255,0.5)' }}>
                  {current.title}
                </motion.h1>
                <GlassCard style={{ maxWidth: '700px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>{current.text}</p>
                </GlassCard>

              </div>
            )}
            {/* --- SLIDE 9: DRIVERS FLOW LAYOUT --- */}
            {current.type === 'drivers-flow' && (
              <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column' }}>
                
                {/* 1. Title Section */}
                <div style={{ marginBottom: '40px', textAlign: 'left' }}>
                  <motion.h1 
                    initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
                    style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '10px', background: 'linear-gradient(to right, #fff, #00d2ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {current.title}
                  </motion.h1>
                  <motion.h2 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                    style={{ fontSize: '1.5rem', color: '#00d2ff', letterSpacing: '3px', textTransform: 'uppercase' }}>
                    {current.subtitle}
                  </motion.h2>
                </div>

                {/* 2. The Flow Container (Left -> Right) */}
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '40px' }}>
                  
                  {/* LEFT SIDE: THE 4 DRIVERS (Cascading in) */}
                  <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {current.drivers.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        {/* The Driver Card */}
                        <motion.div
                          initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + (i * 0.15), type: "spring" }}
                          style={{ flex: 1 }}
                        >
                          <GlassCard style={{ 
                            display: 'flex', alignItems: 'center', gap: '15px', padding: '20px',
                            background: 'rgba(0,0,0,0.6)', borderLeft: `4px solid ${item.color}`
                          }}>
                            <div style={{ color: item.color }}>{item.icon}</div>
                            <p style={{ fontSize: '1.1rem', textAlign: 'left', margin: 0 }}>{item.text}</p>
                          </GlassCard>
                        </motion.div>
                        
                        {/* Animated Connector Line */}
                        <motion.div 
                           initial={{ width: 0, opacity: 0 }} animate={{ width: '50px', opacity: 1 }} transition={{ delay: 1.2 + (i * 0.1) }}
                           style={{ height: '2px', background: `linear-gradient(to right, ${item.color}, #fff)`, boxShadow: `0 0 10px ${item.color}` }} 
                        />
                      </div>
                    ))}
                  </div>

                  {/* CENTER: FLOW ARROW */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.5, type: "spring" }}
                  >
                    <ArrowRight size={50} color="#fff" style={{ filter: 'drop-shadow(0 0 10px #fff)' }} />
                  </motion.div>

                  {/* RIGHT SIDE: THE IMPLICATION (The Result Hub) */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    style={{ flex: 1.5, height: '100%' }}
                  >
                    <GlassCard style={{ 
                      height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', 
                      background: 'linear-gradient(135deg, rgba(0, 210, 255, 0.1), rgba(0,0,0,0.8))',
                      border: '2px solid #00d2ff', boxShadow: '0 0 30px rgba(0, 210, 255, 0.2)'
                    }}>
                      <h3 style={{ fontSize: '1.8rem', color: '#00d2ff', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                        Strategic Implication
                      </h3>
                      <p style={{ fontSize: '1.6rem', fontWeight: 'bold', lineHeight: '1.4' }}>
                        {current.implication}
                      </p>
                      <div style={{ marginTop: '30px', width: '100%', height: '4px', background: 'linear-gradient(to right, #00d2ff, transparent)' }} />
                    </GlassCard>
                  </motion.div>

                </div>
              </div>
            )}
            {/* --- SLIDE 10: COMPETITIVE GAP LAYOUT --- */}
            {current.type === 'competitive-gap' && (
              <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                
                {/* 1. Title */}
                <div style={{ marginBottom: '50px', textAlign: 'center' }}>
                  <motion.h1 
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
                    style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '10px' }}>
                    {current.title}
                  </motion.h1>
                  <p style={{ fontSize: '1.2rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '2px' }}>{current.subtitle}</p>
                </div>

                {/* 2. The Split (Entertainment vs Translation) */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '60px', marginBottom: '50px' }}>
                  
                  {/* LEFT ISLAND: Entertainment */}
                  <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3, type: "spring" }}>
                    <GlassCard style={{ width: '280px', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderTop: `4px solid ${current.competitors[0].color}` }}>
                      <div style={{ color: current.competitors[0].color, marginBottom: '15px' }}>{current.competitors[0].icon}</div>
                      <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{current.competitors[0].title}</h2>
                      <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>{current.competitors[0].desc}</p>
                    </GlassCard>
                  </motion.div>

                  {/* THE "OR" DIVIDER */}
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }}
                    style={{ 
                      width: '60px', height: '60px', borderRadius: '50%', background: '#fff', color: '#000', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '1.2rem'
                    }}
                  >
                    OR
                  </motion.div>

                  {/* RIGHT ISLAND: Translation */}
                  <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3, type: "spring" }}>
                    <GlassCard style={{ width: '280px', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderTop: `4px solid ${current.competitors[1].color}` }}>
                      <div style={{ color: current.competitors[1].color, marginBottom: '15px' }}>{current.competitors[1].icon}</div>
                      <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{current.competitors[1].title}</h2>
                      <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>{current.competitors[1].desc}</p>
                    </GlassCard>
                  </motion.div>

                </div>

                {/* 3. THE GAP REVEAL (The Solution) */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  style={{ width: '700px' }}
                >
                  <GlassCard style={{ 
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(0,0,0,0.8))', 
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 0 40px rgba(0, 210, 255, 0.2)',
                    position: 'relative', overflow: 'hidden'
                  }}>
                    {/* Pulsing Glow Effect */}
                    <motion.div 
                      animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 2, repeat: Infinity }}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at center, rgba(0,210,255,0.2), transparent 70%)' }}
                    />
                    
                    <div style={{ position: 'relative', zIndex: 10 }}>
                      <h3 style={{ fontSize: '1.5rem', color: '#00d2ff', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                        {current.gap.title}
                      </h3>
                      <p style={{ fontSize: '1.3rem', lineHeight: '1.5', fontWeight: '500' }}>
                        {current.gap.text}
                      </p>
                      <div style={{ marginTop: '20px', fontSize: '0.9rem', opacity: 0.7, fontStyle: 'italic', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '10px' }}>
                        Insight: {current.insight}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>

              </div>
            )}
            {/* --- SLIDE 11: STRATEGIC OVERVIEW --- */}
            {current.type === 'strategic-overview' && (
              <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column' }}>
                
                {/* 1. Animated Header */}
                <div style={{ marginBottom: '30px', textAlign: 'center' }}>
                  <motion.h1 
                    initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}
                    style={{ fontSize: '3.5rem', fontWeight: '900', color: '#fff', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    {current.title}
                  </motion.h1>
                </div>

                {/* 2. The Tri-Column Grid */}
                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr 1.2fr', gap: '25px', padding: '0 20px' }}>
                  
                  {/* COLUMN 1: ADVANTAGES (Green/Blue Theme) */}
                  <GlassCard style={{ background: 'rgba(0,0,0,0.6)', borderTop: '4px solid #00d2ff', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: '#00d2ff' }}>
                       <Zap size={28} />
                       <h3 style={{ fontSize: '1.5rem', textTransform: 'uppercase' }}>Our Edge</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      {current.advantages.map((item, i) => (
                        <motion.div 
                          key={i} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 + (i * 0.15) }}
                          style={{ display: 'flex', gap: '10px', textAlign: 'left', fontSize: '1rem', background: 'rgba(0, 210, 255, 0.1)', padding: '12px', borderRadius: '8px' }}
                        >
                          <CheckCircle2 size={18} color="#00d2ff" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </GlassCard>

                  {/* COLUMN 2: BARRIERS (Orange/Red Theme) */}
                  <GlassCard style={{ background: 'rgba(0,0,0,0.6)', borderTop: '4px solid #FF416C', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: '#FF416C' }}>
                       <Shield size={28} />
                       <h3 style={{ fontSize: '1.5rem', textTransform: 'uppercase' }}>Hurdles</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      {current.barriers.map((item, i) => (
                        <motion.div 
                          key={i} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 + (i * 0.15) }}
                          style={{ display: 'flex', gap: '10px', textAlign: 'left', fontSize: '1rem', background: 'rgba(255, 65, 108, 0.1)', padding: '12px', borderRadius: '8px' }}
                        >
                          <div style={{ width: '6px', height: '6px', background: '#FF416C', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                          <span>{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </GlassCard>

                  {/* COLUMN 3: MARKET POTENTIAL (Gold/Premium Theme) */}
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1 }}
                    style={{ height: '100%' }}
                  >
                    <GlassCard style={{ 
                      height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                      background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(0,0,0,0.8))', 
                      border: '2px solid #FFD700', boxShadow: '0 0 30px rgba(255, 215, 0, 0.15)'
                    }}>
                      <div style={{ marginBottom: '20px', background: '#FFD700', borderRadius: '50%', padding: '15px', color: '#000' }}>
                        <Rocket size={40} />
                      </div>
                      <h3 style={{ fontSize: '1.5rem', color: '#FFD700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '5px' }}>Total Market</h3>
                      <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#fff', lineHeight: '1', textShadow: '0 0 20px #FFD700' }}>
                        {current.potential.value}
                      </h2>
                      <p style={{ fontSize: '1.2rem', color: '#FFD700', opacity: 0.8, marginBottom: '20px' }}>{current.potential.year}</p>
                      
                      <div style={{ width: '80%', height: '1px', background: 'rgba(255,255,255,0.2)', marginBottom: '20px' }} />
                      
                      <div style={{ textAlign: 'center', opacity: 0.9 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '5px' }}>
                          <Star size={16} color="#FFD700" fill="#FFD700" />
                          <span style={{ fontWeight: 'bold' }}>Early Adopters</span>
                        </div>
                        <p style={{ fontSize: '0.95rem' }}>{current.potential.adopters}</p>
                      </div>
                    </GlassCard>
                  </motion.div>

                </div>
              </div>
            )}
            {/* --- SLIDE 12: BRAND IDENTITY (Minimalist Redesign) --- */}
            {/* --- SLIDE 12: BRAND STRATEGY (Modern Aesthetic Redesign) --- */}
            {current.id === 12 && (
              <div style={{ 
                width: '100%', height: '100%', display: 'flex', 
                // Darker, moodier background gradient overlay
                background: 'linear-gradient(to bottom right, rgba(0,0,0,0.9), rgba(10,10,30,0.6))',
                position: 'relative', overflow: 'hidden'
              }}>
                 {/* Subtle animated background light leak */}
                 <motion.div 
                    animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0, 210, 255, 0.15), transparent 70%)', filter: 'blur(80px)', zIndex: 0 }} 
                 />

                {/* --- LEFT PANEL: THE CORE IDENTITY (35%) --- */}
                <div style={{ flex: '0.8', padding: '80px 50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 2 }}>
                  
                  {/* Title header */}
                  <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <h5 style={{ color: '#00d2ff', fontSize: '0.9rem', letterSpacing: '3px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <span style={{ width: '40px', height: '2px', background: 'linear-gradient(to right, #00d2ff, transparent)' }}></span>
                      Brand Strategy
                    </h5>
                  </motion.div>

                  {/* THE MAIN GLASS CARD: Identity Breakdown */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                      borderRadius: '20px', padding: '40px', border: '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                    }}
                  >
                     {/* Animated "LUMI + NEX" typography */}
                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px' }}>
                        {/* LUMI slides right */}
                        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6, type: 'spring' }} style={{ textAlign: 'right' }}>
                            <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#fff', margin: 0, lineHeight: 0.9 }}>LUMI</h2>
                            <span style={{ color: '#00d2ff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>(Light)</span>
                        </motion.div>

                        {/* Central Connector */}
                        <motion.div 
                            initial={{ width: 0, opacity: 0 }} animate={{ width: '60px', opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }}
                            style={{ height: '2px', background: 'linear-gradient(to right, #00d2ff, #fff, #00d2ff)', margin: '0 20px', flexShrink: 0 }}
                        ></motion.div>

                        {/* NEX slides left */}
                        <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6, type: 'spring' }} style={{ textAlign: 'left' }}>
                            <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#fff', margin: 0, lineHeight: 0.9 }}>NEX</h2>
                            <span style={{ color: '#00d2ff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>(Connection)</span>
                        </motion.div>
                     </div>

                     <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', fontSize: '1.1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', margin: 0 }}>
                        "{current.brandName.tagline}"
                     </p>
                  </motion.div>
                </div>

                {/* --- RIGHT PANEL: PILLARS & PERSONALITY (65%) --- */}
                <div style={{ flex: '1.2', padding: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 2 }}>
                  
                  {/* 2x2 Grid of Interactive Glass Cards */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginBottom: '50px' }}>
                    {current.pillars.map((item, i) => {
                      const Icon = item.icon === 'Sun' ? Sun : item.icon === 'Link' ? Link : item.icon === 'Zap' ? Zap : Gem;
                      return (
                        <motion.div 
                          key={i} 
                          // Staggered entrance animation
                          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 + (i * 0.15), type: 'spring', damping: 12 }}
                          // Hover animation for interactivity
                          whileHover={{ scale: 1.03, backgroundColor: 'rgba(0, 210, 255, 0.08)', borderColor: 'rgba(0, 210, 255, 0.3)' }}
                          style={{ 
                            background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)', borderRadius: '16px', padding: '25px', 
                            border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', gap: '20px', alignItems: 'flex-start', cursor: 'default', transition: 'background-color 0.3s, border-color 0.3s'
                          }}
                        >
                          <div style={{ 
                            padding: '14px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(0,210,255,0.2), rgba(0,210,255,0.05))', 
                            color: '#00d2ff', border: '1px solid rgba(0,210,255,0.2)', boxShadow: '0 0 15px rgba(0,210,255,0.1)'
                          }}>
                            <Icon size={26} />
                          </div>
                          <div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>{item.title}</h3>
                            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Footer: Personality Traits */}
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
                    style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px' }}
                  >
                    <span style={{ fontSize: '0.8rem', color: '#666', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
                      Brand Personality
                    </span>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {current.personality.map((trait, i) => (
                        <motion.span 
                          key={i}
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 + (i * 0.1) }}
                          style={{ 
                            padding: '8px 18px', borderRadius: '30px', background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)', color: '#ccc', fontSize: '0.9rem', fontWeight: '500' 
                        }}>
                          {trait}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                </div>
              </div>
            )}
           {/* --- SLIDE 13: GO-TO-MARKET STRATEGY (High-End Aesthetic) --- */}
            {current.id === 13 && (
              <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                
                {/* Background & Overlay */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(12, 12, 12, 0.50)' }} />
                    <motion.div 
                        animate={{ opacity: [0.2, 0.4, 0.2] }} 
                        transition={{ duration: 5, repeat: Infinity }}
                        style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(0,210,255,0.1) 0%, transparent 50%)' }} 
                    />
                </div>

                {/* Header Area */}
                <div style={{ zIndex: 2, textAlign: 'center', marginTop: '30px', marginBottom: '20px' }}>
                  <h1 style={{ fontSize: '3rem', fontWeight: '900', color: '#fff', marginBottom: '5px' }}>{current.title}</h1>
                  <p style={{ fontSize: '1.1rem', color: '#00d2ff', letterSpacing: '3px', textTransform: 'uppercase' }}>{current.subtitle}</p>
                </div>

                {/* --- AESTHETIC TOGGLE SWITCH --- */}
                <div style={{ 
                    zIndex: 2, display: 'flex', background: 'rgba(255,255,255,0.05)', 
                    borderRadius: '50px', padding: '4px', position: 'relative', marginBottom: '30px',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                  {/* Sliding Background */}
                  <motion.div
                    layoutId="activeTabBackground"
                    style={{
                        position: 'absolute', top: '4px', bottom: '4px',
                        left: activeTab === 'marketing' ? '4px' : '50%',
                        width: 'calc(50% - 4px)',
                        background: 'linear-gradient(90deg, #00d2ff, #0072ff)',
                        borderRadius: '40px', zIndex: 0,
                        boxShadow: '0 0 15px rgba(0, 210, 255, 0.5)'
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />

                  {/* Buttons */}
                  {['marketing', 'distribution'].map(tab => (
                    <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)} 
                        style={{ 
                            position: 'relative', zIndex: 1, padding: '10px 35px', background: 'none', border: 'none', 
                            cursor: 'pointer', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px',
                            color: activeTab === tab ? '#fff' : 'rgba(255,255,255,0.5)', transition: 'color 0.3s' 
                        }}
                    >
                        {tab === 'marketing' ? 'Marketing & Launch' : 'Distribution Strategy'}
                    </button>
                  ))}
                </div>
                
                {/* --- CONTENT AREA --- */}
                <div style={{ zIndex: 2, width: '95%', maxWidth: '1300px', flex: 1, paddingBottom: '20px' }}>
                  <AnimatePresence mode='wait'>
                    
                    {/* VIEW 1: MARKETING (Cards with Animated List Rows) */}
                    {activeTab === 'marketing' && (
                      <motion.div
                        key="marketing"
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', height: '100%' }}
                      >
                        {current.marketingStrategy.map((item, i) => {
                            const IconComp = item.icon === 'GraduationCap' ? GraduationCap : item.icon === 'Plane' ? Plane : Video;
                            const colors = ['#00d2ff', '#ff0080', '#ffcc00']; // Cyan, Pink, Gold accents
                            
                            return (
                              <GlassCard key={i} style={{ 
                                padding: '25px', display: 'flex', flexDirection: 'column', gap: '20px',
                                background: 'rgba(255,255,255,0.03)', borderTop: `4px solid ${colors[i]}`,
                                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                              }}>
                                  {/* Card Header */}
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', paddingBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                      <div style={{ padding: '12px', background: `rgba(255,255,255,0.05)`, borderRadius: '12px', color: colors[i], boxShadow: `0 0 15px ${colors[i]}40` }}>
                                          <IconComp size={24} />
                                      </div>
                                      <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff', lineHeight: 1.1, textTransform: 'uppercase' }}>{item.title}</h3>
                                  </div>

                                  {/* Animated Bullet Points */}
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                      {item.points.map((point, ptIndex) => (
                                          <motion.div 
                                            key={ptIndex}
                                            initial={{ opacity: 0, x: -20 }} 
                                            animate={{ opacity: 1, x: 0 }} 
                                            transition={{ delay: 0.3 + (ptIndex * 0.1) }}
                                            whileHover={{ scale: 1.02, x: 5, backgroundColor: 'rgba(255,255,255,0.08)' }}
                                            style={{ 
                                                display: 'flex', alignItems: 'center', gap: '12px', 
                                                background: 'rgba(255,255,255,0.03)', padding: '12px 15px', borderRadius: '8px',
                                                borderLeft: `2px solid ${colors[i]}`, cursor: 'default'
                                            }}
                                          >
                                              <ArrowRight size={16} color={colors[i]} style={{ flexShrink: 0 }} />
                                              <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.4 }}>{point}</span>
                                          </motion.div>
                                      ))}
                                  </div>
                              </GlassCard>
                            )
                        })}
                      </motion.div>
                    )}

                    {/* VIEW 2: DISTRIBUTION (Grid with "Flow" style bullets) */}
                    {activeTab === 'distribution' && (
                       <motion.div
                         key="distribution"
                         initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4 }}
                         style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '20px', height: '90%' }}
                       >
                          {current.distributionStrategy.map((item, i) => {
                              const DistIcons = { Store: Store, ShoppingCart: ShoppingCart, Truck: Truck, Handshake: Briefcase };
                              const IconComp = DistIcons[item.icon] || Zap;

                              return (
                                <GlassCard key={i} style={{ 
                                  padding: '0', display: 'flex', overflow: 'hidden',
                                  background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.2) 100%)',
                                  border: '1px solid rgba(255,255,255,0.05)'
                                }}>
                                    {/* Left Icon Strip */}
                                    <div style={{ width: '80px', background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                                        <div style={{ color: '#00d2ff', filter: 'drop-shadow(0 0 8px rgba(0,210,255,0.5))' }}>
                                            <IconComp size={32} />
                                        </div>
                                    </div>

                                    {/* Right Content */}
                                    <div style={{ padding: '25px', flex: 1 }}>
                                        <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#fff', marginBottom: '15px' }}>{item.title}</h3>
                                        
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            {item.points.map((point, ptIndex) => (
                                                <motion.div 
                                                    key={ptIndex}
                                                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + (ptIndex * 0.1) }}
                                                    style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                                                >
                                                    <CheckCircle2 size={14} color="#00d2ff" style={{ opacity: 0.7 }} />
                                                    <span style={{ fontSize: '0.95rem', color: '#ccc' }}>{point}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </GlassCard>
                              )
                          })}
                       </motion.div>
                    )}

                  </AnimatePresence>
                </div>
              </div>
            )}
            {/* --- SLIDE 14: STRATEGY ACCORDION (Fixed) --- */}
            {current.id === 14 && (
              <div style={{ width: '100%', height: '100%', display: 'flex', overflow: 'hidden', background: '#000' }}>
                
                {/* --- LEFT PANEL: SALES STRATEGY --- */}
                <motion.div 
                  layout 
                  onClick={() => setActivePanel('sales')}
                  style={{ 
                    flex: activePanel === 'sales' ? 2 : 0.4, // Expands if active, shrinks if not
                    background: activePanel === 'sales' 
                        ? 'linear-gradient(135deg, rgba(10,10,30,0.95), rgba(0,0,0,0.9))' 
                        : 'linear-gradient(135deg, rgba(20,20,40,0.9), rgba(0,0,0,0.8))',
                    borderRight: '1px solid rgba(255,255,255,0.1)',
                    position: 'relative', cursor: activePanel === 'sales' ? 'default' : 'pointer',
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden'
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                >
                    {/* Background Image Overlay (Darkened) */}
                    <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.2, backgroundSize: 'cover', backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop)' }} />

                    {/* CONTENT (Only visible when Expanded) */}
                    {activePanel === 'sales' && (
                      <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                        style={{ padding: '60px', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                      >
                        <h5 style={{ color: '#00d2ff', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>Sales Strategy</h5>
                        <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#fff', marginBottom: '40px', lineHeight: 1 }}>Reaching B2C + B2B</h2>

                        {/* 1. Channels Row */}
                        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
                            {current.sales.channels.map((ch, i) => (
                                <div key={i} style={{ flex: 1, padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', borderLeft: '3px solid #00d2ff' }}>
                                    <h4 style={{ color: '#fff', margin: '0 0 5px 0' }}>{ch.type}</h4>
                                    <div style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '5px' }}>{ch.desc}</div>
                                    <div style={{ color: '#00d2ff', fontSize: '0.85rem', fontStyle: 'italic' }}>{ch.benefit}</div>
                                </div>
                            ))}
                        </div>

                        {/* 2. Segments Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                            {current.sales.segments.map((seg, i) => {
                                const Icon = seg.icon === 'UserCircle' ? UserCircle : Building2;
                                return (
                                    <GlassCard key={i} style={{ padding: '25px', background: 'rgba(0, 210, 255, 0.03)', border: '1px solid rgba(0,210,255,0.1)' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                                            <Icon color="#00d2ff" size={24} />
                                            <h3 style={{ fontSize: '1.2rem', color: '#fff', margin: 0 }}>{seg.type}</h3>
                                        </div>
                                        <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '15px', lineHeight: 1.4 }}>{seg.target}</p>
                                        <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', fontSize: '0.85rem', color: '#fff', fontStyle: 'italic' }}>
                                            "{seg.msg}"
                                        </div>
                                    </GlassCard>
                                )
                            })}
                        </div>
                      </motion.div>
                    )}

                    {/* VERTICAL LABEL (Visible when Collapsed) */}
                    {activePanel !== 'sales' && (
                       <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-90deg)', whiteSpace: 'nowrap' }}>
                           <h2 style={{ color: 'rgba(255,255,255,0.5)', fontSize: '2.5rem', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>Sales Strategy</h2>
                       </div>
                    )}
                </motion.div>

                {/* --- RIGHT PANEL: ECOSYSTEM --- */}
                <motion.div 
                  layout 
                  onClick={() => setActivePanel('ecosystem')}
                  style={{ 
                    flex: activePanel === 'ecosystem' ? 2 : 0.4,
                    background: activePanel === 'ecosystem' 
                        ? 'linear-gradient(135deg, rgba(45, 10, 60, 0.95), rgba(0,0,0,0.9))' // Purple tint
                        : 'linear-gradient(135deg, rgba(30, 10, 40, 0.9), rgba(0,0,0,0.8))',
                    position: 'relative', cursor: activePanel === 'ecosystem' ? 'default' : 'pointer',
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden'
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                >
                     {/* Background Image Overlay */}
                     <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.2, backgroundSize: 'cover', backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop)' }} />

                    {/* CONTENT (Only visible when Expanded) */}
                    {activePanel === 'ecosystem' && (
                      <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                        style={{ padding: '60px', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                      >
                         <h5 style={{ color: '#d946ef', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>Long-Term Growth</h5>
                         <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#fff', marginBottom: '40px', lineHeight: 1 }}>Engagement & Ecosystem</h2>
                         
                         {/* 1. Features List */}
                         <div style={{ marginBottom: '40px' }}>
                            <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>Glass+ Community</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                {current.ecosystem.features.map((feat, i) => {
                                    // Simple icon mapping inline
                                    const Icon = feat.icon === 'Zap' ? Zap : feat.icon === 'Headphones' ? Headphones : feat.icon === 'ShieldCheck' ? ShieldCheck : HeartHandshake;
                                    return (
                                        <motion.div 
                                            key={i} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 * i }}
                                            style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#e0e0e0' }}
                                        >
                                            <div style={{ padding: '10px', background: 'rgba(217, 70, 239, 0.1)', borderRadius: '50%', color: '#d946ef' }}>
                                                <Icon size={20} />
                                            </div>
                                            <span>{feat.text}</span>
                                        </motion.div>
                                    )
                                })}
                            </div>
                         </div>

                         {/* 2. KPIs Row */}
                         <div>
                            <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>Success Metrics (KPIs)</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px' }}>
                                {current.ecosystem.kpis.map((kpi, i) => (
                                    <GlassCard key={i} style={{ flex: 1, padding: '15px', textAlign: 'center', background: 'rgba(217, 70, 239, 0.05)', border: '1px solid rgba(217, 70, 239, 0.2)' }}>
                                        <div style={{ color: '#d946ef', fontSize: '1.5rem', fontWeight: '800', marginBottom: '5px' }}>{kpi.value}</div>
                                        <div style={{ color: '#aaa', fontSize: '0.8rem', textTransform: 'uppercase' }}>{kpi.label}</div>
                                    </GlassCard>
                                ))}
                            </div>
                         </div>
                      </motion.div>
                    )}

                    {/* VERTICAL LABEL (Visible when Collapsed) */}
                    {activePanel !== 'ecosystem' && (
                       <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(90deg)', whiteSpace: 'nowrap' }}>
                           <h2 style={{ color: 'rgba(255,255,255,0.5)', fontSize: '2.5rem', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}></h2>
                       </div>
                    )}
                </motion.div>

              </div>
            )}
            {/* --- SLIDE 15: PRICE REVEAL (Click Trigger) --- */}
     {/* --- SLIDE 15: PRICE REVEAL (Video Card Edition) --- */}
            {current.id === 15 && (
              <div 
                style={{ 
                  width: '100%', height: '100%', display: 'flex', flexDirection: 'column', 
                  justifyContent: 'center', alignItems: 'center', textAlign: 'center',
                  position: 'relative', overflow: 'hidden'
                }}
              >
                 {/* 1. GLOBAL BACKGROUND (Remains the same) */}
                 <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <img 
                        src={current.bgImage} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} 
                        alt="bg" 
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, rgba(230, 222, 222, 0.4) 0%, #000 100%)' }} />
                 </div>

                 {/* --- CONTENT WRAPPER --- */}
                 <div style={{ zIndex: 3, width: '100%', maxWidth: '1000px', padding: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    
                    {/* HEADERS */}
                    <div style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '4px', fontWeight: '700', marginBottom: '10px' }}>
                            {current.header}
                        </h2>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: '300', color: '#fff' }}>
                            {current.subheader}
                        </h1>
                    </div>

                    {/* --- THE BLACK VIDEO CARD --- */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
                        style={{ 
                            position: 'relative',
                            width: '100%', maxWidth: '700px', height: '350px', // Fixed size for the card
                            borderRadius: '20px', overflow: 'hidden',
                            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)',
                            background: '#000' // Fallback color
                        }}
                    >
                        {/* A. BACKGROUND VIDEO (Confined to this card only) */}
                        <video 
                            autoPlay loop muted playsInline
                            style={{ 
                                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
                                objectFit: 'cover', opacity: 0.6, zIndex: 0 
                            }}
                        >
                            {/* Replace this URL with your local video if needed */}
                            <source src="/public/Black_Card_Background_Video.mp4" type="video/mp4" />
                        </video>
                        
                        {/* Overlay to darken video slightly for text readability */}
                        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)', zIndex: 1 }} />

                        {/* B. INTERACTIVE CONTENT (Z-index 2 to sit above video) */}
                        <div style={{ position: 'relative', zIndex: 2, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            
                            {/* TRIGGER BUTTON */}
                            {!isPriceRevealed && (
                                <motion.button
                                    onClick={(e) => { e.stopPropagation(); setIsPriceRevealed(true); }}
                                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.3)',
                                        color: '#fff', padding: '15px 40px', borderRadius: '30px', fontSize: '1.2rem',
                                        cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '2px', backdropFilter: 'blur(5px)'
                                    }}
                                >
                                    Click to Reveal Price
                                </motion.button>
                            )}

                            {/* PRICE REVEAL */}
                            {isPriceRevealed && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
                                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                                >
                                    <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '0px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                                        {current.priceMainLabel}
                                    </p>
                                    
                                    <h1 style={{ 
                                        fontSize: '5.5rem', fontWeight: '900', lineHeight: 1, margin: '10px 0',
                                        background: 'linear-gradient(135deg, #ffffff 0%, #00d2ff 50%, #FFD700 100%)',
                                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                        filter: 'drop-shadow(0 0 20px rgba(0, 210, 255, 0.5))'
                                    }}>
                                        {current.priceMain}
                                    </h1>

                                    <motion.p 
                                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                                        style={{ fontSize: '1.4rem', color: '#fff', fontWeight: '300', margin: 0 }}
                                    >
                                        <span style={{ opacity: 0.7 }}>Up to </span> 
                                        <span style={{ fontWeight: '700' }}>₹21,999</span> 
                                        <span style={{ opacity: 0.7, fontSize: '1rem' }}> (Premium)</span>
                                    </motion.p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>

                    {/* FOOTER */}
                    <div style={{ marginTop: '40px', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '20px', width: '100%' }}>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', fontStyle: 'italic', letterSpacing: '1px' }}>
                            {current.footer}
                        </p>
                    </div>

                 </div>
              </div>
            )}
             {/* GRIDS */}
             {(current.type === 'grid' || current.type === 'strategy') && (
              <div>
                 <h2 style={{ fontSize: '4rem', marginBottom: '40px' }}>{current.title}</h2>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                   {(current.items || current.strategies).map((item, i) => (
                     <GlassCard key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '25px' }}>
                       <div style={{ color: '#00d2ff' }}>{item.icon}</div>
                       <h3 style={{ fontSize: '1.5rem' }}>{item.title}</h3>
                     </GlassCard>
                   ))}
                 </div>
              </div>
            )}

             {/* LIST */}
             {current.type === 'list' && (
               <GlassCard>
                 <h2 style={{ fontSize: '4rem', marginBottom: '20px' }}>{current.title}</h2>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', fontSize: '1.5rem' }}>
                   {current.list.map((m, i) => <div key={i}>{m}</div>)}
                 </div>
               </GlassCard>
             )}
            
          </motion.div>
        </AnimatePresence>
      </div>

      {/* PROGRESS BAR */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: `${((index + 1) / slides.length) * 100}%`, height: '6px', background: '#00d2ff', transition: 'width 0.5s' }} />
    </div>
  );
};

export default App;
