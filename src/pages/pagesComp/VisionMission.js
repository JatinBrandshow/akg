"use client";

import { Lightbulb, Scale, Target } from "lucide-react";

const items = [
    {
      title: "MISSION",
      icon: <Target className="w-10 h-10 text-red-500" />,
      borderColor: "border-red-500",
      color: "from-red-500/90 to-red-400/70",
      text: (
        <ul className="text-gray-600 text-sm leading-relaxed text-left list-disc list-inside space-y-2">
          <li>Deliver exceptional education across engineering, management, law, health sciences, liberal arts, and emerging areas.</li>
          <li>Foster industry engagement, research, entrepreneurship, and practical skills (skilling, internships, placements).</li>
          <li>Prioritize student-centric, inclusive approaches for lifelong learning and societal impact.</li>
          <li>Champion global standards, diversity, and sustainable development.</li>
        </ul>
      ),
    },
    {
      title: "VISION",
      icon: <Lightbulb className="w-10 h-10 text-cyan-500" />,
      borderColor: "border-cyan-500",
      color: "from-cyan-500/90 to-cyan-400/70",
      text: `To empower innovative leaders through transformative education, cutting-edge research, and ethical practices for a sustainable global future.`,
    },
    {
      title: "CORE VALUES",
      icon: <Scale className="w-10 h-10 text-amber-500" />,
      borderColor: "border-amber-500",
      color: "from-amber-500/90 to-amber-400/70",
      text: (
        <ul className="text-gray-600 text-sm leading-relaxed text-left list-disc list-inside space-y-2">
          <li><strong>Excellence:</strong> Unwavering commitment to quality in teaching, research, and campus life.</li>
          <li><strong>Integrity:</strong> Transparency, ethics, and fairness in all dealings.</li>
          <li><strong>Inclusivity:</strong> Cultivate a diverse, welcoming environment for students and staff.</li>
          <li><strong>Innovation:</strong> Encourage creative thinking, discovery, and continuous improvement.</li>
          <li><strong>Industry Focus:</strong> Active collaboration with business, healthcare, legal, and technology partners.</li>
          <li><strong>Social Responsibility:</strong> Dedication to community service and development.</li>
        </ul>
      ),
    },
  ];

export default function VisionAndMission() {
    return (
        <section className="bg-white">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-stretch justify-center gap-8">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className={`relative flex-1 text-center bg-white rounded-2xl shadow-md p-8 border-t-8 ${item.borderColor} transition-all hover:shadow-lg`}
                    >
                        <div className="flex flex-col items-center gap-4">
                            {item.icon}
                            <h3 className="text-2xl font-semibold text-gray-800">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                        </div>

                        {/* Connector lines (only for middle and last cards) */}
                        {i < items.length - 1 && (
                            <div
                                className={`hidden md:block absolute top-1/2 right-[-40px] w-10 h-0.5 bg-gradient-to-r ${item.color}`}
                            ></div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
