import React from "react";
import { Button } from "../../Button/Button";
import { FormHeader } from "../../FormHeader/FormHeader";
import { Input } from "../../Input/Input";

export const TemplateTwo = ({ onChange }) => {
  const [fullName, setFullName] = React.useState("");
  const [displayName, setDisplayName] = React.useState("");

  const handleChange = () => {
    if (fullName.length > 0) {
      onChange();
    }
  };

  return (
    <div>
      <div className=" mb-12">
        <FormHeader
          title="Let's setup a home for all your work"
          subTitle="You can always create another workspace later."
        />
      </div>
      <div className="p-4 md:p-0 md:max-w-[350px] w-full mx-auto">
        <Input
          placeholder="Eden"
          label="Workspace Name"
          labelHelper=""
          type="text"
          name="fullName"
          inputHelper=""
          focus
          handleChange={(value) => setFullName(value)}
          value={fullName}
        />
        <Input
          placeholder="Example"
          label="Workspace URL"
          labelHelper="optional"
          type="else"
          name="displayName"
          inputHelper="www.eden.com/"
          handleChange={(value) => setDisplayName(value)}
          value={displayName}
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
