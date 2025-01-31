interface StepIndicatorProps {
    currentStep: number
    totalSteps: number
  }
  
  export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
    return (
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className={`w-4 h-4 rounded-full ${i < currentStep ? "bg-primary" : "bg-gray-300"}`} />
        ))}
      </div>
    )
  }
  
  