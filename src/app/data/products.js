const products = [
  { id: 1,
    price: 3170,
    isTop: true, // Топ продукт
    sku: "12345",
    color: "red",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Woolen suit with skirt/1.avif",
    images: ["/Costumes/Woolen suit with skirt/2.avif", "/Costumes/Woolen suit with skirt/3.avif", "/Costumes/Woolen suit with skirt/4.avif", "/Costumes/Woolen suit with skirt/5.avif", "/Costumes/Woolen suit with skirt/6.avif", "/Costumes/Woolen suit with skirt/7.avif", "/Costumes/Woolen suit with skirt/8.avif", "/Costumes/Woolen suit with skirt/9.avif", "/Costumes/Woolen suit with skirt/10.avif", "/Costumes/Woolen suit with skirt/11.avif", "/Costumes/Woolen suit with skirt/12.avif", "/Costumes/Woolen suit with skirt/13.avif", "/Costumes/Woolen suit with skirt/14.avif", ],
    colors: ["camel", "graphite", "gray"], 
    sizes: ["XS", "S", "M", ],
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
    discountPrice: 2800,
    isTop: true, // Топ продукт
    isSpecialOffer: true,
    sku: "12345",
    color: "blue",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Wool suit with trousers/8.avif",
    images: ["/Costumes/Wool suit with trousers/1.avif", "/Costumes/Wool suit with trousers/2.avif", "/Costumes/Wool suit with trousers/3.avif",
              "/Costumes/Wool suit with trousers/4.avif","/Costumes/Wool suit with trousers/5.avif", "/Costumes/Wool suit with trousers/6.avif", "/Costumes/Wool suit with trousers/7.avif", "/Costumes/Wool suit with trousers/8.avif", "/Costumes/Wool suit with trousers/9.avif", "/Costumes/Wool suit with trousers/10.avif", "/Costumes/Wool suit with trousers/11.avif", "/Costumes/Wool suit with trousers/12.avif"],
    colors: ["graphite", "grey"], 
    sizes: ["XS", "S", "M", ],
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
    isTop: true, // Топ продукт
    sku: "12345",
    color: "camel",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Wool suit with vest/1.avif",
    images: ["/Costumes/Wool suit with vest/2.avif", "/Costumes/Wool suit with vest/3.avif", "/Costumes/Wool suit with vest/4.avif", "/Costumes/Wool suit with vest/5.avif", "/Costumes/Wool suit with vest/6.avif"],
    colors: ["camel"], 
    sizes: ["XS", "S", "M", "L", "XL"],
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
    isTop: true, // Топ продукт
    sku: "12345",
    color: "red",
    size: "XS S M L XL",
    category: "Dress",
    image: "/Dress/Woolen trapeze dress/1.avif",
    images: ["/Dress/Woolen trapeze dress/2.avif", "/Dress/Woolen trapeze dress/3.avif", "/Dress/Woolen trapeze dress/4.avif", "/Dress/Woolen trapeze dress/5.avif", "/Dress/Woolen trapeze dress/6.avif", "/Dress/Woolen trapeze dress/7.avif", "/Dress/Woolen trapeze dress/7.avif",
            "/Dress/Woolen trapeze dress/8.avif", "/Dress/Woolen trapeze dress/9.avif", "/Dress/Woolen trapeze dress/10.avif", "/Dress/Woolen trapeze dress/11.avif", "/Dress/Woolen trapeze dress/12.avif"],
    colors: ["gray", "jeans"], 
    sizes: ["XS", "S", "M", "L", "XL"],
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
    discountPrice: 2800,
    isTop: true, // Топ продукт
    isSpecialOffer: true,
    sku: "12345",
    color: "blue",
    size: "XS S M L XL",
    category: "Dress",
    image: "/Dress/Wool A-line dress/2.avif",
    images: ["/Dress/Wool A-line dress/1.avif", "/Dress/Wool A-line dress/3.avif", "/Dress/Wool A-line dress/4.avif", "/Dress/Wool A-line dress/5.avif", "/Dress/Wool A-line dress/6.avif", "/Dress/Wool A-line dress/7.avif", "/Dress/Wool A-line dress/8.avif", "/Dress/Wool A-line dress/9.avif", "/Dress/Wool A-line dress/10.avif"],
    colors: ["gray", "camel"], 
    sizes: ["XS", "S", "M", "L", "XL"],
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
    discountPrice: 2800,
    isTop: true, // Топ продукт
    isSpecialOffer: true,
    sku: "12345",
    color: "gray",
    size: "XS S M L XL",
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
    isTop: true, // Топ продукт
 
    sku: "12345",
    color: "blue",
    size: "XS S M L XL",
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
    size: "XS S M L XL",
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
    size: "XS S M L XL",
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
    price: 1350 ,
    sku: "12345",
    color: "blue",
    size: "XS S M L XL",
    category: "Tops",
    image: "/Top/Openshouldergolf/2.avif",
    images: ["/Top/Openshouldergolf/1.avif", "/Top/Openshouldergolf/3.avif", "/Top/Openshouldergolf/4.avif", "/Top/Openshouldergolf/5.avif", "/Top/Openshouldergolf/6.avif"],
    colors: ["milky", "black"], 
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        name: "Open-shoulder golf",
        description: "off-shoulder turtleneck made of soft fabric: 50% cashmere, 28% polyester, 28% nylon"
      },
      FR: {
        name: "Golfer avec les épaules ouvertes",
        description: "col roulé à épaules dénudées en tissu doux : 50 % cachemire, 28 % polyester, 28 % nylon"
      },
      UA: {
        name: "Гольф із відкритими плечима",
        description: "гольф із відкритими плечима із мʼякої тканини: 50% кашемір, 28% поліестер, 28% нейлон"
      }
    }
  },
  
  
   {
    id: 11,
    price: 5225,
    sku: "12345",
    color: "beige",
    size: "XS S M L XL",
    category: "Outerwear",
    image: "/Outerwear/Leather trench coat/2.avif",
    images: ["/Outerwear/Leather trench coat/1.avif", "/Outerwear/Leather trench coat/3.avif", "/Outerwear/Leather trench coat/4.avif", 
            "/Outerwear/Leather trench coat/5.avif", "/Outerwear/Leather trench coat/6.avif"],
    colors: ["beige"], 
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        name: "Leather trench coat",
        description: "Double-breasted leather trench coat in an oversize style with an included belt and two pockets. \nFabric: high-quality eco-leather on a suede base. (stretchy, does not crack)"
      },
      FR: {
        name: "Trench-coat en cuir",
        description: "Trench-coat oversize en cuir à double boutonnage avec ceinture incluse et deux poches. \nTissu : éco-cuir de haute qualité sur base en daim. (extensible, incassable)"
      },
      UA: {
        name: "Шкіряний тренч",
        description: "Двобортний шкіряний тренч oversize фасону із поясом у комплекті та двома кишенями. \nТканина: якісна екошкіра на замшевій основі.(стречева, не тріскається)"
      }
    }
  },
  
  {
    id: 12,
    price: 4920,
    sku: "12345",
    color: "camel",
    size: "XS S M L XL",
    category: "Outerwear",
    image: "/Outerwear/Camel пальто/2.avif",
    images: ["/Outerwear/Camel пальто/1.avif", "/Outerwear/Camel пальто/3.avif", "/Outerwear/Camel пальто/4.avif", "/Outerwear/Camel пальто/5.avif"],
    colors: ["camel"], 
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        name: "Camel Coat",
        description: "A thick, lined midi-length coat with two pockets and a belt included. The sleeves can be adjusted to your liking\nFabric: Italy. 85% wool, 15% polyester"
      },
      FR: {
        name: "Manteau Camel",
        description: "Manteau épais, de longueur midi, doublé, doté de deux poches et muni d'une ceinture. Les manches peuvent être ajustées à votre guise.\nTissu : Italie. 85% laine, 15% polyester"
      },
      UA: {
        name: "Camel пальто",
        description: "Щільне пальто міді довжини на підкладці, має дві кишені, а пояс іде у комплекті. Рукава можна регулювати, як вам зручно\nТканина:Італія. 85 % вовни, 15% поліестер"
      }
    }
  },
  
  {
    id: 13,
    price: 3700,
    sku: "12345",
    color: "beige",
    size: "XS S M L XL",
    category: "Outerwear",
    image: "/Outerwear/Твідовий бомбер/1.avif",
    images: ["/Outerwear/Твідовий бомбер/2.avif", "/Outerwear/Твідовий бомбер/3.avif", "/Outerwear/Твідовий бомбер/4.avif",
             "/Outerwear/Твідовий бомбер/5.avif", "/Outerwear/Твідовий бомбер/6.avif", "/Outerwear/Твідовий бомбер/7.avif", "/Outerwear/Твідовий бомбер/8.avif"],
    colors: ["graphite", "beige"], 
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        name: "Tweed bomber jacket",
        description: "Quilted bomber jacket with high-quality lining and two pockets"
      },
      FR: {
        name: "Blouson aviateur en tweed",
        description: "Bomber matelassé avec doublure de qualité et deux poches"
      },
      UA: {
        name: "Твідовий бомбер",
        description: "Стьоганий бомбер із якісною підкладкою та двома кишенями"
      }
    }
  },
  
  {
    id: 14,
    price: 3100,
    sku: "12345",
    color: "blue",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Classicshirt/2.avif",
    images: ["/Shirts/Classicshirt/1.avif", "/Shirts/Classicshirt/3.avif", "/Shirts/Classicshirt/4.avif", "/Shirts/Classicshirt/5.avif", "/Shirts/Classicshirt/1.avif"],
    colors: ["white"], 
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        name: "Classic shirt",
        description: "Loose-fitting cotton shirt. Fabric: 100% cotton"
      },
      FR: {
        name: "Chemise classique",
        description: "Chemise en coton à coupe libre. Tissu : 100 % coton"
      },
      UA: {
        name: "Класична сорочка",
        description: "Сорочка бавовняна вільного крою. Тканина: 100% бавовна"
      }
    }
  },
  
  {
   id: 15,
   price: 1650,
   sku: "12345",
   color: "caramel",
   size: "XS S M L XL",
   category: "Skirts",
   image: "/Skirts/Alice/2.avif",
   images: ["/Skirts/Alice/2.avif", "/Skirts/Alice/2.avif", "/Skirts/Alice/2.avif", "//Skirts/Alice/2.avif", "/Skirts/Alice/2.avif"],
  colors: ["caramel"], 
   sizes: ["XS", "S", "M", "L", "XL"],
   translations: {
     EN: {
      name: "Alice",
      description: "A-line skirt with ribbons along the entire length. Fabric: high-quality eco-leather on a suede base. (stretchy, does not crack)"
    },
    FR: {
      name: "Alice",
      description: "Une jupe ample en forme de trapèze avec des rubans sur toute la longueur. Tissu : cuir écologique de haute qualité sur base en daim. (extensible, ne craque pas"
    },
    UA: {
       name: "Alice",
       description: "Спідниця вільного крою у формі трапеції зі стрічками по всій довжині. Тканина: якісна екошкіра на замшевій основі. ( стречева, не тріскається"
     }
   }
   },

   {
    id: 16,
    price: 5350,
    sku: "12345",
    color: "olive",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Liana/1.avif",
    images: ["/Costumes/Liana/2.avif", "/Costumes/Liana/3.avif", "/Costumes/Liana/4.avif", "/Costumes/Lianat/5.avif", "/Costumes/Liana/6.avif"],
    colors: ["olive"], 
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        name: "Liana",
        description: "Double-breasted oversize jacket + belt + straight high-rise trousers n\Suit fabric (75% viscose, 25% polyester)"
      },
      FR: {
        name: "Liana",
        description: "Veste oversize croisée + ceinture + pantalon droit taille haute Tissu de costume (75% viscose, 25% polyester)"
      },
      UA: {
        name: "Ліана",
        description: "Двобортний oversize жакет + пояс + брюки прямі на високій посадці n\Костюмна тканина ( 75% віскоза, 25% поліестер )"
      }
    }
  },
  
   {
     id: 17,
     price: 5350,
     sku: "12345",
     color: "black",
     size: "XS S M L XL",
     category: "Costumes",
     image: "/Costumes/Lucy/1.avif",
     images: ["/Costumes/Lucy/2.avif", "/Costumes/Lucy/3.avif", "/Costumes/Lucy/4.avif", "/Costumes/Lucy/5.avif", "/Costumes/Lucy/6.avif"],
     colors: ["black"], 
     sizes: ["XS", "S", "M", "L", "XL"],
     translations: {
       EN: {
         name: "Lucy",
         description: "Double-breasted oversize jacket + cropped high-rise banana pants\nSuit fabric (75% viscose, 25% polyester)"
       },
       FR: {
         name: "Lucy",
         description: "Veste oversize à double boutonnage + pantacourt taille haute façon banane\nTissu de costume (75% viscose, 25% polyester)"
       },
       UA: {
         name: "Lucy",
         description: "Двобортний oversize жакет + вкорочені брюки фасону бананів на високій посадці \nКостюмна тканина ( 75% віскоза, 25% поліестер )"
       }
     }
   },
  
];
export default products;
