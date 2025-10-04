export const interviewSessionsData = [
    {
        id: 1, title: 'McKinsey-Style Case Interview', type: 'case', company: 'McKinsey & Company', duration: '45 min', difficulty: 'Advanced', description: 'Practice a complete case interview with a retail profitability problem.',
        skills: ['Problem Structuring', 'Data Analysis', 'Recommendation'], completed: true, score: 85, feedback: 'Strong analytical approach, improve communication clarity', isPro: true,
        content: {
            overview: "This is a classic profitability case. Your client is a large US-based clothing retailer that has seen declining profitability over the last three years. The CEO has hired you to diagnose the problem and recommend a path forward.",
            interviewerScript: [
                { speaker: 'Interviewer', text: "Thanks for coming in today. Our client, 'FashionForward', has been experiencing a decline in profitability for the past three years. Can you help us understand why and what they should do about it?" },
                { speaker: 'Candidate', text: "Thank you. To clarify, has the decline been in revenue, costs, or both? And is this an industry-wide trend or specific to FashionForward?" },
                { speaker: 'Interviewer', text: "Great questions. The revenue has been flat, so the issue seems to be on the cost side. The industry as a whole has been stable. Where would you like to start?" }
            ],
            questions: ["What is your initial framework for analyzing this profitability problem?", "Exhibit 1 shows a breakdown of FashionForward's costs over the past 5 years. What are your observations?", "What could be the potential drivers for the increase in Cost of Goods Sold (COGS)?", "The client wants to know if they should switch to a cheaper supplier in Asia. How would you analyze this decision?", "Synthesize your findings and provide a recommendation to the CEO."],
            exhibits: [{ title: "Exhibit 1: FashionForward Cost Structure (2019-2023)", type: "chart" }, { title: "Exhibit 2: Competitor Benchmarking - COGS as % of Revenue", type: "table" }]
        }
    },
    {
        id: 2, title: 'BCG Market Entry Case', type: 'case', company: 'Boston Consulting Group', duration: '40 min', difficulty: 'Advanced', description: 'Analyze market entry strategy for a tech company expanding to Asia.',
        skills: ['Market Analysis', 'Strategic Thinking', 'Financial Modeling'], completed: false, score: null, feedback: null, isPro: true,
        content: {
            overview: "Your client is a successful US-based SaaS company providing project management software. They are considering entering the Southeast Asian market, specifically targeting Singapore, Indonesia, and Vietnam. They need your recommendation on whether to enter, and if so, how.",
            interviewerScript: [{ speaker: 'Interviewer', text: "Our client, 'WorkFlow Inc.', is exploring expansion into Southeast Asia. They've identified Singapore, Indonesia, and Vietnam as potential markets. They've asked us to evaluate this opportunity and recommend a strategy. How would you approach this problem?" }],
            questions: ["What framework would you use to assess the attractiveness of these markets?", "Exhibit 1 provides data on market size, competition, and regulatory environment for the three countries. What are your initial thoughts?", "How would you estimate the potential market size for WorkFlow Inc. in Indonesia?", "What are the different market entry strategies (e.g., organic growth, acquisition, joint venture) and what are the pros and cons of each in this context?", "Please provide a final recommendation on which country to enter first (if any) and with what strategy."],
            exhibits: [{ title: "Exhibit 1: Market Data for Singapore, Indonesia, Vietnam", type: "table" }, { title: "Exhibit 2: Profile of Local Competitors", type: "table" }]
        }
    },
    {
        id: 3, title: 'Leadership Experience Discussion', type: 'behavioral', company: 'General', duration: '30 min', difficulty: 'Intermediate', description: 'Practice discussing leadership experiences using the STAR method.',
        skills: ['Leadership', 'Communication', 'Storytelling'], completed: true, score: 92, feedback: 'Excellent storytelling, strong examples provided', isPro: false,
        content: {
            overview: "This session focuses on preparing for common behavioral questions about leadership. The goal is to practice structuring your answers using the STAR (Situation, Task, Action, Result) method to deliver clear, compelling stories about your experience.",
            interviewerScript: [],
            questions: ["Tell me about a time you had to lead a team through a difficult challenge.", "Describe a situation where you had to motivate a team member who was underperforming.", "Give an example of a time you had to make an unpopular decision as a leader.", "How do you define your leadership style? Provide an example that illustrates it.", "Tell me about a time you failed as a leader. What did you learn from it?"],
            exhibits: [{ title: "STAR Method Guide", type: "guide", detail: "Situation: Set the scene and give the necessary context. Task: Describe what your responsibility was in that situation. Action: Explain exactly what steps you took to address it. Result: Share what outcomes your actions achieved." }]
        }
    },
    {
        id: 4, title: 'Bain Estimation Case', type: 'case', company: 'Bain & Company', duration: '25 min', difficulty: 'Intermediate', description: 'Estimate the number of coffee shops in New York City.',
        skills: ['Estimation', 'Logical Reasoning', 'Assumptions'], completed: false, score: null, feedback: null, isPro: false,
        content: {
            overview: "This is a market sizing and estimation case, common in first-round consulting interviews. The goal is to test your logical thinking, ability to structure a problem, and comfort with making reasonable assumptions.",
            interviewerScript: [{ speaker: 'Interviewer', text: "Let's do a quick estimation case. How many coffee shops are there in New York City?" }],
            questions: ["How would you structure your approach to this estimation?", "What are the key drivers or segments you would consider?", "Walk me through your calculations.", "How would you sanity check your final answer?"],
            exhibits: []
        }
    },
    {
        id: 5, title: 'Financial Analysis Deep Dive', type: 'technical', company: 'Investment Banking', duration: '35 min', difficulty: 'Advanced', description: 'Analyze financial statements and perform valuation exercises.',
        skills: ['Financial Analysis', 'Valuation', 'Excel Modeling'], completed: false, score: null, feedback: null, isPro: true,
        content: {
            overview: "This session tests your understanding of core finance and accounting principles. You will be asked to walk through financial statements, calculate key ratios, and discuss valuation methodologies.",
            interviewerScript: [],
            questions: ["Walk me through the three main financial statements.", "If you could only choose one statement to evaluate the financial health of a company, which would you choose and why?", "What is EBITDA? What are the pros and cons of using it?", "How would you value a company? Discuss three common valuation methods.", "What is Working Capital?"],
            exhibits: [{ title: "Sample Balance Sheet and Income Statement", type: "table" }]
        }
    },
    {
        id: 6, title: 'Teamwork and Collaboration', type: 'behavioral', company: 'General', duration: '20 min', difficulty: 'Beginner', description: 'Discuss experiences working in teams and resolving conflicts.',
        skills: ['Teamwork', 'Conflict Resolution', 'Collaboration'], completed: true, score: 78, feedback: 'Good examples, work on being more specific about your role', isPro: false,
        content: {
            overview: "This behavioral session focuses on your ability to work effectively with others. Prepare to discuss specific examples of successful teamwork and how you have handled interpersonal challenges.",
            interviewerScript: [],
            questions: ["Tell me about a time you worked on a team and someone wasn't pulling their weight.", "Describe your ideal team. What role do you typically play?", "Tell me about a time you had a conflict with a teammate. How did you resolve it?", "Give an example of a time you had to work with a difficult person.", "How do you build relationships with new team members?"],
            exhibits: []
        }
    },
    {
        id: 7, title: 'Google Product Manager Interview', type: 'case', company: 'Google', duration: '50 min', difficulty: 'Advanced', description: 'Design a new feature for Google Maps. Focus on user needs, prioritization, and metrics.',
        skills: ['Product Design', 'User Empathy', 'Prioritization', 'Metrics'], completed: false, score: null, feedback: null, isPro: true,
        content: {
            overview: "This is a product design case, typical for PM roles at tech companies. The focus is on your creativity, user empathy, and ability to structure a product development process.",
            interviewerScript: [{ speaker: 'Interviewer', text: "Let's say you're a Product Manager for Google Maps. What new feature would you build?" }],
            questions: ["Who are the target users for this new feature?", "What are the key user problems you are trying to solve?", "Brainstorm three potential solutions. Which one would you choose and why?", "How would you define and measure success for this feature?", "What is your go-to-market strategy?"],
            exhibits: []
        }
    },
    {
        id: 8, title: 'Amazon "Tell Me About a Time..."', type: 'behavioral', company: 'Amazon', duration: '30 min', difficulty: 'Intermediate', description: 'Practice answering behavioral questions based on Amazon\'s 16 Leadership Principles.',
        skills: ['Behavioral', 'STAR Method', 'Leadership Principles'], completed: false, score: null, feedback: null, isPro: false,
        content: {
            overview: "Amazon's behavioral interviews are famous for being structured around its Leadership Principles. This session will help you prepare stories that align with these principles.",
            interviewerScript: [],
            questions: ["Tell me about a time you demonstrated Customer Obsession.", "Tell me about a time you had to Dive Deep to find the root cause of a problem.", "Give an example of a time you showed Bias for Action.", "Tell me about a time you had to Disagree and Commit.", "Describe a situation where you had to Invent and Simplify."],
            exhibits: [{ title: "Amazon's 16 Leadership Principles", type: "list" }]
        }
    },
    {
        id: 9, title: 'Data Science & Analytics Case', type: 'technical', company: 'Tech / Consulting', duration: '40 min', difficulty: 'Advanced', description: 'A case focusing on interpreting data, A/B testing, and making data-driven recommendations.',
        skills: ['Data Interpretation', 'A/B Testing', 'SQL', 'Statistics'], completed: false, score: null, feedback: null, isPro: true,
        content: {
            overview: "This session tests your ability to interpret data and make business recommendations. It may involve analyzing charts, discussing experimental design, and basic SQL concepts.",
            interviewerScript: [],
            questions: ["Exhibit 1 shows the results of an A/B test for a 'Buy Now' button. What is your conclusion? Is the result statistically significant?", "How would you design an experiment to test the impact of a new recommendation algorithm on user engagement?", "What are the potential biases in this dataset?", "How would you write a SQL query to find the top 10 most active users?", "Explain the difference between correlation and causation."],
            exhibits: [{ title: "Exhibit 1: A/B Test Results", type: "table" }]
        }
    },
    {
        id: 10, title: 'Consulting Brain Teaser Practice', type: 'case', company: 'Consulting', duration: '20 min', difficulty: 'Intermediate', description: 'Practice logical puzzles and brain teasers common in first-round consulting interviews.',
        skills: ['Logical Reasoning', 'Problem Solving', 'Creativity'], completed: false, score: null, feedback: null, isPro: false,
        content: {
            overview: "Brain teasers are less common now but still appear in some interviews. They are used to test your problem-solving skills and poise under pressure.",
            interviewerScript: [],
            questions: ["You have a 3-liter jug and a 5-liter jug. How can you measure out exactly 4 liters of water?", "How many golf balls can fit into a school bus?", "Why are manhole covers round?", "You are in a room with three light switches. In an adjacent room, there are three light bulbs. You can only enter the room with the bulbs once. How do you determine which switch corresponds to which bulb?"],
            exhibits: []
        }
    },
    {
        id: 11, title: 'M&A and LBO Modeling', type: 'technical', company: 'Private Equity / Investment Banking', duration: '60 min', difficulty: 'Advanced', description: 'A technical deep dive into Merger & Acquisition and Leveraged Buyout models.',
        skills: ['Financial Modeling', 'Valuation', 'M&A', 'LBO'], completed: false, score: null, feedback: null, isPro: true,
        content: {
            overview: "This session is for candidates targeting finance roles. It tests your understanding of the mechanics of building an M&A model and an LBO model, including accretion/dilution analysis and sources & uses.",
            interviewerScript: [],
            questions: ["Walk me through a basic M&A model.", "What is the difference between a stock purchase and an asset purchase?", "What are synergies, and how are they modeled?", "Walk me through a basic LBO model.", "What makes a company a good LBO candidate?", "How do you calculate the internal rate of return (IRR) for an LBO?"],
            exhibits: [{ title: "Sample LBO Model Structure", type: "diagram" }]
        }
    },
    {
        id: 12, title: 'Handling Failure and Weaknesses', type: 'behavioral', company: 'General', duration: '25 min', difficulty: 'Intermediate', description: 'Practice discussing professional setbacks and areas for development constructively.',
        skills: ['Self-awareness', 'Resilience', 'Growth Mindset'], completed: false, score: null, feedback: null, isPro: false,
        content: {
            overview: "This behavioral session focuses on your ability to demonstrate self-awareness and a growth mindset. The key is to be honest but also show that you learn from your experiences.",
            interviewerScript: [],
            questions: ["Tell me about your greatest professional failure. What did you learn from it?", "What is your biggest weakness?", "Tell me about a time you received difficult feedback. How did you handle it?", "If you could do one project over again, what would you do differently?", "How do you stay current with new skills and knowledge in your field?"],
            exhibits: []
        }
    }
];