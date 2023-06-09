import {
    CardType,
    CategoryDataType,
    ContactPhoneNumberType,
    InputType,
    RadioButtonDataType,
    SelectDataType
} from 'types';
import ExploreCardImageA from 'Assets/images/explore/explore-card-a.png'
import ExploreCardImageB from 'Assets/images/explore/explore-card-b.png'
import ExploreCardImageC from 'Assets/images/explore/explore-card-c.png'
import ExploreVerticalCardImageA from 'Assets/images/fundraiser/v-card-a.png'
import ExploreVerticalCardImageB from 'Assets/images/fundraiser/v-card-b.png'
import ExploreVerticalCardImageC from 'Assets/images/fundraiser/v-card-c.png'
import MobileExploreCardImageA from 'Assets/images/explore/m-explore-card-a.png'
import MobileExploreCardImageB from 'Assets/images/explore/m-explore-card-b.png'
import MobileExploreCardImageC from 'Assets/images/explore/m-explore-card-c.png'
import { FaRegUserCircle, FaRegCalendarAlt, } from 'react-icons/fa'
import { BiMap, BiMessageRounded } from 'react-icons/bi'
export const FundraiserCategoryData: CategoryDataType[] = [
    {
        label: "Club",
        value: "club",
    },
    {
        label: "Individual",
        value:"individual"
    },
    {
        label: "Supporters’ Trust",
        value:"support"
        
    },
    {
        label: "Local community",
        value:"local"
    },
    {
        label: "Foundation",
        value:"foundation"
    },
    {
        label: "League",
        value:"league"
    },
    {
        label: "Charity",
        value:"charity"
    },
    {
        label: "Singing Section / Ultras",
        value:"ultras"
    },
    {
        label: "Agency / Rights holder",
        value:"agency"
    },
    {
        label: "Podcast / Vlog",
        value:"podcast"
    },
    {
        label: "Advertiser/Sponsor",
        value:"advertiser"
    },
    {
        label: "Other",
        value:"other"
    },
]
  
export const FundraiserNationData: CategoryDataType[] = [
    
    {   
        label: "England",
        value: "england",
    },
    {
        label: "Scotland",
        value:"scotland"
    },
    {
        label: "Wales",
        value:"wales"
        
    },
    {
        label: "Northern Ireland",
        value:"northern Ireland"
    }
]

export const ContactOrganisationData: InputType = { 
        id: 1,
        label: "Organisation Name",
        height: "h-[54px]",
        textSize: "text-[16px] leading-[22px]",
        padding:" px-3 py-4",
        type: "text",
        content:"after:content-['*'] after:ml-1 after:text-green-10 "
}

export const ContactPhoneNumber: ContactPhoneNumberType[] = [
    {
        country: "UK",
        randomNumber:"(123) 123-1234"
    },
    {
        country: "UK",
        randomNumber:"(123) 123-2345"
    },
    {
        country: "UK",
        randomNumber:"(123) 123-3456"
    },
    {
        country: "UK",
        randomNumber:"(123) 123-4567"
    },
];


export const ContactAddressLine1Data: InputType = { 
        id: 1,
        label: "Address line 1",
        height: "h-[54px]",
        textSize: "generalText",
        padding:" px-3 py-4",
        type: "text",
        content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const ContactAddressLine2Data: InputType = { 
        id: 2,
        label: "Address line 2",
        height: "h-[54px]",
        textSize: "generalText",
        padding:" px-3 py-4",
        type: "text",
        content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const ContactTownData: InputType = { 
        id: 1,
        label: "Town/City",
        height: "h-[54px]",
        textSize: "generalText",
        padding:" px-3 py-4",
        type: "text",
        content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const ContactPostcodeData: InputType = { 
        id: 2,
        label: "Postcode",
        height: "h-[54px]",
        textSize: "generalText",
        padding:" px-3 py-4",
        type: "text",
        content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const AccountEmailData: InputType = { 
        id: 1,
        label: "Email",
        height: "h-[54px]",
        textSize: "generalText",
        padding:" px-3 py-4",
        type: "text",
        content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const AccountPasswordData: InputType = { 
        id: 1,
        label: "Password",
        height: "h-[54px]",
        textSize: "generalText",
        padding:" px-3 py-4",
        type: "password",
        content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const AccountConfirmPasswordData: InputType = { 
        id: 2,
        label: "Confirm password",
        height: "h-[54px]",
        textSize: "generalText",
        padding:" px-3 py-4",
        type: "password",
        content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const FirstNameData: InputType = { 
        id: 1,
        border:"focus:border-green-10 focus:border-2",
        content:"after:content-['*'] after:ml-1 after:text-green-10 ",
        height: "h-[54px]",
        label: "First Name",
        padding:" px-3 py-4",
        textSize: "generalText",
        type: "text",
}
export const LastNameData: InputType = { 
        id: 2,
        border:"focus:border-green-10 focus:border-2",
        content:"after:content-['*'] after:ml-1 after:text-green-10",
        label: "Last Name",
        height: "h-[54px]",
        padding: " px-3 py-4",
        textSize: "generalText",
        type: "text",
}
export const DateData: InputType = {
        id: 1,
        label: "Date of Birth",
        height: "h-[54px]",
        textSize: "generalText",
        padding: " px-3 py-4",
        type: "date",
        content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const DispatchDateData: InputType = {
        id: 2,
        label: "Pick a date",
        height: "h-[54px]",
        textSize: "generalText",
        padding: " px-3 py-4",
        type: "date",
        content:"after:content-['*'] after:ml-1 after:text-green-10 "
}

export const PhoneNumberData: InputType = {

    id: 5,
    label: "Phone Number",
    height: "h-[58px]",
    textSize: "generalText",
    padding:" px-3 py-4",
    type: "tel",
    content:"after:content-['*'] after:ml-1 after:text-green-10 "
}

export const WebSiteData: InputType = {

    id: 6,
    label: "Website",
    height: "h-[58px]",
    textSize: "text-[20px]",
    padding:" px-3 py-4",
    type: "tel",
    content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const VideoURLData: InputType = {

    id: 7,
    label: "Video URL",
    height: "h-[54px]",
    textSize: "text-[16px] leading-[22px]",
    padding:" px-3 py-4",
    type: "text",
    content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const AvailableNumberData: InputType = {

    id: 8,
    label: "Add a number",
    height: "h-[54px]",
    textSize: "text-[16px] leading-[22px]",
    padding:" px-3 py-4",
    type: "text",
    content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const RegionData: SelectDataType[] = [
    {
        id: 1,
        option: 'England',
        value:'england',
    },
    {
        id: 2,
        option: 'Scotland',
        value:'scotland'
    },   
    {
        id: 3,
        option: 'Wales',
        value:'wales'
    },   
    {
        id: 4,
        option: 'Northern Ireland',
        value:'northern ireland'
    },   
];

export const DeliveryData:RadioButtonDataType[] = [
        {
            label: "Yes",
            value: "yes",
            classes:"gap-[10px] flex-row-reverse justify-end"
        },
        {
            label: "No",
            value: "no",
            classes:"gap-[10px] flex-row-reverse justify-end",
        },
       
];
    
export const CrowdFundHorizontalList: CardType[] = [
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
        curFund: 50000,
        oriFund: 100000,
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
        curFund: 50000,
        oriFund: 100000,
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
        curFund: 50000,
        oriFund: 100000,
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
        curFund: 50000,
        oriFund: 100000,
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
        curFund: 50000,
        oriFund: 100000,
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
        curFund: 50000,
        oriFund: 100000,
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
        curFund: 50000,
        oriFund: 100000,
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
        curFund: 50000,
        oriFund: 100000,
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
        curFund: 50000,
        oriFund: 100000,
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
    }
    
];
export const CrowdFundVerticalList: CardType[] = [
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
        curFund: 50000,
        oriFund: 100000,
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
        desktopimage: ExploreVerticalCardImageA,
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
        curFund: 50000,
        oriFund: 100000,
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
        desktopimage: ExploreVerticalCardImageB,
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
        curFund: 50000,
        oriFund: 100000,
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
        desktopimage: ExploreVerticalCardImageC,
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
        curFund: 50000,
        oriFund: 100000,
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
        desktopimage: ExploreVerticalCardImageA,
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
        curFund: 50000,
        oriFund: 100000,
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
        desktopimage: ExploreVerticalCardImageB,
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
        curFund: 50000,
        oriFund: 100000,
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
        desktopimage: ExploreVerticalCardImageC,
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
        curFund: 50000,
        oriFund: 100000,
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
        desktopimage: ExploreVerticalCardImageA,
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
        curFund: 50000,
        oriFund: 100000,
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
        desktopimage: ExploreVerticalCardImageB,
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
        curFund: 50000,
        oriFund: 100000,
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
        desktopimage: ExploreVerticalCardImageC,
    }
    
];

