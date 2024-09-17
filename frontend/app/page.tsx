"use client";
import { useState, useEffect } from "react";

import FlashCard from "@/components/FlashCard";
import Finish from "@/components/Finish";

export default function Page() {
  const [flashcards, setFlashcards] = useState<
    | [
        {
          code: string;
          hint: string;
          description: string;
          title: string;
        },
      ]
    | null
  >(null);

  const [currIndex, setCurrIndex] = useState(0);

  const goToNext = () => {
    setCurrIndex(currIndex + 1);
  };

  useEffect(() => {
    async function fetchPosts() {
      let res = await fetch("http://localhost:8080/");
      let data = await res.json();

      setFlashcards(data);
    }

    fetchPosts();
  }, []);

  if (flashcards) {
    return (
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        {flashcards[currIndex]?.title ? (
          <FlashCard
            key={flashcards[currIndex].title}
            card={flashcards[currIndex]}
            gotoNext={goToNext}
          />
        ) : (
          <Finish />
        )}
      </section>
    );
  } else {
    return <p>Error</p>;
  }
}
