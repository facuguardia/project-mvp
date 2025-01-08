import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeftIcon, SendIcon, Sparkles, SmileIcon } from "lucide-react";

export function WritingScreen() {
  const [entry, setEntry] = useState("");

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-6 rounded-xl shadow-inner min-h-[500px] md:min-h-[600px] flex flex-col">
      <header className="flex justify-between items-center mb-4 md:mb-6">
        <Button variant="ghost" size="icon" className="hover:bg-white/50">
          <ArrowLeftIcon className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
        <div className="flex flex-col items-center">
          <h2 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Nueva Entrada
          </h2>
          <span className="text-xs text-gray-500">15 de Mayo, 2024</span>
        </div>
        <Button variant="ghost" size="icon" className="hover:bg-white/50">
          <SmileIcon className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </header>

      <div className="relative flex-grow mb-4">
        <Textarea
          placeholder="¿Qué hay en tu mente hoy?"
          className="h-full text-lg p-4 resize-none bg-white/50 backdrop-blur-sm border-none focus:ring-2 focus:ring-blue-200 rounded-xl"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
        <div className="absolute bottom-4 right-4 text-xs text-gray-400">
          {entry.length} caracteres
        </div>
      </div>

      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-none mb-4">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-purple-600 mb-2">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Sugerencia de AmigAI</span>
          </div>
          <p className="text-gray-700">
            Parece que estás teniendo un día productivo. ¿Te gustaría explorar qué aspectos de tu rutina están contribuyendo a tu bienestar?
          </p>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-2">
        <Button variant="outline" className="hover:bg-white/50">
          Guardar borrador
        </Button>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90">
          <SendIcon className="h-4 w-4 mr-2" />
          Publicar
        </Button>
      </div>
    </div>
  );
}
