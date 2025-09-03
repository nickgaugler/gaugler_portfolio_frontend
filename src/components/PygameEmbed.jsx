import React from 'react';

const PygameEmbed = () => {
  return (
    <div>
      <iframe
        src="/pygame/index.html"  // The path to your game's index.html
        title="Bubble Pop Game"
        width="1280"
        height="720"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default PygameEmbed;