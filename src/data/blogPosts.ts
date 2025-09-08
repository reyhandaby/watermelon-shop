// Blog posts data

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    category: string;
    tags: string[];
    image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'health-benefits-watermelon',
    title: 'The Health Benefits of Watermelon',
    excerpt: 'Discover the amazing health benefits of watermelon and why you should include it in your diet.',
    content: 'Watermelon is not just a delicious summer fruit, but it also packs a powerful nutritional punch. It\'s rich in vitamins A and C, as well as lycopene, which is known for its antioxidant properties. Regular consumption of watermelon can help improve heart health, reduce inflammation, and even boost your immune system. The high water content also makes it excellent for hydration during hot summer months.',
    author: 'Dr. Sarah Johnson',
    date: '2023-06-15',
    category: 'Health',
    tags: ['watermelon', 'health', 'nutrition', 'diet'],
    image: '/images/blog/watermelon-health.jpg.svg',
  },
  {
    id: 'choose-perfect-watermelon',
    title: 'How to Choose the Perfect Watermelon',
    excerpt: 'Learn the secrets to selecting the juiciest and sweetest watermelon every time you shop.',
    content: 'Selecting the perfect watermelon can be tricky, but there are several indicators that can help. Look for a watermelon with a deep, hollow sound when tapped, indicating ripeness. The underside should have a creamy yellow patch where it sat on the ground ripening. A dull, not shiny, exterior and uniform shape are also good signs. Weight is important too - a ripe watermelon should feel heavy for its size, indicating high water content and juiciness.',
    author: 'Michael Chen',
    date: '2023-05-28',
    category: 'Tips',
    tags: ['watermelon', 'shopping', 'tips', 'selection'],
    image: '/images/blog/watermelon-selection.jpg.svg',
  },
  {
    id: 'refreshing-watermelon-recipes',
    title: '10 Refreshing Watermelon Recipes for Summer',
    excerpt: 'Beat the heat with these delicious watermelon recipes that are perfect for summer gatherings.',
    content: 'Watermelon is versatile beyond just eating it fresh. Try making a watermelon feta salad with mint for a savory-sweet combination, or blend it into a refreshing smoothie. Watermelon gazpacho offers a unique twist on the classic soup, while grilled watermelon steaks can be a surprising addition to your barbecue. Don\'t forget watermelon popsicles, sorbet, or even watermelon agua fresca for cooling beverages on hot days.',
    author: 'Emma Rodriguez',
    date: '2023-07-03',
    category: 'Recipes',
    tags: ['watermelon', 'recipes', 'summer', 'cooking'],
    image: '/images/blog/watermelon-recipes.jpg.svg',
  },
  {
    id: 'watermelon-farming-guide',
    title: 'Watermelon Farming: A Comprehensive Guide',
    excerpt: 'Everything you need to know about growing watermelons, from planting to harvest.',
    content: 'Successful watermelon farming starts with selecting the right variety for your climate and soil conditions. Watermelons need full sun, well-draining soil, and consistent watering. Plant seeds or seedlings after all danger of frost has passed, and the soil has warmed to at least 70°F. Regular fertilization, pest management, and proper spacing are crucial for healthy growth. Harvest when the tendril nearest to the fruit stem turns brown and dry, and the bottom spot turns from white to cream or yellow.',
    author: 'John Williams',
    date: '2023-04-12',
    category: 'Farming',
    tags: ['watermelon', 'farming', 'agriculture', 'growing'],
    image: '/images/blog/watermelon-farming.jpg.svg',
  },
  {
    id: 'cultural-significance-watermelon',
    title: 'The Cultural Significance of Watermelon Around the World',
    excerpt: 'Explore how different cultures celebrate and incorporate watermelon in their traditions.',
    content: 'Watermelon holds special significance in many cultures worldwide. In China, it symbolizes good luck and prosperity, often given as gifts during the summer. In Egypt, watermelon seeds were found in King Tutankhamun\'s tomb, showing its importance in ancient times. In the Southern United States, watermelon festivals celebrate the harvest season, while in Japan, square watermelons are grown as luxury gifts. The fruit\'s prominence in art, literature, and cultural celebrations demonstrates its global impact beyond just being a refreshing treat.',
    author: 'Priya Patel',
    date: '2023-08-05',
    category: 'Culture',
    tags: ['watermelon', 'culture', 'traditions', 'global'],
    image: '/images/blog/watermelon-culture.jpg.svg',
  },
  {
    id: 'sustainable-watermelon-production',
    title: 'Sustainable Watermelon Production: Challenges and Solutions',
    excerpt: 'Learn about the environmental impact of watermelon production and sustainable practices.',
    content: 'Sustainable watermelon production faces challenges including water usage, pest management, and transportation emissions. Innovative solutions include drip irrigation systems that reduce water consumption by up to 60%, integrated pest management to minimize chemical use, and local distribution networks to reduce carbon footprints. Some farmers are also implementing biodegradable mulch films and crop rotation to maintain soil health. These practices not only benefit the environment but can also improve fruit quality and farm profitability in the long term.',
    author: 'Dr. Robert Green',
    date: '2023-09-18',
    category: 'Sustainability',
    tags: ['watermelon', 'sustainability', 'environment', 'farming'],
    image: '/images/blog/watermelon-sustainability.jpg.svg',
  },
];

export default blogPosts;