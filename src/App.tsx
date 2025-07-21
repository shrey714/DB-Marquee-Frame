import "./App.css";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
type Review = { img: string };

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
      <p className="leading-0 text-[1px]">random text</p>
    </div>
  );
}

const reviews: { img: string }[] = [
  {
    img: "/23.webp",
  },
  {
    img: "/9.webp",
  },
  {
    img: "/15.webp",
  },
  {
    img: "/1.png",
  },
  {
    img: "/29.webp",
  },
  {
    img: "/34.webp",
  },
  {
    img: "/7.png",
  },
  {
    img: "/8.webp",
  },
  {
    img: "/2.png",
  },
  {
    img: "/10.webp",
  },
  {
    img: "/11.webp",
  },
  {
    img: "/12.webp",
  },
  {
    img: "/13.webp",
  },
  {
    img: "/14.webp",
  },
  {
    img: "/3.png",
  },
  {
    img: "/16.webp",
  },
  {
    img: "/17.webp",
  },
  {
    img: "/18.webp",
  },
  {
    img: "/19.webp",
  },
  {
    img: "/20.webp",
  },
  {
    img: "/21.webp",
  },
  {
    img: "/22.webp",
  },
  {
    img: "/4.png",
  },
  {
    img: "/24.webp",
  },
  {
    img: "/25.webp",
  },
  {
    img: "/26.webp",
  },
  {
    img: "/27.webp",
  },
  {
    img: "/28.webp",
  },
  {
    img: "/5.png",
  },
  {
    img: "/30.webp",
  },
  {
    img: "/31.webp",
  },
  {
    img: "/32.webp",
  },
  {
    img: "/33.webp",
  },
  {
    img: "/6.png",
  },
  {
    img: "/35.webp",
  },
  {
    img: "/36.webp",
  },
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
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee vertical className="[--duration:60s] [--gap:8px] p-1 flex-1">
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee
        vertical
        className="hidden sm:flex [--duration:110s] [--gap:8px] p-1 h-full flex-1"
      >
        {thirdRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee
        vertical
        className="hidden sm:flex [--duration:95s] [--gap:8px] p-1 flex-1"
      >
        {fourthRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee
        vertical
        className="hidden md:flex [--duration:70s] [--gap:8px] p-1 h-full flex-1"
      >
        {fifthRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee
        vertical
        className="hidden md:flex [--duration:100s] [--gap:8px] p-1 flex-1"
      >
        {sixthRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div> */}
      {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div> */}
    </div>
  );
}

export default App;
