const products = [
  {
    id: 1,
    img: "/Costumes/Woolen suit with skirt/4.avif",
    // title: "Woolen suit with skirt",
    price: "3170₴",
    sku: "SKU12345",
    color: "Red",
    size: "M",
    quantity: 10,
    images: ["/Costumes/Woolen suit with skirt/2.avif", "/Costumes/Woolen suit with skirt/3.avif", "/Costumes/Woolen suit with skirt/1.avif","/Costumes/Woolen suit with skirt/5.avif", "/Costumes/Woolen suit with skirt/7.avif", "/Costumes/Woolen suit with skirt/5.avif"],
    colors: ["red", "blue"], // Додано масив кольорів
    sizes: ["S", "M"],
    translations: {
      EN: {
        name: "Woolen suit with skirt",
        description: "Sweater + pencil skirt\nComposition: 75% natural wool, soft, does not prick the body."
      },
      FR: {
        name: "Costume en laine avec jupe",
        description: "Pull + jupe crayon\nComposition: 75% laine naturelle, douce, ne pique pas la peau."
      },
      UA: {
        name: "Вовняний костюм зі спідницею",
        description: "Светр + олівець спідниця\nСклад: 75% натуральної вовни, м'яка, не колеться."
      }
    }
  },
  {
    id: 2,
    img: "/Costumes/Wool suit with trousers/8.avif",
    // title: "Wool suit with trousers",
    price: "3710₴",
    sku: "SKU67890",
    description: "Jumper + palazzo pants\nComposition: 75% natural wool, soft, does not prick the body\nJumper + palazzo pants\nComposition: 75% natural wool, soft, does not prick the body.",
    color: "Blue",
    size: "L",
    quantity: 5,
    images: ["/Costumes/Wool suit with trousers/1.avif", "/Costumes/Wool suit with trousers/2.avif", "/Costumes/Wool suit with trousers/3.avif", "/Costumes/Wool suit with trousers/4.avif", "/Costumes/Wool suit with trousers/5.avif", "/Costumes/Wool suit with trousers/6.avif", "/Costumes/Wool suit with trousers/7.avif", "/Costumes/Wool suit with trousers/9.avif", "/Costumes/Wool suit with trousers/10.avif"],
    translations: {
      EN: {
        name: "Woolen suit with trousers",
        description: "Jumper + palazzo pants\nComposition: 75% natural wool, soft, does not prick the body."
      },
      FR: {
        name: "Costume en laine avec pantalon",
        description: "Pull + pantalon palazzo\nComposition: 75% laine naturelle, douce, ne pique pas la peau."
      },
      UA: {
        name: "Вовняний костюм із брюками",
        description: "Джемпер + палаццо штани\nСклад: 75% натуральної вовни, м'яка, не колеться."
      }
    }
  },
  {
    id: 3,
    img: "/Costumes/Wool suit with vest/1.avif",
    // title: "Wool suit with vest",
    price: "4160₴",
    sku: "SKU11111",
    description: "Vest + palazzo pants\nComposition: 75% natural wool, soft, does not sting the body\nVest + palazzo pants\nComposition: 75% natural wool, soft, does not sting the body.",
    color: "Green",
    size: "S",
    quantity: 15,
    images: ["Costumes/Wool suit with vest/1.avif", "Costumes/Wool suit with vest/2.avif", "Costumes/Wool suit with vest/3.avif", "Costumes/Wool suit with vest/4.avif", "Costumes/Wool suit with vest/5.avif", "Costumes/Wool suit with vest/6.avif"],
    translations: {
      EN: {
        name: "Wool suit with vest",
        description: "Vest + palazzo pants\nComposition: 75% natural wool, soft, does not sting the body."
      },
      FR: {
        name: "Costume en laine avec gilet",
        description: "Gilet + pantalon palazzo\nComposition: 75% laine naturelle, douce, ne pique pas la peau."
      },
      UA: {
        name: "Вовняний костюм із жилетом",
        description: "Жилет + палаццо штани\nСклад: 75% натуральної вовни, м'яка, не колеться."
      }
    }
  },
  {
    id: 4,
    img: "/Dress/Woolen trapeze dress/1.avif",
    // title: "Woolen trapeze dress",
    price: "3100₴",
    sku: "SKU22222",
    description: "Trapeze dress with a pronounced belt\nComposition: 75% natural wool, soft, does not stick to the body\nTrapeze dress with a pronounced belt\nComposition: 75% natural wool, soft, does not stick to the body.",
    color: "Yellow",
    size: "XL",
    quantity: 8,
    images: ["/Dress/Woolen trapeze dress/1.avif", "/Dress/Woolen trapeze dress/2.avif", "/Dress/Woolen trapeze dress/3.avif", "/Dress/Woolen trapeze dress/4.avif", "/Dress/Woolen trapeze dress/5.avif", "Dress/Woolen trapeze dress/6.avif", "/Dress/Woolen trapeze dress/7.avif", "Dress/Woolen trapeze dress/8.avif", "Dress/Woolen trapeze dress/9.avif", "Dress/Woolen trapeze dress/10.avif", "/Dress/Woolen trapeze dress/11.avif", "/Dress/Woolen trapeze dress/12.avif"],
    translations: {
      EN: {
        name: "Woolen trapeze dress",
        description: "Trapeze dress with a pronounced belt\nComposition: 75% natural wool, soft, does not stick to the body."
      },
      FR: {
        name: "Robe trapèze en laine",
        description: "Robe trapèze avec ceinture marquée\nComposition: 75% laine naturelle, douce, ne colle pas à la peau."
      },
      UA: {
        name: "Вовняна трапецеїдна сукня",
        description: "Трапецеїдна сукня з виразним поясом\nСклад: 75% натуральної вовни, м'яка, не прилипає до тіла."
      }
    }
  },
  {
    id: 5,
    img: "/Dress/Wool A-line dress/2.avif",
    // title: "Wool A-line dress",
    price: "3100₴",
    sku: "SKU33333",
    description: "A-line dress with pronounced seams and a front zipper\nComposition: 75% natural wool, soft, does not prick the body\nA-line dress with pronounced seams and a front zipper Composition: 75% natural wool, soft, does not prick the body.",
    color: "Black",
    size: "M",
    quantity: 20,
    images: ["/Dress/Wool A-line dress/2.avif", "/Dress/Wool A-line dress/1.avif", "/Dress/Wool A-line dress/3.avif", "/Dress/Wool A-line dress/4.avif", "/Dress/Wool A-line dress/5.avif", "/Dress/Wool A-line dress/6.avif", "/Dress/Wool A-line dress/8.avif", "/Dress/Wool A-line dress/9.avif", "/Dress/Wool A-line dress/10.avif"],
    translations: {
      EN: {
        name: "Wool A-line dress",
        description: "A-line dress with pronounced seams and a front zipper\nComposition: 75% natural wool, soft, does not prick the body."
      },
      FR: {
        name: "Robe évasée en laine",
        description: "Robe évasée avec coutures marquées et fermeture éclair avant\nComposition: 75% laine naturelle, douce, ne pique pas la peau."
      },
      UA: {
        name: "Вовняна сукня-силует",
        description: "Сукня-силует із виразними швами та передньою блискавкою\nСклад: 75% натуральної вовни, м'яка, не колеться."
      }
    }
  },
  // {
  //   id: 6,
  //   img: "/2.jpg",
  //   title: "I'm a product 6",
  //   price: "20,00₴",
  //   sku: "SKU44444",
  //   description: "Description of Product 6.",
  //   color: "White",
  //   size: "L",
  //   quantity: 7,
  //   images: ["/2.jpg", "/2.jpg"],
  // },
  // {
  //   id: 7,
  //   img: "/3.jpg",
  //   title: "I'm a product 7",
  //   price: "10,00₴",
  //   sku: "SKU55555",
  //   description: "Description of Product 7.",
  //   color: "Purple",
  //   size: "S",
  //   quantity: 12,
  //   images: ["/3.jpg"],
  // },
  // {
  //   id: 8,
  //   img: "/4.jpg",
  //   title: "I'm a product 8",
  //   price: "25,00₴",
  //   sku: "SKU66666",
  //   description: "Description of Product 8.",
  //   color: "Orange",
  //   size: "XL",
  //   quantity: 6,
  //   images: ["/4.jpg", "/2.jpg", "/3.jpg", "/4.jpg"],
  // },
];

export default products;
