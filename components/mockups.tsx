import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HomeScreen } from "@/components/home-screen"
import { WritingScreen } from "@/components/writing-screen"
import { AnalysisScreen } from "@/components/analysis-screen"

export function Mockups() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Tabs defaultValue="home" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="home">Inicio</TabsTrigger>
          <TabsTrigger value="writing">Escritura</TabsTrigger>
          <TabsTrigger value="analysis">Análisis</TabsTrigger>
        </TabsList>
        <TabsContent value="home">
          <HomeScreen />
        </TabsContent>
        <TabsContent value="writing">
          <WritingScreen />
        </TabsContent>
        <TabsContent value="analysis">
          <AnalysisScreen />
        </TabsContent>
      </Tabs>
    </div>
  )
}

