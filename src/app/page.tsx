'use client'
import ThemeSwitcher from "@/components/nav/footer/ThemeSwitcher";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar, Button, Card, CardBody, CircularProgress } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="my-6 flex w-full items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-default-900 lg:text-3xl">Dashboard</h1>
          <p className="text-small text-default-400 lg:text-medium">Manage your deployments</p>
        </div>
        <Button

          color="primary"
          startContent={
            <Icon className="flex-none" icon="lucide:plus" width={16} />
          }
        >
          New Deployment
        </Button>
      </header>

      <Button className="mb-4" color="primary">Primary</Button>
      <Button className="mb-4 ml-4" color="secondary">Secondary</Button>
      <Button className="mb-4 ml-4" color="default">Default</Button>
      <Button className="mb-4 ml-4" color="danger">Danger</Button>
      <Button className="mb-4 ml-4" color="warning">Warning</Button>
      <Button className="mb-4 ml-4" color="success">Success</Button>
      <div className="max-w-4xl">
        <ThemeSwitcher />

        <h1>Uncovering the Health Benefits of Quinoa - Nutrition Facts and More</h1>

        <h2>Discover the nutritional powerhouse that is quinoa - a gluten-free whole grain packed with complete protein and nutrients to support your health.</h2>
        <h3>Definition of Quinoa</h3>
        <p>Quinoa, often referred to as a "super grain," is actually a seed from the Chenopodium quinoa plant. </p>
        <p>Despite its common classification as a grain, quinoa is a pseudocereal, related more closely to spinach and beets than to cereals like wheat. </p>
        <p>Its grains are tiny, round, and usually pale yellow, <a href="https://cooksa.com">though some varieties</a> are red, black, or other colors. </p>
        <p>Quinoa is revered for its nutritional completeness and is cooked similarly to rice. </p>
        <p>It stands out because it is a complete protein, containing all nine essential amino acids, which is <a href="https://cooksa.com">exceptionally rare</a> in the plant kingdom. </p>
        <p>Its versatility makes it a popular substitute for starchy grains like rice and pasta.</p>
        <h3>The History of Quinoa</h3>
        <p>Quinoa has been cultivated for thousands of years in the Andean region of South America, where it was a staple food for the Inca civilization, revered as the "mother of all grains." After the Spanish conquest, quinoa was nearly forgotten as a crop, overshadowed by crops more familiar to Europeans. It was only in the late 20th century that quinoa began to regain popularity worldwide, thanks to its robust nutritional profile and adaptability to various climates. Today, quinoa is celebrated globally for its health benefits and is considered a key component of a sustainable diet due to its relatively low water usage compared to other grains.</p>
        <h3>Health Benefits of Quinoa</h3>
        <p>Quinoa is highly nutritious and offers multiple health benefits. It is a good source of antioxidants, which help neutralize free radicals and are thought to help fight aging and many diseases. Each cup of cooked quinoa contains about 8 grams of protein and 5 grams of fiber, making it excellent for digestion and satiety. Quinoa is also rich in magnesium, iron, and manganese, minerals crucial for energy production, oxygen transport, and bone health. Additionally, because quinoa is gluten-free, it is an <a href="https://cooksa.com">excellent food choice</a> for people with celiac disease or gluten intolerance. Its high content of B vitamins and minerals supports overall metabolic functions, making it a powerful addition to any diet.</p>
        <h2>FAQs</h2>
        <h3>Is it Okay to Eat Quinoa Every Day?</h3>
        <p>Yes, it is generally safe and healthy to eat quinoa every day. As a plant-based source of protein and rich in various nutrients, incorporating quinoa into your daily diet can contribute to balanced nutrition. However, as with any food, it is important to maintain a varied diet to ensure you receive a broad spectrum of nutrients.</p>
        <h3>Why is Quinoa a Superfood?</h3>
        <p>Quinoa is considered a superfood because it is one of the few plant foods that supply complete proteins, containing all essential amino acids. It also offers a high fiber content, numerous vitamins and minerals, and antioxidants. These properties make quinoa highly beneficial for maintaining good health and preventing diseases, supporting its superfood status.</p>
        <h3>Is Quinoa Better for You Than Rice?</h3>
        <p>Quinoa is often considered healthier than rice, especially white rice, because it provides a complete set of amino acids, more fiber, and a greater variety of vitamins and minerals. Quinoa promotes better blood sugar control compared to white rice and has a lower glycemic index, making it a better choice for individuals managing diabetes.</p>
        <h3>Cons of Quinoa</h3>
        <p>Despite its many benefits, quinoa does have some downsides. It contains saponins, naturally occurring chemicals that can impart a bitter taste and may cause digestive issues for some people. While rinsing quinoa can remove most saponins, it is an extra step that is necessary before cooking. Additionally, due to its rising popularity, quinoa has become more expensive, which might limit its accessibility. Also, as it has become a high-demand crop globally, there are concerns about the sustainability of its production impacting local economies where it is a dietary staple.</p>
        <p> </p>
        <div className="flex justify-between">
          <div><CircularProgress
            classNames={{
              svg: "w-36 h-36 drop-shadow-md",
              indicator: "stroke-white/60",
              track: "stroke-secondary/10",
              value: "text-3xl font-semibold text-white/60",
              label: "text-lg",
            }}
            value={70}
            strokeWidth={4}
            showValueLabel={true}
            label="Protein"
          /></div>

        </div>
        <h3 className="text-xl py-2">Is Quinoa Better for You Than Rice?</h3>
        <p>Quinoa is often considered healthier than rice, especially white rice, because it provides a complete set of amino acids, more fiber, and a greater variety of vitamins and minerals. Quinoa promotes better blood sugar control compared to white rice and has a lower glycemic index, making it a better choice for individuals managing diabetes.</p>
        <h3 className="text-xl py-2">Cons of Quinoa</h3>
        <p>Despite its many benefits, quinoa does have some downsides. It contains saponins, naturally occurring chemicals that can impart a bitter taste and may cause digestive issues for some people. While rinsing quinoa can remove most saponins, it is an extra step that is necessary before cooking. Additionally, due to its rising popularity, quinoa has become more expensive, which might limit its accessibility. Also, as it has become a high-demand crop globally, there are concerns about the sustainability of its production impacting local economies where it is a dietary staple.</p>
        <article className="prose lg:prose-xl text-foreground bg-background">
          <h1 className="text-foreground">This is a new Tailwind Typograpy title</h1>
          <h3 className="text-foreground">Why is Quinoa a Superfood?</h3>
          <p>Quinoa is considered a superfood because it is one of the few plant foods that supply complete proteins, containing all essential amino acids. It also offers a high fiber content, numerous vitamins and minerals, and antioxidants. These properties make quinoa highly beneficial for maintaining good health and preventing diseases, supporting its superfood status.</p>
          <h3>Is Quinoa Better for You Than Rice?</h3>
          <p>Quinoa is often considered healthier than rice, especially white rice, because it provides a complete set of amino acids, more fiber, and a greater variety of vitamins and minerals. Quinoa promotes better blood sugar control compared to white rice and has a lower glycemic index, making it a better choice for individuals managing diabetes.</p>
          <h3>Cons of Quinoa</h3>
          <p>Despite its many benefits, quinoa does have some downsides. It contains saponins, naturally occurring chemicals that can impart a bitter taste and may cause digestive issues for some people. While rinsing quinoa can remove most saponins, it is an extra step that is necessary before cooking. Additionally, due to its rising popularity, quinoa has become more expensive, which might limit its accessibility. Also, as it has become a high-demand crop globally, there are concerns about the sustainability of its production impacting local economies where it is a dietary staple.</p>
        </article>
      </div>
    </div>
  );
}
