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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const cardArr = [1,2,3,4,5,6,7,8]

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex ">
        EOL Checklist 
      </div>

      <div className="grid grid-cols-4 gap-4">
        {cardArr.map((card, idx) => {
          return (
            <Card className="w-[350px]" key={idx}>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <Button>Button</Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>

    <div>test</div>
      
    </main>
  );
}
