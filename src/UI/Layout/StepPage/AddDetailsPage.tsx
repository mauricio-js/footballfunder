import React, { useState } from "react";
import {
  Button,
  FileInput,
  Input,
  PageSectionTitle,
  PageTitle,
  StepLabel,
  Textarea,
} from "UI";
import { VideoURLData } from "Config";
import { StepNumberPropsType } from "types";

export const AddDetailsPage: React.FC<StepNumberPropsType> = ({
  stepNumber,
}) => {
  const [vieoUrl, setVideoUrl] = useState<string>("");
  const [selectedTitleImage, setSelectedTitleImage] = useState<File | null>(
    null
  );
  const [selectedPitchImage, setSelectedPitchImage] = useState<File | null>(
    null
  );
  const removeTitleImage = () => {
    setSelectedTitleImage(null);
  };
  const removePitchImage = () => {
    setSelectedPitchImage(null);
  };
  // console.log("selected title image", selectedTitleImage, selectedPitchImage);
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
         mb-[60px] max-ns:mb-30 mx-auto"
    >
      <PageTitle title="Create your fundraiser" />
      <div className="mt-30">
        <StepLabel number={stepNumber} title="Add Details" />
      </div>
      <div className="mt-30">
        <PageSectionTitle
          title="About the fundraiser"
          intro="Give a detailed description of your fundraiser."
        />
      </div>
      <div className="mt-[15px] xs:w-[500px]">
        <Textarea
          height="h-[350px] max-ns:h-[390px]"
          value={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n\n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem."
          }
          showLeftCharacters={false}
          title="Description"
        />
      </div>
      <div className="mt-30">
        <PageSectionTitle
          title="Fundraiser title image"
          intro="Recommended size 300x300px - this will be the first image you see on your campaign and in all listings."
        />
        <div className="mt-[15px]">
          <div className="xs:w-[500px]">
            <FileInput
              onChange={setSelectedTitleImage}
              selectedImage={selectedTitleImage}
              removeImage={removeTitleImage}
            />
          </div>
        </div>
      </div>
      <div className="mt-30">
        <PageSectionTitle
          title="Fundraiser pitch image/video "
          intro="This will appear at the top of your fundraiser page. Select image or video - a video will really bring the listing to life."
        />
        <div className="mt-[15px] xs:w-[500px]">
          <div className="flex gap-[10px]">
            <div className="w-1/2">
              <Button
                backgroundColor="bg-green-10"
                textColor="text-black"
                textSize="text-[14px] leading-5 font-semibold"
                height="h-[54px]"
                width="w-full"
                text="Video"
              />
            </div>
            <div className="w-1/2">
              <FileInput
                onChange={setSelectedPitchImage}
                selectedImage={selectedPitchImage}
                removeImage={removePitchImage}
              />
            </div>
          </div>
        </div>
        <div className="mt-[15px] xs:w-[500px] w-full">
          <Input
            data={VideoURLData}
            setValue={setVideoUrl}
            defaultValue={vieoUrl}
          />
        </div>
      </div>
    </div>
  );
};
