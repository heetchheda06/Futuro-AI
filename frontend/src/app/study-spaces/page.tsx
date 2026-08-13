'use client';

import React, { useState } from 'react';
import { AppShell } from '../../components/shell/AppShell';
import {
  MapPin,
  Sparkles,
  Search,
  Wifi,
  Zap,
  Clock,
  Star,
  ExternalLink,
  Coffee
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

export default function StudySpacesPage() {
  const [search, setSearch] = useState('');

  const spaces = [
    {
      name: 'Futuro Tech Innovation Hub & Library',
      type: 'Public Tech Library',
      distance: '1.2 km away',
      rating: 4.9,
      hours: '08:00 AM - 11:00 PM',
      wifiSpeed: '500 Mbps Fiber',
      amenities: ['Power at every desk', 'Silent study pod', 'Coffee bar', 'Conference rooms'],
      address: '24 Silicon Tech Park, Bandra Kurla Complex, Mumbai',
    },
    {
      name: 'Open Source Community Workspace',
      type: 'Co-Working & Study Space',
      distance: '2.5 km away',
      rating: 4.8,
      hours: '24/7 Open Access',
      wifiSpeed: '1 Gbps Dedicated',
      amenities: ['24/7 Access', 'Dual monitors', 'Free Espresso', 'Whiteboards'],
      address: '102 Tech Corridor, HSR Layout, Bengaluru',
    },
    {
      name: 'Central University Digital Library',
      type: 'Academic Library',
      distance: '3.8 km away',
      rating: 4.7,
      hours: '09:00 AM - 09:00 PM',
      wifiSpeed: '200 Mbps Academic',
      amenities: ['Academic journal access', 'Quiet atmosphere', 'Ergonomic seating'],
      address: 'University Campus, Powai, Mumbai',
    },
  ];

  const filtered = spaces.filter((s) =>
    search ? s.name.toLowerCase().includes(search.toLowerCase()) || s.address.toLowerCase().includes(search.toLowerCase()) : true
  );

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Badge variant="cyan" size="sm" icon={<MapPin className="w-3.5 h-3.5" />}>
                Study Space Finder
              </Badge>
              <span className="text-xs text-slate-500 font-semibold">&bull; Map-Based Quiet Workspaces</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-outfit mt-1">
              Futuro Study Spaces
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Locate quiet public libraries, tech cafes, and co-working hubs with high-speed Wi-Fi and power outlets near you.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by city, landmark, or workspace name..."
            className="w-full bg-white border border-slate-300 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 font-medium"
          />
        </div>

        {/* List of Study Spaces */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((space, idx) => (
            <Card key={idx} variant="elevated" className="p-6 flex flex-col justify-between bg-white border-slate-200 rounded-3xl shadow-xs space-y-4">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="cyan" size="sm">{space.type}</Badge>
                  <span className="text-[10px] text-emerald-700 font-extrabold">{space.distance}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 font-outfit mb-1">
                  {space.name}
                </h3>
                <p className="text-xs text-slate-500 mb-3 flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{space.address}</span>
                </p>

                <div className="space-y-1.5 text-xs text-slate-700 mb-4 bg-indigo-50/50 p-3 rounded-2xl border border-indigo-100 font-medium">
                  <div className="flex justify-between">
                    <span className="text-slate-500 flex items-center space-x-1">
                      <Wifi className="w-3 h-3 text-indigo-600" />
                      <span>Wi-Fi:</span>
                    </span>
                    <span className="font-bold text-indigo-700">{space.wifiSpeed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-amber-500" />
                      <span>Hours:</span>
                    </span>
                    <span className="font-bold text-slate-800">{space.hours}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {space.amenities.map((a, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg text-[10px] bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-1 text-xs text-amber-600 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{space.rating}</span>
                </div>
                <Button variant="secondary" size="sm" rightIcon={<ExternalLink className="w-3.5 h-3.5" />}>
                  Get Directions
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
