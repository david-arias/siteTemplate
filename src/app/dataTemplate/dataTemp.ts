
// Brand INFO
export const BRAND = {
     logoIcon: "logoIcon.png",
     logoText: "logoText.png",
     fullLogo: "fullLogo.png",
     name: "Brand name",
     infoMail: "info@mail.com",
     phone: "4536291836",
     direction: "385 Noah Place Suite 878",
     mapCords: [4.6784478,-74.0556655],
     social: [
          {
               name: "facebook",
               icon: "fab fa-facebook-f",
               link: "https://www.facebook.com/"
          },
          {
               name: "twitter",
               icon: "fab fa-twitter",
               link: "https://twitter.com/?lang=es"
          },
          {
               name: "Instagram",
               icon: "fab fa-instagram",
               link: "https://www.instagram.com/?hl=es-la"
          }
     ]
}

export const CONTACT = {
     ttl: "We'd love to hear from you",
     body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
     form: {
          active: true,
          title: "Interest in something, please contact us",
          fields: [
               {
                    name: "leadName",
                    type: "text",
                    required: true,
                    options: null,
                    placeHolder: "Full Name",
                    icon: "far fa-id-badge",
               },
               {
                    name: "leadPhone",
                    type: "number",
                    required: true,
                    options: null,
                    placeHolder: "Phone number",
                    icon: "fas fa-phone"
               },
               {
                    name: "leadMail",
                    type: "email",
                    required: true,
                    options: null,
                    placeHolder: "Email",
                    icon: "far fa-envelope"
               },
               {
                    name: "leadText",
                    type: "textArea",
                    required: false,
                    options: null,
                    placeHolder: "Put your message",
                    icon: null
               },
          ]
     }
}

// MAIN MENU - NavBar
export const MENU = {
     items: [
          {
               name: "Home",
               link: "#"
          },
          {
               name: "How it works",
               link: "#"
          },
          {
               name: "Features",
               link: "#"
          },
          {
               name: "Press",
               link: "#"
          },
          {
               name: "Pricing",
               link: "#"
          },
          {
               name: "Contact",
               link: "#"
          }
     ],
     callToAction: {
          name: "Get a quote",
          link: "#"
     }
}

// VALUE PROPOSAL
export const VALPROP = {
     backGround: "https://images.unsplash.com/photo-1488587295863-bb376e47dfd9?auto=format&fit=crop&w=1920&h=1080&q=80",
     mainTitle: "Welcome to your new wireframe kit",
     subTitle: "If you’re looking for the latest in wireless headphones, look no further. These are perfect for TV, stereo, home, and cell phone.",
     buttons: [
          {
               label: "start now",
               link: "#",
               class: null,
               icon: null,
          },
          {
               label: "watch more",
               link: "#",
               class: "btnVid",
               icon: "far fa-play-circle",
          }
     ],
     facts: [
          {
               title: "type something",
               body: "Lorem ipsum dolor sit amet consectetur.",
               link: "#",
               icon: "fas fa-dna"
          },
          {
               title: "type something",
               body: "Lorem ipsum dolor sit amet consectetur.",
               link: "#",
               icon: "fas fa-dragon"
          },
          {
               title: "type something",
               body: "Lorem ipsum dolor sit amet consectetur.",
               link: "#",
               icon: "fas fa-bug"
          }
     ],
     form: {
          active: true,
          title: "Interest in something, please contact us",
          fields: [
               {
                    name: "leadName",
                    type: "text",
                    required: true,
                    options: null,
                    placeHolder: "Full Name",
                    icon: "far fa-id-badge",
               },
               {
                    name: "leadPhone",
                    type: "number",
                    required: true,
                    options: null,
                    placeHolder: "Phone number",
                    icon: "fas fa-phone"
               },
               {
                    name: "leadMail",
                    type: "email",
                    required: true,
                    options: null,
                    placeHolder: "Email",
                    icon: "far fa-envelope"
               },
               {
                    name: "typeOf",
                    type: "select",
                    required: true,
                    options: [
                         {
                              name: "type1",
                              value: "type1",
                              label: "Type No. 1"
                         },
                         {
                              name: "type2",
                              value: "type2",
                              label: "Type No. 2"
                         },
                         {
                              name: "type3",
                              value: "type3",
                              label: "Type No. 3"
                         }
                    ],
                    placeHolder: "select type",
                    icon: "far fa-list-alt"
               },
               /*{
                    name: "checkItms",
                    type: "checkbox",
                    required: false,
                    options: [
                         {
                              name: "check1",
                              value: "check1",
                              label: "check No. 1"
                         },
                         {
                              name: "check2",
                              value: "check2",
                              label: "check No. 2"
                         }
                    ],
                    placeHolder: "Check an item",
                    icon: null
               },
               {
                    name: "radioItms",
                    type: "radio",
                    required: false,
                    options: [
                         {
                              name: "Radio1",
                              value: "Radio1",
                              label: "Radio No. 1"
                         },
                         {
                              name: "Radio2",
                              value: "Radio2",
                              label: "Radio No. 2"
                         }
                    ],
                    placeHolder: "Radio an item",
                    icon: null
               },
               {
                    name: "leadText",
                    type: "textArea",
                    required: false,
                    options: null,
                    placeHolder: "Put your message",
                    icon: null
               },*/
          ]
     }
}