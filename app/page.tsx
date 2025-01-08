"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PitchElevator } from "@/components/pitch-elevator";
import { ProjectInfo } from "@/components/project-info";
import { MoodChart } from "@/components/mood-chart";
import { Technology } from "@/components/technology";
import { Mockups } from "@/components/mockups";
import { Badge } from "@/components/ui/badge";

export default function AmigaiPresentacion() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center gap-4 mb-4">
          <Image
            src="/logo.jpg"
            alt="AmigAI Logo"
            className="rounded-full"
            width={100}
            height={100}
          />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-center text-gray-800">
              AmigAI
            </h1>
            <Badge variant="outline">Tu amig@ virtual</Badge>
          </div>
        </div>

        <PitchElevator />

        <div className="text-center mt-8">
          <Button
            onClick={() => setShowContent(!showContent)}
            variant="outline"
          >
            {showContent ? "Ocultar detalles" : "Descubre más"}{" "}
            <ChevronDown className="ml-2" />
          </Button>
        </div>

        {showContent && (
          <div className="mt-12">
            <Tabs defaultValue="resumen" className="w-full">
              <TabsList className="w-full justify-start mb-4">
                <TabsTrigger value="resumen">Resumen</TabsTrigger>
                <TabsTrigger value="caracteristicas">
                  Características
                </TabsTrigger>
                <TabsTrigger value="valor">Valor Agregado</TabsTrigger>
                <TabsTrigger value="tecnologia">Tecnología</TabsTrigger>
                <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
                <TabsTrigger value="mockups">Mockups</TabsTrigger>
              </TabsList>
              <TabsContent value="resumen">
                <ProjectInfo />
              </TabsContent>
              <TabsContent value="caracteristicas">
                <Card>
                  <CardHeader>
                    <CardTitle>Características Principales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Escritura de diario con retroalimentación de IA</li>
                      <li>Análisis de sentimientos y emociones</li>
                      <li>Retos y ejercicios de escritura personalizados</li>
                      <li>Seguimiento del estado de ánimo</li>
                      <li>Espacio seguro y confidencial</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="valor">
                <Card>
                  <CardHeader>
                    <CardTitle>Valor Agregado</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h3 className="font-semibold mb-2">
                        Personalización Emocional
                      </h3>
                      <p>
                        IA que se adapta a diferentes estilos emocionales y
                        necesidades individuales.
                      </p>
                    </div>
                    <div className="mb-4">
                      <h3 className="font-semibold mb-2">
                        Seguimiento del Estado de Ánimo
                      </h3>
                      <MoodChart />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="tecnologia">
                <Technology />
              </TabsContent>
              <TabsContent value="roadmap">
                <Card>
                  <CardHeader>
                    <CardTitle>Roadmap del Proyecto</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        Desarrollo del MVP con funcionalidades básicas
                        <ul className="list-disc pl-5 mt-2">
                          <li>
                            Implementación de la interfaz de usuario básica
                          </li>
                          <li>
                            Integración del modelo de IA para retroalimentación
                            simple
                          </li>
                          <li>
                            Desarrollo del sistema de seguimiento de estado de
                            ánimo
                          </li>
                        </ul>
                      </li>
                      <li>
                        Pruebas con un grupo reducido de usuarios
                        <ul className="list-disc pl-5 mt-2">
                          <li>Selección de 10 usuarios beta</li>
                          <li>
                            Recopilación de feedback a través de encuestas y
                            entrevistas
                          </li>
                        </ul>
                      </li>
                      <li>
                        Iteración basada en el feedback recibido
                        <ul className="list-disc pl-5 mt-2">
                          <li>Análisis de datos y feedback de usuarios</li>
                          <li>Implementación de mejoras y correcciones</li>
                        </ul>
                      </li>
                      <li>
                        Implementación de características avanzadas de IA
                        <ul className="list-disc pl-5 mt-2">
                          <li>
                            Mejora del modelo de IA para personalización
                            avanzada
                          </li>
                          <li>
                            Implementación de retos y ejercicios de escritura
                            guiada
                          </li>
                        </ul>
                      </li>
                      <li>
                        Lanzamiento de la versión beta pública
                        <ul className="list-disc pl-5 mt-2">
                          <li>
                            Preparación de la infraestructura para escalar
                          </li>
                          <li>
                            Campaña de marketing para atraer usuarios beta
                          </li>
                        </ul>
                      </li>
                      <li>
                        Expansión a múltiples plataformas
                        <ul className="list-disc pl-5 mt-2">
                          <li>
                            Desarrollo de aplicaciones nativas para iOS y
                            Android
                          </li>
                          <li>
                            Optimización de la experiencia de usuario en
                            diferentes dispositivos
                          </li>
                        </ul>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="mockups">
                <Mockups />
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
}
