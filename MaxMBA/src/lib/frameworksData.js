
import { Target, Layers, TrendingUp, Users, Globe, Zap, GitBranch, Scale, Filter as FilterIcon, Maximize2, Repeat, Brain, Award, Shield } from 'lucide-react';

export const frameworksData = [
  {
    id: 1, name: 'Porter\'s Five Forces', category: 'strategy', description: 'Analyze competitive forces that shape industry profitability and strategy.', difficulty: 'Intermediate', timeToMaster: '2-3 hours',
    applications: ['Industry Analysis', 'Competitive Strategy', 'Market Entry'], keyComponents: ['Threat of New Entrants', 'Bargaining Power of Suppliers', 'Bargaining Power of Buyers', 'Threat of Substitutes', 'Competitive Rivalry'],
    icon: Shield, color: 'blue', mastered: true, isPro: false,
    content: {
      summary: "Porter's Five Forces is a model that identifies and analyzes five competitive forces that shape every industry and helps determine an industry's weaknesses and strengths. It is frequently used to identify an industry's structure to determine corporate strategy.",
      components: [
        { name: 'Threat of New Entrants', detail: 'How easy is it for new competitors to enter the market? This is influenced by barriers to entry like patents, economies of scale, and capital requirements.' },
        { name: 'Bargaining Power of Suppliers', detail: 'How much power do suppliers have to increase prices? This depends on the number of suppliers, uniqueness of their product, and the cost of switching.' },
        { name: 'Bargaining Power of Buyers', detail: 'How much power do customers have to drive down prices? This is high when there are many sellers, products are standardized, and buyers can easily switch.' },
        { name: 'Threat of Substitutes', detail: 'How likely are customers to switch to an alternative product or service? This is high when substitutes are readily available, cheaper, or offer better performance.' },
        { name: 'Competitive Rivalry', detail: 'What is the intensity of competition among existing players? This is high when there are many competitors of similar size, slow industry growth, and high exit barriers.' }
      ],
      applicationGuide: "When to use: Use this framework to understand the competitive landscape of an industry you are considering entering, or to assess the health of your current industry. How to apply: For each of the five forces, list the specific factors in your industry and rate the force as 'low', 'medium', or 'high'. A combination of strong forces may suggest the industry is unattractive.",
      practiceScenario: "You are a consultant for a startup that wants to launch a new plant-based milk product. Use Porter's Five Forces to analyze the alternative milk industry and advise your client on the attractiveness of this market."
    }
  },
  {
    id: 2, name: 'SWOT Analysis', category: 'analysis', description: 'Evaluate internal strengths/weaknesses and external opportunities/threats.', difficulty: 'Beginner', timeToMaster: '1-2 hours',
    applications: ['Strategic Planning', 'Business Assessment', 'Decision Making'], keyComponents: ['Strengths', 'Weaknesses', 'Opportunities', 'Threats'],
    icon: Layers, color: 'green', mastered: true, isPro: false,
    content: {
      summary: "A SWOT analysis is a strategic planning technique used to help a person or organization identify Strengths, Weaknesses, Opportunities, and Threats related to business competition or project planning. It specifies the objective of the business venture or project and identifies the internal and external factors that are favorable and unfavorable to achieving that objective.",
      components: [
        { name: 'Strengths (Internal)', detail: 'Characteristics of the business or project that give it an advantage over others (e.g., strong brand, loyal customers, unique technology).' },
        { name: 'Weaknesses (Internal)', detail: 'Characteristics that place the business at a disadvantage relative to others (e.g., high debt, weak brand, outdated technology).' },
        { name: 'Opportunities (External)', detail: 'Elements in the environment that the business could exploit to its advantage (e.g., emerging markets, new technology, changing consumer tastes).' },
        { name: 'Threats (External)', detail: 'Elements in the environment that could cause trouble for the business (e.g., new competitors, regulatory changes, economic downturn).' }
      ],
      applicationGuide: "When to use: SWOT analysis is useful at the start of any strategic planning process, when exploring new initiatives, or when evaluating an existing business. How to apply: Brainstorm and list factors for each of the four quadrants. Then, use the analysis to develop strategies: use strengths to leverage opportunities, mitigate weaknesses, and defend against threats.",
      practiceScenario: "You are the marketing manager for a local coffee shop. Perform a SWOT analysis to help decide whether you should launch a new mobile app for online ordering and loyalty rewards."
    }
  },
  {
    id: 3, name: 'BCG Growth-Share Matrix', category: 'strategy', description: 'Portfolio analysis tool to evaluate business units based on market growth and share.', difficulty: 'Intermediate', timeToMaster: '2-3 hours',
    applications: ['Portfolio Management', 'Resource Allocation', 'Strategic Planning'], keyComponents: ['Stars', 'Cash Cows', 'Question Marks', 'Dogs'],
    icon: TrendingUp, color: 'purple', mastered: false, isPro: false,
    content: {
      summary: "The BCG Matrix is a portfolio planning tool developed by the Boston Consulting Group. It helps companies analyze their business units or product lines based on two variables: relative market share and market growth rate.",
      components: [
        { name: 'Stars', detail: 'High growth, high market share. Require heavy investment to fuel growth. Eventually, growth will slow and they will become Cash Cows.' },
        { name: 'Cash Cows', detail: 'Low growth, high market share. Mature, successful products with little need for investment. They generate more cash than they consume.' },
        { name: 'Question Marks', detail: 'High growth, low market share. Require large amounts of cash to maintain or gain market share. Management must decide whether to invest in them to grow into Stars or to phase them out.' },
        { name: 'Dogs', detail: 'Low growth, low market share. Typically break-even, generating barely enough cash to maintain the business’s market share. Usually, they are sold off or liquidated.' }
      ],
      applicationGuide: "When to use: To decide how to allocate resources among different business units and to develop strategic objectives for each unit. How to apply: Plot each business unit on the 2x2 matrix. Use the analysis to decide whether to 'invest', 'hold', 'harvest', or 'divest' from each unit.",
      practiceScenario: "A large consumer electronics company has four main product lines: smartphones (high growth, high share), laptops (low growth, high share), VR headsets (high growth, low share), and digital cameras (low growth, low share). Use the BCG Matrix to classify these product lines and recommend a resource allocation strategy."
    }
},
{
    id: 4, name: 'Value Chain Analysis', category: 'operations', description: 'Identify activities that create value and competitive advantage.', difficulty: 'Advanced', timeToMaster: '3-4 hours',
    applications: ['Cost Analysis', 'Competitive Advantage', 'Process Optimization'], keyComponents: ['Primary Activities', 'Support Activities', 'Margin Analysis'],
    icon: Zap, color: 'orange', mastered: false, isPro: true,
    content: {
        summary: "Value Chain Analysis is a strategic tool used to analyze internal firm activities. Its goal is to recognize which activities are the most valuable (i.e., are the source of cost or differentiation advantage) to the firm and which ones could be improved to provide a competitive advantage.",
        components: [
            { name: 'Primary Activities', detail: 'Inbound Logistics, Operations, Outbound Logistics, Marketing & Sales, and Service. These are directly involved in the creation and delivery of a product.' },
            { name: 'Support Activities', detail: 'Procurement, Human Resource Management, Technological Development, and Infrastructure. These activities support the primary functions.' },
            { name: 'Margin', detail: 'The difference between the total value created and the collective cost of performing the value activities.' }
        ],
        applicationGuide: "Identify the firm's primary and support activities. For each activity, determine its cost and how it contributes to customer value. Use this analysis to identify opportunities for cost reduction or differentiation.",
        practiceScenario: "Analyze the value chain of a low-cost airline like Ryanair. Identify how each activity is configured to support its overall cost leadership strategy."
    }
},
{
    id: 5, name: 'McKinsey 7S Framework', category: 'strategy', description: 'Holistic model for organizational effectiveness and change management.', difficulty: 'Advanced', timeToMaster: '3-4 hours',
    applications: ['Organizational Design', 'Change Management', 'Performance Analysis'], keyComponents: ['Strategy', 'Structure', 'Systems', 'Shared Values', 'Style', 'Staff', 'Skills'],
    icon: Users, color: 'indigo', mastered: false, isPro: true,
    content: {
        summary: "The McKinsey 7S Framework is a management model that describes seven factors to organize a company in a holistic and effective way. Together, these factors determine the way in which a corporation operates. The model categorizes the seven elements as either 'hard' or 'soft' elements.",
        components: [
            { name: 'Hard Elements (Strategy, Structure, Systems)', detail: 'Easier to define and manage. Strategy: the plan to achieve competitive advantage. Structure: the organization chart. Systems: the procedures and processes.' },
            { name: 'Soft Elements (Shared Values, Style, Staff, Skills)', detail: 'More difficult to describe and influence. Shared Values: the core values of the company. Style: the leadership style. Staff: the employees and their general capabilities. Skills: the core competencies of the firm.' }
        ],
        applicationGuide: "Use this framework to analyze the alignment of different parts of your organization. It's particularly useful during a merger, acquisition, or any major organizational change. The central idea is that all seven elements must be aligned for the organization to be successful.",
        practiceScenario: "A traditional bank is undergoing a digital transformation. Use the 7S framework to identify potential areas of misalignment and recommend actions to ensure a successful change program."
    }
},
{
    id: 6, name: 'PESTEL Analysis', category: 'analysis', description: 'Examine macro-environmental factors affecting business operations.', difficulty: 'Intermediate', timeToMaster: '2-3 hours',
    applications: ['Market Research', 'Strategic Planning', 'Risk Assessment'], keyComponents: ['Political', 'Economic', 'Social', 'Technological', 'Environmental', 'Legal'],
    icon: Globe, color: 'teal', mastered: true, isPro: false,
    content: {
        summary: "PESTEL analysis is a strategic framework used to evaluate the external macro-environmental factors that can impact a business. It provides a comprehensive overview of the opportunities and threats a company faces.",
        components: [
            { name: 'Political', detail: 'Government policies, political stability, trade and tax policies.' },
            { name: 'Economic', detail: 'Economic growth, inflation rates, interest rates, exchange rates.' },
            { name: 'Social', detail: 'Cultural trends, demographics, population growth rates, health consciousness.' },
            { name: 'Technological', detail: 'Innovation, automation, R&D activity, technological change.' },
            { name: 'Environmental', detail: 'Climate change, weather, environmental policies, availability of resources.' },
            { name: 'Legal', detail: 'Consumer laws, employment laws, safety standards, international trade laws.' }
        ],
        applicationGuide: "Brainstorm and list the relevant PESTEL factors for your market. Analyze the potential impact of each factor on your business. Use the insights to identify opportunities and prepare for threats.",
        practiceScenario: "You are an electric vehicle manufacturer planning to enter the Indian market. Conduct a PESTEL analysis to understand the macro-environment and identify key success factors."
    }
},
{
    id: 7, name: 'Ansoff Matrix', category: 'strategy', description: 'A strategic planning tool for identifying business growth opportunities.', difficulty: 'Intermediate', timeToMaster: '2 hours',
    applications: ['Growth Strategy', 'Market Development', 'Product Development'], keyComponents: ['Market Penetration', 'Market Development', 'Product Development', 'Diversification'],
    icon: Maximize2, color: 'red', mastered: false, isPro: false,
    content: {
        summary: "The Ansoff Matrix is a strategic tool used to help businesses devise strategies for growth. It presents four possible growth strategies based on whether the company is targeting new or existing products and new or existing markets.",
        components: [
            { name: 'Market Penetration (Existing Product, Existing Market)', detail: 'Goal is to increase market share. Tactics include price cuts, increased promotion, and loyalty schemes.' },
            { name: 'Market Development (Existing Product, New Market)', detail: 'Goal is to find new markets for existing products. This can involve new geographic markets, new demographic segments, or new uses for the product.' },
            { name: 'Product Development (New Product, Existing Market)', detail: 'Goal is to launch new products for the existing customer base. Tactics include R&D, acquisitions, and brand extensions.' },
            { name: 'Diversification (New Product, New Market)', detail: 'The riskiest strategy. Involves launching new products in new markets. Can be related (leveraging existing capabilities) or unrelated.' }
        ],
        applicationGuide: "Use the matrix to brainstorm and evaluate different growth options. Assess the risk and potential reward of each of the four quadrants to determine the most suitable strategy for your business.",
        practiceScenario: "A popular coffee shop chain is looking for growth. Use the Ansoff Matrix to propose and evaluate four different growth strategies."
    }
},
{
    id: 8, name: 'Balanced Scorecard', category: 'strategy', description: 'A performance management framework that adds strategic non-financial performance measures to traditional financial metrics.', difficulty: 'Advanced', timeToMaster: '4-5 hours',
    applications: ['Performance Management', 'Strategic Measurement', 'Communication'], keyComponents: ['Financial', 'Customer', 'Internal Business Processes', 'Learning and Growth'],
    icon: Scale, color: 'yellow', mastered: false, isPro: true,
    content: {
        summary: "The Balanced Scorecard is a strategic planning and management system used to align business activities to the vision and strategy of the organization, improve internal and external communications, and monitor organization performance against strategic goals.",
        components: [
            { name: 'Financial Perspective', detail: '"How do we look to shareholders?" - e.g., profitability, revenue growth.' },
            { name: 'Customer Perspective', detail: '"How do customers see us?" - e.g., customer satisfaction, market share, brand loyalty.' },
            { name: 'Internal Business Process Perspective', detail: '"What must we excel at?" - e.g., operational efficiency, quality, cycle time.' },
            { name: 'Learning and Growth Perspective', detail: '"How can we continue to improve and create value?" - e.g., employee skills, corporate culture, technology.' }
        ],
        applicationGuide: "For each perspective, define strategic objectives, measures, targets, and initiatives. This creates a comprehensive map of the organization's strategy and provides a balanced view of performance beyond just financials.",
        practiceScenario: "Design a Balanced Scorecard for a non-profit organization focused on environmental conservation. What would be the key objectives and measures for each of the four perspectives?"
    }
},
{
    id: 9, name: 'Marketing Mix (4Ps & 7Ps)', category: 'marketing', description: 'A foundational model for businesses, centered around product, price, place, and promotion.', difficulty: 'Beginner', timeToMaster: '1-2 hours',
    applications: ['Marketing Strategy', 'Product Launch', 'Brand Positioning'], keyComponents: ['Product', 'Price', 'Place', 'Promotion', 'People', 'Process', 'Physical Evidence'],
    icon: FilterIcon, color: 'pink', mastered: true, isPro: false,
    content: {
        summary: "The Marketing Mix is a set of controllable marketing tools that a company uses to produce the response it wants in the target market. The traditional 4Ps (Product, Price, Place, Promotion) have been extended to 7Ps for service-based businesses.",
        components: [
            { name: 'Product', detail: 'The goods or services offered. Includes features, quality, branding, packaging.' },
            { name: 'Price', detail: 'The amount customers pay. Includes list price, discounts, payment terms.' },
            { name: 'Place', detail: 'How the product is distributed to the customer. Includes distribution channels, locations, inventory.' },
            { name: 'Promotion', detail: 'How the company communicates with its customers. Includes advertising, PR, sales promotions.' },
            { name: 'People (for services)', detail: 'The employees who deliver the service and interact with customers.' },
            { name: 'Process (for services)', detail: 'The systems and processes used to deliver the service.' },
            { name: 'Physical Evidence (for services)', detail: 'The environment in which the service is delivered and any tangible goods that help communicate the service.' }
        ],
        applicationGuide: "Use the 4Ps/7Ps as a checklist to develop your marketing plan. Ensure that all elements of the mix are consistent and support each other to create a strong brand position.",
        practiceScenario: "Develop a marketing mix (7Ps) for a new high-end, subscription-based gym."
    }
},
{
    id: 10, name: 'Six Sigma (DMAIC)', category: 'operations', description: 'A data-driven quality strategy for improving processes, structured around Define, Measure, Analyze, Improve, and Control phases.', difficulty: 'Advanced', timeToMaster: '5-6 hours',
    applications: ['Quality Improvement', 'Process Optimization', 'Defect Reduction'], keyComponents: ['Define', 'Measure', 'Analyze', 'Improve', 'Control'],
    icon: Repeat, color: 'cyan', mastered: false, isPro: true,
    content: {
        summary: "Six Sigma is a disciplined, data-driven approach and methodology for eliminating defects in any process – from manufacturing to transactional and from product to service. The DMAIC framework is a core tool used to drive Six Sigma projects.",
        components: [
            { name: 'Define', detail: 'Define the problem, project goals, and customer deliverables.' },
            { name: 'Measure', detail: 'Measure the current process and collect data to establish a baseline.' },
            { name: 'Analyze', detail: 'Analyze the data to identify the root causes of defects.' },
            { name: 'Improve', detail: 'Improve the process by developing and implementing solutions to address the root causes.' },
            { name: 'Control', detail: 'Control the future state process to ensure that any deviations from the target are corrected before they result in defects.' }
        ],
        applicationGuide: "DMAIC is a formal and rigorous methodology. It is best applied to complex problems where the root cause is not obvious. It relies heavily on statistical analysis to validate causes and solutions.",
        practiceScenario: "A call center is experiencing a high rate of customer dissatisfaction. Walk through the DMAIC steps you would take to diagnose and solve this problem."
    }
},
{
    id: 11, name: 'Blue Ocean Strategy', category: 'strategy', description: 'Create uncontested market space and make the competition irrelevant.', difficulty: 'Advanced', timeToMaster: '4-5 hours',
    applications: ['Innovation', 'Market Creation', 'Disruption'], keyComponents: ['Eliminate', 'Reduce', 'Raise', 'Create'],
    icon: Brain, color: 'blue', mastered: false, isPro: true,
    content: {
        summary: "Blue Ocean Strategy is about creating and capturing uncontested market space, thereby making the competition irrelevant. It is based on the view that market boundaries and industry structure are not a given and can be reconstructed by the actions and beliefs of industry players.",
        components: [
            { name: 'Eliminate', detail: 'Which factors that the industry takes for granted should be eliminated?' },
            { name: 'Reduce', detail: 'Which factors should be reduced well below the industry\'s standard?' },
            { name: 'Raise', detail: 'Which factors should be raised well above the industry\'s standard?' },
            { name: 'Create', detail: 'Which factors should be created that the industry has never offered?' }
        ],
        applicationGuide: "Use the Eliminate-Reduce-Raise-Create (ERRC) Grid to challenge the existing strategic logic of your industry. The goal is to pursue both differentiation and low cost simultaneously, creating a 'value innovation'.",
        practiceScenario: "Apply the ERRC Grid to the traditional circus industry to see how Cirque du Soleil created a blue ocean. Then, apply it to another industry, like movie theaters or taxis, to brainstorm a new business concept."
    }
},
{
    id: 12, name: 'VRIO Framework', category: 'analysis', description: 'Analyze firm resources to find a sustainable competitive advantage.', difficulty: 'Intermediate', timeToMaster: '2-3 hours',
    applications: ['Resource Analysis', 'Competitive Advantage', 'Internal Analysis'], keyComponents: ['Value', 'Rarity', 'Imitability', 'Organization'],
    icon: Award, color: 'yellow', mastered: false, isPro: false,
    content: {
        summary: "The VRIO framework is an internal analysis tool that helps organizations identify the resources and capabilities that can be a source of sustained competitive advantage. It is an acronym for Value, Rarity, Imitability, and Organization.",
        components: [
            { name: 'Value', detail: 'Does the resource or capability enable the firm to exploit an opportunity or neutralize a threat?' },
            { name: 'Rarity', detail: 'Is the resource currently controlled by only a small number of competing firms?' },
            { name: 'Imitability', detail: 'Do firms without the resource face a cost disadvantage in obtaining or developing it?' },
            { name: 'Organization', detail: 'Is the firm organized to capture the value of the resource? (e.g., structure, processes, culture).' }
        ],
        applicationGuide: "List your firm's key resources and capabilities. Assess each one against the VRIO criteria. A resource must meet all four criteria to be a source of sustained competitive advantage.",
        practiceScenario: "Conduct a VRIO analysis of Google's search algorithm. Does it provide a sustained competitive advantage? Why or why not?"
    }
},
{
    id: 13, name: 'Customer Journey Mapping', category: 'marketing', description: 'Visualize the customer experience from their perspective.', difficulty: 'Intermediate', timeToMaster: '3-4 hours',
    applications: ['Customer Experience', 'Process Improvement', 'Product Design'], keyComponents: ['Phases', 'Touchpoints', 'Actions', 'Thoughts & Feelings', 'Pain Points'],
    icon: Users, color: 'indigo', mastered: false, isPro: false,
    content: {
        summary: "A customer journey map is a visual representation of the customer's experience with your company. It tells the story of the customer's experience from initial contact, through the process of engagement and into a long-term relationship.",
        components: [
            { name: 'Phases', detail: 'The major stages the customer goes through (e.g., Awareness, Consideration, Purchase, Service, Loyalty).' },
            { name: 'Touchpoints', detail: 'The points of interaction between the customer and your company (e.g., website, ad, store, call center).' },
            { name: 'Actions', detail: 'What the customer is doing at each stage.' },
            { name: 'Thoughts & Feelings', detail: 'What the customer is thinking and feeling. This is where you identify pain points and opportunities.' },
            { name: 'Pain Points & Opportunities', detail: 'The problems the customer faces and the opportunities for the business to improve the experience.' }
        ],
        applicationGuide: "Start by creating a persona for your target customer. Then, map out all the touchpoints and actions for a specific scenario (e.g., buying a product, getting customer support). Focus on identifying the emotional journey to find the most impactful areas for improvement.",
        practiceScenario: "Create a customer journey map for a student applying to an MBA program. Identify the key pain points and propose three improvements to the university's admissions process."
    }
},
{
    id: 14, name: 'Jobs to be Done (JTBD)', category: 'analysis', description: 'Focus on the customer\'s underlying problem, not the product.', difficulty: 'Advanced', timeToMaster: '3-4 hours',
    applications: ['Innovation', 'Product Development', 'Market Segmentation'], keyComponents: ['Situation', 'Motivation', 'Expected Outcome'],
    icon: Target, color: 'teal', mastered: false, isPro: true,
    content: {
        summary: "The Jobs to be Done (JTBD) theory is a framework for understanding customer needs. It posits that customers 'hire' products and services to get a 'job' done. By focusing on the underlying job, companies can innovate more effectively and avoid marketing myopia.",
        components: [
            { name: 'Situation', detail: 'The context in which the job arises.' },
            { name: 'Motivation', detail: 'The underlying driver or problem the customer is trying to solve.' },
            { name: 'Expected Outcome', detail: 'The desired state or result the customer is looking for.' }
        ],
        applicationGuide: "Conduct customer interviews to uncover the 'job' behind their purchase decisions. Instead of asking about the product, ask about the circumstances of the purchase and what they were trying to achieve. A classic example is people 'hiring' a milkshake for a long, boring commute.",
        practiceScenario: "A company sells mattresses. What is the 'job' a customer is hiring the mattress for? (Hint: It's not just 'to sleep'). Use JTBD to brainstorm ideas for a new, innovative sleep product."
    }
},
{
    id: 15, name: 'MECE Principle', category: 'analysis', description: 'Mutually Exclusive, Collectively Exhaustive. A principle for clear thinking.', difficulty: 'Beginner', timeToMaster: '1 hour',
    applications: ['Problem Solving', 'Communication', 'Structuring Analysis'], keyComponents: ['Mutually Exclusive', 'Collectively Exhaustive'],
    icon: GitBranch, color: 'orange', mastered: true, isPro: false,
    content: {
        summary: "The MECE (Mutually Exclusive, Collectively Exhaustive) principle is a grouping principle for separating a set of items into subsets that are mutually exclusive (no overlaps) and collectively exhaustive (cover all possibilities). It is a core principle of problem-solving at top consulting firms.",
        components: [
            { name: 'Mutually Exclusive', detail: 'Each item fits into only one category. There are no overlaps between categories.' },
            { name: 'Collectively Exhaustive', detail: 'All items fit into one of the categories. There are no gaps; the set of categories is complete.' }
        ],
        applicationGuide: "When breaking down a problem (e.g., 'How can we increase profit?'), structure your analysis into MECE components. For profit, a MECE breakdown is 'Revenue' and 'Costs'. This ensures your analysis is structured, logical, and complete.",
        practiceScenario: "Create a MECE framework for analyzing why customer subscriptions for a streaming service are declining. (Hint: Think about acquisition vs. retention)."
    }
}
];
  