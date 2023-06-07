import {
    ButtonDataType,
    CardType,
    ExploreDropdownType,
    RadioButtonDataType,
    InputType,
    SearchDataType,
} from "types"
import FilterIcon from "Assets/images/explore/filter-icon.svg";
import ExploreCardImageA from 'Assets/images/explore/explore-card-a.png'
import ExploreCardImageB from 'Assets/images/explore/explore-card-b.png'
import ExploreCardImageC from 'Assets/images/explore/explore-card-c.png'
import ExploreCardImageD from 'Assets/images/explore/explore-card-d.png'
import ExploreCardImageE from 'Assets/images/explore/explore-card-e.png'
import ExploreCardImageF from 'Assets/images/explore/explore-card-f.png'
import ExploreCardImageNone from 'Assets/images/explore/explore-card-none.svg'
import MobileExploreCardImageA from 'Assets/images/explore/m-explore-card-a.png'
import MobileExploreCardImageB from 'Assets/images/explore/m-explore-card-b.png'
import MobileExploreCardImageC from 'Assets/images/explore/m-explore-card-c.png'
import MobileExploreCardImageD from 'Assets/images/explore/m-explore-card-d.png'
import MobileExploreCardImageE from 'Assets/images/explore/m-explore-card-e.png'
import MobileExploreCardImageF from 'Assets/images/explore/m-explore-card-f.png'
import MobileExploreCardImageNone from 'Assets/images/explore/m-explore-card-none.svg'
import { FaRegUserCircle, FaRegCalendarAlt, } from 'react-icons/fa'
import { BiMap, BiMessageRounded } from 'react-icons/bi'
import { MdSearch } from "react-icons/md";



export const ExploreDropdownData: ExploreDropdownType[] = [
    {
        id: 1,
        name:'England'
    },   
    {
        id: 2,
        name:'Scotland'
    },   
    {
        id: 3,
        name:'Wales'
    },   
    {
        id: 4,
        name:'Northern Ireland'
    },   
];

export const ExploreCardData: CardType[] = [
    {
        broadcastingType: 'Live',
        club: {
            icon:FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white", 
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress:true,
        fund: '50% funded',
        status : '£50,000 of £100,000',
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        collection: {
            icon:BiMessageRounded,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "15 Comments",
        },
        desktopimage: ExploreCardImageA,
        mobileimage: MobileExploreCardImageA,
    },
    {
        broadcastingType: 'Live',
        club: {
            icon:FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white", 
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress:true,
        fund: '50% funded',
        status : '£50,000 of £100,000',
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        collection: {
            icon:BiMessageRounded,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "15 Comments",
        },
        desktopimage: ExploreCardImageB,
        mobileimage:MobileExploreCardImageB
    },
    {
        broadcastingType: 'Live',
        club: {
            icon:FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white", 
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress:true,
        fund: '50% funded',
        status : '£50,000 of £100,000',
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        collection: {
            icon:BiMessageRounded,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "15 Comments",
        },
        desktopimage: ExploreCardImageC,
        mobileimage:MobileExploreCardImageC
    },
    {
        broadcastingType: 'Live',
        vat:"￡3,000 inc. VAT",
        club: {
            icon:FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white", 
            text: "Durham, England",
        },
        title: 'Pitchside advertising board',
        description: 'Subline text goes here and there’s two lines of copy available to describe it.',
        fund: '50% funded',
        status : '£50,000 of £100,000',
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
       
        desktopimage: ExploreCardImageD,
        mobileimage: MobileExploreCardImageD
    },
    {
        broadcastingType: 'Live',
        vat:"￡3,000 inc. VAT",
        club: {
            icon:FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white", 
            text: "Durham, England",
        },
        title: 'Pitchside advertising board',
        description: 'Subline text goes here and there’s two lines of copy available to describe it.',
        progress:false,
        fund: '50% funded',
        status : '£50,000 of £100,000',
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        desktopimage: ExploreCardImageE,
        mobileimage: MobileExploreCardImageE
    },
    {
        broadcastingType: 'Live',
        vat:"￡3,000 inc. VAT",
        club: {
            icon:FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white", 
            text: "Durham, England",
        },
        title: 'Pitchside advertising board',
        description: 'Subline text goes here and there’s two lines of copy available to describe it.',
        progress:false,
        fund: '50% funded',
        status : '£50,000 of £100,000',
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        desktopimage: ExploreCardImageNone,
        mobileimage: MobileExploreCardImageNone
    },
    {
        broadcastingType: 'Live',
        vat:"￡3,000 inc. VAT",
        club: {
            icon:FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white", 
            text: "Durham, England",
        },
        title: 'Front of shirt sponsorship - Season 2023/24',
        description: 'Subline text goes here and there’s three lines of copy available to describe it. Lorem ipsum dolor sit amet de lipsum dolor.',
        progress:false,
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        desktopimage: ExploreCardImageF,
        mobileimage: MobileExploreCardImageF
    },
    {
        broadcastingType: 'Live',
        vat:"￡15,000",
        club: {
            icon:FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white", 
            text: "Durham, England",
        },
        title: 'Front of shirt sponsorship - Season 2023/24',
        description: 'Subline text goes here and there’s three lines of copy available to describe it. Lorem ipsum dolor sit amet de lipsum dolor.',
        progress:false,
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        desktopimage: ExploreCardImageNone,
        mobileimage: MobileExploreCardImageNone
    },
    {
        broadcastingType: 'Live',
        vat:"￡15,000",
        club: {
            icon:FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white", 
            text: "Durham, England",
        },
        title: 'Front of shirt sponsorship - Season 2023/24',
        description: 'Subline text goes here and there’s three lines of copy available to describe it. Lorem ipsum dolor sit amet de lipsum dolor.',
        progress:false,
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        desktopimage: ExploreCardImageNone,
        mobileimage: MobileExploreCardImageNone
    },
];


export const FilterSearchData: SearchDataType = {
    backgroundColor: "bg-white",
    placeholder: "Search...",
    placeholderClass:"placeholder:text-[16px] placeholder:leading-[22px] placeholder:font-medium placeholder:text-green-70",
    padding: "px-15 py-[10px]",
    iconColor: "text-black",
    inputTextSize: "font-medium text-[16px]",
    border:"border-2 border-gray-100",
    icon: MdSearch,
    iconSize: "text-[20px]",
    inputColor:"text-black"
}
export const FiterButtonProperty: ButtonDataType = {
    backgroundColor: "text-white",
    text: "Filter & Sort",
    image: FilterIcon,
    width: "w-[150px]",
    height: "h-[50px]",
    border:"border-[1px] border-gray-100",
}

export const TypeFilterData:RadioButtonDataType[] = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Fundraisers",
        value: "fundraisers",
    },
    {
        label: "Advertising",
        value: "advertising",
    },
    {
        label: "Sponsorship",
        value: "sponsorship",
    }
];

export const OrganisationFilterData: RadioButtonDataType[] = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Clubs",
        value: "clubs",
    },
    {
        label: "Supporters' Trusts",
        value: "supporter",
    },
    {
        label: "Local communities",
        value: "local communities",
    },
    {
        label: "Foundations",
        value: "foundations",
    },
    {
        label: "Leagues",
        value: "leagues",
    },
    {
        label: "Charities",
        value: "charities",
    },
    {
        label: "Singing Sections / Ultras",
        value: "ultras",
    },
    {
        label: "Agency / Rights holder",
        value: "agency",
    },
    {
        label: "Podcast / Vlog",
        value: "podcast",
    },
    {
        label: "Advertiser/Sponsor",
        value: "advertiser",
    },
    {
        label: "Other",
        value: "other",
    },  
];
export const StatusFilterData:RadioButtonDataType[] = [
        {
            label: "All",
            value: "all",
        },
        {
            label: "Live",
            value: "live",
        },
        {
            label: "Pending",
            value: "pending",
        },
        {
            label: "Funded / Sold",
            value: "fund",
        }
    ];
export const SortByData: RadioButtonDataType[] = [
        {
            label: "Promoted",
        value: "promoted",
            classes:"justify-between"
        },
        {
            label: "Newest (£)",
            value: "newest",
            classes:"justify-between"
        },
        {
            label: "Oldest (£)",
            value: "oldest",
            classes:"justify-between"
        },
        {
            label: "High to Low",
            value: "high",
            classes:"justify-between"
        },
        {
            label: "Low to High",
            value: "low",
            classes:"justify-between"
        },
    ];
 

export const ExploreSearchData: SearchDataType = {
    backgroundColor: "bg-white",
    placeholder: "Search...",
    placeholderClass:"placeholder:text-[16px] placeholder:leading-[22px] placeholder:font-medium placeholder:text-green-70",
    padding: "px-15 py-[10px]",
    iconColor: "text-black",
    inputTextSize: "font-medium text-[16px]",
    border:"border-2 border-gray-100",
    icon: MdSearch,
    iconSize: "text-[20px]",
    inputColor:"text-black"
};

export const MileDistanceInputFormData: InputType = {

    content:"after:content-['*'] after:ml-1 after:text-green-10",
    height: "h-[54px]",
    label: "Miles from",
    padding:"px-15 py-[10px]",
    textSize:"text-[20px]",
    type: "text",
}
export const PostcodeDistanceInputFormData: InputType = {

    content:"after:content-['*'] after:ml-1 after:text-green-10",
    height: "h-[54px]",
    label: "Postcode",
    padding:"px-15 py-[10px]",
    textSize:"text-[20px]",
    type: "text",
}
    