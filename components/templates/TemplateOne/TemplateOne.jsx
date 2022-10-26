import React from "react";
import { Button } from "../../Button/Button";
import { FormHeader } from "../../FormHeader/FormHeader";
import { Input } from "../../Input/Input";

export const TemplateOne = ({ onChange }) => {
  const [fullName, setFullName] = React.useState("");
  const [displayName, setDisplayName] = React.useState("");

  const handleChange = () => {
    if (fullName.length > 0 && displayName.length > 0) {
      onChange();
    }
  };

  return (
    <div>
      <div className=" mb-12">
        <FormHeader
          title="Welcome! First things First..."
          subTitle="You can always change them later."
        />
      </div>
      <div className="p-4 md:p-0 md:max-w-[350px] w-full mx-auto">
        <Input
          placeholder="Steve Jobs"
          label="Full Name"
          labelHelper=""
          type="text"
          name="fullName"
          inputHelper=""
          handleChange={(value) => setFullName(value)}
          value={fullName}
          focus
        />
        <Input
          placeholder="Steve"
          label="Display Name"
          labelHelper=""
          type="text"
          name="displayName"
          handleChange={(value) => setDisplayName(value)}
          value={displayName}
          inputHelper=""
        />
        <Button
          text="Create Workspace"
          onClick={() => handleChange()}
          type="submit"
        />
      </div>
    </div>
  );
};
