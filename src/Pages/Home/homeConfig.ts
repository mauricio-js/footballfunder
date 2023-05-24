import { CardDataType } from "types/homeType";
import { CarouselCardType } from "types/carouselCardType";
import FirstCarouselCard from "Assets/images/first-carousel-card.png";
import SecondCarouselCard from 'Assets/images/second-carousel-card.png'

import FundraiseCardImage from "Assets/images/fundraise.png";
import ContributeCardImage from "Assets/images/contribute.png";
import SuponsorshipBuyImg from 'Assets/images/suponsorship-buy-img.png'
import SuponsorshipSellImg from 'Assets/images/suponsorship-sell-img.png'
import AdvertisingBuyImg from 'Assets/images/advert-buy-img.png'
import AdvertisingSellImg from 'Assets/images/advert-sell-img.png'

export const FundraisingCardData: CardDataType[] = [
  {
    id: 1,
    title: "Fundraise",
    description:
      "Stand out from the crowd and raise funds on a dedicated football platform.",
    backgroundImage: FundraiseCardImage,
    buttonName: "Start Now",
  },
  {
    id: 2,
    title: "Contribute",
    description:
      "Whether here for a cause you support, or just browsing, you can start donating below.",
    backgroundImage: ContributeCardImage,
    buttonName: "Explore",
  },
];
export const AdvertisingCardData: CardDataType[] = [
  {
    id: 1,
    title: "Buy",
    description:
      "Interested in showcasing your brand using football? Browse opportunities in your area.",
    backgroundImage: AdvertisingBuyImg,
    buttonName: "Explore",
  },
  {
    id: 2,
    title: "Sell",
    description:
      "List advertising opportunities to brands and put your assets to the best use possible.",
    backgroundImage: AdvertisingSellImg,
    buttonName: "Sell your ads",
  },
];
export const SuponsorshipData: CardDataType[] = [
  {
    id: 1,
    title: "Buy",
    description:
      "Amplify the presence of your business locally or nationally through football sponsorship.",
    backgroundImage: SuponsorshipBuyImg,
    buttonName: "Explore",
  },
  {
    id: 2,
    title: "Sell",
    description:
      "Attract sponsors to your club or organisation by listing your important sponsorship deals.",
    backgroundImage: SuponsorshipSellImg,
    buttonName: "Sell your sports",
  },
];


export const CarouselCardData: CarouselCardType[] = [
    {
    label: 'Live',
    title: 'Running a crowdfunding campaign for my football club',
    description: 'The subheader for running a crowdfunding campaign for my football club goes here and there’s three lines of copy available to describe it.',
    success: '50% of goal',
    cost: '￡50,000 of ￡100,000',
    img:FirstCarouselCard
    },
    {
    label: 'Funded',
    title: 'Running a crowdfunding campaign for my football club',
    description: 'The subheader for running a crowdfunding campaign for my football club goes here and there’s three lines of copy available to describe it.',
    success: '100% of goal',
    cost: '￡50,000 of ￡100,000',
    img:SecondCarouselCard
    },
    {
    label: 'Funded',
    title: 'Running a crowdfunding campaign for my football club',
    description: 'The subheader for running a crowdfunding campaign for my football club goes here and there’s three lines of copy available to describe it.',
    success: '50% of goal',
    cost:'￡50,000 of ￡100,000',
    img:SecondCarouselCard
    },
    {
    label: 'Funded',
    title: 'Running a crowdfunding campaign for my football club',
    description: 'The subheader for running a crowdfunding campaign for my football club goes here and there’s three lines of copy available to describe it.',
    success: '50% of goal',
    cost: '￡50,000 of ￡100,000',
    img:FirstCarouselCard
    },
    {
    label: 'Funded',
    title: 'Running a crowdfunding campaign for my football club',
    description: 'The subheader for running a crowdfunding campaign for my football club goes here and there’s three lines of copy available to describe it.',
    success: '50% of goal',
    cost: '￡50,000 of ￡100,000',
    img:SecondCarouselCard
    },
    {
    label: 'Funded',
    title: 'Running a crowdfunding campaign for my football club',
    description: 'The subheader for running a crowdfunding campaign for my football club goes here and there’s three lines of copy available to describe it.',
    success: '50% of goal',
    cost: '￡50,000 of ￡100,000',
    img:FirstCarouselCard
    },
    {
    label: 'Funded',
    title: 'Running a crowdfunding campaign for my football club',
    description: 'The subheader for running a crowdfunding campaign for my football club goes here and there’s three lines of copy available to describe it.',
    success: '50% of goal',
    cost: '￡50,000 of ￡100,000',
    img:FirstCarouselCard
    },
    {
    label: 'Funded',
    title: 'Running a crowdfunding campaign for my football club',
    description: 'The subheader for running a crowdfunding campaign for my football club goes here and there’s three lines of copy available to describe it.',
    success: '50% of goal',
    cost: '￡50,000 of ￡100,000',
    img:SecondCarouselCard
    },
    {
    label: 'Funded',
    title: 'Running a crowdfunding campaign for my football club',
    description: 'The subheader for running a crowdfunding campaign for my football club goes here and there’s three lines of copy available to describe it.',
    success: '50% of goal',
    cost: '￡50,000 of ￡100,000',
    img:FirstCarouselCard
    },

];