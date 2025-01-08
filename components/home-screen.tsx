import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PenIcon, BarChart2Icon, Sparkles } from "lucide-react";

export function HomeScreen() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-6 rounded-xl shadow-inner min-h-[500px] md:min-h-[600px] flex flex-col">
      <header className="text-center mb-6 md:mb-8">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 md:px-4 py-1.5 rounded-full mb-4">
          <Sparkles size={14} className="animate-pulse" />
          <span className="text-xs md:text-sm font-medium">Tu espacio seguro</span>
        </div>
        <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AmigAI
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          Tu compañero emocional
        </p>
      </header>

      <div className="grid grid-cols-1 gap-3 md:gap-4 mb-6">
        <Button
          className="h-20 md:h-24 relative overflow-hidden group"
          variant="default"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 transition-opacity group-hover:opacity-90" />
          <div className="relative flex items-center gap-3">
            <PenIcon className="h-6 w-6" />
            <div className="text-left">
              <div className="font-semibold">Nueva Entrada</div>
              <div className="text-xs opacity-90">Comparte tu día</div>
            </div>
          </div>
        </Button>

        <Button
          className="h-20 md:h-24 relative overflow-hidden group"
          variant="outline"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-50 transition-opacity group-hover:opacity-90" />
          <div className="relative flex items-center gap-3">
            <BarChart2Icon className="h-6 w-6 text-purple-600" />
            <div className="text-left">
              <div className="font-semibold text-gray-800">Análisis</div>
              <div className="text-xs text-gray-600">Visualiza tu progreso</div>
            </div>
          </div>
        </Button>
      </div>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Estado de ánimo actual
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">😊</span>
              <div>
                <div className="font-medium text-emerald-700">Positivo</div>
                <div className="text-xs text-gray-500">Actualizado hace 2h</div>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-blue-600">
              Actualizar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
