"use client";

import { useRef, useState } from "react";

import { Button, Stack, Typography } from "@mui/material";
import classNames from "classnames";

import { goNext, goPrev } from "@/utils/funcs";

import "./styles.scss";

const MOCK = ["Xin chào các bạn.", "Hello world.", "Đặng Hoàng Phúc."];
const TIME_DURATION = 1000;

export const MTypingText = () => {
  //#region Data
  const textRef = useRef<null | HTMLSpanElement>(null);
  const [index, setIndex] = useState<number>(0);
  //#endregion

  //#region Event
  const onPrev = () => {
    textRef.current?.classList.remove("in");
    textRef.current?.classList.add("out");

    setTimeout(() => {
      setIndex(goPrev(index, MOCK.length));

      textRef.current?.classList.remove("out");
      textRef.current?.classList.add("in");
    }, TIME_DURATION);
  };

  const onNext = () => {
    textRef.current?.classList.remove("in");
    textRef.current?.classList.add("out");

    setTimeout(() => {
      setIndex(goNext(index, MOCK.length));

      textRef.current?.classList.remove("out");
      textRef.current?.classList.add("in");
    }, TIME_DURATION);
  };
  //#endregion

  //#region Render
  return (
    <Stack mt={10} ml={5} spacing={5}>
      <Stack direction="row" alignItems="center" gap={2}>
        <Button variant="contained" onClick={onPrev}>
          Prev
        </Button>
        <Button variant="contained" onClick={onNext}>
          Next
        </Button>
      </Stack>

      <Stack width="fit-content">
        <Typography
          ref={textRef}
          className={classNames("typing-text")}
          fontSize={22}
          fontWeight={500}
          fontFamily="var(--font-raleway)"
          sx={{ transitionDuration: `${TIME_DURATION}ms` }}
        >
          {MOCK[index]}
        </Typography>
      </Stack>
    </Stack>
  );
  //#endregion
};
