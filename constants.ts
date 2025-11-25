import { Translations, MenuItem } from './types';

export const TRANSLATIONS: Translations = {
  EN: {
    welcome: "Welcome to LECTER",
    subtitle: "Where Luxury Meets Atmosphere",
    promotions: "Promotions",
    kitchen: "Kitchen",
    bar: "Bar",
    viewCart: "View Order",
    addToCart: "Add",
    cartEmpty: "Your cart is empty",
    yourOrder: "Your Order",
    total: "Total",
    close: "Close",
    categories: {
      // Kitchen
      shisha: "Shisha",
      salads: "Salads",
      soups: "Soups",
      snacks: "Starters",
      mains: "Mains",
      pasta: "Pasta",
      pizza: "Pizza",
      sides: "Sides",
      sets: "Platters",
      tea: "Tea",
      desserts: "Desserts",
      // Bar
      soft_drinks: "Soft Drinks",
      vermouth: "Vermouth",
      rum: "Rum",
      gin: "Gin",
      tequila: "Tequila",
      whiskey: "Whiskey",
      vodka: "Vodka",
      beer: "Beer",
      cocktails: "Cocktails",
      lemonades: "Lemonades",
      water_energy: "Water & Energy",
      fresh: "Fresh Juices",
      tea_additions: "Tea Add-ons",
      beer_snacks: "Beer Snacks"
    }
  },
  RU: {
    welcome: "Добро пожаловать в LECTER",
    subtitle: "Где роскошь встречается с атмосферой",
    promotions: "Акции",
    kitchen: "Кухня",
    bar: "Бар",
    viewCart: "Заказ",
    addToCart: "Добавить",
    cartEmpty: "Корзина пуста",
    yourOrder: "Ваш заказ",
    total: "Итого",
    close: "Закрыть",
    categories: {
      shisha: "Кальяны",
      salads: "Салаты",
      soups: "Супы",
      snacks: "Закуски",
      mains: "Горячее",
      pasta: "Паста",
      pizza: "Пицца",
      sides: "Гарниры",
      sets: "Сеты",
      tea: "Чай",
      desserts: "Десерты",
      // Bar
      soft_drinks: "Coca-Cola",
      vermouth: "Вермуты",
      rum: "Ром",
      gin: "Джин",
      tequila: "Текила",
      whiskey: "Виски",
      vodka: "Водка",
      beer: "Пиво",
      cocktails: "Коктейли",
      lemonades: "Лимонады",
      water_energy: "Напитки",
      fresh: "Фреши",
      tea_additions: "К чаю",
      beer_snacks: "К пиву"
    }
  },
  KZ: {
    welcome: "LECTER-ге қош келдіңіз",
    subtitle: "Сән-салтанат пен атмосфера тоғысқан жер",
    promotions: "Акциялар",
    kitchen: "Асүй",
    bar: "Бар",
    viewCart: "Тапсырыс",
    addToCart: "Қосу",
    cartEmpty: "Себет бос",
    yourOrder: "Сіздің тапсырыс",
    total: "Барлығы",
    close: "Жабу",
    categories: {
      shisha: "Қорқор",
      salads: "Салаттар",
      soups: "Сорпалар",
      snacks: "Жеңіл тамақтар",
      mains: "Негізгі тағамдар",
      pasta: "Паста",
      pizza: "Пицца",
      sides: "Гарнирлер",
      sets: "Сеттер",
      tea: "Шай",
      desserts: "Тәттілер",
      // Bar
      soft_drinks: "Сусындар",
      vermouth: "Вермут",
      rum: "Ром",
      gin: "Джин",
      tequila: "Текила",
      whiskey: "Виски",
      vodka: "Арақ",
      beer: "Сыра",
      cocktails: "Коктейльдер",
      lemonades: "Лимонадтар",
      water_energy: "Су және Энергетик",
      fresh: "Фрештер",
      tea_additions: "Шайға",
      beer_snacks: "Сыраға"
    }
  }
};

export const KITCHEN_CATEGORIES = [
  'shisha', 'salads', 'soups', 'snacks', 'mains', 'pasta', 'pizza', 'sides', 'sets', 'tea', 'desserts'
];

export const BAR_CATEGORIES = [
  'cocktails', 'lemonades', 'fresh', 'soft_drinks', 'water_energy', 'vermouth', 'rum', 'gin', 'tequila', 'whiskey', 'vodka', 'beer', 'beer_snacks', 'tea_additions'
];

// Empty as requested
export const GALLERY_IMAGES: string[] = [];

// Helper image for bar items
const BAR_IMG = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop"; 
const BOTTLE_IMG = "https://images.unsplash.com/photo-1569937756447-e19879f8ea71?q=80&w=800&auto=format&fit=crop";

export const MENU_ITEMS: MenuItem[] = [
  // --- KITCHEN ITEMS ---
  
  // SHISHA
  {
    id: 301,
    category: 'shisha',
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=800&auto=format&fit=crop",
    price: 4500,
    name: { EN: "Daytime Shisha (until 18:00)", RU: "Кальян дневной до 18:00", KZ: "Күндізгі қорқор (18:00-ге дейін)" },
    description: { EN: "Classic shisha at a special daytime price.", RU: "Классический кальян по специальной цене.", KZ: "Арнайы күндізгі бағадағы классикалық қорқор." }
  },
  {
    id: 302,
    category: 'shisha',
    image: "https://images.unsplash.com/photo-1520031607880-285277b94b0d?q=80&w=800&auto=format&fit=crop",
    price: 7000,
    name: { EN: "Evening Shisha", RU: "Кальян вечерний", KZ: "Кешкі қорқор" },
    description: { EN: "Rich flavors for the perfect evening.", RU: "Насыщенные вкусы для идеального вечера.", KZ: "Керемет кеш үшін қанық дәмдер." }
  },
  {
    id: 303,
    category: 'shisha',
    image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=800&auto=format&fit=crop",
    price: 4000,
    name: { EN: "Bowl Replacement", RU: "Замена чаши", KZ: "Чашаны ауыстыру" },
    description: { EN: "Refresh your session.", RU: "Обновите ваш кальян.", KZ: "Қорқорыңызды жаңартыңыз." }
  },
  {
    id: 304,
    category: 'shisha',
    image: "https://images.unsplash.com/photo-1542861345-2374621c1076?q=80&w=800&auto=format&fit=crop",
    price: 9000,
    name: { EN: "Fruit Bowl Shisha", RU: "Кальян на фрукте", KZ: "Жемістегі қорқор" },
    description: { EN: "Enhanced flavor on a fresh fruit bowl.", RU: "Усиленный вкус на чаше из свежего фрукта.", KZ: "Жаңа піскен жеміс чашасындағы күшейтілген дәм." }
  },

  // SALADS
  {
    id: 401,
    category: 'salads',
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    price: 4190,
    name: { EN: "Avocado, Tomato & Shrimp Salad", RU: "Салат из авокадо, томатов и креветок", KZ: "Авокадо, қызанақ және асшаяндар салаты" },
    description: { EN: "Fresh and light.", RU: "Свежий и легкий.", KZ: "Жаңа және жеңіл." }
  },
  {
    id: 402,
    category: 'salads',
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800&auto=format&fit=crop",
    price: 4090,
    name: { EN: "Pastrami & Grilled Zucchini", RU: "Салат с пастрами и цукини гриль", KZ: "Пастрами және гриль цукини салаты" },
    description: { EN: "Served with chimichurri sauce.", RU: "В соусе чими-чури.", KZ: "Чими-чури соусымен." }
  },
  {
    id: 403,
    category: 'salads',
    image: "https://images.unsplash.com/photo-1529312266912-b33cf6227e2f?q=80&w=800&auto=format&fit=crop",
    price: 3590,
    name: { EN: "Crispy Chicken Salad", RU: "Салат с хрустящим цыпленком", KZ: "Қытырлақ тауық етімен салат" },
    description: { EN: "With Dorblu cheese sauce.", RU: "С соусом дорблю.", KZ: "Дорблю соусымен." }
  },
  {
    id: 404,
    category: 'salads',
    image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=800&auto=format&fit=crop",
    price: 3590,
    name: { EN: "Crispy Eggplant Salad", RU: "Салат с хрустящими баклажанами", KZ: "Қытырлақ баклажан салаты" },
    description: { EN: "Asian style.", RU: "В азиатском стиле.", KZ: "Азиялық стильде." }
  },

  // SOUPS
  {
    id: 501,
    category: 'soups',
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop",
    price: 3590,
    name: { EN: "Kimchi Ramen", RU: "Рамен ким-чхи", KZ: "Кимчи Рамен" },
    description: { EN: "Spicy soup.", RU: "Острый корейский суп.", KZ: "Ащы корей сорпасы." }
  },
  {
    id: 502,
    category: 'soups',
    image: "https://images.unsplash.com/photo-1547592166-23acbe3a624b?q=80&w=800&auto=format&fit=crop",
    price: 2590,
    name: { EN: "Meatball Soup", RU: "Суп с фрикадельками", KZ: "Фрикаделькалармен сорпа" },
    description: { EN: "Hearty soup.", RU: "Домашний суп.", KZ: "Үй сорпасы." }
  },
  {
    id: 503,
    category: 'soups',
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b485c?q=80&w=800&auto=format&fit=crop",
    price: 4290,
    name: { EN: "Tom Yum Seafood", RU: "Том-ям с морепродуктами", KZ: "Теңіз өнімдерімен Том Ям" },
    description: { EN: "Thai soup.", RU: "Тайский суп.", KZ: "Тай сорпасы." }
  },
  {
    id: 504,
    category: 'soups',
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop",
    price: 2590,
    name: { EN: "Lentil Cream Soup", RU: "Чечевичный крем суп", KZ: "Жасымық крем-сорпасы" },
    description: { EN: "Vegetarian.", RU: "Нежный суп.", KZ: "Нәзік сорпа." }
  },

  // SNACKS (STARTERS)
  {
    id: 601,
    category: 'snacks',
    image: "https://images.unsplash.com/photo-1527477396000-64bc61b3327d?q=80&w=800&auto=format&fit=crop",
    price: 1990,
    name: { EN: "BBQ Wings", RU: "Крылья барбекю", KZ: "Барбекю қанаттары" },
    description: { EN: "Smoky wings.", RU: "В соусе барбекю.", KZ: "Барбекю соусында." }
  },
  {
    id: 602,
    category: 'snacks',
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop",
    price: 1990,
    name: { EN: "Chicken Nuggets", RU: "Куриные наггетсы", KZ: "Тауық наггетстері" },
    description: { EN: "Crispy chicken.", RU: "Хрустящие.", KZ: "Қытырлақ." }
  },
  {
    id: 603,
    category: 'snacks',
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=800&auto=format&fit=crop",
    price: 4590,
    name: { EN: "Beer Shrimps", RU: "Пивные креветки", KZ: "Сыраға арналған асшаяндар" },
    description: { EN: "Fried shrimps.", RU: "Жареные креветки.", KZ: "Қуырылған асшаяндар." }
  },
  {
    id: 604,
    category: 'snacks',
    image: "https://images.unsplash.com/photo-1531516181786-44403f31958c?q=80&w=800&auto=format&fit=crop",
    price: 2790,
    name: { EN: "Cheese Sticks", RU: "Сырные палочки", KZ: "Ірімшік таяқшалары" },
    description: { EN: "Mozzarella.", RU: "Моцарелла.", KZ: "Моцарелла." }
  },
  {
    id: 605,
    category: 'snacks',
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=800&auto=format&fit=crop",
    price: 3290,
    name: { EN: "Tapas", RU: "Тапас", KZ: "Тапас" },
    description: { EN: "Snack set.", RU: "Набор закусок.", KZ: "Тіскебасарлар жиынтығы." }
  },
  {
    id: 606,
    category: 'snacks',
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
    price: 2290,
    name: { EN: "Chicken & Mushroom Crepes", RU: "Блины с курицей и грибами", KZ: "Тауық пен саңырауқұлақ қосылған құймақ" },
    description: { EN: "Stuffed crepes.", RU: "Фаршированные блины.", KZ: "Салмасы бар құймақтар." }
  },
  {
    id: 607,
    category: 'snacks',
    image: "https://images.unsplash.com/photo-1662902345638-72791771483b?q=80&w=800&auto=format&fit=crop",
    price: 2890,
    name: { EN: "Salmon Crepes", RU: "Блины с лососем", KZ: "Лосось қосылған құймақ" },
    description: { EN: "With salmon.", RU: "С красной рыбой.", KZ: "Қызыл балықпен." }
  },
  {
    id: 608,
    category: 'snacks',
    image: "https://images.unsplash.com/photo-1599974579688-8dbdd3b43d78?q=80&w=800&auto=format&fit=crop",
    price: 3990,
    name: { EN: "Quesadilla", RU: "Кесадилья", KZ: "Кесадилья" },
    description: { EN: "Mexican style.", RU: "Мексиканская закуска.", KZ: "Мексикалық тіскебасар." }
  },
  {
    id: 609,
    category: 'snacks',
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop",
    price: 3290,
    name: { EN: "Chicken Club Sandwich", RU: "Клаб сэндвич с курицей", KZ: "Тауық қосылған клаб-сэндвич" },
    description: { EN: "Classic club.", RU: "Классический.", KZ: "Классикалық." }
  },
  {
    id: 610,
    category: 'snacks',
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop",
    price: 3990,
    name: { EN: "Beef Club Sandwich", RU: "Клаб сэндвич с говядиной", KZ: "Сиыр еті қосылған клаб-сэндвич" },
    description: { EN: "With beef.", RU: "С говядиной.", KZ: "Сиыр етімен." }
  },
  {
    id: 611,
    category: 'snacks',
    image: "https://images.unsplash.com/photo-1631379578550-7038263db699?q=80&w=800&auto=format&fit=crop",
    price: 7290,
    name: { EN: "Cheese Platter", RU: "Сырное плато", KZ: "Ірімшік тарелкесі" },
    description: { EN: "Assorted cheese.", RU: "Ассорти сыров.", KZ: "Ірімшік ассортиі." }
  },

  // MAINS
  {
    id: 701,
    category: 'mains',
    image: "https://images.unsplash.com/photo-1594957635694-82531ae1c0df?q=80&w=800&auto=format&fit=crop",
    price: 5290,
    name: { EN: "Beef Kupaty with Potato", RU: "Говяжьи купаты с картофелем", KZ: "Картоппен берілген сиыр еті купаты" },
    description: { EN: "Sausages.", RU: "Домашние колбаски.", KZ: "Үй шұжықтары." }
  },
  {
    id: 702,
    category: 'mains',
    image: "https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?q=80&w=800&auto=format&fit=crop",
    price: 4990,
    name: { EN: "Chicken Kupaty with Potato", RU: "Куриные купаты с картофелем", KZ: "Картоппен берілген тауық купаты" },
    description: { EN: "Chicken sausages.", RU: "Куриные колбаски.", KZ: "Тауық шұжықтары." }
  },
  {
    id: 703,
    category: 'mains',
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
    price: 7890,
    name: { EN: "Grilled Salmon & Broccoli", RU: "Лосось гриль с брокколи", KZ: "Брокколи қосылған гриль лосось" },
    description: { EN: "In nut sauce.", RU: "В ореховом соусе.", KZ: "Жаңғақ соусында." }
  },
  {
    id: 704,
    category: 'mains',
    image: "https://images.unsplash.com/photo-1558030006-4506719b740f?q=80&w=800&auto=format&fit=crop",
    price: 6590,
    name: { EN: "Beef Medallions", RU: "Медальоны с пюре", KZ: "Картоп езбесімен медальондар" },
    description: { EN: "With potato puree.", RU: "С пюре.", KZ: "Езбемен." }
  },
  {
    id: 705,
    category: 'mains',
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop",
    price: 7990,
    name: { EN: "Ribeye Steak", RU: "Стейк Рибай", KZ: "Рибай стейкі" },
    description: { EN: "Premium beef.", RU: "Мраморная говядина.", KZ: "Мәрмәр сиыр еті." }
  },
  {
    id: 706,
    category: 'mains',
    image: "https://images.unsplash.com/photo-1605391300064-69970c976f68?q=80&w=800&auto=format&fit=crop",
    price: 6590,
    name: { EN: "Filet Mignon", RU: "Филе миньон", KZ: "Миньон сүбесі" },
    description: { EN: "Pepper sauce.", RU: "В соусе пеппер.", KZ: "Бұрыш соусында." }
  },
  {
    id: 707,
    category: 'mains',
    image: "https://images.unsplash.com/photo-1626804475297-411dbe6314c3?q=80&w=800&auto=format&fit=crop",
    price: 3790,
    name: { EN: "Chicken Fillet & Rice", RU: "Филе цыпленка с рисом", KZ: "Күрішпен берілген балапан сүбесі" },
    description: { EN: "Tyakhon rice.", RU: "Рис Тяхон.", KZ: "Тяхон күріші." }
  },

  // PASTA
  {
    id: 801,
    category: 'pasta',
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800&auto=format&fit=crop",
    price: 4290,
    name: { EN: "Seafood Pasta", RU: "Паста с морепродуктами", KZ: "Теңіз өнімдерімен паста" },
    description: { EN: "Seafood mix.", RU: "Морепродукты.", KZ: "Теңіз өнімдері." }
  },
  {
    id: 802,
    category: 'pasta',
    image: "https://images.unsplash.com/photo-1626844131082-256783844137?q=80&w=800&auto=format&fit=crop",
    price: 3990,
    name: { EN: "Meatball Pasta", RU: "Паста с фрикадельками", KZ: "Фрикаделькалармен паста" },
    description: { EN: "Meatballs.", RU: "Фрикадельки.", KZ: "Фрикаделькалар." }
  },
  {
    id: 803,
    category: 'pasta',
    image: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?q=80&w=800&auto=format&fit=crop",
    price: 3490,
    name: { EN: "Chicken & Mushroom Pasta", RU: "Паста с курицей и грибами", KZ: "Тауық пен саңырауқұлақ қосылған паста" },
    description: { EN: "Creamy.", RU: "Сливочная.", KZ: "Кілегейлі." }
  },

  // SIDES
  {
    id: 901,
    category: 'sides',
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=800&auto=format&fit=crop",
    price: 1190,
    name: { EN: "Truffle Mashed Potatoes", RU: "Пюре с трюфелем", KZ: "Трюфель қосылған езбе" },
    description: { EN: "Mashed potatoes.", RU: "Пюре.", KZ: "Езбе." }
  },
  {
    id: 902,
    category: 'sides',
    image: "https://images.unsplash.com/photo-1532456543087-75052994469d?q=80&w=800&auto=format&fit=crop",
    price: 2290,
    name: { EN: "Grilled Vegetables", RU: "Овощи гриль", KZ: "Гриль көкөністері" },
    description: { EN: "Seasonal.", RU: "Сезонные.", KZ: "Маусымдық." }
  },
  {
    id: 903,
    category: 'sides',
    image: "https://images.unsplash.com/photo-1536304993881-ff00228b4781?q=80&w=800&auto=format&fit=crop",
    price: 890,
    name: { EN: "Boiled Rice", RU: "Рис отварной", KZ: "Піскен күріш" },
    description: { EN: "Rice.", RU: "Рис.", KZ: "Күріш." }
  },
  {
    id: 904,
    category: 'sides',
    image: "https://images.unsplash.com/photo-1573080496987-a199f8cd75c9?q=80&w=800&auto=format&fit=crop",
    price: 1290,
    name: { EN: "French Fries", RU: "Картофель фри", KZ: "Фри картобы" },
    description: { EN: "Fries.", RU: "Фри.", KZ: "Фри." }
  },

  // PIZZA
  {
    id: 1001,
    category: 'pizza',
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop",
    price: 2690,
    name: { EN: "Margherita", RU: "Пицца Маргарита", KZ: "Маргарита пиццасы" },
    description: { EN: "Tomato & Cheese.", RU: "Томат и сыр.", KZ: "Қызанақ және ірімшік." }
  },
  {
    id: 1002,
    category: 'pizza',
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop",
    price: 3190,
    name: { EN: "Pepperoni", RU: "Пицца Пепперони", KZ: "Пепперони пиццасы" },
    description: { EN: "Spicy.", RU: "Острая.", KZ: "Ащы." }
  },
  {
    id: 1003,
    category: 'pizza',
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    price: 3390,
    name: { EN: "Pastrami Pizza", RU: "Пицца с пастрами", KZ: "Пастрами қосылған пицца" },
    description: { EN: "Meat.", RU: "Мясная.", KZ: "Етті." }
  },
  {
    id: 1004,
    category: 'pizza',
    image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?q=80&w=800&auto=format&fit=crop",
    price: 4690,
    name: { EN: "Four Cheese", RU: "Пицца Четыре сыра", KZ: "Төрт ірімшік пиццасы" },
    description: { EN: "Cheesy.", RU: "Сырная.", KZ: "Ірімшікті." }
  },
  {
    id: 1005,
    category: 'pizza',
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
    price: 3490,
    name: { EN: "Chicken & Mushroom Pizza", RU: "Пицца с курицей и грибами", KZ: "Тауық пен саңырауқұлақ пиццасы" },
    description: { EN: "Chicken.", RU: "Куриная.", KZ: "Тауық." }
  },

  // SETS
  {
    id: 1101,
    category: 'sets',
    image: "https://images.unsplash.com/photo-1544025162-d76690b6d029?q=80&w=800&auto=format&fit=crop",
    price: 27990,
    name: { EN: "Meat Set", RU: "Мясной сет", KZ: "Ет ассортиі" },
    description: { EN: "Big meat platter.", RU: "Большое мясное плато.", KZ: "Үлкен ет табағы." }
  },
  {
    id: 1102,
    category: 'sets',
    image: "https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?q=80&w=800&auto=format&fit=crop",
    price: 13990,
    name: { EN: "Beer Set", RU: "Пивной сет", KZ: "Сыра сеті" },
    description: { EN: "Snacks for beer.", RU: "Закуски к пиву.", KZ: "Сыраға арналған тіскебасарлар." }
  },

  // TEA (KITCHEN)
  {
    id: 1201,
    category: 'tea',
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=800&auto=format&fit=crop",
    price: 2390,
    name: { EN: "Moroccan Tea", RU: "Марокканский чай", KZ: "Мароккалық шай" },
    description: { EN: "Spiced tea.", RU: "Пряный чай.", KZ: "Дәмдеуішті шай." }
  },
  {
    id: 1202,
    category: 'tea',
    image: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=800&auto=format&fit=crop",
    price: 2390,
    name: { EN: "Tashkent Tea", RU: "Ташкентский чай", KZ: "Ташкент шайы" },
    description: { EN: "Tea with lemon and mint.", RU: "Чай с лимоном и мятой.", KZ: "Лимон мен жалбыз қосылған шай." }
  },
  {
    id: 1203,
    category: 'tea',
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop",
    price: 2490,
    name: { EN: "Pear Jasmine", RU: "Груша Жасмин", KZ: "Алмұрт Жасмин" },
    description: { EN: "Aromatic tea.", RU: "Ароматный чай.", KZ: "Хош иісті шай." }
  },
  {
    id: 1204,
    category: 'tea',
    image: "https://images.unsplash.com/photo-1571934811356-5cc55449d0a4?q=80&w=800&auto=format&fit=crop",
    price: 1190,
    name: { EN: "Black Tea", RU: "Черный чай", KZ: "Қара шай" },
    description: { EN: "Classic.", RU: "Классический.", KZ: "Классикалық." }
  },
  {
    id: 1205,
    category: 'tea',
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=800&auto=format&fit=crop",
    price: 1190,
    name: { EN: "Green Tea", RU: "Зеленый чай", KZ: "Көк шай" },
    description: { EN: "Classic.", RU: "Классический.", KZ: "Классикалық." }
  },
  {
    id: 1206,
    category: 'tea',
    image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=800&auto=format&fit=crop",
    price: 2490,
    name: { EN: "Chinese Tea", RU: "Китайский чай", KZ: "Қытай шайы" },
    description: { EN: "Premium.", RU: "Премиум.", KZ: "Премиум." }
  },
  {
    id: 1207,
    category: 'tea',
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=800&auto=format&fit=crop",
    price: 1190,
    name: { EN: "Thyme Tea", RU: "Чай с чабрецом", KZ: "Жеміс шайы" },
    description: { EN: "Herbal.", RU: "Травяной.", KZ: "Шөптік." }
  },
  {
    id: 1208,
    category: 'tea',
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=800&auto=format&fit=crop",
    price: 2390,
    name: { EN: "Berry Tea", RU: "Чай ягодный", KZ: "Жидек шайы" },
    description: { EN: "Fruit tea.", RU: "Фруктовый.", KZ: "Жемісті." }
  },

  // DESSERTS
  {
    id: 1301,
    category: 'desserts',
    image: "https://images.unsplash.com/photo-1517093755353-855c822e176b?q=80&w=800&auto=format&fit=crop",
    price: 990,
    name: { EN: "Strawberry Jam Crepes", RU: "Блины с джемом", KZ: "Джем қосылған құймақ" },
    description: { EN: "Sweet.", RU: "Сладкие.", KZ: "Тәтті." }
  },
  {
    id: 1302,
    category: 'desserts',
    image: "https://images.unsplash.com/photo-1587823521404-5d55eb944c66?q=80&w=800&auto=format&fit=crop",
    price: 1990,
    name: { EN: "Oriental Sweets", RU: "Восточные сладости", KZ: "Шығыс тәттілері" },
    description: { EN: "Baklava.", RU: "Пахлава.", KZ: "Пахлава." }
  },
  {
    id: 1303,
    category: 'desserts',
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?q=80&w=800&auto=format&fit=crop",
    price: 4990,
    name: { EN: "Fruit Platter", RU: "Фруктовое ассорти", KZ: "Жеміс ассортиі" },
    description: { EN: "Fruits.", RU: "Фрукты.", KZ: "Жемістер." }
  },
  {
    id: 1304,
    category: 'desserts',
    image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29eb6?q=80&w=800&auto=format&fit=crop",
    price: 1190,
    name: { EN: "Honey Cake", RU: "Медовик", KZ: "Балды торт" },
    description: { EN: "Cake.", RU: "Торт.", KZ: "Торт." }
  },

  // --- BAR ITEMS ---

  // SOFT DRINKS
  {
    id: 2001,
    category: 'soft_drinks',
    image: BAR_IMG,
    price: 890,
    name: { EN: "Coca-Cola", RU: "Coca-Cola", KZ: "Coca-Cola" },
    description: { EN: "Soft drink", RU: "Газировка", KZ: "Газдалған сусын" }
  },
  {
    id: 2002,
    category: 'soft_drinks',
    image: BAR_IMG,
    price: 890,
    name: { EN: "Coca-Cola Zero", RU: "Coca-Cola Zero", KZ: "Coca-Cola Zero" },
    description: { EN: "Sugar free", RU: "Без сахара", KZ: "Қантсыз" }
  },
  {
    id: 2003,
    category: 'soft_drinks',
    image: BAR_IMG,
    price: 890,
    name: { EN: "Sprite", RU: "Sprite", KZ: "Sprite" },
    description: { EN: "Lemon lime", RU: "Лимон-лайм", KZ: "Лимон-лайм" }
  },
  {
    id: 2004,
    category: 'soft_drinks',
    image: BAR_IMG,
    price: 1990,
    name: { EN: "Piko", RU: "Piko", KZ: "Piko" },
    description: { EN: "Juice", RU: "Сок", KZ: "Шырын" }
  },

  // VERMOUTH
  {
    id: 2101,
    category: 'vermouth',
    image: BOTTLE_IMG,
    price: 1590,
    name: { EN: "Martini Bianco", RU: "MARTINI BIANCO", KZ: "MARTINI BIANCO" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2102,
    category: 'vermouth',
    image: BOTTLE_IMG,
    price: 1590,
    name: { EN: "Martini Rosso", RU: "MARTINI ROSSO", KZ: "MARTINI ROSSO" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2103,
    category: 'vermouth',
    image: BOTTLE_IMG,
    price: 1590,
    name: { EN: "Martini Extra Dry", RU: "MARTINI EXTRA DRY", KZ: "MARTINI EXTRA DRY" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },

  // RUM
  {
    id: 2201,
    category: 'rum',
    image: BOTTLE_IMG,
    price: 1590,
    name: { EN: "Havana Club 3", RU: "HAVANA CLUB 3", KZ: "HAVANA CLUB 3" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2202,
    category: 'rum',
    image: BOTTLE_IMG,
    price: 1990,
    name: { EN: "Havana Club 7", RU: "HAVANA CLUB 7", KZ: "HAVANA CLUB 7" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2203,
    category: 'rum',
    image: BOTTLE_IMG,
    price: 1790,
    name: { EN: "Havana Club Especial", RU: "HAVANA CLUB ESPECIAL", KZ: "HAVANA CLUB ESPECIAL" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },

  // GIN
  {
    id: 2301,
    category: 'gin',
    image: BOTTLE_IMG,
    price: 1590,
    name: { EN: "Beefeater Original", RU: "BEEFEATER ORIGINAL", KZ: "BEEFEATER ORIGINAL" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2302,
    category: 'gin',
    image: BOTTLE_IMG,
    price: 1690,
    name: { EN: "Beefeater Blackberry", RU: "BEEFEATER BLACKBERRY", KZ: "BEEFEATER BLACKBERRY" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2303,
    category: 'gin',
    image: BOTTLE_IMG,
    price: 1690,
    name: { EN: "Beefeater Blood Orange", RU: "BEEFEATER BLOOD ORANGE", KZ: "BEEFEATER BLOOD ORANGE" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2304,
    category: 'gin',
    image: BOTTLE_IMG,
    price: 1690,
    name: { EN: "Beefeater Pink Strawberry", RU: "BEEFEATER PINK STRAWBERRY", KZ: "BEEFEATER PINK STRAWBERRY" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },

  // TEQUILA
  {
    id: 2401,
    category: 'tequila',
    image: BOTTLE_IMG,
    price: 1590,
    name: { EN: "Olmeca Bianco", RU: "OLMECA BIANCO", KZ: "OLMECA BIANCO" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2402,
    category: 'tequila',
    image: BOTTLE_IMG,
    price: 1590,
    name: { EN: "Olmeca Gold", RU: "OLMECA GOLD", KZ: "OLMECA GOLD" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2403,
    category: 'tequila',
    image: BOTTLE_IMG,
    price: 3790,
    name: { EN: "Espolon Bianco", RU: "ESPOLON BIANCO", KZ: "ESPOLON BIANCO" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2404,
    category: 'tequila',
    image: BOTTLE_IMG,
    price: 3990,
    name: { EN: "Espolon Reposado", RU: "ESPOLON REPOSADO", KZ: "ESPOLON REPOSADO" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },

  // WHISKEY
  {
    id: 2501,
    category: 'whiskey',
    image: BOTTLE_IMG,
    price: 1990,
    name: { EN: "Jameson Original", RU: "JAMESON ORIGINAL", KZ: "JAMESON ORIGINAL" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2502,
    category: 'whiskey',
    image: BOTTLE_IMG,
    price: 2490,
    name: { EN: "Jameson Crested", RU: "JAMESON CRESTED", KZ: "JAMESON CRESTED" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2503,
    category: 'whiskey',
    image: BOTTLE_IMG,
    price: 2490,
    name: { EN: "Jameson Orange", RU: "JAMESON ORANGE", KZ: "JAMESON ORANGE" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2504,
    category: 'whiskey',
    image: BOTTLE_IMG,
    price: 2490,
    name: { EN: "Jameson Black Barrel", RU: "JAMESON BLACK BARREL", KZ: "JAMESON BLACK BARREL" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2505,
    category: 'whiskey',
    image: BOTTLE_IMG,
    price: 1990,
    name: { EN: "Jack Daniels", RU: "JACK DANIELS", KZ: "JACK DANIELS" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2506,
    category: 'whiskey',
    image: BOTTLE_IMG,
    price: 2190,
    name: { EN: "Jack Daniels Apple", RU: "JACK DANIELS APPLE", KZ: "JACK DANIELS APPLE" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2507,
    category: 'whiskey',
    image: BOTTLE_IMG,
    price: 2990,
    name: { EN: "Chivas Regal 12YO", RU: "CHIVAS REGAL 12YO", KZ: "CHIVAS REGAL 12YO" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2508,
    category: 'whiskey',
    image: BOTTLE_IMG,
    price: 1790,
    name: { EN: "Ballantine's", RU: "BALLANTINE'S", KZ: "BALLANTINE'S" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2509,
    category: 'whiskey',
    image: BOTTLE_IMG,
    price: 2990,
    name: { EN: "Monkey Shoulder", RU: "MONKEY SHOULDER", KZ: "MONKEY SHOULDER" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2510,
    category: 'whiskey',
    image: BOTTLE_IMG,
    price: 3590,
    name: { EN: "Glenfiddich 12YO", RU: "GLENFIDDICH 12YO", KZ: "GLENFIDDICH 12YO" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2511,
    category: 'whiskey',
    image: BOTTLE_IMG,
    price: 4990,
    name: { EN: "Macallan 12YO", RU: "MACALLAN 12YO", KZ: "MACALLAN 12YO" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2512,
    category: 'whiskey',
    image: BOTTLE_IMG,
    price: 3590,
    name: { EN: "Glenmorangie 10YO", RU: "GLENMORANGIE 10YO", KZ: "GLENMORANGIE 10YO" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },

  // VODKA
  {
    id: 2601,
    category: 'vodka',
    image: BOTTLE_IMG,
    price: 1590,
    name: { EN: "Absolut Blue", RU: "ABSOLUTE BLUE", KZ: "ABSOLUTE BLUE" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2602,
    category: 'vodka',
    image: BOTTLE_IMG,
    price: 1460,
    name: { EN: "Organik", RU: "ORGANIK", KZ: "ORGANIK" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2603,
    category: 'vodka',
    image: BOTTLE_IMG,
    price: 1890,
    name: { EN: "Sky", RU: "SKY", KZ: "SKY" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2604,
    category: 'vodka',
    image: BOTTLE_IMG,
    price: 2490,
    name: { EN: "Titos", RU: "TITOS", KZ: "TITOS" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },
  {
    id: 2605,
    category: 'vodka',
    image: BOTTLE_IMG,
    price: 4690,
    name: { EN: "Belvedere", RU: "BELVEDERE", KZ: "BELVEDERE" },
    description: { EN: "50ml", RU: "50мл", KZ: "50мл" }
  },

  // BEER
  {
    id: 2701,
    category: 'beer',
    image: BAR_IMG,
    price: 1990,
    name: { EN: "Bud", RU: "BUD", KZ: "BUD" },
    description: { EN: "Bottle", RU: "Бутылочное", KZ: "Бөтелке" }
  },
  {
    id: 2702,
    category: 'beer',
    image: BAR_IMG,
    price: 1990,
    name: { EN: "Line Brew Draft", RU: "Line Brew разливное", KZ: "Line Brew құйылмалы" },
    description: { EN: "Draft", RU: "Разливное", KZ: "Құйылмалы" }
  },
  {
    id: 2703,
    category: 'beer',
    image: BAR_IMG,
    price: 3590,
    name: { EN: "Guinness", RU: "GUINNESS", KZ: "GUINNESS" },
    description: { EN: "Stout", RU: "Стаут", KZ: "Стаут" }
  },

  // COCKTAILS (BAR)
  {
    id: 2801,
    category: 'cocktails',
    image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&w=800&auto=format&fit=crop",
    price: 3190,
    name: { EN: "Clarice", RU: "CLARICE", KZ: "CLARICE" },
    description: { EN: "Cocktail", RU: "Коктейль", KZ: "Коктейль" }
  },
  {
    id: 2802,
    category: 'cocktails',
    image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&w=800&auto=format&fit=crop",
    price: 3190,
    name: { EN: "Buffalo Bill", RU: "BUFFALO BILL", KZ: "BUFFALO BILL" },
    description: { EN: "Cocktail", RU: "Коктейль", KZ: "Коктейль" }
  },
  {
    id: 2803,
    category: 'cocktails',
    image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&w=800&auto=format&fit=crop",
    price: 3190,
    name: { EN: "Graham", RU: "GRAHAM", KZ: "GRAHAM" },
    description: { EN: "Cocktail", RU: "Коктейль", KZ: "Коктейль" }
  },
  {
    id: 2804,
    category: 'cocktails',
    image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&w=800&auto=format&fit=crop",
    price: 3190,
    name: { EN: "Chilton", RU: "CHILTON", KZ: "CHILTON" },
    description: { EN: "Cocktail", RU: "Коктейль", KZ: "Коктейль" }
  },
  {
    id: 2805,
    category: 'cocktails',
    image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&w=800&auto=format&fit=crop",
    price: 3190,
    name: { EN: "Drumgo", RU: "DRUMGO", KZ: "DRUMGO" },
    description: { EN: "Cocktail", RU: "Коктейль", KZ: "Коктейль" }
  },
  {
    id: 2806,
    category: 'cocktails',
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop",
    price: 3190,
    name: { EN: "Aperol", RU: "APEROL", KZ: "APEROL" },
    description: { EN: "Spritz", RU: "Шприц", KZ: "Шприц" }
  },
  {
    id: 2807,
    category: 'cocktails',
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop",
    price: 3190,
    name: { EN: "Negroni", RU: "NEGRONI", KZ: "NEGRONI" },
    description: { EN: "Classic", RU: "Классический", KZ: "Классикалық" }
  },

  // LEMONADES
  {
    id: 2901,
    category: 'lemonades',
    image: BAR_IMG,
    price: 3190,
    name: { EN: "Cucumber", RU: "ОГУРЕЧНЫЙ", KZ: "ҚИЯР" },
    description: { EN: "Fresh", RU: "Свежий", KZ: "Жаңа" }
  },
  {
    id: 2902,
    category: 'lemonades',
    image: BAR_IMG,
    price: 3190,
    name: { EN: "Aloe Peach", RU: "АЛОЭ-ПЕРСИК", KZ: "АЛОЭ-ШАБДАЛЫ" },
    description: { EN: "Sweet", RU: "Сладкий", KZ: "Тәтті" }
  },
  {
    id: 2903,
    category: 'lemonades',
    image: BAR_IMG,
    price: 3190,
    name: { EN: "Citrus", RU: "ЦИТРУСОВЫЙ", KZ: "ЦИТРУС" },
    description: { EN: "Sour", RU: "Кислый", KZ: "Қышқыл" }
  },
  {
    id: 2904,
    category: 'lemonades',
    image: BAR_IMG,
    price: 3190,
    name: { EN: "Berry", RU: "ЯГОДНЫЙ", KZ: "ЖИДЕК" },
    description: { EN: "Berry mix", RU: "Микс", KZ: "Микс" }
  },
  {
    id: 2905,
    category: 'lemonades',
    image: BAR_IMG,
    price: 3190,
    name: { EN: "Coconut", RU: "КОКОСОВЫЙ", KZ: "КОКОС" },
    description: { EN: "Exotic", RU: "Экзотика", KZ: "Экзотика" }
  },
  {
    id: 2906,
    category: 'lemonades',
    image: BAR_IMG,
    price: 3190,
    name: { EN: "Passion Fruit Pear", RU: "МАРАКУЙЯ С ГРУШЕЙ", KZ: "МАРАКУЙЯ АЛМҰРТПЕН" },
    description: { EN: "Tropical", RU: "Тропический", KZ: "Тропикалық" }
  },

  // WATER & ENERGY
  {
    id: 3001,
    category: 'water_energy',
    image: BAR_IMG,
    price: 990,
    name: { EN: "Tonic", RU: "Тоник", KZ: "Тоник" },
    description: { EN: "Tonic water", RU: "Тоник", KZ: "Тоник" }
  },
  {
    id: 3002,
    category: 'water_energy',
    image: BAR_IMG,
    price: 1590,
    name: { EN: "Energy Drink", RU: "Энергетический напиток", KZ: "Энергетикалық сусын" },
    description: { EN: "Energy", RU: "Энергетик", KZ: "Энергетик" }
  },
  {
    id: 3003,
    category: 'water_energy',
    image: BAR_IMG,
    price: 2490,
    name: { EN: "Tassay Excellent", RU: "Tassay Excellent", KZ: "Tassay Excellent" },
    description: { EN: "Water", RU: "Вода", KZ: "Су" }
  },
  {
    id: 3004,
    category: 'water_energy',
    image: BAR_IMG,
    price: 2490,
    name: { EN: "Tassay Emerald", RU: "Tassay Emerald", KZ: "Tassay Emerald" },
    description: { EN: "Water", RU: "Вода", KZ: "Су" }
  },

  // FRESH
  {
    id: 3101,
    category: 'fresh',
    image: BAR_IMG,
    price: 1890,
    name: { EN: "Orange Fresh", RU: "ФРЕШ АПЕЛЬСИНОВЫЙ", KZ: "АПЕЛЬСИН ФРЕШІ" },
    description: { EN: "Fresh juice", RU: "Свежевыжатый", KZ: "Жаңа сығылған" }
  },
  {
    id: 3102,
    category: 'fresh',
    image: BAR_IMG,
    price: 2690,
    name: { EN: "Grapefruit Fresh", RU: "ФРЕШ ГРЕЙПФРУТ", KZ: "ГРЕЙПФРУТ ФРЕШІ" },
    description: { EN: "Fresh juice", RU: "Свежевыжатый", KZ: "Жаңа сығылған" }
  },
  {
    id: 3103,
    category: 'fresh',
    image: BAR_IMG,
    price: 1890,
    name: { EN: "Apple Fresh", RU: "ФРЕШ ЯБЛОЧНЫЙ", KZ: "АЛМА ФРЕШІ" },
    description: { EN: "Fresh juice", RU: "Свежевыжатый", KZ: "Жаңа сығылған" }
  },

  // TEA ADD-ONS
  {
    id: 3201,
    category: 'tea_additions',
    image: BAR_IMG,
    price: 490,
    name: { EN: "Lemon", RU: "Лимон", KZ: "Лимон" },
    description: { EN: "Add-on", RU: "Добавка", KZ: "Қоспа" }
  },
  {
    id: 3202,
    category: 'tea_additions',
    image: BAR_IMG,
    price: 490,
    name: { EN: "Milk", RU: "Молоко", KZ: "Сүт" },
    description: { EN: "Add-on", RU: "Добавка", KZ: "Қоспа" }
  },
  {
    id: 3203,
    category: 'tea_additions',
    image: BAR_IMG,
    price: 490,
    name: { EN: "Honey", RU: "Мед", KZ: "Бал" },
    description: { EN: "Add-on", RU: "Добавка", KZ: "Қоспа" }
  },

  // BEER SNACKS
  {
    id: 3301,
    category: 'beer_snacks',
    image: BAR_IMG,
    price: 890,
    name: { EN: "Peanuts", RU: "Арахис", KZ: "Жержаңғақ" },
    description: { EN: "Snack", RU: "Закуска", KZ: "Тіскебасар" }
  },
  {
    id: 3302,
    category: 'beer_snacks',
    image: BAR_IMG,
    price: 1490,
    name: { EN: "Pistachios", RU: "Фисташки", KZ: "Пісте" },
    description: { EN: "Snack", RU: "Закуска", KZ: "Тіскебасар" }
  }
];