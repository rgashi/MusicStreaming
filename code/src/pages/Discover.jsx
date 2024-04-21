import React, { useState } from 'react';
import { SongCard } from '../components'; // Ensure the path is correct based on your project structure

const Discover = () => {
  const [activeSong, setActiveSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const dummyData = [
    {
      key: '1',
      title: 'Example Song',
      subtitle: 'Artist Name',
      images: { coverart: 'https://via.placeholder.com/150' },
    },
    {
      key: '2',
      title: 'Another Song',
      subtitle: 'Different Artist',
      images: { coverart: 'https://via.placeholder.com/150' },
    },
    {
      key: '3',
      title: 'Another Song',
      subtitle: 'Different Artist',
      images: { coverart: 'https://via.placeholder.com/150' },
    },
    {
      key: '4',
      title: 'Another Song',
      subtitle: 'Different Artist',
      images: { coverart: 'https://via.placeholder.com/150' },
    },
    {
      key: '5',
      title: 'Another Song',
      subtitle: 'Different Artist',
      images: { coverart: 'https://via.placeholder.com/150' },
    },
  ];

  const filteredSongs = searchTerm
    ? dummyData.filter((song) => song.title.toLowerCase().includes(searchTerm.toLowerCase())
        || song.subtitle.toLowerCase().includes(searchTerm.toLowerCase()))
    : dummyData;

  const handlePlayClick = (song, index) => {
    setActiveSong({ ...song, index });
    setIsPlaying(true);
  };

  const handlePauseClick = () => {
    setIsPlaying(false);
  };

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover Pop
        </h2>
        <input
          type="text"
          placeholder="Search Songs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-base p-2 rounded-full"
        />
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {filteredSongs.map((song, index) => (
          <SongCard
            key={song.key}
            song={song}
            data={dummyData}
            i={index}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePlayClick={() => handlePlayClick(song, index)}
            handlePauseClick={handlePauseClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
