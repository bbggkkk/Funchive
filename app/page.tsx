"use client"

import React from 'react';

export default function Page() {
    return (
      <>
        <h1>Hello, Next.js!</h1>
        <button onClick={() => {
          fetch('/api/test');
        }}>hi</button>
      </>
    );
  }