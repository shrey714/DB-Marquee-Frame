import "./App.css";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
type Review = string;

function splitIntoRandomRows(reviews: Review[], rows: number = 6): Review[][] {
  if (reviews.length < rows * 6) {
    throw new Error("Not enough images to fill all rows with 6 unique images.");
  }

  // Shuffle the array
  const shuffled = [...reviews].sort(() => Math.random() - 0.5);

  // Split into chunks of 6
  const result: Review[][] = [];
  for (let i = 0; i < rows; i++) {
    result.push(shuffled.slice(i * 6, (i + 1) * 6));
  }

  return result;
}

function App() {
  return (
    <div
      className="h-svh w-svw"
      style={{
        background:
          "linear-gradient(160deg, #020617 0%, #081C4F 35%, #0B3B7B 70%, #2A7FD0 100%)",
      }}
    >
      <MarqueeDemoVertical />
      <p className="sr-only">random text</p>
    </div>
  );
}

const reviews: string[] = [
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/23.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/9.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/15.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/1.png",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/29.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/34.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/7.png",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/8.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/2.png",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/10.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/11.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/12.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/13.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/14.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/3.png",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/16.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/17.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/18.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/19.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/20.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/21.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/22.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/4.png",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/24.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/25.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/26.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/27.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/28.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/5.png",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/30.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/31.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/32.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/33.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/6.png",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/35.webp",
  "https://neumbsedgujywvok.public.blob.vercel-storage.com/36.webp",
];

const rows = splitIntoRandomRows(reviews);

const [firstRow, secondRow, thirdRow, fourthRow, fifthRow, sixthRow] = rows;

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-full cursor-default overflow-hidden border-0 opacity-70 hover:opacity-90 duration-300"
      )}
    >
      <img
        className="rounded-xl h-full w-full"
        width="32"
        height="32"
        alt=""
        src={img}
      />
    </figure>
  );
};

function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-full w-full flex-row items-center justify-center overflow-hidden fade-in px-1 sm:px-2">
      <Marquee
        vertical
        className="[--duration:100s] [--gap:8px] p-1 h-full flex-1"
      >
        {firstRow.map((review, index) => (
          <ReviewCard key={index} img={review} />
        ))}
      </Marquee>
      <Marquee vertical className="[--duration:60s] [--gap:8px] p-1 flex-1">
        {secondRow.map((review, index) => (
          <ReviewCard key={index} img={review} />
        ))}
      </Marquee>
      <Marquee
        vertical
        className="hidden sm:flex [--duration:110s] [--gap:8px] p-1 h-full flex-1"
      >
        {thirdRow.map((review, index) => (
          <ReviewCard key={index} img={review} />
        ))}
      </Marquee>
      <Marquee
        vertical
        className="hidden sm:flex [--duration:95s] [--gap:8px] p-1 flex-1"
      >
        {fourthRow.map((review, index) => (
          <ReviewCard key={index} img={review} />
        ))}
      </Marquee>
      <Marquee
        vertical
        className="hidden md:flex [--duration:70s] [--gap:8px] p-1 h-full flex-1"
      >
        {fifthRow.map((review, index) => (
          <ReviewCard key={index} img={review} />
        ))}
      </Marquee>
      <Marquee
        vertical
        className="hidden md:flex [--duration:100s] [--gap:8px] p-1 flex-1"
      >
        {sixthRow.map((review, index) => (
          <ReviewCard key={index} img={review} />
        ))}
      </Marquee>
    </div>
  );
}

export default App;
