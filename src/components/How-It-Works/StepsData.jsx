// Description: This component is a form field that uses Framer Motion for animation effects. It accepts props for placeholder text, value, onChange handler, type of input, and whether the field is required. The component is styled with Tailwind CSS classes for a modern look.
// This component stores the steps datas use  to create a step card for the How It Works section  

import { CloudArrowUpIcon, CurrencyDollarIcon, BanknotesIcon } from "@heroicons/react/24/solid";

const steps = [
  {
    title: "Upload License",
    description: "Send us the details of your unused software licenses.",
    icon: <CloudArrowUpIcon className="w-12 h-12 text-red-400 mb-4 mx-auto" />,
    color: "red",
  },
  {
    title: "Get Valuation",
    description: "We analyze and provide a fair market value.",
    icon: <CurrencyDollarIcon className="w-12 h-12 text-yellow-500 mb-4 mx-auto" />,
    color: "yellow",
  },
  {
    title: "Get Paid",
    description: "Receive payment directly to your account.",
    icon: <BanknotesIcon className="w-12 h-12 text-green-500 mb-4 mx-auto" />,
    color: "green",
  },
];

export default steps;
