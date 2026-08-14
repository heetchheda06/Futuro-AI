'use client';

import React, { useState, useMemo } from 'react';
import { AppShell } from '../../components/shell/AppShell';
import {
  Building2,
  Sparkles,
  MapPin,
  Award,
  Search,
  Filter,
  ArrowUpDown,
  X,
  CheckCircle2,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Briefcase,
  Layers,
  Users,
  Home,
  PartyPopper,
  Star,
  DollarSign,
  Plus,
  Trash2,
  BarChart3
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { DataSourceBadge } from '../../components/ui/DataSourceBadge';
import { COLLEGES_DATA, CollegeData } from '../../data/collegesData';

const ITEMS_PER_PAGE = 20;

export default function CollegesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedMinRating, setSelectedMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>('rating-desc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [compareList, setCompareList] = useState<CollegeData[]>([]);
  const [showComparisonModal, setShowComparisonModal] = useState(false);

  // Unique states for filter dropdown
  const availableStates = useMemo(() => {
    const statesSet = new Set<string>();
    COLLEGES_DATA.forEach((c) => {
      if (c.state) statesSet.add(c.state);
    });
    return ['All', ...Array.from(statesSet).sort()];
  }, []);

  // Unique types
  const availableTypes = ['All', 'IIT', 'NIT', 'IIIT', 'BITS', 'Government / Public', 'Private / Autonomous'];

  // Filter & Sort Logic
  const filteredColleges = useMemo(() => {
    return COLLEGES_DATA.filter((col) => {
      // Search
      const matchesSearch =
        searchQuery === '' ||
        col.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        col.state.toLowerCase().includes(searchQuery.toLowerCase());

      // State Filter
      const matchesState = selectedState === 'All' || col.state === selectedState;

      // Type Filter
      const matchesType = selectedType === 'All' || col.type === selectedType;

      // Rating Filter
      const matchesRating = selectedMinRating === 0 || (col.rating && col.rating >= selectedMinRating);

      return matchesSearch && matchesState && matchesType && matchesRating;
    }).sort((a, b) => {
      if (sortBy === 'rating-desc') return (b.rating || 0) - (a.rating || 0);
      if (sortBy === 'academic-desc') return (b.academic || 0) - (a.academic || 0);
      if (sortBy === 'placement-desc') return (b.placement || 0) - (a.placement || 0);
      if (sortBy === 'infra-desc') return (b.infrastructure || 0) - (a.infrastructure || 0);
      if (sortBy === 'social-desc') return (b.socialLife || 0) - (a.socialLife || 0);
      if (sortBy === 'fee-asc') {
        const feeA = parseFee(a.ugFee);
        const feeB = parseFee(b.ugFee);
        return feeA - feeB;
      }
      if (sortBy === 'fee-desc') {
        const feeA = parseFee(a.ugFee);
        const feeB = parseFee(b.ugFee);
        return feeB - feeA;
      }
      return 0;
    });
  }, [searchQuery, selectedState, selectedType, selectedMinRating, sortBy]);

  // Helper to parse fee strings into numbers
  function parseFee(feeStr: string | null): number {
    if (!feeStr || feeStr === 'N/A') return 99999999;
    const cleaned = feeStr.replace(/,/g, '').replace(/[^0-9]/g, '');
    const val = parseInt(cleaned, 10);
    return isNaN(val) ? 99999999 : val;
  }

  // Pagination logic
  const totalPages = Math.ceil(filteredColleges.length / ITEMS_PER_PAGE);
  const paginatedColleges = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredColleges.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredColleges, currentPage]);

  // Reset page when filters change
  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  const handleStateChange = (val: string) => {
    setSelectedState(val);
    setCurrentPage(1);
  };

  const handleTypeChange = (val: string) => {
    setSelectedType(val);
    setCurrentPage(1);
  };

  const handleRatingChange = (val: number) => {
    setSelectedMinRating(val);
    setCurrentPage(1);
  };

  // Compare Toggle
  const toggleCompare = (col: CollegeData) => {
    if (compareList.some((item) => item.id === col.id)) {
      setCompareList(compareList.filter((item) => item.id !== col.id));
    } else {
      if (compareList.length >= 4) {
        alert('You can compare up to 4 colleges at a time.');
        return;
      }
      setCompareList([...compareList, col]);
    }
  };

  // Overall Stats
  const avgRatingOverall = useMemo(() => {
    const rated = COLLEGES_DATA.filter((c) => c.rating);
    if (!rated.length) return '0.0';
    const sum = rated.reduce((acc, curr) => acc + (curr.rating || 0), 0);
    return (sum / rated.length).toFixed(1);
  }, []);

  const totalPremierCount = useMemo(() => {
    return COLLEGES_DATA.filter((c) => ['IIT', 'NIT', 'IIIT', 'BITS'].includes(c.type)).length;
  }, []);

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Badge variant="violet" size="sm" icon={<Building2 className="w-3.5 h-3.5 text-indigo-400" />}>
                Verified Dataset ({COLLEGES_DATA.length} Colleges)
              </Badge>
              <DataSourceBadge isLive={true} />
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-outfit text-white">
              Indian Colleges & Universities Intelligence
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Comprehensive benchmarks across {availableStates.length - 1} States & UTs. Compare Academic Ratings, Placement Scores, UG/PG Fees, Infrastructure & Student Life metrics.
            </p>
          </div>

          {/* Key Metrics Stats Badges */}
          <div className="grid grid-cols-3 gap-3 text-center sm:text-left min-w-[280px]">
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-indigo-300 font-bold block">Catalog Size</span>
              <span className="text-xl sm:text-2xl font-black text-white font-outfit">{COLLEGES_DATA.length}</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-indigo-300 font-bold block">Avg Rating</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 font-outfit">{avgRatingOverall} ★</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-indigo-300 font-bold block">IIT/NIT/IIIT</span>
              <span className="text-xl sm:text-2xl font-black text-amber-400 font-outfit">{totalPremierCount}</span>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search Toolbar */}
        <Card variant="default" className="p-4 sm:p-6 space-y-4 bg-white border-slate-200 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <input
                type="text"
                placeholder="Search college name or state..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="absolute right-2.5 top-3 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* State Filter */}
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <select
                value={selectedState}
                onChange={(e) => handleStateChange(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 font-medium appearance-none cursor-pointer"
              >
                {availableStates.map((st) => (
                  <option key={st} value={st}>
                    {st === 'All' ? 'All States & UTs' : st}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="relative">
              <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <select
                value={selectedType}
                onChange={(e) => handleTypeChange(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 font-medium appearance-none cursor-pointer"
              >
                {availableTypes.map((t) => (
                  <option key={t} value={t}>
                    {t === 'All' ? 'All Institution Types' : t}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="relative">
              <ArrowUpDown className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 font-medium appearance-none cursor-pointer"
              >
                <option value="rating-desc">Sort by Overall Rating (High to Low)</option>
                <option value="academic-desc">Sort by Academic Rating</option>
                <option value="placement-desc">Sort by Placement Rating</option>
                <option value="infra-desc">Sort by Infrastructure Rating</option>
                <option value="social-desc">Sort by Social Life Rating</option>
                <option value="fee-asc">Sort by UG Fee (Lowest First)</option>
                <option value="fee-desc">Sort by UG Fee (Highest First)</option>
              </select>
            </div>
          </div>

          {/* Quick Rating Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
            <div className="flex items-center space-x-2 overflow-x-auto py-1">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">
                Min Rating:
              </span>
              {[0, 8.5, 8.0, 7.5, 7.0].map((rating) => (
                <button
                  key={rating}
                  onClick={() => handleRatingChange(rating)}
                  className={`px-3 py-1 text-xs rounded-full font-semibold transition-all ${
                    selectedMinRating === rating
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {rating === 0 ? 'All' : `${rating}+ ★`}
                </button>
              ))}
            </div>

            <div className="text-xs text-slate-500 font-semibold">
              Showing <span className="text-indigo-600 font-extrabold">{filteredColleges.length}</span> of {COLLEGES_DATA.length} colleges
            </div>
          </div>
        </Card>

        {/* Selected Compare Floating Trigger Bar */}
        {compareList.length > 0 && (
          <div className="fixed bottom-6 right-6 left-6 max-w-2xl mx-auto z-40 bg-slate-900/95 backdrop-blur-md border border-slate-700 text-white p-4 rounded-2xl shadow-2xl flex items-center justify-between animate-in slide-in-from-bottom-5">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-300 font-black">
                {compareList.length}
              </div>
              <div>
                <span className="text-xs font-bold text-white block">
                  {compareList.length} College{compareList.length > 1 ? 's' : ''} Selected for Comparison
                </span>
                <span className="text-[11px] text-slate-400 truncate max-w-xs block">
                  {compareList.map((c) => c.name.split(',')[0]).join(' • ')}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setCompareList([])}
                className="bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border-slate-700 text-xs"
              >
                Clear
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setShowComparisonModal(true)}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs"
              >
                Compare Side-by-Side ({compareList.length})
              </Button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredColleges.length === 0 && (
          <Card variant="default" className="p-12 text-center space-y-3 bg-white border-slate-200">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-outfit">No Colleges Found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              No institutions matched your search query or filter criteria. Try clearing search filters or selecting a different state.
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedState('All');
                setSelectedType('All');
                setSelectedMinRating(0);
              }}
            >
              Reset All Filters
            </Button>
          </Card>
        )}

        {/* College Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {paginatedColleges.map((col) => {
            const isCompared = compareList.some((item) => item.id === col.id);

            return (
              <Card
                key={col.id}
                variant="interactive"
                className={`p-6 space-y-4 bg-white border transition-all ${
                  isCompared ? 'border-indigo-500 ring-2 ring-indigo-500/20 bg-indigo-50/20' : 'border-slate-200'
                }`}
              >
                {/* Header info */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Badge
                        variant={
                          col.type === 'IIT'
                            ? 'violet'
                            : col.type === 'NIT'
                            ? 'cyan'
                            : col.type === 'IIIT'
                            ? 'amber'
                            : 'neutral'
                        }
                        size="sm"
                      >
                        {col.type}
                      </Badge>
                      <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                        <MapPin className="w-3 h-3 text-indigo-600" />
                        <span>{col.state}</span>
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-outfit leading-snug">
                      {col.name}
                    </h3>
                  </div>

                  {/* Rating Badge */}
                  <div className="flex flex-col items-end shrink-0">
                    {col.rating ? (
                      <div
                        className={`px-2.5 py-1 rounded-xl font-extrabold text-xs flex items-center space-x-1 ${
                          col.rating >= 8.5
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : col.rating >= 7.5
                            ? 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                            : 'bg-slate-100 text-slate-800 border border-slate-200'
                        }`}
                      >
                        <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
                        <span>{col.rating.toFixed(1)}</span>
                      </div>
                    ) : (
                      <span className="text-[10px] text-slate-400 font-semibold uppercase">Rating N/A</span>
                    )}
                  </div>
                </div>

                {/* Score Breakdown Pills */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-[11px]">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <span className="text-[9px] text-slate-400 uppercase font-bold block truncate">Academic</span>
                    <span className="font-extrabold text-slate-800">{col.academic ? `${col.academic}` : '-'}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <span className="text-[9px] text-slate-400 uppercase font-bold block truncate">Placement</span>
                    <span className="font-extrabold text-emerald-600">{col.placement ? `${col.placement}` : '-'}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <span className="text-[9px] text-slate-400 uppercase font-bold block truncate">Infra</span>
                    <span className="font-extrabold text-indigo-600">{col.infrastructure ? `${col.infrastructure}` : '-'}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <span className="text-[9px] text-slate-400 uppercase font-bold block truncate">Faculty</span>
                    <span className="font-extrabold text-slate-800">{col.faculty ? `${col.faculty}` : '-'}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <span className="text-[9px] text-slate-400 uppercase font-bold block truncate">Hostel</span>
                    <span className="font-extrabold text-slate-800">{col.accommodation ? `${col.accommodation}` : '-'}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <span className="text-[9px] text-slate-400 uppercase font-bold block truncate">Social</span>
                    <span className="font-extrabold text-amber-600">{col.socialLife ? `${col.socialLife}` : '-'}</span>
                  </div>
                </div>

                {/* Fees & Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <div className="flex items-center space-x-4 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">UG Annual Fee</span>
                      <span className="font-extrabold text-slate-900">
                        {col.ugFee ? `₹${col.ugFee}` : 'N/A'}
                      </span>
                    </div>
                    {col.pgFee && (
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">PG Annual Fee</span>
                        <span className="font-extrabold text-slate-700">₹{col.pgFee}</span>
                      </div>
                    )}
                  </div>

                  <Button
                    variant={isCompared ? 'secondary' : 'primary'}
                    size="sm"
                    onClick={() => toggleCompare(col)}
                    className={
                      isCompared
                        ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-indigo-200 text-xs font-bold'
                        : 'text-xs font-bold'
                    }
                  >
                    {isCompared ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-indigo-600" />
                        Selected
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5 mr-1" />
                        Compare
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 border-t border-slate-200">
            <div className="text-xs text-slate-500 font-semibold">
              Page <span className="font-bold text-slate-900">{currentPage}</span> of{' '}
              <span className="font-bold text-slate-900">{totalPages}</span> ({filteredColleges.length} total institutions)
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="secondary"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => {
                  setCurrentPage((p) => Math.max(1, p - 1));
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Previous
              </Button>

              <div className="flex items-center space-x-1 px-2">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pNum = currentPage;
                  if (currentPage <= 3) {
                    pNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pNum = totalPages - 4 + i;
                  } else {
                    pNum = currentPage - 2 + i;
                  }

                  if (pNum < 1 || pNum > totalPages) return null;

                  return (
                    <button
                      key={pNum}
                      onClick={() => {
                        setCurrentPage(pNum);
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      }}
                      className={`w-8 h-8 rounded-xl text-xs font-bold transition-all ${
                        currentPage === pNum
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {pNum}
                    </button>
                  );
                })}
              </div>

              <Button
                variant="secondary"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => {
                  setCurrentPage((p) => Math.min(totalPages, p + 1));
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
              >
                Next <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        )}

        {/* Side-by-Side Comparison Modal */}
        {showComparisonModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in overflow-y-auto">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-5xl w-full my-8 space-y-6 shadow-2xl">
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-outfit">
                    Side-by-Side Institutions Benchmark Matrix
                  </h3>
                  <p className="text-xs text-slate-500">
                    Comparing {compareList.length} selected institution{compareList.length > 1 ? 's' : ''} across overall ratings, fee structures, and performance parameters.
                  </p>
                </div>
                <button
                  onClick={() => setShowComparisonModal(false)}
                  className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Comparison Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {compareList.map((c) => (
                  <div key={c.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 relative">
                    <button
                      onClick={() => toggleCompare(c)}
                      className="absolute top-3 right-3 text-slate-400 hover:text-rose-600 transition-colors"
                      title="Remove from compare"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div>
                      <Badge variant="violet" size="sm" className="mb-1">{c.type}</Badge>
                      <h4 className="font-bold text-slate-900 font-outfit text-sm pr-6 leading-snug">{c.name}</h4>
                      <span className="text-[11px] text-slate-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3 text-indigo-600" />
                        <span>{c.state}</span>
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 text-center">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Overall Rating</span>
                      <span className="text-2xl font-black text-indigo-600 font-outfit">
                        {c.rating ? `${c.rating.toFixed(1)} / 10` : 'N/A'}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between py-1 border-b border-slate-200/60">
                        <span className="text-slate-500">UG Fee (Annual):</span>
                        <span className="font-bold text-slate-900">{c.ugFee ? `₹${c.ugFee}` : 'N/A'}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200/60">
                        <span className="text-slate-500">PG Fee (Annual):</span>
                        <span className="font-bold text-slate-900">{c.pgFee ? `₹${c.pgFee}` : 'N/A'}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200/60">
                        <span className="text-slate-500">Academic Score:</span>
                        <span className="font-bold text-slate-900">{c.academic || 'N/A'}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200/60">
                        <span className="text-slate-500">Placement Score:</span>
                        <span className="font-bold text-emerald-600 font-black">{c.placement || 'N/A'}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200/60">
                        <span className="text-slate-500">Infrastructure:</span>
                        <span className="font-bold text-indigo-600 font-black">{c.infrastructure || 'N/A'}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200/60">
                        <span className="text-slate-500">Faculty Rating:</span>
                        <span className="font-bold text-slate-900">{c.faculty || 'N/A'}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200/60">
                        <span className="text-slate-500">Hostel Rating:</span>
                        <span className="font-bold text-slate-900">{c.accommodation || 'N/A'}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-slate-500">Social Life:</span>
                        <span className="font-bold text-amber-600">{c.socialLife || 'N/A'}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Footer Actions */}
              <div className="flex justify-end space-x-3 pt-4 border-t border-slate-200">
                <Button variant="secondary" size="md" onClick={() => setShowComparisonModal(false)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
