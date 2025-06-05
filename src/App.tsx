import "./App.css";

function App() {
  return (
    <div
      className="h-svh w-svw"
      style={{
        background:
          "linear-gradient(155deg, #000000 0%, rgb(11, 0, 74) 38.500080333246004%, rgb(0, 73, 184) 74.85924410434251%, rgb(48, 131, 236) 100%)",
      }}
    >
      <MarqueeDemoVertical />
    </div>
  );
}

export default App;

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    img: "https://framerusercontent.com/images/Wt9C69zC4PM1lWqTEosfVNj6do8.png?scale-down-to=1024",
  },
  {
    img: "https://framerusercontent.com/images/b97XMhB8TUN8Xs4kt4d7tuinqw.png?scale-down-to=1024",
  },
  {
    img: "https://framerusercontent.com/images/uJsl9iIiM5WlSqK2Efj2lPfvSvg.png?scale-down-to=1024",
  },
  {
    img: "https://framerusercontent.com/images/PvLzm4rTHhoYifPPFlGFVSOo.png?scale-down-to=1024",
  },
  {
    img: "https://framerusercontent.com/images/ltWXYcIKMr48JlioIC2HGF9f8.png?scale-down-to=1024",
  },
  {
    img: "https://framerusercontent.com/images/VYwFny1dOY4auaqcz0u21q0VqBA.png?scale-down-to=1024",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-full cursor-default overflow-hidden rounded-xl border-0 opacity-70 hover:opacity-90 duration-300"
      )}
    >
      <img
        className="rounded-none h-full w-full"
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
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee
        vertical
        className="hidden sm:flex [--duration:95s] [--gap:8px] p-1 flex-1"
      >
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee
        vertical
        className="hidden md:flex [--duration:70s] [--gap:8px] p-1 h-full flex-1"
      >
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee
        vertical
        className="hidden md:flex [--duration:120s] [--gap:8px] p-1 flex-1"
      >
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div> */}
      {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div> */}
    </div>
  );
}
