import React from 'react';
import { Brain, List, Lightbulb, MessageSquare, Repeat } from 'lucide-react';

const thinkingSteps = [
  {
    icon: Brain,
    title: "Organize Your Thoughts",
    description: "Take a moment to mentally arrange your ideas before speaking.",
    tips: [
      "Identify your main points",
      "Determine a logical order",
      "Consider your audience's perspective",
      "Anticipate potential questions"
    ]
  },
  {
    icon: List,
    title: "Create Mental Outlines",
    description: "Structure your thoughts into a clear, concise framework.",
    tips: [
      "Use a simple beginning-middle-end structure",
      "Group related ideas together",
      "Prioritize your most important points",
      "Visualize your outline as a map"
    ]
  },
  {
    icon: Lightbulb,
    title: "Visualize Key Concepts",
    description: "Form mental images of your main ideas to enhance recall.",
    tips: [
      "Associate each point with a vivid image",
      "Create a mental 'journey' through your ideas",
      "Use metaphors to link complex concepts",
      "Practice visual thinking regularly"
    ]
  },
  {
    icon: MessageSquare,
    title: "Formulate Complete Sentences",
    description: "Mentally compose clear, coherent sentences before speaking.",
    tips: [
      "Focus on one complete thought at a time",
      "Keep sentences concise and to the point",
      "Use transitional phrases between ideas",
      "Practice 'inner speech' to refine your phrasing"
    ]
  },
  {
    icon: Repeat,
    title: "Practice Regularly",
    description: "Incorporate this thinking-before-speaking approach in daily life.",
    tips: [
      "Apply this method in casual conversations",
      "Use it when answering questions at work or school",
      "Practice while preparing for presentations",
      "Reflect on your progress and adjust as needed"
    ]
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">
          Think Before Speaking
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Master the art of organizing your thoughts for clearer, more impactful communication
        </p>
        <div className="space-y-8">
          {thinkingSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex items-start transform transition duration-500 hover:scale-102">
              <step.icon className="w-12 h-12 text-indigo-600 mr-6 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{step.title}</h2>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  {step.tips.map((tip, tipIndex) => (
                    <li key={tipIndex}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-gray-600 text-lg">
          Implement these techniques to enhance your communication skills and speak with greater clarity and confidence!
        </p>
      </div>
    </div>
  );
}

export default App;