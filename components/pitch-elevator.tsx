import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Brain, Heart, ArrowRight } from "lucide-react";

export function PitchElevator() {
  return (
    <Card className="relative overflow-hidden border-0">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50" />

      <CardContent className="relative p-8 sm:p-12">
        {/* Header section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full mb-6">
            <Sparkles size={16} className="animate-pulse" />
            <span className="text-sm font-medium">
              El futuro del bienestar emocional
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Tu amig@ emocional impulsado por{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Inteligencia Artificial
            </span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Imagina un mundo donde tus emociones y pensamientos más profundos no
            solo sean escuchados, sino comprendidos y guiados hacia un mayor
            bienestar. Presentamos <strong>AmigAI</strong>, una solución para
            aquellos momentos en los que necesitas un espacio seguro para
            expresarte.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <Brain className="w-10 h-10 text-purple-500 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">IA Empática</h3>
            <p className="text-gray-600">
              Nuestra IA actúa como un amigo virtual, ofreciendo respuestas
              personalizadas que te ayudan a explorar tus emociones.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <Heart className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Espacio Seguro</h3>
            <p className="text-gray-600">
              Un lugar donde cada palabra cuenta y cada emoción es válida,
              diseñado para tu bienestar emocional.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <ArrowRight className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">
              Crecimiento Personal
            </h3>
            <p className="text-gray-600">
              Retos diarios y ejercicios personalizados para ayudarte en tu
              viaje de autodescubrimiento.
            </p>
          </div>
        </div>
        <div className="bg-gray-800 text-white p-8 rounded-2xl text-center">
          <p className="text-lg font-medium mb-2">
            Es hora de transformar la manera en que gestionamos nuestras
            emociones
          </p>
          <p className="text-sm opacity-90">
            Únete a la revolución del bienestar emocional con AmigAI
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
