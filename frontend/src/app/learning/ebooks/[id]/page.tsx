import React from 'react';
import EbookDetailClient from './EbookDetailClient';

export function generateStaticParams() {
  return [
    { id: 'preview' },
    { id: '1' }
  ];
}

export default function EbookDetailPage() {
  return <EbookDetailClient />;
}
