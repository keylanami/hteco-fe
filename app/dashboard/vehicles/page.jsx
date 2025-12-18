'use client';
import { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function VehiclesPage() {
  // mock 
  const [vehicles, setVehicles] = useState([
    { id: 1, name: 'Toyota Avanza Dinas', type: 'Mobil', fuel: 'Bensin', efficiency: 12 },
    { id: 2, name: 'Honda Vario Pribadi', type: 'Motor', fuel: 'Bensin', efficiency: 45 },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newVehicle, setNewVehicle] = useState({ name: '', type: 'Mobil', fuel: 'Bensin', efficiency: '' });

  const handleAdd = (e) => {
    e.preventDefault();
    setVehicles([...vehicles, { id: Date.now(), ...newVehicle }]);
    setIsFormOpen(false);
    setNewVehicle({ name: '', type: 'Mobil', fuel: 'Bensin', efficiency: '' });
  };

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <Link href="/" className="hover:text-slate-900">Dashboard</Link> / <span className="text-slate-900 font-semibold">Kendaraan</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Garasi Saya</h1>
          <p className="text-slate-500 mt-1">Daftarkan kendaraan yang kamu pakai untuk bekerja.</p>
        </div>
        <Button onClick={() => setIsFormOpen(!isFormOpen)} variant="primary">
          {isFormOpen ? 'Tutup Form' : '+ Tambah Kendaraan'}
        </Button>
      </div>

     
      {isFormOpen && (
        <Card className="bg-slate-50 border-slate-300">
          <form onSubmit={handleAdd} className="space-y-4">
            <h3 className="font-bold text-slate-800 border-b border-slate-200 pb-2">Detail Kendaraan Baru</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label-text">Nama Kendaraan</label>
                <input 
                  type="text" 
                  className="input-field" 
                  placeholder="Contoh: Honda Jazz Merah"
                  value={newVehicle.name}
                  onChange={e => setNewVehicle({...newVehicle, name: e.target.value})} 
                  required
                />
              </div>
              <div>
                <label className="label-text">Konsumsi BBM (km/liter)</label>
                <input 
                  type="number" 
                  className="input-field" 
                  placeholder="Contoh: 12"
                  value={newVehicle.efficiency}
                  onChange={e => setNewVehicle({...newVehicle, efficiency: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="label-text">Jenis</label>
                <select 
                  className="input-field"
                  value={newVehicle.type}
                  onChange={e => setNewVehicle({...newVehicle, type: e.target.value})}
                >
                  <option>Mobil</option>
                  <option>Motor</option>
                  <option>Truk</option>
                </select>
              </div>
              <div>
                <label className="label-text">Bahan Bakar</label>
                <select 
                  className="input-field"
                  value={newVehicle.fuel}
                  onChange={e => setNewVehicle({...newVehicle, fuel: e.target.value})}
                >
                  <option>Bensin</option>
                  <option>Solar</option>
                  <option>Listrik (kWh)</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <Button type="submit">Simpan ke Garasi</Button>
            </div>
          </form>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vehicles.map((v) => (
          <div key={v.id} className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-slate-400 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-slate-400 hover:text-red-500">Hapus</button>
            </div>
            
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-2xl">
                {v.type === 'Motor' ? '🛵' : v.type === 'Truk' ? '🚛' : '🚘'}
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-800">{v.name}</h3>
                <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md font-medium mt-1 inline-block">
                  {v.fuel}
                </span>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-slate-400 uppercase font-bold">Efisiensi</p>
                <p className="font-semibold text-slate-700">{v.efficiency} km/L</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase font-bold">Total Trip</p>
                <p className="font-semibold text-slate-700">12 Perjalanan</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}