import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = [ "About", /* "Experience", */ "Works", "Contact" ]

// project data
export const projects : ProjectTypes[] = [
    {
        title : "Dashboard",
        description : "This is a business web site dashboard. Admin Add Product and delete product and also accept seller request and also delete seller Account . and here Show Sell and buying product and total amount.",
        tech : [ "React js ", "Tailwind CSS", "Express js", "MongoDB" ],
        code : 'https://github.com/Iqbalhossainshuvo',
        live : 'https://iqbalhossainshuvo.github.io/Admin-Dashboard/',
        thumnail : "Dashboard.png",
        featured : true
    },

   

    {
        title : "Car Website",
        description : "Old car buying and selling web site. ",
        tech : [ "React js", "tailwind CSS", "Express", "Node js" ,"Firebase","MongoDB" ],
        code : 'https://github.com/Iqbalhossainshuvo/RESELLER-CAR-Client',
        live : 'https://assignment-12-5f7d1.web.app/',
        thumnail : "car.jpg",
    },

    {
        title : "PhotoQue",
        description : "It's a photography service webbsite which is served by individual",
        tech : [ "React js", "tailwind CSS", "Express", "Node js" ,"Firebase" ,"MongoDB" ],
        code : 'https://github.com/Iqbalhossainshuvo/PhotosQue',
        live : 'https://photo-sky-9d6b7.web.app/',
        thumnail : "PhotoQue.jpg"
    },

    {
        title : "Automobile Servicing",
        description : "This website is created to provide automobile servicing.",
        tech : ["React js", "tailwind CSS", "Express", "Node js" ,"Firebase","MongoDB" ],
        code : 'https://github.com/Iqbalhossainshuvo/Texi-Service-client',
        live : 'https://online-taxi-service-8d471.web.app/',
        thumnail : "texi service.jpg"
    }
]