import React from "react";
import { LivePageStep3 } from "UI";
import { StepperActionPropsType } from "types";

export const AdvertisingSaleStep3: React.FC<StepperActionPropsType> = ({
  handleNextPage,
  handlePrevPage,
}) => {
  return (
    <div>
      <LivePageStep3 />
    </div>
  );
};
