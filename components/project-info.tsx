import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ProjectInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumen del Proyecto</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-700">
          AmigAI es una innovadora aplicación que combina la escritura de un diario personal con la potencia de la inteligencia artificial para ofrecer una experiencia única de apoyo emocional y autodescubrimiento.
        </p>
        <h3 className="font-semibold mb-2 text-gray-800">Objetivo:</h3>
        <p className="mb-4 text-gray-700">
          Proporcionar a los usuarios un espacio seguro y personalizado para expresar sus pensamientos y emociones, recibiendo retroalimentación inteligente y guía para su crecimiento personal.
        </p>
        <h3 className="font-semibold mb-2 text-gray-800">Público Objetivo:</h3>
        <p className="text-gray-700">
          Adolescentes y jóvenes adultos que buscan una forma moderna y tecnológica de manejar sus emociones y mejorar su bienestar mental.
        </p>
      </CardContent>
    </Card>
  )
}

