'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { date: '1 Mayo', mood: 3, events: 'Día del Trabajo' },
  { date: '2 Mayo', mood: 4, events: 'Reunión de trabajo' },
  { date: '3 Mayo', mood: 2, events: 'Conflicto con amigo' },
  { date: '4 Mayo', mood: 5, events: 'Éxito en proyecto' },
  { date: '5 Mayo', mood: 4, events: 'Cena familiar' },
  { date: '6 Mayo', mood: 3, events: 'Día tranquilo' },
  { date: '7 Mayo', mood: 5, events: 'Salida con amigos' },
  { date: '8 Mayo', mood: 4, events: 'Nuevo hobby' },
  { date: '9 Mayo', mood: 2, events: 'Estrés laboral' },
  { date: '10 Mayo', mood: 3, events: 'Meditación' },
  { date: '11 Mayo', mood: 4, events: 'Logro personal' },
  { date: '12 Mayo', mood: 5, events: 'Viaje corto' },
  { date: '13 Mayo', mood: 4, events: 'Lectura inspiradora' },
  { date: '14 Mayo', mood: 3, events: 'Rutina diaria' },
]

export function MoodChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tick={{ fontSize: 12 }} />
        <YAxis domain={[1, 5]} ticks={[1, 2, 3, 4, 5]} tick={{ fontSize: 12 }} />
        <Tooltip 
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="bg-white p-2 md:p-4 border rounded shadow text-xs md:text-sm">
                  <p className="font-bold">{label}</p>
                  <p>Estado de ánimo: {payload[0].value}</p>
                  <p>Evento: {payload[0].payload.events}</p>
                </div>
              );
            }
            return null;
          }}
        />
        <Line type="monotone" dataKey="mood" stroke="#8884d8" strokeWidth={2} dot={{ fill: '#8884d8' }} />
      </LineChart>
    </ResponsiveContainer>
  )
}

