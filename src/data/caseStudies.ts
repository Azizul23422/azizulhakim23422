import fintechImage from "@/assets/case-study-fintech.jpg";
import saasImage from "@/assets/case-study-saas.jpg";
import healthcareImage from "@/assets/case-study-healthcare.jpg";

export const caseStudies = [
  {
    id: "fintech-mobile-app",
    title: "Reimagining Mobile Banking",
    subtitle: "Designing an intuitive mobile banking experience that reduced user friction by 40% and increased daily active users.",
    role: "Lead Product Designer",
    year: "2024",
    image: fintechImage,
    client: "FinFlow",
    duration: "6 months",
    team: "1 Designer, 2 Engineers, 1 PM",
    problem: "FinFlow's mobile banking app had a 68% abandonment rate during onboarding, with users citing confusion and lack of trust as primary concerns.",
    goals: [
      "Reduce onboarding abandonment by 50%",
      "Increase daily active users by 25%",
      "Improve NPS score from 32 to 50+"
    ],
    research: [
      "Conducted 24 user interviews across different demographics",
      "Analyzed 3 months of user session recordings",
      "Competitive analysis of 8 leading fintech apps",
      "Ran 3 rounds of usability testing with prototypes"
    ],
    painPoints: [
      "Complex verification process with unclear progress indicators",
      "Overwhelming feature density on the home screen",
      "Lack of personalization in the user experience",
      "Poor error messaging during transactions"
    ],
    solution: "Redesigned the entire user journey with a focus on progressive disclosure, clear visual hierarchy, and contextual guidance. Introduced a personalized dashboard that adapts to user behavior.",
    outcomes: [
      { metric: "40%", label: "Reduction in user friction" },
      { metric: "52%", label: "Decrease in onboarding abandonment" },
      { metric: "31%", label: "Increase in daily active users" },
      { metric: "58", label: "New NPS score" }
    ],
    learnings: [
      "Trust indicators are crucial in fintech — small visual cues significantly impact user confidence",
      "Progressive disclosure works better than hiding complexity",
      "Micro-interactions during loading states reduce perceived wait time"
    ],
    projectUrl: "https://finflow-app.example.com"
  },
  {
    id: "saas-dashboard",
    title: "Enterprise Analytics Redesign",
    subtitle: "Transforming a complex data platform into an accessible tool that empowered non-technical users to make data-driven decisions.",
    role: "Senior UX Designer",
    year: "2023",
    image: saasImage,
    client: "DataViz Pro",
    duration: "8 months",
    team: "2 Designers, 4 Engineers, 1 Data Scientist",
    problem: "DataViz Pro's analytics dashboard was only being used by 15% of licensed users, with most citing the steep learning curve as the main barrier.",
    goals: [
      "Increase active user adoption to 60%",
      "Reduce time-to-insight by 40%",
      "Enable self-service analytics for non-technical users"
    ],
    research: [
      "Shadowed 12 power users and 8 struggling users",
      "Conducted card sorting exercises with 30 participants",
      "A/B tested 4 different navigation paradigms",
      "Created user personas based on data literacy levels"
    ],
    painPoints: [
      "Overwhelming number of chart options without guidance",
      "No templates or starting points for common analyses",
      "Technical jargon in labels and error messages",
      "Lack of collaborative features for team insights"
    ],
    solution: "Introduced AI-assisted chart recommendations, pre-built templates for common use cases, and a simplified query builder with natural language support.",
    outcomes: [
      { metric: "67%", label: "User adoption rate achieved" },
      { metric: "55%", label: "Faster time-to-insight" },
      { metric: "4.2x", label: "Increase in reports created" },
      { metric: "89%", label: "User satisfaction score" }
    ],
    learnings: [
      "AI assistance should augment, not replace, user decision-making",
      "Templates are the gateway drug to advanced features",
      "Investing in empty states pays dividends in user activation"
    ],
    projectUrl: "https://dataviz-pro.example.com"
  },
  {
    id: "healthcare-platform",
    title: "Patient-Centered Healthcare Portal",
    subtitle: "Creating an accessible health management platform that bridges the gap between patients and healthcare providers.",
    role: "UX Design Lead",
    year: "2023",
    image: healthcareImage,
    client: "MedConnect",
    duration: "10 months",
    team: "3 Designers, 5 Engineers, 2 Healthcare Consultants",
    problem: "Patients struggled to navigate their health information across multiple systems, leading to missed appointments and medication errors.",
    goals: [
      "Unify patient health data in one accessible platform",
      "Reduce missed appointments by 30%",
      "Achieve WCAG 2.1 AA compliance"
    ],
    research: [
      "Interviewed 40 patients across age groups and health conditions",
      "Partnered with accessibility consultants for inclusive design",
      "Analyzed patient journey from diagnosis to treatment",
      "Tested with screen readers and assistive technologies"
    ],
    painPoints: [
      "Fragmented health records across different providers",
      "Confusing medical terminology without explanations",
      "Difficult appointment scheduling process",
      "Inaccessible interfaces for elderly and disabled users"
    ],
    solution: "Developed a unified health dashboard with plain-language summaries, proactive appointment reminders, and an accessibility-first design approach.",
    outcomes: [
      { metric: "35%", label: "Reduction in missed appointments" },
      { metric: "AAA", label: "WCAG compliance achieved" },
      { metric: "4.8/5", label: "App store rating" },
      { metric: "92%", label: "Patient satisfaction" }
    ],
    learnings: [
      "Healthcare UX requires extensive domain knowledge and expert collaboration",
      "Accessibility improvements benefit all users, not just those with disabilities",
      "Trust and privacy concerns require transparent communication"
    ],
    projectUrl: "https://medconnect-portal.example.com"
  }
];
