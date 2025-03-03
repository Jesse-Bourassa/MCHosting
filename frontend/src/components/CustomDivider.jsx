
// frontend/src/components/CustomDivider.jsx
import React from 'react';

export default function CustomDivider() {
    return (
      <hr
        style={{
          width: '30%',              // Adjust the width as needed
          margin: '2rem auto',       // Vertical spacing and centering
          border: 'none',            // Remove any default border
          borderBottom: '3px solid grey',
          borderRadius: "10px" // A thin white line
        }}
      />
    );
  }