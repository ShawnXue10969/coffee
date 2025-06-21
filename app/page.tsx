import Banner from "@/components/banner.client";
import Card from "@/components/card.server";

export default function Home() {
  const coffeeStoreId = "dark-horse-coffee";
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Banner />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
          <Card
            name="Dark Horse Coffee"
            imgUrl=""
            href={`/coffee-store/${coffeeStoreId}`}
          ></Card>
        </div>
      </main>
    </div>
  );
}
