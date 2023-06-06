import React, { useState } from "react";
import {
  Button,
  DescriptionPanel,
  FileInput,
  Input,
  PageSectionTitle,
  PageTitle,
  StepLabel,
} from "UI";
import { VideoURL } from "Config";

export const CreateFundraiserStepThird: React.FC = () => {
  const [vieoUrl, setVideoUrl] = useState<string>("");
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-[20px] mt-[60px] max-ns:mt-[20px]
         mb-[60px] max-ns:mb-[30px] mx-auto"
    >
      <PageTitle title="Create your fundraiser" />
      <div className="mt-[30px]">
        <StepLabel step="Step 3" title="Add Details" />
      </div>
      <div className="mt-[30px]">
        <PageSectionTitle
          title="About the fundraiser"
          intro="Give a detailed description of your fundraiser."
        />
      </div>
      <div className="mt-[15px] ">
        <DescriptionPanel
          classes="w-[500px] max-md:w-full  sm:h-[350px] h-auto text-green-70 generalText"
          introText1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          introText2="It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem."
        />
      </div>
      <div className="mt-[30px]">
        <PageSectionTitle
          title="Fundraiser title image"
          intro="Recommended size 300x300px - this will be the first image you see on your campaign and in all listings."
        />
        <div className="mt-[15px]">
          <div className="w-[500px] max-md:w-full">
            <FileInput />
          </div>
        </div>
      </div>
      <div className="mt-[30px]">
        <PageSectionTitle
          title="Fundraiser pitch image/video "
          intro="This will appear at the top of your fundraiser page. Select image or video - a video will really bring the listing to life."
        />
        <div className="mt-[15px] w-[500px] max-md:w-full">
          <div className="flex gap-[10px]">
            <div className="w-1/2">
              <Button
                backgroundColor="bg-green-10"
                textColor="text-black"
                textSize="text-[14px] leading-[20px] font-semibold"
                height="h-[54px]"
                width="w-full"
                text="Video"
              />
            </div>
            <div className="w-1/2">
              <FileInput />
            </div>
          </div>
        </div>
        <div className="mt-[15px] md:w-[500px] w-full">
          <Input
            data={VideoURL}
            setValue={setVideoUrl}
            defaultValue={vieoUrl}
          />
        </div>
      </div>
    </div>
  );
};
