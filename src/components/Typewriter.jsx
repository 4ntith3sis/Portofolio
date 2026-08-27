"use client";

import { useState, useEffect } from "react";

const WORDS = ["Fullstack Developer", "UI/UX Designer"];
const TYPE_SPEED = 100;     // 80–120ms per character
const DELETE_SPEED = 60;    // 50–80ms per character
const PAUSE_END = 1800;     // 1.5–2s pause on complete word
const PAUSE_EMPTY = 400;    // 300–500ms pause when empty

export default function Typewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const targetWord = WORDS[wordIndex];

    if (!isDeleting) {
      if (currentText.length < targetWord.length) {
        timeout = setTimeout(() => {
          setCurrentText(targetWord.slice(0, currentText.length + 1));
        }, TYPE_SPEED);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_END);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(targetWord.slice(0, currentText.length - 1));
        }, DELETE_SPEED);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % WORDS.length);
        }, PAUSE_EMPTY);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, wordIndex]);

  return (
    <div className="inline-flex items-center border-l-2 border-accent pl-4 py-1 mb-8 min-h-[2.25rem] sm:min-h-[2.5rem]">
      <p className="font-mono text-sm sm:text-base font-semibold tracking-wider text-foreground uppercase flex items-center select-none">
        <span>{currentText}</span>
        <span className="inline-block text-accent font-bold ml-1 animate-blink">|</span>
      </p>
    </div>
  );
}
