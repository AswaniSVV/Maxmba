
export const caseStudiesData = [
    {
        id: 1, title: 'Netflix Global Expansion Strategy', company: 'Netflix', category: 'strategy', difficulty: 'Advanced', duration: '45 min', description: 'Analyze Netflix\'s international expansion strategy and market entry decisions.',
        tags: ['Market Entry', 'Competitive Analysis', 'Content Strategy'], completed: true, rating: 4.8, isPro: true,
        content: {
            introduction: "Netflix, a pioneer in streaming media, has aggressively pursued global expansion. This case examines the strategic decisions, challenges, and outcomes of Netflix's push into international markets, highlighting its approach to content localization, pricing, and competition.",
            problemStatement: "Your task is to evaluate Netflix's global expansion strategy. Was their 'one-size-fits-all' initial approach effective? What adjustments did they have to make in key markets like India, Japan, and Brazil? What should their strategy be for the next five years to sustain growth against rising competition from Disney+, Amazon Prime, and local players?",
            questions: ["1. What were the key drivers behind Netflix's global expansion?", "2. Analyze the pros and cons of Netflix's initial strategy of launching in 130 countries simultaneously.", "3. How did Netflix adapt its content and pricing strategies for different local markets? Provide specific examples.", "4. Evaluate the competitive landscape in a specific international market (e.g., India). How has Netflix performed against local and global competitors?", "5. Propose a 3-point strategy for Netflix to maintain its leadership position in the global streaming market over the next 5 years."],
            exhibits: [{ title: "Exhibit 1: Netflix Subscriber Growth (International vs. Domestic)", type: "chart" }, { title: "Exhibit 2: Sample Pricing Tiers in Different Countries", type: "table" }, { title: "Exhibit 3: Competitor Matrix in Southeast Asia", type: "table" }]
        }
    },
    {
        id: 2, title: 'Amazon Supply Chain Optimization', company: 'Amazon', category: 'operations', difficulty: 'Intermediate', duration: '35 min', description: 'Examine Amazon\'s logistics network and supply chain efficiency improvements.',
        tags: ['Supply Chain', 'Logistics', 'Cost Optimization'], completed: false, rating: 4.9, isPro: false,
        content: {
            introduction: "Amazon's success is deeply rooted in its revolutionary supply chain and logistics network. This case explores the evolution of Amazon's operations, from its early days as an online bookseller to its current status as a global e-commerce and logistics powerhouse, including its use of robotics, predictive analytics, and its own delivery network.",
            problemStatement: "As a senior operations manager at Amazon, you are tasked with identifying the next major opportunity for supply chain optimization. The company is facing rising fuel costs, labor shortages, and increasing customer expectations for faster delivery. Analyze Amazon's current supply chain model (fulfillment centers, sortation centers, delivery stations) and propose a major initiative to improve efficiency and reduce costs by 15% over the next two years.",
            questions: ["1. What are the core components of Amazon's supply chain network? How do they work together?", "2. How has technology (e.g., Kiva robots, AI forecasting) provided Amazon with a competitive advantage in logistics?", "3. What are the biggest challenges currently facing Amazon's supply chain?", "4. Propose a detailed initiative to address one of these challenges. Your proposal should include expected costs, benefits, and potential risks.", "5. How might innovations like drone delivery or autonomous vehicles impact Amazon's supply chain in the future?"],
            exhibits: [{ title: "Exhibit 1: Diagram of Amazon's Fulfillment Process", type: "diagram" }, { title: "Exhibit 2: Data on Average Delivery Times (2018-2023)", type: "chart" }, { title: "Exhibit 3: Cost Breakdown of Last-Mile Delivery", type: "table" }]
        }
    },
    {
        id: 3, title: 'Tesla\'s Direct-to-Consumer Model', company: 'Tesla', category: 'marketing', difficulty: 'Advanced', duration: '40 min', description: 'Evaluate Tesla\'s unique sales and marketing approach in the automotive industry.',
        tags: ['Sales Strategy', 'Brand Building', 'Innovation'], completed: false, rating: 4.7, isPro: true,
        content: {
            introduction: "Tesla disrupted the century-old automotive industry not only with its electric vehicles but also with its radical direct-to-consumer (D2C) sales model, bypassing the traditional dealership network. This case analyzes the advantages and disadvantages of this approach, its impact on the customer experience, and the regulatory hurdles it has faced.",
            problemStatement: "Legacy automakers like Ford and GM are now launching their own EVs and experimenting with D2C models. As a strategist for Tesla, you must assess the long-term viability of the D2C model. Should Tesla stick with its current strategy, or should it consider a hybrid model incorporating third-party dealers? Develop a recommendation, supported by analysis of costs, brand control, customer experience, and scalability.",
            questions: ["1. What are the primary benefits of Tesla's D2C model compared to the traditional dealership model?", "2. What are the main challenges and risks associated with the D2C model, particularly as Tesla scales its production?", "3. How has the D2C model contributed to building the Tesla brand?", "4. Analyze the legal and regulatory battles Tesla has faced over its sales model in various states. How have these impacted its growth?", "5. Should Tesla change its sales and service strategy as competition intensifies? If so, how? If not, why not?"],
            exhibits: [{ title: "Exhibit 1: Cost Comparison: D2C vs. Dealership Model", type: "table" }, { title: "Exhibit 2: Customer Satisfaction Scores (Tesla vs. Competitors)", type: "chart" }, { title: "Exhibit 3: Map of US States with D2C Sales Bans/Restrictions", type: "diagram" }]
        }
    },
    {
        id: 4, title: 'Spotify vs Apple Music', company: 'Spotify', category: 'strategy', difficulty: 'Intermediate', duration: '30 min', description: 'Compare competitive strategies in the music streaming industry.',
        tags: ['Competitive Strategy', 'Platform Business', 'User Acquisition'], completed: true, rating: 4.6, isPro: false,
        content: {
            introduction: "The music streaming market is a battleground dominated by giants like Spotify and Apple Music. This case examines their different business models, user acquisition strategies, and approaches to content and artist relationships.",
            problemStatement: "You are a consultant for a new music streaming service aiming to capture 5% of the market in 3 years. Analyze the competitive strategies of Spotify (freemium model, focus on discovery) and Apple Music (premium model, integration with Apple ecosystem). What key lessons can be learned? Recommend a niche strategy for the new service to effectively compete.",
            questions: ["1. Compare and contrast the business models of Spotify and Apple Music.", "2. How do their user acquisition and retention strategies differ?", "3. Analyze the importance of exclusive content in the music streaming wars.", "4. What is the role of podcasts and other audio formats in their strategies?", "5. What unique value proposition could a new entrant offer to compete?"],
            exhibits: [{ title: "Exhibit 1: Subscriber numbers and ARPU", type: "chart" }, { title: "Exhibit 2: Feature comparison matrix", type: "table" }]
        }
    },
    {
        id: 5, title: 'Airbnb Crisis Management', company: 'Airbnb', category: 'operations', difficulty: 'Advanced', duration: '50 min', description: 'Analyze Airbnb\'s response to the COVID-19 pandemic and recovery strategy.',
        tags: ['Crisis Management', 'Business Model', 'Recovery Strategy'], completed: false, rating: 4.8, isPro: true,
        content: {
            introduction: "The COVID-19 pandemic brought global travel to a standstill, posing an existential threat to Airbnb. This case study explores how Airbnb navigated the crisis, its decisions regarding hosts and guests, and its strategic pivot towards local travel.",
            problemStatement: "Evaluate Airbnb's response to the pandemic. What were the key decisions made by management? Assess the effectiveness of their 'Go Near' campaign and focus on longer-term stays. What are the long-term implications of this crisis on Airbnb's business model and the travel industry?",
            questions: ["1. What were the immediate impacts of the pandemic on Airbnb's business?", "2. Analyze Airbnb's stakeholder communication and policy changes (e.g., cancellation policies).", "3. Was the pivot to local and long-term stays a successful strategy? Why?", "4. How did Airbnb manage its relationship with its hosts during the crisis?", "5. What are the key risks and opportunities for Airbnb in a post-pandemic world?"],
            exhibits: [{ title: "Exhibit 1: Booking volume pre- and post-pandemic", type: "chart" }, { title: "Exhibit 2: Changes in average trip duration", type: "chart" }]
        }
    },
    {
        id: 6, title: 'Uber\'s Pricing Strategy', company: 'Uber', category: 'finance', difficulty: 'Intermediate', duration: '25 min', description: 'Examine Uber\'s dynamic pricing model and profitability challenges.',
        tags: ['Pricing Strategy', 'Market Economics', 'Profitability'], completed: false, rating: 4.5, isPro: false,
        content: {
            introduction: "Uber's dynamic 'surge' pricing model is a core element of its business, designed to balance supply and demand. This case examines how it works, its economic rationale, and the public and regulatory controversies it has generated.",
            problemStatement: "Uber has long struggled with profitability. Analyze the role of its dynamic pricing strategy in its path to profitability. Is surge pricing a sustainable long-term strategy? What are the alternatives? Recommend a pricing strategy that balances rider demand, driver supply, and profitability.",
            questions: ["1. Explain the economic principles behind surge pricing.", "2. What are the benefits and drawbacks of this model for riders, drivers, and Uber?", "3. How does competition from services like Lyft affect Uber's pricing power?", "4. Analyze the ethical and regulatory challenges of dynamic pricing.", "5. Propose two alternative pricing models for Uber and evaluate their potential impact."],
            exhibits: [{ title: "Exhibit 1: Example of surge pricing multiplier effect", type: "diagram" }, { title: "Exhibit 2: Uber's quarterly profit/loss data", type: "chart" }]
        }
    },
    {
        id: 7, title: 'Nike\'s Digital Transformation', company: 'Nike', category: 'strategy', difficulty: 'Intermediate', duration: '35 min', description: 'Assess Nike\'s shift towards a direct-to-consumer (D2C) model powered by digital technology.',
        tags: ['Digital Strategy', 'D2C', 'Brand Loyalty'], completed: false, rating: 4.7, isPro: false,
        content: {
            introduction: "Nike has invested heavily in a digital-first, direct-to-consumer strategy, reducing reliance on wholesale partners and building a direct relationship with its customers through apps like SNKRS and Nike Training Club.",
            problemStatement: "Analyze Nike's 'Consumer Direct Offense' strategy. What are the key components of this digital transformation? Evaluate its impact on revenue, margins, and brand equity. What are the risks of alienating traditional retail partners?",
            questions: ["1. What are the main drivers behind Nike's D2C pivot?", "2. How do Nike's apps (SNKRS, NTC) contribute to its D2C strategy?", "3. Analyze the financial impact of shifting from wholesale to D2C.", "4. What are the challenges in managing a global D2C supply chain?", "5. What should be the next phase of Nike's digital transformation?"],
            exhibits: [{ title: "Exhibit 1: Nike's D2C vs. wholesale revenue mix", type: "chart" }, { title: "Exhibit 2: Membership growth in Nike's digital ecosystem", type: "chart" }]
        }
    },
    {
        id: 8, title: 'Coca-Cola\'s Marketing in Emerging Markets', company: 'Coca-Cola', category: 'marketing', difficulty: 'Intermediate', duration: '30 min', description: 'Analyze Coca-Cola\'s localization and marketing strategies in developing countries.',
        tags: ['Global Marketing', 'Localization', 'Brand Penetration'], completed: false, rating: 4.6, isPro: true,
        content: {
            introduction: "Coca-Cola is a master of global marketing, but its success in emerging markets relies on a sophisticated localization strategy, adapting its distribution, pricing, and messaging to local cultures and economic conditions.",
            problemStatement: "Choose one emerging market (e.g., India, Nigeria, or Brazil). Analyze Coca-Cola's marketing and distribution strategy in that market. How does it differ from its strategy in developed markets like the US? What are the key factors for its success? What challenges does it face from local competitors?",
            questions: ["1. Describe Coca-Cola's 'Glocalization' strategy.", "2. How does Coca-Cola adapt its product portfolio and pricing for different income levels?", "3. Analyze its micro-distribution network in rural areas.", "4. Evaluate the effectiveness of a specific marketing campaign in the chosen market.", "5. What can other multinational corporations learn from Coca-Cola's approach?"],
            exhibits: [{ title: "Exhibit 1: Product portfolio comparison (US vs. India)", type: "table" }, { title: "Exhibit 2: Per capita consumption data", type: "chart" }]
        }
    },
    {
        id: 9, title: 'Google\'s Diversification into Cloud Computing', company: 'Google (Alphabet)', category: 'strategy', difficulty: 'Advanced', duration: '50 min', description: 'Evaluate Google\'s strategic move into the cloud computing market against established players like AWS and Azure.',
        tags: ['Corporate Strategy', 'Diversification', 'Cloud Computing'], completed: false, rating: 4.8, isPro: true,
        content: {
            introduction: "While Google dominates search, it was a late entrant to the lucrative cloud computing market, trailing Amazon Web Services (AWS) and Microsoft Azure. This case examines Google Cloud Platform's (GCP) strategy to gain market share.",
            problemStatement: "As a strategist at Google, you are tasked with developing a plan to close the gap with AWS and Azure. Analyze GCP's current competitive position, its strengths (e.g., AI/ML, Kubernetes) and weaknesses (e.g., enterprise sales experience). What strategic moves should Google make in terms of product, pricing, and sales to accelerate its growth in the cloud market?",
            questions: ["1. Why is the cloud computing market strategically important for Google?", "2. Analyze GCP's competitive advantages and disadvantages relative to AWS and Azure.", "3. Evaluate Google's strategy of focusing on specific industries and workloads (e.g., data analytics, AI).", "4. What is the significance of Google's open-source contributions (like Kubernetes and TensorFlow) to its cloud strategy?", "5. Propose a 3-year strategic plan for GCP to capture more enterprise market share."],
            exhibits: [{ title: "Exhibit 1: Cloud market share (AWS vs. Azure vs. GCP)", type: "chart" }, { title: "Exhibit 2: Financial performance of cloud segments", type: "table" }]
        }
    },
    {
        id: 10, title: 'Toyota Production System (TPS)', company: 'Toyota', category: 'operations', difficulty: 'Advanced', duration: '45 min', description: 'Deep dive into the principles of Lean Manufacturing and Just-In-Time production.',
        tags: ['Lean Manufacturing', 'JIT', 'Process Improvement'], completed: false, rating: 4.9, isPro: false,
        content: {
            introduction: "The Toyota Production System (TPS) revolutionized manufacturing with its focus on eliminating waste, continuous improvement (Kaizen), and respect for people. This case explores the core principles of TPS, including Just-in-Time (JIT) and Jidoka (automation with a human touch).",
            problemStatement: "A traditional manufacturing company is suffering from high inventory costs, production defects, and low employee morale. They have hired you to help them implement the principles of the Toyota Production System. Where should they start? Develop a roadmap for the first 12 months, outlining key initiatives, potential challenges, and expected outcomes.",
            questions: ["1. What are the two main pillars of the Toyota Production System?", "2. Explain the concept of 'Muda' (waste) and its seven forms.", "3. How does the 'Kanban' system work to enable Just-in-Time production?", "4. What is the role of employees and empowerment in TPS?", "5. What are the biggest challenges companies face when trying to adopt TPS?"],
            exhibits: [{ title: "Exhibit 1: Diagram of the TPS House", type: "diagram" }, { title: "Exhibit 2: Comparison of metrics (Before vs. After TPS goal)", type: "table" }]
        }
    },
    {
        id: 11, title: 'The Disney-Fox Merger', company: 'Disney', category: 'finance', difficulty: 'Advanced', duration: '55 min', description: 'Analyze the financial and strategic rationale behind Disney\'s acquisition of 21st Century Fox.',
        tags: ['Mergers & Acquisitions', 'Valuation', 'Synergy'], completed: false, rating: 4.8, isPro: true,
        content: {
            introduction: "In 2019, Disney completed its monumental $71.3 billion acquisition of 21st Century Fox's assets. This case examines the strategic rationale, the valuation, and the integration challenges of one of the largest media mergers in history.",
            problemStatement: "You are an analyst who was evaluating the deal in 2018. Was this a good strategic move for Disney? Perform a qualitative and quantitative analysis. What were the main synergies Disney was hoping to achieve? What were the biggest risks? Based on your analysis, would you have recommended the deal to Disney's board of directors?",
            questions: ["1. What was the strategic rationale for the acquisition, particularly in the context of the rise of streaming services?", "2. How does the acquisition of Fox's content library and studios strengthen Disney+?", "3. What are the potential revenue and cost synergies of the merger? Try to estimate them.", "4. What are the main integration challenges in merging two distinct corporate cultures?", "5. From a regulatory perspective, what were the main concerns, and how did Disney address them?"],
            exhibits: [{ title: "Exhibit 1: Key assets acquired from 21st Century Fox", type: "table" }, { title: "Exhibit 2: Disney's stock price reaction to the announcement", type: "chart" }]
        }
    },
    {
        id: 12, title: 'Starbucks\' Customer Experience Strategy', company: 'Starbucks', category: 'marketing', difficulty: 'Intermediate', duration: '30 min', description: 'Examine how Starbucks created a premium brand and loyal customer base through its in-store experience.',
        tags: ['Customer Experience', 'Brand Equity', 'Service Design'], completed: false, rating: 4.7, isPro: false,
        content: {
            introduction: "Starbucks did not just sell coffee; it sold an experience. This case explores how Starbucks designed its stores, trained its baristas, and leveraged digital tools to create the 'third place' between home and work, fostering a powerful brand and customer loyalty.",
            problemStatement: "With the rise of specialty coffee shops and lower-cost competitors, Starbucks' 'premium experience' is under threat. As the head of customer experience, you need to devise a strategy to reinvigorate the Starbucks experience for the next decade. How can Starbucks enhance its in-store and digital experience to justify its premium pricing and retain loyalty?",
            questions: ["1. What are the key elements of the traditional Starbucks 'third place' experience?", "2. How has the rise of mobile ordering and delivery impacted this experience?", "3. Analyze the role of the Starbucks Rewards program in driving loyalty.", "4. What can Starbucks do to improve the in-store atmosphere and service?", "5. Propose one major digital innovation and one major in-store innovation to enhance the customer experience."],
            exhibits: [{ title: "Exhibit 1: Customer journey map for a mobile order", type: "diagram" }, { title: "Exhibit 2: Key metrics from the Starbucks Rewards program", type: "table" }]
        }
    },
    {
        id: 13, title: 'Lego\'s Turnaround', company: 'Lego', category: 'strategy', difficulty: 'Advanced', duration: '45 min', description: 'Analyze how Lego recovered from the brink of bankruptcy in the early 2000s.',
        tags: ['Turnaround', 'Innovation', 'Core Business'], completed: false, rating: 4.9, isPro: true,
        content: {
            introduction: "In the early 2000s, Lego was near bankruptcy after years of unfocused innovation. This case study details the turnaround strategy led by CEO Jørgen Vig Knudstorp, which involved returning to the core product, improving financial discipline, and fostering open innovation.",
            problemStatement: "Imagine you are a consultant advising Lego in 2003. The company is losing money, its product line is fragmented, and its supply chain is a mess. Diagnose the root causes of Lego's problems and develop a comprehensive turnaround plan. Your plan should address product strategy, financial management, and operational efficiency.",
            questions: ["1. What were the main reasons for Lego's decline in the late 1990s and early 2000s?", "2. What were the key pillars of Jørgen Vig Knudstorp's turnaround strategy?", "3. Explain the 'Back to the Brick' philosophy and its importance.", "4. How did Lego successfully embrace open innovation (e.g., Lego Ideas) without losing focus?", "5. What lessons can other struggling companies learn from Lego's turnaround?"],
            exhibits: [{ title: "Exhibit 1: Lego's financial performance (1998-2008)", type: "chart" }, { title: "Exhibit 2: Lego's product portfolio simplification", type: "diagram" }]
        }
    },
    {
        id: 14, title: 'P&G\'s Brand Management', company: 'Procter & Gamble', category: 'marketing', difficulty: 'Intermediate', duration: '35 min', description: 'Explore P&G\'s classic brand management system and its evolution.',
        tags: ['Brand Management', 'Portfolio Strategy', 'Marketing Mix'], completed: false, rating: 4.7, isPro: false,
        content: {
            introduction: "Procter & Gamble (P&G) is renowned for creating the brand management discipline. This case explores how P&G manages its vast portfolio of billion-dollar brands (like Tide, Pampers, and Gillette), each with its own dedicated marketing and strategy.",
            problemStatement: "P&G's brand-centric model has been challenged by the rise of digital marketing, e-commerce, and nimble D2C competitors. Is the classic brand management system still relevant? As a senior marketer at P&G, recommend how the company should adapt its brand management and marketing organization for the digital age.",
            questions: ["1. What are the core principles of P&G's brand management system?", "2. What are the advantages and disadvantages of having competing brands within the same company (e.g., Tide and Gain)?", "3. How has the shift to digital marketing impacted P&G's approach?", "4. Analyze how a specific P&G brand has adapted to e-commerce.", "5. Propose a new organizational structure for a P&G marketing team."],
            exhibits: [{ title: "Exhibit 1: P&G's portfolio of billion-dollar brands", type: "table" }, { title: "Exhibit 2: Advertising spend allocation (Traditional vs. Digital)", type: "chart" }]
        }
    },
    {
        id: 15, title: 'Intel vs. ARM: The Chip War', company: 'Intel & ARM', category: 'strategy', difficulty: 'Advanced', duration: '50 min', description: 'Analyze the strategic battle between Intel\'s integrated model and ARM\'s licensing model.',
        tags: ['Business Model', 'Competitive Strategy', 'Technology'], completed: false, rating: 4.8, isPro: true,
        content: {
            introduction: "The semiconductor industry has been shaped by the competition between Intel's vertically integrated model (designing and manufacturing its chips) and ARM's licensing model (designing and licensing chip architecture to others). This case explores why ARM came to dominate mobile while Intel dominated PCs and servers.",
            problemStatement: "The lines are blurring as ARM-based chips (like Apple's M-series) enter the PC market and Intel enters the foundry business to manufacture chips for others. Analyze the strengths and weaknesses of both business models. As the CEO of Intel, what strategic actions must you take to compete effectively against the ARM ecosystem over the next decade?",
            questions: ["1. Compare and contrast the business models of Intel and ARM.", "2. Why did ARM's model succeed in mobile devices where Intel's failed?", "3. What are the competitive implications of Apple switching its Macs to ARM-based processors?", "4. Evaluate Intel's new 'IDM 2.0' strategy, which includes becoming a foundry for other companies.", "5. Will one model ultimately win, or can both coexist? Justify your answer."],
            exhibits: [{ title: "Exhibit 1: Market share in PC vs. Mobile processors", type: "chart" }, { title: "Exhibit 2: Financial comparison (Intel vs. ARM)", type: "table" }]
        }
    },
    {
        id: 16, title: 'Unilever\'s Sustainable Living Plan', company: 'Unilever', category: 'strategy', difficulty: 'Intermediate', duration: '30 min', description: 'Evaluate the business case for Unilever\'s focus on sustainability.',
        tags: ['Corporate Social Responsibility', 'Sustainability', 'Brand Purpose'], completed: false, rating: 4.6, isPro: false,
        content: {
            introduction: "Unilever has been a corporate leader in integrating sustainability into its core business strategy through its Sustainable Living Plan (USLP). This case examines the goals of the USLP, its impact on brands and profitability, and the challenges of measuring its success.",
            problemStatement: "Some investors have criticized Unilever for focusing too much on 'purpose' at the expense of financial performance. As a sustainability consultant, you need to build a business case for the Sustainable Living Plan. How does sustainability drive growth, reduce costs, and mitigate risk for Unilever? Use examples from brands like Dove and Ben & Jerry's. What are the key metrics to prove its financial value?",
            questions: ["1. What are the three main goals of the Unilever Sustainable Living Plan?", "2. How do brands with a strong purpose (like Dove's 'Real Beauty' campaign) contribute to business growth?", "3. Provide examples of how sustainability initiatives can lead to cost savings in the supply chain.", "4. What are the challenges in attributing financial performance directly to sustainability efforts?", "5. How should Unilever evolve its sustainability strategy for the future?"],
            exhibits: [{ title: "Exhibit 1: Growth of 'Sustainable Living' brands vs. rest of portfolio", type: "chart" }, { title: "Exhibit 2: Key targets and progress of the USLP", type: "table" }]
        }
    },
    {
        id: 17, title: 'Zara\'s Fast Fashion Model', company: 'Zara (Inditex)', category: 'operations', difficulty: 'Intermediate', duration: '40 min', description: 'Examine Zara\'s highly responsive supply chain and business model.',
        tags: ['Fast Fashion', 'Supply Chain', 'Agile Operations'], completed: false, rating: 4.9, isPro: false,
        content: {
            introduction: "Zara revolutionized the fashion industry with its 'fast fashion' model, characterized by rapid design-to-retail cycles, small batch production, and a highly centralized and responsive supply chain. This case dissects how Zara is able to get new designs into stores in a matter of weeks, rather than months.",
            problemStatement: "The fast fashion model is under increasing pressure from sustainability concerns and online-only competitors like Shein who are even faster. As the head of strategy for Zara, how can you adapt the business model to address these challenges while retaining its core competitive advantage of speed and responsiveness? Propose a strategy for the 'next generation' of fast fashion.",
            questions: ["1. What are the key components of Zara's supply chain that enable its speed?", "2. How does Zara use data from its stores to inform design and production decisions?", "3. Compare Zara's model to a traditional fashion retailer's model.", "4. What are the environmental and ethical criticisms of fast fashion, and how can Zara address them?", "5. Can Zara's model be replicated by other companies? Why or why not?"],
            exhibits: [{ title: "Exhibit 1: Design-to-retail timeline comparison", type: "diagram" }, { title: "Exhibit 2: Inventory turnover rates (Zara vs. competitors)", type: "chart" }]
        }
    },
    {
        id: 18, title: 'Microsoft\'s Cloud-First Transformation', company: 'Microsoft', category: 'strategy', difficulty: 'Advanced', duration: '50 min', description: 'Analyze Satya Nadella\'s transformation of Microsoft into a cloud-first powerhouse.',
        tags: ['Turnaround', 'Corporate Culture', 'Cloud Computing'], completed: false, rating: 4.9, isPro: true,
        content: {
            introduction: "When Satya Nadella became CEO of Microsoft in 2014, the company was seen as a legacy tech giant that had missed the boat on mobile and search. This case details the massive cultural and strategic shift he led, moving the company from a Windows-centric to a 'cloud-first, mobile-first' world, centered on the Azure cloud platform and Office 365.",
            problemStatement: "You are a business journalist writing a feature on Microsoft's turnaround. What were the most critical strategic decisions and cultural changes that Nadella implemented? How did he manage to transform a company of Microsoft's size and history? What are the key lessons for other large companies facing disruption?",
            questions: ["1. What was Microsoft's strategic position in 2014? What were its biggest threats?", "2. What were the key elements of Nadella's cultural overhaul (e.g., 'growth mindset')?", "3. Analyze the strategic shift from selling software licenses (Windows, Office) to selling subscriptions (Microsoft 365).", "4. How did Microsoft leverage its existing enterprise relationships to grow Azure?", "5. What are the next big challenges for Microsoft to maintain its growth trajectory?"],
            exhibits: [{ title: "Exhibit 1: Microsoft revenue by segment (2013 vs. 2023)", type: "chart" }, { title: "Exhibit 2: Microsoft stock performance under Nadella", type: "chart" }]
        }
    },
    {
        id: 19, title: 'The Rise of TikTok', company: 'ByteDance', category: 'marketing', difficulty: 'Intermediate', duration: '30 min', description: 'Analyze the factors behind TikTok\'s explosive growth and its impact on social media.',
        tags: ['Social Media', 'Algorithm', 'User Generated Content'], completed: false, rating: 4.8, isPro: false,
        content: {
            introduction: "TikTok, owned by Chinese company ByteDance, achieved phenomenal global growth in a very short time, challenging the dominance of Facebook and Instagram. This case explores the key success factors, particularly its powerful recommendation algorithm and its user-friendly creative tools.",
            problemStatement: "You are a product manager at Instagram, tasked with developing a strategy to counter the threat from TikTok. Analyze the core reasons for TikTok's success, especially among younger demographics. What are the key differences in its content, algorithm, and user experience compared to Instagram Reels? Propose a 3-point strategy for Instagram to compete more effectively.",
            questions: ["1. What is the core value proposition of TikTok?", "2. How does TikTok's 'For You' page algorithm differ from traditional social media feeds?", "3. Analyze the network effects and viral mechanics on the platform.", "4. What are the main monetization strategies for TikTok?", "5. What are the geopolitical and data privacy risks facing TikTok, and how do they impact its business?"],
            exhibits: [{ title: "Exhibit 1: User growth and demographics", type: "chart" }, { title: "Exhibit 2: Comparison of features (TikTok vs. Instagram Reels)", type: "table" }]
        }
    },
    {
        id: 20, title: 'Southwest Airlines\' Low-Cost Model', company: 'Southwest Airlines', category: 'operations', difficulty: 'Intermediate', duration: '35 min', description: 'Examine the long-standing success of Southwest\'s low-cost carrier model.',
        tags: ['Low-Cost Strategy', 'Operational Efficiency', 'Corporate Culture'], completed: false, rating: 4.7, isPro: false,
        content: {
            introduction: "For decades, Southwest Airlines has been consistently profitable in the notoriously difficult airline industry. Its success is built on a disciplined low-cost strategy, high operational efficiency, and a unique corporate culture. This case explores the interlocking elements of its business model.",
            problemStatement: "The airline industry is now crowded with ultra-low-cost carriers (ULCCs) like Spirit and Frontier, who are undercutting Southwest on price. At the same time, legacy carriers are matching its fares on many routes. Is Southwest's model still a source of sustainable competitive advantage? Recommend how Southwest should adapt its strategy to fight this two-front war.",
            questions: ["1. What are the key operational choices that allow Southwest to maintain low costs (e.g., single aircraft type, point-to-point routes)?", "2. How does Southwest's corporate culture contribute to its success?", "3. How do ULCCs' business models differ from Southwest's?", "4. Analyze the pros and cons of Southwest's open-seating and no-bag-fee policies in today's market.", "5. What strategic initiatives should Southwest prioritize to ensure its continued success?"],
            exhibits: [{ title: "Exhibit 1: Cost per available seat mile (CASM) comparison", type: "chart" }, { title: "Exhibit 2: Southwest's point-to-point vs. hub-and-spoke model", type: "diagram" }]
        }
    },
    {
        id: 21, title: 'The NVIDIA Transformation', company: 'NVIDIA', category: 'strategy', difficulty: 'Advanced', duration: '50 min', description: 'How NVIDIA transformed from a gaming GPU company to the leader in AI.',
        tags: ['Pivoting', 'Platform Strategy', 'AI & Machine Learning'], completed: false, rating: 5.0, isPro: true,
        content: {
            introduction: "NVIDIA, once known primarily for making graphics processing units (GPUs) for gamers, masterfully pivoted to become the dominant provider of the computational hardware and software powering the AI revolution. This case examines the foresight and strategic decisions that enabled this transformation.",
            problemStatement: "In the early 2010s, it was not obvious that GPUs would be the key to AI. What were the key insights and strategic bets that NVIDIA's leadership made? Analyze the development of the CUDA platform and how it created a powerful ecosystem and competitive moat. As competitors (like AMD, Google, Amazon) develop their own AI chips, what must NVIDIA do to defend its market leadership?",
            questions: ["1. Why are GPUs well-suited for AI and machine learning workloads?", "2. What is CUDA, and what role did it play in establishing NVIDIA's dominance in AI?", "3. Analyze NVIDIA's platform strategy, encompassing hardware, software, and developer ecosystem.", "4. How has NVIDIA's business mix changed over the last decade (Gaming vs. Data Center)?", "5. Evaluate the competitive threats to NVIDIA's AI dominance. What is its most significant vulnerability?"],
            exhibits: [{ title: "Exhibit 1: NVIDIA revenue by market platform", type: "chart" }, { title: "Exhibit 2: Timeline of key product and platform launches", type: "diagram" }]
        }
    },
    {
        id: 22, title: 'Dollar Shave Club: Disrupting CPG', company: 'Dollar Shave Club', category: 'marketing', difficulty: 'Intermediate', duration: '30 min', description: 'Analyze how a startup with a viral video disrupted the men\'s grooming market.',
        tags: ['Disruption', 'D2C', 'Viral Marketing', 'Subscription Model'], completed: false, rating: 4.6, isPro: false,
        content: {
            introduction: "With a hilarious viral video and a simple subscription model, Dollar Shave Club (DSC) took on the giant of the shaving industry, Gillette (owned by P&G). This case study analyzes how DSC used branding, a D2C model, and a sharp value proposition to rapidly gain market share, leading to its $1 billion acquisition by Unilever.",
            problemStatement: "You are the founder of a new D2C startup in a different consumer packaged goods (CPG) category (e.g., toothpaste, cleaning supplies). What are the key lessons you can learn from Dollar Shave Club's success? Develop a launch strategy for your new company, focusing on the marketing, branding, and business model, using DSC as a playbook.",
            questions: ["1. What were the key customer pain points in the razor market that DSC addressed?", "2. Deconstruct the elements of DSC's viral launch video. Why was it so effective?", "3. Analyze the pros and cons of the subscription model in the CPG space.", "4. Why did Unilever acquire DSC for $1 billion? What was the strategic value?", "5. What are the challenges of scaling a D2C brand after the initial hype?"],
            exhibits: [{ title: "Exhibit 1: DSC's launch video metrics", type: "table" }, { title: "Exhibit 2: Market share change in the razor category after DSC's entry", type: "chart" }]
        }
    },
    {
        id: 23, title: 'Costco\'s Membership Model', company: 'Costco', category: 'strategy', difficulty: 'Intermediate', duration: '35 min', description: 'Examine the secrets behind Costco\'s successful warehouse club model.',
        tags: ['Business Model', 'Membership', 'Retail', 'Cost Leadership'], completed: false, rating: 4.8, isPro: false,
        content: {
            introduction: "Costco's business model is unique in retail. It makes most of its profit not from selling goods, but from selling annual memberships. This allows it to offer goods at extremely low prices, which in turn drives member loyalty and renewal. This case explores the virtuous cycle at the heart of Costco's strategy.",
            problemStatement: "Costco's model has been incredibly resilient, but it faces threats from e-commerce giants like Amazon (with Prime) and other retailers adopting membership programs. As a Costco executive, you need to identify the biggest threats and opportunities. Should Costco invest more heavily in e-commerce? How can it attract younger, more digitally-native customers without alienating its core base?",
            questions: ["1. Explain the 'virtuous cycle' of Costco's business model.", "2. How does Costco's limited SKU selection contribute to its cost leadership?", "3. Analyze the role of the 'treasure hunt' experience in driving store visits.", "4. Compare Costco's membership model to Amazon Prime. What are the key differences?", "5. Propose a strategy for how Costco should approach online retail."],
            exhibits: [{ title: "Exhibit 1: Costco's revenue breakdown (Merchandise vs. Membership Fees)", type: "chart" }, { title: "Exhibit 2: Member renewal rates over time", type: "chart" }]
        }
    },
    {
        id: 24, title: 'Salesforce\'s Shift to Platform (AppExchange)', company: 'Salesforce', category: 'strategy', difficulty: 'Advanced', duration: '45 min', description: 'Analyze Salesforce\'s evolution from a CRM application to a development platform.',
        tags: ['Platform Strategy', 'Ecosystem', 'SaaS', 'Network Effects'], completed: false, rating: 4.9, isPro: true,
        content: {
            introduction: "Salesforce cemented its leadership in the CRM market by making a critical strategic shift: opening up its architecture and launching the AppExchange. This transformed Salesforce from a single product (SaaS) into a platform (PaaS), creating a powerful ecosystem and strong network effects.",
            problemStatement: "Your company is a successful B2B SaaS provider in a niche market. Your CEO wants to emulate Salesforce's success by building a platform and an app marketplace. What are the key strategic considerations? Develop a framework for deciding whether a 'platform' strategy is appropriate. If it is, what are the critical steps and investments required to build a successful ecosystem?",
            questions: ["1. What is the difference between a SaaS application and a PaaS platform?", "2. How did the AppExchange create a competitive moat for Salesforce?", "3. What are the benefits of a platform strategy for the platform owner, for developers, and for customers?", "4. What are the challenges and risks of trying to build a platform ecosystem?", "5. Analyze the role of acquisitions (like Slack and Mulesoft) in strengthening Salesforce's platform strategy."],
            exhibits: [{ title: "Exhibit 1: Growth of apps on the AppExchange", type: "chart" }, { title: "Exhibit 2: Salesforce revenue from subscriptions vs. platform and other", type: "chart" }]
        }
    }
];
  