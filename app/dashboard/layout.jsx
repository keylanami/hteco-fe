import Navbar from '@/components/dashboard/Navbar';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F7F7F5] text-slate-800 font-sans">
      {/* Top Navbar Sticky */}
      <Navbar />

      {/* Main Content Area - Centered like Notion */}
      <main className="max-w-4xl mx-auto px-6 py-10 pb-20">
        {children}
      </main>
    </div>
  );
}