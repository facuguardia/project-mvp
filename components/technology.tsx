import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Technology() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tecnología</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          <li>Frontend: Next.js con Tailwind y Shadcn</li>
          <li>Backend: Java con Spring Boot</li>
          <li>Base de datos: MongoDB para almacenamiento flexible de datos de usuario</li>
          <li>IA: TensorFlow.js para procesamiento de lenguaje natural y análisis de sentimientos</li>
          <li>Autenticación: JWT (JSON Web Tokens) para seguridad de usuarios</li>
          <li>Almacenamiento en la nube: AWS S3 para backups y almacenamiento de datos adicionales</li>
          <li>Análisis: Google Analytics para seguimiento de uso y comportamiento de usuarios</li>
        </ul>
      </CardContent>
    </Card>
  )
}

