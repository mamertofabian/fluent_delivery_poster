import React from 'react';
import { Brain, List, Lightbulb, MessageSquare, Repeat } from 'lucide-react';

const thinkingSteps = [
  {
    icon: Brain,
    title: "Organize Your Thoughts",
    description: "Mentally arrange ideas before speaking.",
    tips: [
      "Identify main points",
      "Determine logical order",
      "Consider audience perspective",
      "Anticipate questions"
    ]
  },
  {
    icon: List,
    title: "Create Mental Outlines",
    description: "Structure thoughts into a clear framework.",
    tips: [
      "Use beginning-middle-end structure",
      "Group related ideas",
      "Prioritize important points",
      "Visualize outline as a map"
    ]
  },
  {
    icon: Lightbulb,
    title: "Visualize Key Concepts",
    description: "Form mental images to enhance recall.",
    tips: [
      "Associate points with vivid images",
      "Create mental 'journey' of ideas",
      "Use metaphors for complex concepts",
      "Practice visual thinking"
    ]
  },
  {
    icon: MessageSquare,
    title: "Formulate Complete Sentences",
    description: "Mentally compose clear sentences before speaking.",
    tips: [
      "Focus on one thought at a time",
      "Keep sentences concise",
      "Use transitional phrases",
      "Practice 'inner speech'"
    ]
  },
  {
    icon: Repeat,
    title: "Practice Regularly",
    description: "Incorporate this approach in daily life.",
    tips: [
      "Apply in casual conversations",
      "Use when answering questions",
      "Practice for presentations",
      "Reflect and adjust as needed"
    ]
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 print:p-0 print:bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Think Before Speaking
        </h1>
        <p className="text-lg text-center text-gray-600 mb-6">
          Master the art of organizing thoughts for clearer, more impactful communication
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {thinkingSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-start">
              <step.icon className="w-8 h-8 text-indigo-600 mr-3 flex-shrink-0" />
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-1">{step.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                <ul className="list-disc pl-4 text-xs text-gray-700 space-y-1">
                  {step.tips.map((tip, tipIndex) => (
                    <li key={tipIndex}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-gray-600 text-sm">
          Implement these techniques to enhance your communication skills and speak with greater clarity and confidence!
        </p>
      </div>
    </div>
  );
}

export default App;