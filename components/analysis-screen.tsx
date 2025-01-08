import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeftIcon,
  CalendarIcon,
  TrendingUpIcon,
  BrainIcon,
} from "lucide-react";
import { MoodChart } from "./mood-chart";

export function AnalysisScreen() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6 rounded-xl shadow-inner min-h-[600px] flex flex-col">
      <header className="flex justify-between items-center mb-6">
        <Button variant="ghost" size="icon" className="hover:bg-white/50">
          <ArrowLeftIcon className="h-5 w-5" />
        </Button>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Análisis Emocional
          </h2>
          <span className="text-xs text-gray-500">Últimos 30 días</span>
        </div>
        <Button variant="ghost" size="icon" className="hover:bg-white/50">
          <CalendarIcon className="h-5 w-5" />
        </Button>
      </header>

      <Card className="bg-white/50 backdrop-blur-sm mb-4">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUpIcon className="h-5 w-5 text-blue-600" />
            Tendencias Emocionales
          </CardTitle>
        </CardHeader>
        <CardContent>
          <MoodChart />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-white/50 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              Emociones Frecuentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {["Alegría", "Gratitud", "Entusiasmo"].map((emotion) => (
                <div
                  key={emotion}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm text-gray-700">{emotion}</span>
                  <div className="h-2 bg-purple-100 rounded-full w-24">
                    <div
                      className="h-2 bg-purple-500 rounded-full"
                      style={{ width: "75%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <BrainIcon className="h-4 w-4 text-purple-600" />
              Insights de AmigAI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700">
              Tus entradas muestran un patrón positivo cuando realizas
              actividades creativas. Considera incorporar más momentos de
              expresión artística en tu rutina.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
