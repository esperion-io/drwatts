import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Instagram, ExternalLink } from 'lucide-react';

interface InstagramPost {
  id: string;
  media_url: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  caption?: string;
  permalink: string;
  timestamp: string;
}

interface InstagramFeedProps {
  username: string;
  className?: string;
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({ username, className = '' }) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock data for demonstration (in a real implementation, you'd fetch from Instagram Basic Display API)
  const mockPosts: InstagramPost[] = [
    {
      id: '1',
      media_url: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20electrician%20installing%20LED%20lights%20in%20modern%20Auckland%20home%20interior%20bright%20clean%20workspace&image_size=square',
      media_type: 'IMAGE',
      caption: 'Just completed a beautiful LED lighting installation in this Auckland home! ✨ Energy-efficient and stunning results. #LEDLighting #AucklandElectrician #DrWattsElectrical',
      permalink: 'https://instagram.com/p/example1',
      timestamp: '2024-01-15T10:30:00Z'
    },
    {
      id: '2',
      media_url: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20electrical%20switchboard%20upgrade%20installation%20professional%20work%20safety%20equipment&image_size=square',
      media_type: 'IMAGE',
      caption: 'Switchboard upgrade completed! 🔧 Ensuring your home\'s electrical safety with the latest technology. #SwitchboardUpgrade #ElectricalSafety #Auckland',
      permalink: 'https://instagram.com/p/example2',
      timestamp: '2024-01-12T14:20:00Z'
    },
    {
      id: '3',
      media_url: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=electrician%20team%20working%20on%20commercial%20electrical%20installation%20professional%20uniforms%20safety%20gear&image_size=square',
      media_type: 'IMAGE',
      caption: 'Our team hard at work on a commercial project! 👷‍♂️ Professional electrical services you can trust. #TeamWork #CommercialElectrical #ProfessionalService',
      permalink: 'https://instagram.com/p/example3',
      timestamp: '2024-01-10T09:15:00Z'
    },
    {
      id: '4',
      media_url: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=smart%20home%20automation%20system%20installation%20modern%20control%20panel%20technology&image_size=square',
      media_type: 'IMAGE',
      caption: 'Smart home automation installation complete! 🏠📱 Control your home\'s lighting and power from anywhere. #SmartHome #HomeAutomation #ModernLiving',
      permalink: 'https://instagram.com/p/example4',
      timestamp: '2024-01-08T16:45:00Z'
    },
    {
      id: '5',
      media_url: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=electrical%20safety%20inspection%20professional%20electrician%20testing%20equipment%20residential%20home&image_size=square',
      media_type: 'IMAGE',
      caption: 'Safety first! 🛡️ Regular electrical inspections keep your family safe. Book your safety check today! #ElectricalSafety #SafetyFirst #HomeInspection',
      permalink: 'https://instagram.com/p/example5',
      timestamp: '2024-01-05T11:30:00Z'
    },
    {
      id: '6',
      media_url: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=outdoor%20electrical%20installation%20garden%20lighting%20pathway%20lights%20Auckland%20home&image_size=square',
      media_type: 'IMAGE',
      caption: 'Beautiful outdoor lighting installation! 🌟 Transform your outdoor space with professional electrical work. #OutdoorLighting #GardenLights #AucklandHomes',
      permalink: 'https://instagram.com/p/example6',
      timestamp: '2024-01-03T13:20:00Z'
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // In a real implementation, you would fetch from Instagram Basic Display API
        // const response = await fetch(`/api/instagram/${username}`);
        // const data = await response.json();
        
        // For now, use mock data
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate loading
        setPosts(mockPosts);
        setError(null);
      } catch (err) {
        setError('Failed to load Instagram posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [username]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= posts.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(0, posts.length - 3) : prevIndex - 3
    );
  };

  const formatCaption = (caption: string) => {
    if (!caption) return '';
    return caption.length > 100 ? caption.substring(0, 100) + '...' : caption;
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-NZ', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className={`${className}`}>
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${className}`}>
        <div className="text-center py-12">
          <Instagram className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">{error}</p>
        </div>
      </div>
    );
  }

  const visiblePosts = posts.slice(currentIndex, currentIndex + 3);
  const canGoNext = currentIndex + 3 < posts.length;
  const canGoPrev = currentIndex > 0;

  return (
    <div className={`${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Instagram className="h-8 w-8 text-pink-600" />
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Follow Us on Instagram</h3>
            <p className="text-gray-600">@{username}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            disabled={!canGoPrev}
            className={`p-2 rounded-full border-2 transition-colors duration-200 ${
              canGoPrev
                ? 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                : 'border-gray-300 text-gray-300 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={!canGoNext}
            className={`p-2 rounded-full border-2 transition-colors duration-200 ${
              canGoNext
                ? 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                : 'border-gray-300 text-gray-300 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visiblePosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative group">
              <img
                src={post.media_url}
                alt={post.caption || 'Instagram post'}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3 hover:bg-gray-100"
                >
                  <ExternalLink className="h-5 w-5 text-gray-700" />
                </a>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                {formatCaption(post.caption || '')}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{formatDate(post.timestamp)}</span>
                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 font-medium"
                >
                  View on Instagram
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {posts.length > 3 && (
        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(posts.length / 3) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 3)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  Math.floor(currentIndex / 3) === index
                    ? 'bg-green-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      <div className="text-center mt-8">
        <a
          href={`https://instagram.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors duration-200"
        >
          <Instagram className="h-5 w-5" />
          <span>Follow @{username}</span>
        </a>
      </div>
    </div>
  );
};

export default InstagramFeed;