// This file contains the data for the "Why Choose Us" section of the SoftSell website.
// It includes an array of point objects, each containing an icon, title, and description.
// The points are used to highlight the benefits of using SoftSell for selling unused software licenses.
import {
    RocketLaunchIcon,
    ShieldCheckIcon,
    BuildingOfficeIcon,
  } from '@heroicons/react/24/outline';
  
  // It includes an array of point objects, each containing an icon, title, and description.
  const points = [
    {
      icon: <RocketLaunchIcon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />,
      title: "Fast Payouts",
      desc: "Receive payment within 24 hours.",
    },
    {
      icon: <ShieldCheckIcon className="w-12 h-12 text-green-600 mb-4 mx-auto" />,
      title: "Secure Process",
      desc: "Encrypted and verified transfers.",
    },
    {
      icon: <BuildingOfficeIcon className="w-12 h-12 text-gray-700 mb-4 mx-auto" />,
      title: "Business Ready",
      desc: "Ideal for companies offloading bulk licenses.",
    },
  ];
  
  export default points;
  