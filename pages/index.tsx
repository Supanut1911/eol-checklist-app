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
import { PlatformInfo } from "@/types/app_data";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl items-center justify-between font-mono text-4xl lg:flex mb-12">
        EOL Checklist  ⌛️ 🛠️
      </div>


      <div className="grid grid-cols-4 gap-4 ">
        {appdata.map((card: PlatformInfo, idx) => {
          return (
              <Card key={idx} className="w-[350px] flex flex-col justify-between" >
              <CardHeader>
                <CardTitle >{card.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <Image src={card.imageUrl} alt={card.name} width={200} height={200} />
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Link href={`/platform/${card.name}`}>View EOL</Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>

    <div></div>
      
    </main>
  );
}
