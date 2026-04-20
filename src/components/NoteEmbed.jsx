import React, { useEffect } from 'react';

const NoteEmbed = ({ embedUrl }) => {
  useEffect(() => {
    // Note's embed.js listens for messages, but if it doesn't process dynamically
    // added iframes, we might need to trigger a window event or re-inject.
    // Usually, the script parses existing .note-embed elements on load.
    // If we have issues, we can manually trigger the script's logic here.
    if (window.noteEmbedDocumentReady) {
      window.noteEmbedDocumentReady();
    }
  }, [embedUrl]);

  return (
    <iframe
      className="note-embed"
      src={embedUrl}
      style={{
        border: 0,
        display: 'block',
        maxWidth: '100%',
        width: '100%',
        padding: '0px',
        margin: '0px',
        position: 'static',
        visibility: 'visible'
      }}
      height="400"
      title="Note Embed"
    ></iframe>
  );
};

export default NoteEmbed;
