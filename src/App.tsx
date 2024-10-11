import React from 'react';
import { Brain, MessageSquare, Repeat } from 'lucide-react';

const thinkingSteps = [
  {
    icon: Brain,
    title: "Organize Your Thoughts",
    description: "Structure and visualize ideas before speaking.",
    tips: [
      "Identify and prioritize main points",
      "Create a mental outline or map",
      "Visualize key concepts with vivid images",
      "Consider your audience's perspective"
    ]
  },
  {
    icon: MessageSquare,
    title: "Formulate Clear Sentences",
    description: "Mentally compose your message before delivery.",
    tips: [
      "Focus on one complete thought at a time",
      "Keep sentences concise and clear",
      "Use transitional phrases between ideas",
      "Practice 'inner speech' to refine your message"
    ]
  },
  {
    icon: Repeat,
    title: "Practice Daily",
    description: "Incorporate this approach in everyday life.",
    tips: [
      "Apply in casual conversations",
      "Use when answering questions",
      "Prepare for presentations and meetings",
      "Reflect on your progress and adjust as needed"
    ]
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 print:p-4 print:bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-center text-gray-800 mb-6">
          Think Before Speaking
        </h1>
        <p className="text-2xl text-center text-gray-600 mb-10">
          Daily practice for clearer, more impactful communication
        </p>
        <div className="grid grid-cols-1 gap-8">
          {thinkingSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex items-start">
              <step.icon className="w-16 h-16 text-indigo-600 mr-6 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-3">{step.title}</h2>
                <p className="text-xl text-gray-600 mb-4">{step.description}</p>
                <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                  {step.tips.map((tip, tipIndex) => (
                    <li key={tipIndex}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-gray-600 text-xl">
          Make these techniques a daily habit to enhance your communication skills and speak with greater clarity and confidence!
        </p>
      </div>
    </div>
  );
}

export default App;