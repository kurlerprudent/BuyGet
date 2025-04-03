"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type NewsEvent = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: 'news' | 'event';
};

const newsEventsData: NewsEvent[] = [
  {
    id: 1,
    title: "BuyGet Launches New Product",
    excerpt: "Our latest product is setting a new industry standard.",
    date: "2025-03-20",
    imageUrl: "/assets/product-launch.jpg",
    category: "news",
  },
  {
    id: 2,
    title: "Annual Tech Conference 2025",
    excerpt: "Join us for an exciting event with industry leaders.",
    date: "2025-04-10",
    imageUrl: "/assets/featured-news.jpg",
    category: "event",
  },
  {
    id: 3,
    title: "New Partnership Announcement",
    excerpt: "We are excited to announce a strategic partnership with XYZ Corp.",
    date: "2025-03-25",
    imageUrl: "/assets/partnership.jpg",
    category: "news",
  },
  {
    id: 4,
    title: "Developer Meetup",
    excerpt: "Connect with fellow tech enthusiasts at our upcoming meetup.",
    date: "2025-04-15",
    imageUrl: "/assets/meetup.jpg",
    category: "event",
  },
];

const NewsEventsPage = () => {
  const [filter, setFilter] = useState<'all' | 'news' | 'event'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = newsEventsData.filter(item => 
    (filter === 'all' || item.category === filter) &&
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      

      {/* Featured Section */}
      <section className="relative h-96 border-b border-gray-200">
        <Image
          src="/assets/featured-news1.jpg"
          alt="Featured Update"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50">
          <div className="container mx-auto px-4 h-full flex items-end pb-12">
            <div className="max-w-3xl">
              <span className="text-pink-400 font-medium mb-2">FEATURED EVENT</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">BuyGet Innovate 2025 Conference</h2>
              <div className="flex gap-4">
                <Link href="/form">
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg transition-all">
                    Register Now
                  </button>
                </Link>
                <button className="border border-gray-600 hover:border-pink-500 text-gray-600 hover:text-pink-500 px-6 py-3 rounded-lg transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">
          <div className="flex gap-2">
            {(['all', 'news', 'event'] as const).map(type => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filter === type ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search updates..."
            className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg w-full md:w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredData.map(item => (
            <article 
              key={item.id}
              className="bg-gray-100 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 group border border-gray-200"
            >
              <div className="relative h-48">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:opacity-80 transition-opacity"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-pink-400 text-sm font-medium">{item.category.toUpperCase()}</span>
                  <time className="text-sm text-gray-600">{new Date(item.date).toLocaleDateString()}</time>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 line-clamp-2 mb-4">{item.excerpt}</p>
                <button className="text-pink-500 hover:text-pink-600 flex items-center gap-2">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsEventsPage;
