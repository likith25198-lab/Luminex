import { Users, Globe, TrendingUp, DollarSign, Award, Target, ShoppingBag, Zap } from 'lucide-react';

export const slides = [
  {
    id: 1,
    type: "hero",
    title: "LUMINEX",
    subtitle: "Your world. Translated.",
    description: "Revolutionizing human connection by integrating AI into daily eyewear.",
    bg: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)"
  },
  {
    id: 2,
    type: "split",
    title: "The Mission",
    subtitle: "Empowering Freedom",
    left: {
      title: "Our Mission",
      text: "Enhance human connection by integrating cutting-edge AI into daily eyewear.",
      icon: <Globe size={48} />
    },
    right: {
      title: "Our Vision",
      text: "Lead India's intelligent wearables market and empower effortless living.",
      icon: <Zap size={48} />
    },
    bg: "#1a1a1a"
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
        desc: "Social & Entertainment glasses for hands-free POV recording.",
        color: "#FF416C"
      },
      {
        name: "Luminex Lingua",
        tagline: "Understand every voice.",
        desc: "Real-time AI translation breaking language barriers instantly.",
        color: "#00B4DB"
      }
    ],
    bg: "#111"
  },
  {
    id: 4,
    type: "chart",
    title: "Why Now?",
    subtitle: "Market Explosion (2024-2030)",
    stats: [
      { label: "2023", value: 1.4, height: "20%" },
      { label: "2025", value: 2.8, height: "40%" },
      { label: "2027", value: 5.2, height: "65%" },
      { label: "2030", value: 10.5, height: "100%" }
    ],
    highlight: "Global AR Market growing to >$10B by 2030",
    bg: "#0f2027"
  },
  {
    id: 5,
    type: "grid",
    title: "Target Audience",
    subtitle: "Who needs Luminex?",
    items: [
      { title: "Travelers", desc: "Global Communication", icon: <Globe /> },
      { title: "Young Pros", desc: "Multilingual Workplaces", icon: <Users /> },
      { title: "Students", desc: "Education & Learning", icon: <Award /> },
      { title: "Creators", desc: "POV Content Recording", icon: <TrendingUp /> }
    ],
    bg: "#200122"
  },
  {
    id: 6,
    type: "strategy",
    title: "Go-To-Market Strategy",
    subtitle: "Domination Plan",
    strategies: [
      { title: "Dual Pricing", desc: "Premium (₹32k) vs Value (₹12k)", icon: <DollarSign /> },
      { title: "Promotion", desc: "#WorldWithoutBarriers Challenge", icon: <TrendingUp /> },
      { title: "Distribution", desc: "Flagship Stores & Airport Duty-Free", icon: <ShoppingBag /> },
      { title: "Retention", desc: "'Glass+' Community Subscription", icon: <Target /> }
    ],
    bg: "#000000"
  },
  {
    id: 7,
    type: "hero",
    title: "$20 Million",
    subtitle: "Year 1 Revenue Target",
    description: "Driven by 10,000 unit sales in the pilot phase.",
    bg: "linear-gradient(to right, #11998e, #38ef7d)"
  },
  {
    id: 8,
    type: "list",
    title: "The Team",
    subtitle: "Group 2 Members",
    list: [
      "Akchaya R.S (25182)",
      "Likith Yadav S (25198)",
      "Joice George (25202)",
      "S D Yashika (25219)",
      "Sagar Singh (25222)",
      "Vishal Kumar (25239)"
    ],
    bg: "#111"
  }
];