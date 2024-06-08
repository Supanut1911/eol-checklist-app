import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Inter } from "next/font/google";
import appdata from '../data/appdata'
import { AppDataType } from "@/types/app_data_type";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-lg lg:flex ">
        EOL Checklist  ⌛️ 🛠️
      </div>

      <div className="grid grid-cols-4 gap-4">
        {appdata.map((card: AppDataType, idx) => {
          return (
            <Card className="w-[350px]" key={idx}>
              <CardHeader>
                <CardTitle>{card.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image src={card.imageUrl} alt={card.name} width={200} height={200} />
              </CardContent>
              <CardFooter>
                <Button>View more detail</Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>

    <div></div>
      
    </main>
  );
}
