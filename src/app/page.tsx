import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <Button color="primary">Click me</Button>
      <Button color="secondary" className="ml-4">Click me</Button>
    </div>
  );
}
