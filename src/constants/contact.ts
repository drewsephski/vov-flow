import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";

export const CONTACT_CARDS = [
    {
        title: "Phone Number",
        value: "+1 (123) 456-7890",
        icon: PhoneIcon
    },
    {
        title: "VoxFlow Address",
        value: "Chicago, Illinois, USA",
        icon: MapPinIcon
    },
    {
        title: "Email Address",
        value: "support@voxflow.com",
        icon: MailIcon
    }
] as const;
