"use client"

import React from 'react';
import Link from 'next/link'

export default function Page() {
    return (
      <>
        <h1>Hello, Next.js!</h1>
        <Link href={`https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=${'orn9957u6u5s3431rraz7ez0hp5mhr'}&redirect_uri=${encodeURIComponent('http://localhost:3000/api/getAccessToken')}&scope=${encodeURIComponent('user:read:follows')}&state=${new Date().getTime()*Math.trunc(Math.random()*100)}`} target="_blank">hi</Link>
      </>
    );
  }