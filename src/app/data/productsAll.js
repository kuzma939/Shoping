 const products = [
    { id: 1,
      price: 3170,
      sku: "12345",
      color: "red",
      size: "M",
      category: "Costumes",
      image: "/Costumes/Woolen suit with skirt/1.avif",
      images: ["/1.jpg", "/2.jpg", "/3.jpg"],
      colors: ["blue"], 
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
      price: 3710,
      sku: "12345",
      color: "blue",
      size: "L",
      category: "Costumes",
      image: "/Costumes/Wool suit with trousers/8.avif",
      images: ["/1.jpg", "/2.jpg", "/3.jpg"],
      colors: ["red", "blue"], 
      sizes: ["S", "M"],
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
      price: 4160,
      sku: "12345",
      color: "green",
      size: "S",
      category: "Costumes",
      image: "/Costumes/Wool suit with vest/1.avif",
      images: ["/1.jpg", "/2.jpg", "/3.jpg"],
      colors: ["red", "blue"], 
      sizes: ["S", "M"],
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
      price: 3100,
      sku: "12345",
      color: "red",
      size: "M",
      category: "Dress",
      image: "/Dress/Woolen trapeze dress/1.avif",
      images: ["/1.jpg", "/2.jpg", "/3.jpg"],
      colors: ["red", "blue"], 
      sizes: ["S", "M"],
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
      price: 3100,
      sku: "12345",
      color: "blue",
      size: "S M",
      category: "Dress",
      image: "/Dress/Wool A-line dress/2.avif",
      images: ["/1.jpg", "/2.jpg", "/3.jpg"],
      colors: ["red", "blue"], 
      sizes: ["S", "M"],
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

    {
      id: 6,
      price: 3100,
      sku: "12345",
      color: "gray",
      size: "XL",
      category: "Dress",
      image: "/Dress/Dress Grace/1.avif",
      images: ["/Dress/Dress Grace/2.avif", "/Dress/Dress Grace/3.avif", "/Dress/Dress Grace/4.avif", "/Dress/Dress Grace/5.avif", "/Dress/Dress Grace/6.avif"],
      colors: ["gray"], 
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Dress Grace",
          description: "A-line dress with wide sleeves of midi length. Has pronounced ribbons near the neck. There is a cutout on the back\nFabric: high-quality costume wool\n Платье A-line dress with wide sleeves of midi has pronounced seams at the neck.\n Fabric: high-quality costume wool"
        },
        FR: {
          name: "Robe Grace",
          description: ""
        },
        UA: {
          name: " Сукня «Grace»",
          description: "Сукня А-силуету із широкими рукавами міді довжини. Має виражені стрічки біля горловини. На спинці є виріз\nТканина: якісна костюмна вовна"
        },

        RU: {
          name: "Платье Грейс",
          description: "Платье А-силуэта с широкими рукавами меди имеет выраженные швы у горловины.\n Ткань: качественная костюмная шерсть"

        }
      }
    },
    
    {
      id: 7,
      price: 1850,
      sku: "12345",
      color: "blue",
      size: "XL",
      category: "Dress",
      image: "/Dress/Mini sundress/1.avif",
      images: ["/Dress/Mini sundress/2.avif", "/Dress/Mini sundress/3.avif", "/Dress/Mini sundress/4.avif", "/Dress/Mini sundress/5.avif", "/Dress/Mini sundress/6.avif"],
      colors: ["black"], 
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Mini sundress",
          description: "Mini sundress with a deep neckline, side slits that can be fastened and two pockets. Can be worn as a vest. \nFabric: high-quality eco-leather on a suede base. (stretch, does not crack)\n( Mini sundress with a deep neckline, side slits that can be fastened and two pockets. Can be worn as a vest. \nFabric: high-quality eco-leather on a suede base. (stretch, does not crack)"
        },
        FR: {
          name: "Robe d'été mini",
          description: "Mini robe d'été avec décolleté plongeant, fentes latérales à fermeture et deux poches. Peut être porté comme un gilet. \nTissu : éco-cuir de haute qualité sur base en daim. (extensible, ne craque pas)\n( Mini robe d'été avec un décolleté profond, des fentes latérales avec fermeture et deux poches. Peut être portée comme un gilet. \nTissu : éco-cuir de haute qualité à base de daim. (extensible, ne craque pas)"
        },
        UA: {
          name: "Сарафан mini",
          description: "Mini сарафан із глибоким декольте, розрізами збоку, які застібаються та двома кишенями. Можна носити як жилет. \nТканина: якісна екошкіра на замшевій основі. ( стречева, не тріскається )"
        },

        RU: {
          name: "Мини-сарафан",
          description: "Mini сарафан с глубоким декольте, застегивающимися разрезами сбоку и двумя карманами. Можно носить как жилет. \nТкань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся)"
        }
      }
    },
    
    {
      id: 8,
      price: 2000,
      sku: "12345",
      color: "blue",
      size: "XL",
      category: "Dress",
      image: "/Dress/Shkiriana suknya (Leather dress)/1.avif",
      images: ["/Dress/Shkiriana suknya (Leather dress)/2.avif", "/Dress/Shkiriana suknya (Leather dress)/3.avif", "/Dress/Shkiriana suknya (Leather dress)/4.avif", "/Dress/Shkiriana suknya (Leather dress)/5.avif", "/Dress/Shkiriana suknya (Leather dress)/6.avif"],
      colors: ["mocha", "white"], 
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Shkiriana suknya (Leather dress)",
          description: "Oversize dress with a small round neckline and pockets\nFabric: high-quality eco-leather on a suede base. (stretchy, does not crack)"
        },
        FR: {
          name: "Tissu Shkiryana (robe en cuir)",
          description: "Robe oversize avec petit décolleté arrondi et poches. Tissu : éco-cuir de haute qualité sur base en daim (extensible, ne craque pas)."
        },
        UA: {
          name: "Шкіряна сукня",
          description: "Oversize сукня із невеликим округлим вирізом та кишенями\nТканина: якісна екошкіра на замшевій основі.(стречева, не тріскається)"
        },
        RU: {
          name: "Кожаное платье",
          description: "Oversize платье с небольшим круглым вырезом и карманами\nТкань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся)"
          }
      }
    },
    
    {
      id: 9,
      price: 2100,
      sku: "12345",
      color: "gray",
      size: "XL",
      category: "Dress",
      image: "/Dress/Asymmetrical_dress/3.avif",
      images: ["/Dress/Asymmetrical_dress/2.avif", "/Dress/Asymmetrical_dress/3.avif", "/Dress/Asymmetrical_dress/4.avif", "/Dress/Asymmetrical_dress/5.avif"],
      colors: ["gray"], 
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          name: "Asymmetrical dress",
          description: "Oversize asymmetrical dress with a turn-down collar and a chest pocket\n Fabric: high-quality eco-leather on a suede base. (stretchy, does not crack)"
        },
        FR: {
          name: "Robe asymétrique",
          description : "Robe oversize de coupe asymétrique avec col plaqué et poche poitrine\n Tissu : éco-cuir de haute qualité sur base en daim. (extensible, ne craque pas)"
        },
        UA: {
          name: "Асиметрична сукня",
          description: "Oversize сукня асиметричного крою із накладним коміром та кишенею на грудях\n Тканина: якісна екошкіра на замшевій основі.(стречева, не тріскається)"
        },
        RU: {
          name: "Асимметричное платье",
          description: " Oversize платье асимметричного кроя с накладным воротником и карманом на груди\nТкань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся) "
        }
      }
    },
    
    {
      id: 10,
      price: 3100,
      sku: "12345",
      color: "blue",
      size: "XL",
      category: "Dress",
      image: "/Dress/Wool A-line dress/2.avif",
      images: ["/1.jpg", "/2.jpg", "/3.jpg"],
      colors: ["red", "blue"], 
      sizes: ["S", "M"],
      translations: {
        EN: {
          name: "",
          description: ""
        },
        FR: {
          name: "",
          description: ""
        },
        UA: {
          name: "",
          description: ""
        }
      }
    },

    {
      id: 5,
      price: 3100,
      sku: "12345",
      color: "blue",
      size: "XL",
      category: "Dress",
      image: "/Dress/Wool A-line dress/2.avif",
      images: ["/1.jpg", "/2.jpg", "/3.jpg"],
      colors: ["red", "blue"], 
      sizes: ["S", "M"],
      translations: {
        EN: {
          name: "",
          description: ""
        },
        FR: {
          name: "",
          description: ""
        },
        UA: {
          name: "",
          description: ""
        }
      }
    },

    {
      id: 5,
      price: 3100,
      sku: "12345",
      color: "blue",
      size: "XL",
      category: "Dress",
      image: "/Dress/Wool A-line dress/2.avif",
      images: ["/1.jpg", "/2.jpg", "/3.jpg"],
      colors: ["red", "blue"], 
      sizes: ["S", "M"],
      translations: {
        EN: {
          name: "",
          description: ""
        },
        FR: {
          name: "",
          description: ""
        },
        UA: {
          name: "",
          description: ""
        }
      }
    },

    {
      id: 5,
      price: 3100,
      sku: "12345",
      color: "blue",
      size: "XL",
      category: "Dress",
      image: "/Dress/Wool A-line dress/2.avif",
      images: ["/1.jpg", "/2.jpg", "/3.jpg"],
      colors: ["red", "blue"], 
      sizes: ["S", "M"],
      translations: {
        EN: {
          name: "",
          description: ""
        },
        FR: {
          name: "",
          description: ""
        },
        UA: {
          name: "",
          description: ""
        }
      }
    },

    {
      id: 5,
      price: 3100,
      sku: "12345",
      color: "blue",
      size: "XL",
      category: "Dress",
      image: "/Dress/Wool A-line dress/2.avif",
      images: ["/1.jpg", "/2.jpg", "/3.jpg"],
      colors: ["red", "blue"], 
      sizes: ["S", "M"],
      translations: {
        EN: {
          name: "",
          description: ""
        },
        FR: {
          name: "",
          description: ""
        },
        UA: {
          name: "",
          description: ""
        }
      }
    },
    
  ];
  export default products;
  