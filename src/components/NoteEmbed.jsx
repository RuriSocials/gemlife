import React, { useEffect } from 'react';

const NoteEmbed = ({ embedUrl }) => {
  useEffect(() => {
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
