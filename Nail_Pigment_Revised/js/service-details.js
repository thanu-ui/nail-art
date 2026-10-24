(() => {
  "use strict";

  // ==========================================
  // GET SELECTED SERVICE
  // ==========================================

  const params = new URLSearchParams(window.location.search);
  const serviceName = params.get("service") || "Classic Gloss";

  const imageElement = document.getElementById("detail-image");
  const titleElement = document.getElementById("detail-title");
  const categoryElement = document.getElementById("detail-category");
  const descriptionElement = document.getElementById("detail-description");
  const aboutElement = document.getElementById("detail-about");
  const featuresElement = document.getElementById("detail-features");
  const bookElement = document.getElementById("detail-book");

  const imageLibrary = Array.from(
    document.querySelectorAll("#service-image-library img[data-service]")
  );

  // ==========================================
  // SERVICE CONTENT
  // ==========================================

  const serviceData = {
    "Classic Gloss": {
      category: "CLASSIC MANICURE",
      title: "Classic Gloss",
      description:
        "Discover timeless beauty with a classic glossy manicure. This elegant look combines neatly shaped nails with a smooth, polished finish that complements everyday outfits, professional looks and special occasions.",
      about:
        "Classic Gloss is all about simplicity, shine and beautifully finished nails. Choose a delicate pink, creamy nude, timeless red or your favourite classic shade. The look can be kept natural and understated or customised with a more vibrant colour for extra personality.",
      features: [
        "Choose from elegant nude, pink, red and classic shades.",
        "Personalise your nail shape and preferred length.",
        "Enjoy a clean, glossy finish with a polished appearance.",
        "Suitable for everyday wear, office looks and celebrations.",
        "Ask your technician about suitable polish and aftercare."
      ]
    },

    "Classic Refresh Mani": {
      category: "MANICURE ESSENTIALS",
      title: "Classic Refresh Mani",
      description:
        "Give your hands a fresh, well-groomed appearance with a classic manicure refresh. It is a simple way to tidy your nails, update your colour and enjoy a little time dedicated to self-care.",
      about:
        "This manicure focuses on nail preparation, shaping and your preferred finishing touch. Whether you want a natural look or a fresh coat of colour, the design can be adapted to your daily routine and personal style.",
      features: [
        "Refresh your nail shape and overall appearance.",
        "Choose a natural finish or your favourite polish colour.",
        "Explore short, rounded, oval or square nail shapes.",
        "Add a subtle accent nail if you want a little extra detail.",
        "Ask about suitable nail-care options during your visit."
      ]
    },

    "Soft Nude Finish": {
      category: "EVERYDAY ELEGANCE",
      title: "Soft Nude Finish",
      description:
        "Embrace understated elegance with soft nude nails. This versatile manicure creates a delicate, refined appearance that pairs beautifully with everyday outfits, formal wear and special occasions.",
      about:
        "Soft Nude Finish celebrates natural-looking colours and a smooth, balanced finish. Choose from beige, blush, milky pink, caramel or sheer nude tones to complement your preferences. The result can be subtle and natural or slightly more polished and glamorous.",
      features: [
        "Explore beige, blush, caramel and milky nude shades.",
        "Choose glossy or soft-looking finishes where available.",
        "Pair your colour with short, oval or almond-shaped nails.",
        "Add delicate shimmer or minimal nail art.",
        "Create a versatile manicure for work and everyday wear."
      ]
    },

    "Basic Manicure": {
      category: "NAIL CARE",
      title: "Basic Manicure",
      description:
        "Keep your nails neat and presentable with a basic manicure. This straightforward service is ideal for maintaining a clean appearance without elaborate designs or complicated finishes.",
      about:
        "A basic manicure can focus on nail preparation, shaping and a simple finish according to the studio's service options. Keep your nails natural or select a polish colour that reflects your everyday style.",
      features: [
        "Choose your preferred nail length and shape.",
        "Keep your nails natural or add a polish colour.",
        "Discuss appropriate nail preparation with your technician.",
        "Choose a simple, practical look for daily activities.",
        "Ask about maintaining your manicure between appointments."
      ]
    },

    "Gel Manicure": {
      category: "GLOSSY GEL FINISH",
      title: "Gel Manicure",
      description:
        "Enjoy a sleek, glossy manicure with a gel finish. Gel polish is a popular option for anyone who wants vibrant colour, a smooth appearance and a manicure that suits both everyday life and special plans.",
      about:
        "A gel manicure uses a compatible gel-polish system that is cured according to the product instructions. Choose a classic shade, a bold colour or a subtle design. Professional removal helps minimise unnecessary stress on natural nails.",
      features: [
        "Choose from nude, pink, red and seasonal colours.",
        "Explore glossy finishes and compatible special effects.",
        "Add a simple accent or minimal nail-art detail.",
        "Ask about expected wear and suitable maintenance.",
        "Have gel polish removed using an appropriate method."
      ]
    },

    "Spa Manicure": {
      category: "RELAXING HAND CARE",
      title: "Spa Manicure",
      description:
        "Make room for relaxation with a spa-inspired manicure. This experience combines nail grooming with additional hand-care options for a refreshing appointment focused on comfort and personal care.",
      about:
        "Depending on the studio's menu, your service may include soaking, exfoliation, moisturising or a gentle hand massage. The manicure can be completed with natural nails or your preferred polish colour.",
      features: [
        "Ask about available exfoliation and moisturising options.",
        "Choose a natural finish or your favourite polish shade.",
        "Explore a relaxing hand massage if offered.",
        "Mention skin sensitivities before your treatment.",
        "Enjoy a little time away from your everyday routine."
      ]
    },

    "Paraffin Manicure": {
      category: "MOISTURE-FOCUSED CARE",
      title: "Paraffin Manicure",
      description:
        "Give your hands extra attention with a paraffin-inspired manicure. This treatment may be offered as an additional hand-care experience for clients looking for warmth and a moisturising finish.",
      about:
        "A paraffin service uses warm paraffin wax as part of a hand-care routine. Suitability should be checked before treatment, especially if you have irritated skin, reduced sensation or concerns that make heat treatments unsuitable.",
      features: [
        "Confirm whether paraffin care is included in the service.",
        "Discuss your hand-care preferences with the technician.",
        "Choose a natural finish or a complementary polish shade.",
        "Check suitability before using a heat-based treatment.",
        "Follow the studio's aftercare recommendations."
      ]
    },

    "French Manicure": {
      category: "TIMELESS NAIL DESIGN",
      title: "French Manicure",
      description:
        "Discover a manicure classic with French tips. The combination of a soft base and contrasting tips creates a graceful look that works beautifully for everyday wear, weddings and formal occasions.",
      about:
        "A traditional French manicure often combines a sheer pink or nude base with white tips. For a modern twist, experiment with coloured tips, finer lines or alternative base shades while keeping the overall look elegant.",
      features: [
        "Choose classic white or colourful French tips.",
        "Adjust tip width to complement your nail length.",
        "Explore sheer pink, milky or nude bases.",
        "Try micro-French details for a contemporary look.",
        "Add a subtle shimmer for a special occasion."
      ]
    },

    "Russian-Style Manicure": {
      category: "PRECISION NAIL PREPARATION",
      title: "Russian-Style Manicure",
      description:
        "Explore a precision-focused manicure style known for a neat cuticle area and carefully applied polish. It is suited to clients who appreciate clean lines and a refined nail finish.",
      about:
        "Russian-style manicures may use specialised dry-preparation techniques. This service should be performed by a properly trained professional who follows appropriate sanitation practices and avoids aggressive cuticle work.",
      features: [
        "Discuss your nail condition and desired finish first.",
        "Ask about the technician's training and hygiene practices.",
        "Choose a natural, nude or bold polish shade.",
        "Avoid continuing if you experience pain or bleeding.",
        "Follow professional advice for nail care after the service."
      ]
    },

    "Soft Gel Full Set / Gel-X": {
      category: "NAIL EXTENSIONS",
      title: "Soft Gel Full Set / Gel-X",
      description:
        "Create a longer, beautifully shaped manicure with soft-gel extensions. This option offers a smooth canvas for classic colours, modern French tips and creative nail-art designs.",
      about:
        "Soft-gel full-cover tips are fitted and secured using a compatible gel system. The technician selects suitable sizes and shapes before finishing the extensions with your chosen colour or design.",
      features: [
        "Choose a suitable extension length for your lifestyle.",
        "Explore almond, square, oval and coffin-inspired shapes.",
        "Select nude shades, bold colours or creative nail art.",
        "Ask about maintenance intervals and professional removal.",
        "Discuss product suitability before application."
      ]
    },

    "Builder Gel / BIAB": {
      category: "NATURAL NAIL ENHANCEMENT",
      title: "Builder Gel / BIAB",
      description:
        "Discover a structured manicure with builder gel or BIAB. This service is often selected by clients who want a neat, natural-looking finish with additional structure.",
      about:
        "Builder gel products can add structure to the natural nail depending on the formula and application method. Your technician can advise whether this option suits your nail condition, preferred length and desired appearance.",
      features: [
        "Choose a natural, nude or softly coloured finish.",
        "Discuss suitable shaping and length.",
        "Ask about maintenance and refill appointments.",
        "Avoid picking or peeling the product off yourself.",
        "Follow the recommended professional removal process."
      ]
    },

    "Hard Gel Extensions": {
      category: "STRUCTURED EXTENSIONS",
      title: "Hard Gel Extensions",
      description:
        "Create a sculpted manicure with hard gel extensions. This service offers a versatile base for elegant everyday colours, statement shapes and detailed nail art.",
      about:
        "Hard gel can be used to build or extend nails, depending on the system. The application and removal process depends on the product, so your technician should explain maintenance and aftercare before the service.",
      features: [
        "Discuss your preferred extension length and shape.",
        "Choose a classic shade or a detailed design.",
        "Ask about refills and professional removal.",
        "Keep your extensions comfortable for daily activities.",
        "Report lifting, cracking or discomfort to your technician."
      ]
    },

    "Polygel Extensions": {
      category: "SCULPTED NAIL DESIGN",
      title: "Polygel Extensions",
      description:
        "Explore a beautifully sculpted nail look with polygel extensions. This versatile enhancement can be customised to create a manicure that suits your preferred shape, length and finish.",
      about:
        "Polygel is shaped and cured using the appropriate nail system. The final result depends on the product, application technique and condition of your natural nails.",
      features: [
        "Choose a practical length and preferred nail shape.",
        "Explore almond, square and coffin-inspired designs.",
        "Finish with neutral polish, vibrant colour or nail art.",
        "Ask about maintenance and suitable removal methods.",
        "Discuss your preferred design before application."
      ]
    },

    "Acrylic Extensions": {
      category: "CLASSIC NAIL EXTENSIONS",
      title: "Acrylic Extensions",
      description:
        "Make a statement with acrylic extensions that create a defined base for your favourite nail shape and design. From understated nude nails to detailed artistic finishes, the possibilities are broad.",
      about:
        "Acrylic enhancements are created using a liquid-and-powder system and shaped by a trained nail professional. Appropriate preparation, application and maintenance are important for comfortable wear.",
      features: [
        "Discuss extension length and shape with your technician.",
        "Choose solid colours, French tips or detailed nail art.",
        "Ask about maintenance and refill timing.",
        "Have extensions removed professionally.",
        "Avoid pulling or forcefully removing the product."
      ]
    },

    "Almond Extension Set": {
      category: "SIGNATURE NAIL SHAPE",
      title: "Almond Extension Set",
      description:
        "Add a graceful, elongated appearance to your manicure with almond-shaped extensions. Their tapered sides and rounded tips pair beautifully with understated colours and statement designs.",
      about:
        "The almond shape creates an elegant silhouette that can complement many manicure styles. Your technician can help select a suitable length and structure based on your natural nails and everyday activities.",
      features: [
        "Explore milky pink, nude, red and seasonal colours.",
        "Pair the shape with French tips or glazed finishes.",
        "Add delicate lines, gems or a statement accent nail.",
        "Choose a comfortable length for your daily routine.",
        "Discuss extension maintenance before your appointment."
      ]
    },

    "Coffin Extension Set": {
      category: "BOLD NAIL SHAPE",
      title: "Coffin Extension Set",
      description:
        "Create a modern, statement-making manicure with coffin-shaped extensions. Their tapered sides and flat tips provide a distinctive canvas for glossy colours, French designs and dramatic nail art.",
      about:
        "Coffin nails offer plenty of space for creative designs. The ideal length depends on your comfort, natural nail condition and daily activities, so discuss your preferences before choosing the set.",
      features: [
        "Choose a suitable short, medium or long shape.",
        "Explore French tips, chrome, ombre and solid colours.",
        "Add fine detailing for a personalised finish.",
        "Ask about maintenance and extension balance.",
        "Choose a length that works with your everyday routine."
      ]
    },

    "Nail Refills and Maintenance": {
      category: "EXTENSION MAINTENANCE",
      title: "Nail Refills and Maintenance",
      description:
        "Keep your nail enhancements looking neat with regular maintenance. A refill appointment gives your technician an opportunity to assess the growth area and the overall condition of your existing set.",
      about:
        "Maintenance depends on the enhancement system and your nail condition. Your technician may recommend a refill, repair or full removal if the product has lifted or the set is no longer suitable.",
      features: [
        "Follow the maintenance interval recommended for your nail system.",
        "Mention lifting, cracks, discomfort or changes to your nails.",
        "Refresh your existing colour or select a new design.",
        "Avoid attempting to glue lifted enhancements back on.",
        "Ask whether a refill or a new set is more appropriate."
      ]
    },

    "Safe Removal Service": {
      category: "PROFESSIONAL PRODUCT REMOVAL",
      title: "Safe Removal Service",
      description:
        "Ready for a fresh start? Professional removal helps take off nail enhancements or polish using a method suited to the product and the condition of your natural nails.",
      about:
        "Different products require different removal techniques. A trained technician can identify the enhancement type and help minimise unnecessary filing, scraping or pulling during removal.",
      features: [
        "Tell the technician which product was previously applied, if known.",
        "Ask about a natural finish or a follow-up manicure.",
        "Allow time for careful preparation and removal.",
        "Never pull or force off attached product.",
        "Discuss any nail sensitivity before the appointment."
      ]
    },

    "Creative Colour Story": {
      category: "COLOURFUL NAIL ART",
      title: "Creative Colour Story",
      description:
        "Express your personality with a playful mix of colours, finishes and creative details. Creative Colour Story is for anyone who wants a manicure that feels individual, lively and full of character.",
      about:
        "Build a coordinated palette around your favourite shades, seasonal inspiration or a special outfit. Your design can be bright and bold, softly blended or balanced with a few minimal accent nails.",
      features: [
        "Mix complementary shades or explore colour blocking.",
        "Combine compatible glossy, shimmer or special finishes.",
        "Use accent nails to balance a vibrant palette.",
        "Bring reference images to communicate your idea.",
        "Create a colour combination that feels uniquely yours."
      ]
    },

    "Minimal Lines": {
      category: "MINIMAL NAIL ART",
      title: "Minimal Lines",
      description:
        "Keep your manicure clean and contemporary with delicate lines and carefully placed details. This understated style adds personality without making the overall look feel busy.",
      about:
        "Fine curves, geometric accents and simple contrasting strokes can transform a neutral base. The pattern can be customised to your preferred colours, nail length and personal style.",
      features: [
        "Choose fine stripes, curves, dots or geometric details.",
        "Pair the design with nude, milky or pastel shades.",
        "Keep the art on one nail or repeat it across the set.",
        "Choose a glossy finish for a refined appearance.",
        "Keep the design subtle or introduce a contrasting accent."
      ]
    },

    "Chrome & Glazed": {
      category: "HIGH-SHINE NAIL ART",
      title: "Chrome & Glazed",
      description:
        "Bring a luminous, reflective finish to your manicure with chrome or glazed nail effects. This style can look soft and pearly or bold and metallic, depending on the base colour and finish.",
      about:
        "Chrome effects use specialised products and application techniques to create a reflective surface. Your technician can help choose a finish that complements the base colour and the overall look you want.",
      features: [
        "Explore pearly, silver, rose or other available effects.",
        "Pair a glazed finish with milky pink or nude polish.",
        "Choose a metallic effect for a statement manicure.",
        "Combine chrome with simple shapes or minimal art.",
        "Ask about compatible products and aftercare."
      ]
    },

    "French Tips": {
      category: "MODERN FRENCH NAIL ART",
      title: "French Tips",
      description:
        "Give a classic manicure a personal twist with French tips. From crisp white edges to colourful, angled and micro-French designs, this style can be tailored to suit your preferences.",
      about:
        "French tips add contrast while keeping the overall manicure balanced. Tip thickness, colour and shape can be adjusted to complement your nail length and the finish you have in mind.",
      features: [
        "Choose classic white, pastel or vibrant tips.",
        "Try micro-French details for a subtle finish.",
        "Explore angled, double-line or outlined tips.",
        "Pair the design with a sheer or nude base.",
        "Personalise the colour combination to match your style."
      ]
    },

    "Cat-Eye and Magnetic Effects": {
      category: "MAGNETIC NAIL ART",
      title: "Cat-Eye and Magnetic Effects",
      description:
        "Create depth and movement with cat-eye and magnetic nail effects. These designs catch the light differently as your hands move, giving your manicure a dimensional, eye-catching appearance.",
      about:
        "Magnetic nail products contain particles that can be arranged with a magnet during application. Depending on the technique, the effect may resemble a narrow beam of light, a soft glow or a celestial pattern.",
      features: [
        "Explore jewel tones, deep neutrals and shimmering colours.",
        "Choose a subtle glow or a more dramatic magnetic line.",
        "Pair the effect with simple shapes for visual impact.",
        "Try the finish on all nails or as an accent.",
        "Ask which magnetic colours and effects are available."
      ]
    },

    "Ombre and Aura Nails": {
      category: "BLENDED COLOUR ART",
      title: "Ombre and Aura Nails",
      description:
        "Soften your manicure with beautifully blended colour. Ombre and aura nails range from gentle colour transitions to glowing centre effects that create a dreamy, modern look.",
      about:
        "Ombre designs blend one shade into another, while aura-inspired designs focus on a diffused glow of colour. Both styles can be created in subtle neutrals or vivid combinations according to your preference.",
      features: [
        "Choose two complementary shades or a multi-colour palette.",
        "Try soft pink, lilac, peach or bold contrasting tones.",
        "Add a glossy finish to enhance the blended effect.",
        "Keep extra detailing minimal to let the colours stand out.",
        "Personalise the palette for your everyday look or an event."
      ]
    },

    "Marble and Abstract Art": {
      category: "ARTISTIC NAIL DESIGN",
      title: "Marble and Abstract Art",
      description:
        "Turn your manicure into a miniature work of art with marble patterns and abstract details. Flowing lines, organic shapes and balanced colours create a distinctive finish.",
      about:
        "Marble designs can resemble natural stone, while abstract nail art uses free-flowing shapes and unexpected combinations. Each nail can feature a different detail or follow one coordinated design.",
      features: [
        "Explore neutral marble, colourful swirls or abstract shapes.",
        "Choose a restrained palette or expressive colour combinations.",
        "Add metallic accents where suitable for your design.",
        "Use accent nails to highlight the overall pattern.",
        "Share inspiration images to help plan the look."
      ]
    },

    "Seasonal and Occasion Nail Art": {
      category: "CELEBRATION NAILS",
      title: "Seasonal and Occasion Nail Art",
      description:
        "Celebrate a season, event or special moment with nail art designed around the occasion. From festive details to wedding-ready elegance, your manicure can be as subtle or expressive as you prefer.",
      about:
        "Your design can draw inspiration from a colour palette, outfit, holiday or event theme. A few well-placed details can create a coordinated finish without overwhelming the manicure.",
      features: [
        "Choose a wedding, festival, holiday or party theme.",
        "Coordinate colours with your outfit or accessories.",
        "Add shimmer, fine art or accent nails where suitable.",
        "Bring reference images to personalise your design.",
        "Discuss the time needed for detailed artwork."
      ]
    },

    "Tier 1 - Minimalist Chic": {
      category: "NAIL ART · TIER 1",
      title: "Tier 1 - Minimalist Chic",
      description:
        "Discover subtle nail art with a polished, minimalist feel. Tier 1 is ideal for clients who want a little design detail while keeping their manicure versatile and easy to style.",
      about:
        "This tier focuses on simple accents, delicate lines, tiny dots and restrained colour combinations. The result is neat and understated, making it a natural choice for everyday wear.",
      features: [
        "Choose one or two simple design elements.",
        "Pair neutral bases with subtle accent colours.",
        "Keep the pattern clean and balanced.",
        "Explore delicate lines, tiny dots or simple shapes.",
        "Ideal for clients who prefer understated nail art."
      ]
    },

    "Tier 2 - Trendy & Bold": {
      category: "NAIL ART · TIER 2",
      title: "Tier 2 - Trendy & Bold",
      description:
        "Make your manicure stand out with expressive colours and modern nail-art details. Tier 2 is designed for clients who enjoy current trends and want more personality than a simple polish finish.",
      about:
        "This tier can include colour blocking, contrasting tips, chrome accents, layered colours and playful designs. The final combination can be adapted to your preferred palette and nail shape.",
      features: [
        "Explore bold colour combinations and modern patterns.",
        "Add chrome, shimmer or contrasting tips where available.",
        "Choose a coordinated design across the set.",
        "Highlight selected nails with statement details.",
        "Bring inspiration images to communicate your preferred style."
      ]
    },

    "Tier 3 - Intricate & Statement": {
      category: "NAIL ART · TIER 3",
      title: "Tier 3 - Intricate & Statement",
      description:
        "Explore detailed nail art created to draw attention. Tier 3 is suited to clients who love expressive patterns, carefully layered designs and distinctive finishing touches.",
      about:
        "Intricate designs may combine fine lines, layered colours, decorative accents and multiple techniques. The design plan can be tailored to your reference images, nail length and the studio's available options.",
      features: [
        "Explore detailed patterns and layered design elements.",
        "Combine colours and finishes for greater visual depth.",
        "Add statement accents to selected nails.",
        "Discuss the design and appointment time in advance.",
        "Personalise the artwork to suit your chosen theme."
      ]
    },

    "Tier 4 - Extreme & Freestyle Art": {
      category: "NAIL ART · TIER 4",
      title: "Tier 4 - Extreme & Freestyle Art",
      description:
        "Push creative boundaries with expressive freestyle nail art. Tier 4 is designed for clients who want imaginative designs, striking colour combinations and a manicure that feels like wearable art.",
      about:
        "Depending on the studio's capabilities, this tier may combine multiple colours, detailed patterns, textures and decorative elements. The final design should be planned with your technician so the desired result suits your nails and appointment time.",
      features: [
        "Bring bold references or explore a creative concept together.",
        "Combine patterns, colours and available special effects.",
        "Discuss decorative elements and practical nail length.",
        "Allow additional appointment time for complex designs.",
        "Confirm product availability and pricing before booking."
      ]
    },

    "Nail Shaping and Filing": {
      category: "NAIL PREPARATION",
      title: "Nail Shaping and Filing",
      description:
        "Give your manicure a neat foundation with nail shaping and filing. The right shape can complement your hands and prepare your nails for a natural finish, polish or another nail service.",
      about:
        "Nail shaping focuses on creating an even outline and suitable length. Your technician can help you choose a shape based on your natural nails, personal preferences and everyday activities.",
      features: [
        "Explore oval, round, square and soft-square shapes.",
        "Discuss a suitable length for your daily routine.",
        "Prepare nails for polish or another service where appropriate.",
        "Avoid excessive filing or aggressive shaping.",
        "Ask for guidance on maintaining your preferred shape."
      ]
    },

    "Cuticle Care": {
      category: "NAIL CARE ESSENTIALS",
      title: "Cuticle Care",
      description:
        "Complete your nail-care routine with attention to the skin around your nails. Well-cared-for hands can help create a neat, polished appearance before or between manicure appointments.",
      about:
        "Cuticle care should be gentle and appropriate for your skin and nail condition. Your technician can explain the preparation offered by the studio and help avoid unnecessary cutting or irritation.",
      features: [
        "Discuss your preferred cuticle-care approach.",
        "Keep the surrounding skin moisturised.",
        "Avoid cutting or pushing cuticles aggressively at home.",
        "Mention irritation or sensitivity before treatment.",
        "Ask about suitable aftercare products."
      ]
    },

    "Nail Repair": {
      category: "NAIL CARE SOLUTIONS",
      title: "Nail Repair",
      description:
        "Give a damaged or broken nail professional attention with a repair service. The appropriate approach depends on the type of damage, your natural nail condition and whether enhancements are present.",
      about:
        "A technician can assess whether a cosmetic repair is suitable or whether the nail should be kept short and protected while it grows. Painful, swollen or infected-looking nails may need medical attention instead of a cosmetic service.",
      features: [
        "Explain how the nail was damaged and when it happened.",
        "Allow the technician to assess the nail before repair.",
        "Discuss suitable shaping and protective options.",
        "Avoid applying products over injured or infected skin.",
        "Ask how to protect the nail while it grows."
      ]
    },

    "Polish Removal": {
      category: "GENTLE NAIL PREPARATION",
      title: "Polish Removal",
      description:
        "Prepare for a fresh manicure with appropriate polish removal. Removing the existing colour carefully helps create a clean starting point for your next nail look.",
      about:
        "The removal method depends on whether you are wearing regular polish, gel polish or another enhancement product. Using the correct technique helps reduce unnecessary scraping, filing and damage.",
      features: [
        "Tell the technician which type of polish or product you have.",
        "Choose a new colour or a natural finish afterward.",
        "Avoid picking or peeling polish from your nails.",
        "Ask about suitable preparation for your next service.",
        "Follow professional advice if your nails feel sensitive."
      ]
    },

    "Hand Care and Hydration": {
      category: "HAND CARE",
      title: "Hand Care and Hydration",
      description:
        "Give your hands a little extra attention with a moisturising hand-care routine. This service complements a manicure by focusing on the appearance and comfort of the skin around your nails.",
      about:
        "Depending on the studio's menu, hand care may include moisturising products, gentle exfoliation or a relaxing massage. The products used should suit your skin and any sensitivities you mention.",
      features: [
        "Discuss moisturising options with the studio.",
        "Mention sensitive skin or product allergies beforehand.",
        "Pair hand care with a natural or polished nail finish.",
        "Maintain hydration between appointments.",
        "Ask which home-care products are suitable for you."
      ]
    },

    "Nail Strengthening Treatment": {
      category: "NAIL CARE AND SUPPORT",
      title: "Nail Strengthening Treatment",
      description:
        "Explore a nail-care treatment designed to support the appearance and care of your natural nails. The right approach depends on your nail condition and the products offered by the studio.",
      about:
        "Strengthening products can provide different cosmetic benefits depending on their formulation. They are not a guaranteed treatment for every nail concern, so discuss persistent splitting, unusual changes or discomfort with an appropriate professional.",
      features: [
        "Discuss your nail-care goals before selecting a treatment.",
        "Ask about the product and its intended use.",
        "Follow the recommended application and removal instructions.",
        "Avoid excessive filing and forceful product removal.",
        "Seek professional advice for persistent nail concerns."
      ]
    },

    "Press On Nails": {
      category: "CUSTOM NAIL STYLE",
      title: "Press On Nails",
      description:
        "Enjoy a flexible way to explore beautiful nail designs with press-on nails. From understated everyday shades to statement artwork, press-ons offer a variety of looks to suit different occasions.",
      about:
        "Press-on nails come in different shapes, lengths, designs and application systems. Proper sizing, preparation and removal are important for comfort and to minimise stress on your natural nails.",
      features: [
        "Explore almond, square, oval and other available shapes.",
        "Choose from nude finishes, French tips and creative designs.",
        "Discuss sizing and application options before purchase or fitting.",
        "Follow the product's instructions for application and removal.",
        "Avoid forcing off press-ons that remain firmly attached."
      ]
    }
  };

  // ==========================================
  // DEFAULT CONTENT
  // ==========================================

  const defaultService = {
    category: "NAIL INSPIRATION",
    title: serviceName,
    description:
      "Discover a nail look that reflects your personality and complements your style. Explore the design possibilities and personalise your next appointment with Nail Pigment.",
    about:
      "This look can be customised to your preferences, including suitable colours, shapes, finishes and design details. Discuss the available options with your technician before your appointment.",
    features: [
      "Choose colours that complement your personal style.",
      "Discuss your preferred nail shape and length.",
      "Explore suitable finishes and design details.",
      "Ask about maintenance and aftercare.",
      "Confirm service options and pricing before booking."
    ]
  };

  const service = serviceData[serviceName] || defaultService;

  // ==========================================
  // POPULATE PAGE CONTENT
  // ==========================================

  if (titleElement) {
    titleElement.textContent = service.title;
  }

  if (categoryElement) {
    categoryElement.textContent = service.category;
  }

  if (descriptionElement) {
    descriptionElement.textContent = service.description;
  }

  if (aboutElement) {
    aboutElement.textContent = service.about;
  }

  if (featuresElement) {
    featuresElement.replaceChildren();

    service.features.forEach((feature) => {
      const li = document.createElement("li");
      li.textContent = feature;
      featuresElement.appendChild(li);
    });
  }

  // ==========================================
  // IMAGE MATCHING — FIXED
  // ==========================================

  function normalizeServiceName(name) {
    return (name || "")
      .replace(/\+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

  const currentService = normalizeServiceName(serviceName);

  // Tier images use direct URLs so matching does not depend
  // on the hidden HTML image library.

  const tierImages = {
    "minimalist chic":
      "https://i.ibb.co/yFjBDZQS/Screenshot-2026-10-22-131236.png",

    "tier 1 - minimalist chic":
      "https://i.ibb.co/yFjBDZQS/Screenshot-2026-10-22-131236.png",

    "trendy & bold":
      "https://i.ibb.co/fdqn0RjC/Screenshot-2026-10-22-131420.png",

    "tier 2 - trendy & bold":
      "https://i.ibb.co/fdqn0RjC/Screenshot-2026-10-22-131420.png",

    "intricate & statement":
      "https://i.ibb.co/39PsSd6q/Screenshot-2026-10-22-152039.png",

    "tier 3 - intricate & statement":
      "https://i.ibb.co/39PsSd6q/Screenshot-2026-10-22-152039.png",

    "extreme & freestyle art":
      "https://i.ibb.co/xSC9d9L4/Screenshot-2026-10-22-152243.png",

    "tier 4 - extreme & freestyle art":
      "https://i.ibb.co/xSC9d9L4/Screenshot-2026-10-22-152243.png"
  };

  const selectedTierImage = tierImages[currentService];

  if (imageElement && selectedTierImage) {
    imageElement.onload = () => {
      console.log("Tier image loaded successfully:", currentService);
    };

    imageElement.onerror = () => {
      console.error("Tier image failed to load:", imageElement.src);
    };

    imageElement.src = selectedTierImage;
    imageElement.alt = serviceName;
  } else if (imageElement) {
    const matchedImage = imageLibrary.find(
      (img) =>
        normalizeServiceName(img.dataset.service) === currentService
    );

    if (matchedImage) {
      imageElement.src = matchedImage.src;
      imageElement.alt = matchedImage.alt || serviceName;
    } else {
      console.error("Service image not found:", serviceName);
    }
  }

  // ==========================================
  // BOOKING LINK
  // ==========================================

  if (bookElement) {
    bookElement.href =
      "contact.html?service=" + encodeURIComponent(serviceName);
  }
  /* ==========================================
   NAIL PIGMENT — RESTORE SERVICES POSITION
========================================== */

(() => {
  const STORAGE_KEY = "npServicesReturnState";

  // Save the position and active filter before leaving Services
  if (document.body.dataset.page === "services") {
    document.addEventListener("click", (event) => {
      const link = event.target.closest(
        '.np-look-overlay a[href*="service-details.html"]'
      );

      if (!link) return;

      const activeFilter =
        document.querySelector(".np-filter.active")?.dataset.filter || "all";

      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          scrollY: window.scrollY,
          filter: activeFilter
        })
      );
    });
  }

  // Restore the position after Services has loaded again
  if (document.body.dataset.page === "services") {
    const savedState = sessionStorage.getItem(STORAGE_KEY);

    if (savedState) {
      try {
        const state = JSON.parse(savedState);

        window.addEventListener("load", () => {
          // Restore the previously selected category
          if (state.filter && state.filter !== "all") {
            const filterButton = document.querySelector(
              `.np-filter[data-filter="${state.filter}"]`
            );

            if (filterButton) {
              filterButton.click();
            }
          }

          // Restore scroll after layout and images settle
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              window.scrollTo({
                top: state.scrollY || 0,
                behavior: "instant"
              });
            });
          });

          sessionStorage.removeItem(STORAGE_KEY);
        }, { once: true });
      } catch (error) {
        console.error("Services position restoration failed:", error);
      }
    }
  }
})();
})();