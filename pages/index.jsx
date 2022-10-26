import { Logo } from "../components/Logo/Logo";
import { ProgressBar } from "../components/ProgressBar/ProgressBar";
import { useState } from "react";
import { TemplateOne } from "../components/templates/TemplateOne/TemplateOne";
import { TemplateTwo } from "../components/templates/TemplateTwo/TemplateTwo";
import { TemplateThree } from "../components/templates/TemplateThree/TemplateThree";
import { TemplateFour } from "../components/templates/TemplateFour/TemplateFour";

export default function Home() {
  const [steps, setSteps] = useState(1);

  const handleStepChange = () => {
    if (steps < 4) {
      setSteps((prev) => (prev += 1));
    } else {
      window.alert("Successfully onboarded!!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full py-10">
      <Logo />
      <ProgressBar onChange={setSteps} step={steps} />
      <main className="w-full">
        {
          {
            1: <TemplateOne onChange={() => handleStepChange()} />,
            2: <TemplateTwo onChange={() => handleStepChange()} />,
            3: <TemplateThree onChange={() => handleStepChange()} />,
            4: <TemplateFour onChange={() => handleStepChange()} />,
          }[steps.toString()]
        }
      </main>
    </div>
  );
}
