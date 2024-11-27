import TimelineItem from './TimelineItem';

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "TechCorp Solutions",
    period: "Jan 2023 - Jun 2023",
    description: [
      "Designed and developed responsive web pages using React.js",
      "Improved website performance by optimizing components and implementing lazy loading",
      "Collaborated with a team of 5 developers to implement dynamic features using RESTful APIs",
      "Reduced page load time by 40% through code optimization and caching strategies"
    ]
  },
  {
    title: "Data Analyst Intern",
    company: "SafetyFirst Analytics",
    period: "Jul 2022 - Dec 2022",
    description: [
      "Conducted comprehensive data analysis on NYPD motor vehicle collisions using IBM Cognos",
      "Delivered visual reports that improved safety strategies by 25%",
      "Created interactive dashboards for real-time accident data monitoring",
      "Collaborated with traffic safety experts to identify accident patterns and prevention measures"
    ]
  }
];

export default function Timeline() {
  return (
    <div className="relative">
      {experiences.map((experience, index) => (
        <TimelineItem
          key={index}
          index={index}
          {...experience}
        />
      ))}
    </div>
  );
}