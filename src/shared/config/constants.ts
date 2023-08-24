import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = [ "About", /* "Experience", */ "Works", "Contact" ]

// project data
export const projects : ProjectTypes[] = [
    {
        title : "RESELLER-CAR",
        description : "This is a Website for purchasing second-hand cars. Admin Add Product and delete product and also accept seller request and also delete seller Account . and here Show Sell and buying product and total amount.",
        tech : [ "React js ", "Tailwind CSS", "Express js", "MongoDB" ],
        code : 'https://github.com/Iqbalhossainshuvo/Old-Car-Client',
        live : 'https://recycle-hub-e5949.web.app/',
        thumnail : "car-sell.png",
        featured : true
    },

   

    {
        title : "Ecommerce-Web-Site",
        description : " Ecommerce Product Sell website. ",
        tech : [ "React js", "tailwind CSS", "Express", "Node js" ,"Firebase","MongoDB" ],
        code : 'https://github.com/Iqbalhossainshuvo/Ecommerce-Client',
        live : 'https://jizziby.web.app/',
        thumnail : "ecom.png",
    },
    {
        title : "volunteer organization",
        description : "Helping the helpless poor flood victims. ",
        tech : [ "React js","NextJs", "tailwind CSS", "Express", "Node js" ,"Firebase","MongoDB" ],
        code : 'https://github.com/Iqbalhossainshuvo/Heart-To-Serve-Client',
        live : 'https://hearttoserve.vercel.app/',
        thumnail : "helppoor.png",
    },
    {
        title : "Food Hunter",
        description : "Food ecommerce web site. ",
        tech : [  "TypeScript","React js","tailwind CSS","Node js" ],
        code : 'https://github.com/Iqbalhossainshuvo/Food-Hunter',
        live : 'https://food-hunter-fd26qa2tf-iqbalhossainshuvo.vercel.app/',
        thumnail : "FoodHunter.jpg",
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