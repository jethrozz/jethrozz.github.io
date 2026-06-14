export interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  date: Date;
  imageUrl: string;
  readTime: number;
}

export interface WorkItem {
  title: string;
  description: string;
  content: string;
  slug: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

export const blogPosts: Record<string, BlogPost> = {
  "evolution-pixel-art-web-design": {
    title: "The Evolution of Pixel Art in Modern Web Design",
    excerpt: "Exploring how pixel art has found its place in contemporary web design and why it remains a popular stylistic choice.",
    content: `Pixel art has come a long way from its origins in early video games. What was once a technical limitation has evolved into a deliberate artistic choice that brings charm and nostalgia to modern web designs.

The resurgence of pixel art in contemporary web design isn't just about nostalgia – it's about making a bold statement. In an era of high-resolution displays and photorealistic graphics, pixel art stands out by embracing its digital roots.

Modern pixel art in web design often combines retro aesthetics with contemporary design principles. This fusion creates unique experiences that feel both familiar and fresh.

Key aspects of modern pixel art in web design:
1. Responsive Scaling: Using appropriate scaling techniques to keep edges crisp.
2. Color Theory Application: Utilizing restricted color palettes for maximum visual impact.
3. Animation Integration: Creating simple, looping animations that do not degrade browser performance.
4. User Interface Enhancement: Leveraging stylized icons and container borders.

The future of pixel art in web design looks promising as more designers discover ways to incorporate this style into modern projects.`,
    slug: "evolution-pixel-art-web-design",
    date: new Date("2023-04-15"),
    imageUrl: "/images/blog/evolution-pixel-art.webp",
    readTime: 7
  },
  "responsive-pixel-art-designs": {
    title: "Creating Responsive Pixel Art Designs",
    excerpt: "Learn the techniques to maintain pixel art aesthetics across different screen sizes while ensuring your designs remain responsive.",
    content: `Creating responsive pixel art designs requires careful consideration of scaling, resolution, and display sizes. This guide explores techniques for maintaining pixel art aesthetics across different devices.

The challenge lies in preserving the crisp, precise nature of pixel art while ensuring it looks good on various screen sizes. We'll explore different approaches and best practices.

Key considerations for responsive pixel art:
1. Scaling Algorithms: Using CSS properties like image-rendering: pixelated to avoid blur.
2. Resolution Independence: Designing assets with grid-aligned dimensions.
3. Breakpoint Management: Adapting layouts without distorting the pixel aspect ratio.
4. Performance Optimization: Reducing asset file size for faster mobile loading times.

By following these guidelines, you can create pixel art designs that maintain their charm across all devices.`,
    slug: "responsive-pixel-art-designs",
    date: new Date("2023-05-22"),
    imageUrl: "/images/blog/responsive-pixel-art.webp",
    readTime: 5
  },
  "psychology-color-pixel-art": {
    title: "The Psychology of Color in Pixel Art",
    excerpt: "How limited color palettes can evoke powerful emotions and create memorable experiences in pixel art designs.",
    content: `Color is one of the most powerful tools in a pixel artist's toolkit. When working with limited resolutions, each color choice carries immense weight and directly influences how the user perceives the design.

In early game development, technical restrictions limited the color count. Today, artists deliberately restrict their palettes to create a unified aesthetic and evoke specific emotional responses.

Key color palette strategies:
1. Complementary Contrast: Using opposite colors to highlight interactive elements.
2. Monochromatic Harmony: Creating mood and atmosphere using shades of a single hue.
3. Warm vs Cool Tones: Establishing clear depth and lighting gradients.

Understanding the psychological impact of color allows designers to craft more immersive and memorable user interfaces.`,
    slug: "psychology-color-pixel-art",
    date: new Date("2023-06-10"),
    imageUrl: "/images/blog/evolution-pixel-art.webp",
    readTime: 6
  },
  "pixel-art-animation-techniques": {
    title: "Pixel Art Animation Techniques for Web",
    excerpt: "A deep dive into creating engaging pixel art animations that enhance user experience without affecting performance.",
    content: `Adding animation to a pixel art website can bring the interface to life, making it feel dynamic and interactive. However, animating pixel art requires a different approach than traditional high-res animations.

To maintain the retro aesthetic, animations should be stylized and keyframed deliberately rather than being perfectly smooth.

Top techniques for web pixel animation:
1. Frame-by-Frame Sprite sheets: The classic gaming approach.
2. CSS Keyframe Steps: Using the steps() timing function in CSS to jump between frames without interpolation.
3. Micro-interactions: Adding subtle reactions to hover and active states on buttons.

Implementing these animations efficiently ensures a high-performance experience on all modern web browsers.`,
    slug: "pixel-art-animation-techniques",
    date: new Date("2023-07-05"),
    imageUrl: "/images/blog/responsive-pixel-art.webp",
    readTime: 8
  },
  "accessibility-pixel-art-websites": {
    title: "Accessibility in Pixel Art Websites",
    excerpt: "Ensuring your pixel art designs remain accessible to all users while maintaining their unique aesthetic appeal.",
    content: `A common critique of highly stylized websites is that they sacrifice accessibility for aesthetics. For pixel art designs, this risk is real, but it can be avoided with thoughtful planning.

Accessibility doesn't mean watering down your style; it means implementing your design in a way that remains usable for everyone.

Accessibility checklist for pixel art:
1. High Contrast: Ensuring readability of text against themed backgrounds.
2. Readable Fonts: While headings can use stylized pixel fonts, body text should use highly readable alternatives.
3. Keyboard Navigation: Making sure all custom buttons and elements are focusable.
4. Screen Reader Support: Providing descriptive alt tags for all decorative pixel graphics.

Creating an inclusive web experience is a standard that every designer should prioritize.`,
    slug: "accessibility-pixel-art-websites",
    date: new Date("2023-08-14"),
    imageUrl: "/images/blog/evolution-pixel-art.webp",
    readTime: 6
  },
  "8bit-to-modern-pixel-art": {
    title: "From 8-bit to Modern: The Journey of Pixel Art",
    excerpt: "Tracing the evolution of pixel art from technical necessity to beloved artistic style in digital design.",
    content: `Pixel art was born out of hardware constraints. In the era of 8-bit and 16-bit systems, pixels were the only way to construct digital graphics. 

As technology advanced, photorealistic rendering became the standard, and pixel art was temporarily sidelined. However, in recent years, it has experienced a massive renaissance.

Why pixel art continues to thrive:
1. Artistic Expression: It is now recognized as a distinct art form rather than a legacy format.
2. Nostalgic Connection: It triggers positive emotional associations with classic gaming.
3. Clean Aesthetics: The blocky, grid-based style complements modern grid-based web layouts perfectly.

The journey of pixel art shows that great design styles never truly die – they adapt.`,
    slug: "8bit-to-modern-pixel-art",
    date: new Date("2023-09-01"),
    imageUrl: "/images/blog/responsive-pixel-art.webp",
    readTime: 9
  }
};

export const works: Record<string, WorkItem> = {
  "pixel-arcade": {
    title: "Pixel Arcade",
    description: "A retro-inspired game collection with modern gameplay mechanics.",
    content: `Pixel Arcade is a collection of classic arcade games reimagined with modern gameplay mechanics while maintaining the charm of pixel art aesthetics.

The project combines nostalgic visual elements with contemporary game design principles to create an engaging gaming experience that appeals to both retro gaming enthusiasts and modern players.

Key Features:
1. Multiple Classic Games: A curated selection of retro game modes.
2. Modern Controls: Fluid response optimized for keyboard, mouse, and gamepads.
3. Responsive Design: Seamless layout scaling across different viewport ratios.
4. Cross-platform Compatibility: Fully functional on both desktop and mobile web browsers.
5. Local Multiplayer Support: Shared screen functionality for cooperative play.

Technical Stack:
- React for UI component structure
- Canvas API for high-performance game loops and rendering
- Web Audio API for custom sound effects and retro chiptunes
- Local Storage for persistent high scores
- Custom input handling for touch screens`,
    slug: "pixel-arcade",
    imageUrl: "/images/works/pixel-arcade.webp",
    tags: ["Game Design", "Pixel Art", "JavaScript"],
    link: "https://github.com"
  },
  "burger-bytes": {
    title: "Burger Bytes",
    description: "A fast-food ordering system with a delightful pixel art interface.",
    content: `Burger Bytes is a modern food ordering platform that stands out with its unique pixel art interface, making the ordering process both fun and efficient.

The project demonstrates how retro-style visuals can enhance user experience in practical, real-world commerce applications, creating memorable interactions for customers.

Key Features:
1. Interactive Menu: An animated menu showcasing pixelated food items.
2. Real-time Order Tracking: A game-like progress map showing the order state.
3. Custom Order Builder: Interactive burger-stacking animation based on selected toppings.
4. Loyalty Program: A retro-themed XP reward system for returning users.
5. Mobile-first Design: Optimized layouts for quick ordering on smartphones.

Technical Stack:
- Next.js for server-side rendering and frontend routing
- Supabase for secure backend database and real-time order states
- Stripe API integration for secure online payments
- PWA configurations for installing the application on mobile home screens`,
    slug: "burger-bytes",
    imageUrl: "/images/works/burger-bytes.webp",
    tags: ["UI/UX", "React", "Ecommerce"],
    link: "https://github.com"
  },
  "pixelfolio": {
    title: "PixelFolio",
    description: "A portfolio template for digital artists featuring a pixel art aesthetic.",
    content: `PixelFolio is a ready-to-use website template specifically crafted for pixel artists, game developers, and designers who want a site that matches their creative work.

The theme emphasizes visual art, offering expansive galleries with pixelated border details and responsive grids.

Key Features:
1. Drag-and-Drop Gallery: Easily organize art boards and portfolio items.
2. High-DPI Support: Ensures pixel art remains crisp on retina screens.
3. Dark and Light Mode: Pre-configured palettes for comfortable viewing.
4. Blog Integration: Fully functional markdown blog templates.

Technical Stack:
- Next.js and Tailwind CSS for styling
- MDX for writing blog articles and managing metadata
- Framer Motion for retro grid loading transition effects`,
    slug: "pixelfolio",
    imageUrl: "/images/works/pixel-arcade.webp",
    tags: ["Web Design", "Next.js", "Portfolio"],
    link: "https://github.com"
  },
  "retrochat": {
    title: "RetroChat",
    description: "A messaging application with a nostalgic 90s computer interface.",
    content: `RetroChat takes users back to the early days of personal computing, providing a fully functional real-time chat client inside a retro operating system simulation.

The client features pixel-art windows, nostalgic terminal windows, and retro sound effects.

Key Features:
1. Live Room Chat: Multiple public channels and private messaging.
2. Operating System UI: Drag-and-drop windows, custom pixelated icons, and taskbar.
3. Custom Commands: Retro terminal commands to customize text styling and sound.
4. Sound FX: Nostalgic dial-up and click sounds.

Technical Stack:
- React for UI controls and window management
- WebSockets for lightweight, real-time message delivery
- Tailwind CSS custom class extensions for CRT scanline effects`,
    slug: "retrochat",
    imageUrl: "/images/works/burger-bytes.webp",
    tags: ["WebSockets", "UI Design", "React"],
    link: "https://github.com"
  },
  "pixelweather": {
    title: "PixelWeather",
    description: "A weather application that displays forecast data with pixel art illustrations.",
    content: `PixelWeather is a weather forecast service that trades modern flat interfaces for dynamic, animated pixel art illustrations representing the current weather state.

The application automatically checks geographic locations to render matching pixel backgrounds.

Key Features:
1. Dynamic Backgrounds: Renders animated pixel rain, snow, sun, and thunderstorms.
2. Hourly Forecast: Comprehensive data presented in clean pixelated bar charts.
3. Location Search: Worldwide city weather lookup.
4. Temperature Units: Easy toggling between Celsius and Fahrenheit.

Technical Stack:
- React combined with third-party weather API integrations
- Custom SVG animations styling rain and cloud movements
- Tailwind CSS configuration for responsive grids`,
    slug: "pixelweather",
    imageUrl: "/images/works/pixel-arcade.webp",
    tags: ["API Integration", "Weather", "Pixel Art"],
    link: "https://github.com"
  },
  "bitblogger": {
    title: "BitBlogger",
    description: "A minimalist blogging platform with pixelated visual elements.",
    content: `BitBlogger is a platform for writers who appreciate a retro look. It streamlines the writing process by stripping away complex formatting options, letting content take center stage.

The blocky layout ensures high readability while maintaining a retro gaming style.

Key Features:
1. Markdown Editing: Real-time preview with custom style output.
2. Clean Layouts: Readability-focused line-widths and font scaling.
3. Light Weight: Page size under 50kb for instantaneous loads.
4. RSS Feed Support: Automated XML feed generation for subscribers.

Technical Stack:
- Next.js static site generation (SSG)
- Markdown parser libraries and custom CSS styling
- TypeScript validation for post attributes`,
    slug: "bitblogger",
    imageUrl: "/images/works/burger-bytes.webp",
    tags: ["CMS", "Content Creation", "Typescript"],
    link: "https://github.com"
  }
};
