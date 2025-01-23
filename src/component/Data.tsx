import Home from "@/app/page"
import Link from "next/link"
import { text } from "stream/consumers"

export const nav = [
    {
        title: "Home",
        path: "./"
    },
    {
        title: "Blog",
        path: "/blog"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Service",
        path: "/services"
    },
    {
        title: "Prices",
        path: "/prices"
    },
    {
        title: "Contact",
        path: "/contacts"
    },
]

export const featuredata = [
    {
        image: "././2.jpg",
        headerName: "Familly House",
        total: "50 Property"

    },
    {
        image: "././1.jpg",
        headerName: "House & Villa",
        total: "13 Property"

    },
    {
        image: "././3.jpg",
        headerName: "Apartment",
        total: "143 Property"

    },
    {
        image: "././4.jpg",
        headerName: "Offfice & Studio",
        total: "200 Property"

    },
    {
        image: "././5.jpg",
        headerName: "Villa & condo",
        total: "123 Property",

    },
]
export const list = [
    {
        cover: "././li1.jpg",
        category: "For Rent",
        propertyName: "Red carpet Real State",
        type: "Office",
        location: "Lagos",
        price: "700"
    },
    {
        cover: "././li2.jpg",
        category: "For Sale",
        propertyName: "Formount Properties",
        type: "Office",
        location: "Jos",
        price: "556"
    },
    {
        cover: "././li3.jpg",
        category: "For Rent",
        propertyName: "The Real Estate Corner",
        type: "Office",
        location: "Lagos",
        price: "643"
    },
    {
        cover: "././li4.jpg",
        category: "For Sale",
        propertyName: "Back Lone Reality",
        type: "Office",
        location: "Ogun",
        price: "356"
    },
    {
        cover: "././li5.jpg",
        category: "For Rent",
        propertyName: "Beauty City",
        type: "Apartment",
        location: "Abuja",
        price: "433"
    },
    {
        cover: "././li6.jpg",
        category: "Iron Gate State",
        propertyName: "Joy City",
        type: "Office",
        location: "Lagos",
        price: "455"
    },

]
export const awards = [
    {
        icons: "././next.svg",
        num: "42",
        awardName: "Blue Bumane Award"
    },
    {
        icons: "././stats.png",
        num: "82",
        awardName: "ALL Nation Award"
    },
    {
        icons: "././lagos-logo.png",
        num: "62",
        awardName: "Meno Award"
    },

]
export const team = [
    {
        list: "49",
        cover: "././3.jpg",
        address: "Liver Pool",
        name: "Alex",
        iconbtn: "././mail_icon.png",
        icons: [
            "././4.jpg",
            "././4.jpg",
            "././mail_icon.png'",
            "././call_icin.png",
            "././mail_icon.png",
        ]
    },
    {
        list: "49",
        cover: "././4.jpg",
        address: "Liver Pool",
        name: "Alex",
        icons: [
            "././4.jpg",
            "././4.jpg",
            //     '././mail_icon.png',
            //    '././call_icin.png',
            //    '././mail_icon.png',
        ]
    },
    {
        list: "49",
        cover: "././1.jpg",
        address: "Liver Pool",
        name: "Alex",
        icons: [
            "././4.jpg",
            "././4.jpg",
            //     '././mail_icon.png',
            //    '././call_icin.png',
            //    '././mail_icon.png',
        ]
    },
    {
        list: "69",
        cover: "././2.jpg",
        address: "Liver Pool",
        name: "Alex"
    },
    {
        list: "75",
        cover: "././5.jpg",
        address: "Liver Pool",
        name: "Alex",
        icons: [
            "././4.jpg",
            "././4.jpg",
            //     '././mail_icon.png',
            //    '././call_icin.png',
            //    '././mail_icon.png',
        ]
    },
    {
        list: "92",
        cover: "././4.jpg",
        address: "Liver Pool",
        name: "Alex",
        icons: [
            "././4.jpg",
            "././4.jpg",
            //     '././mail_icon.png',
            //    '././call_icin.png',
            //    '././mail_icon.png',
        ]
    },
]
export const price = [
    {
        best: "Basic",
        plan: "Basic",
        price: "29",
     
        list: [
            {
                text: ["99.5% Uptime Guarantee", "120GB CDN Bandwidth", "5GB Cloud Storage",
                "Peronal Helpe support", "Enterprise SLA"],
                change: "gfgfvffh",
                plan: 'fjf'
            }
        ]
    },
    {
        best: "Basic",
        plan: "Standard",
        price: "29",
       
        list: [
            {
                text: ["99.5% Uptime Guarantee", "120GB CDN Bandwidth", "5GB Cloud Storage",
                "Peronal Helpe support", "Enterprise SLA"],
                change: "gfgfvffh",
                plan: 'fjf'
            }
        ]
    },
    {
        best: "Basic",
        plan: "Plainum",
        price: "29",
       
        list: [
            {
                text: ["99.5% Uptime Guarantee", "120GB CDN Bandwidth", "5GB Cloud Storage",
                "Peronal Helpe support", "Enterprise SLA"],
                change: "gfgfvffh",
                plan: 'fjf'
            }
        ]
    },
]

export const footer = [
    {
        title: "LAYOUTS",
        text: [
            {
                list: ["About",
                    "Blog",
                    "Pricing",
                    "Affliate",
                    "Login",
                    "Changing"]
            },
        ]
    },
    {
        title: "ALL SECTIONS",
        text: [
         {
            list: ["About",
                "Blog",
                "Pricing",
                "Affliate",
                "Login",
                "Changing"]
            },
        ]
    },
    {
        title: "COMPANY",
        text: [
            {
                list: ["About",
                    "Blog",
                    "Pricing",
                    "Affliate",
                    "Login",
                    "Changing"]

                // list: [<li>About</li>, <li>Blog</li>, <li>Pricing</li>, <li>Affliate</li>, <li>Login</li>, <li>Changing</li>]

            },
        ]
    },

]