"use client";
import useSWR from "swr";
import React, { useState } from "react";
import Title from "@/components/Title";
import { Card, Input, Button, Link } from "@nextui-org/react";
import { today } from "@internationalized/date";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(today("Asia/Seoul"));

  return (
    <>
      <Card
        className="flex flex-row justify-between items-center px-20 mt-4"
        shadow="sm"
      >
        <Title text="화면 공유" />
        <div>
          <Input
            type="date"
            labelPlacement="outside-left"
            label="날짜별 보기"
          />
        </div>
        <Link href="/job">
          <Button color="primary">
            <FiArrowRight /> <p>이동하기</p>
          </Button>
        </Link>
      </Card>
      <Card
        className="flex flex-row justify-between items-center px-20 mt-4"
        shadow="sm"
      >
        <Title text="취업/자격증" />
        <Link href="/job">
          <Button color="primary">
            <FiArrowRight /> <p>이동하기</p>
          </Button>
        </Link>
      </Card>
      <Card
        className="flex flex-row justify-between items-center px-20 mt-4"
        shadow="sm"
      >
        <Title text="필기 공유" />

        <Link href="/job">
          <Button color="primary">
            <FiArrowRight /> <p>이동하기</p>
          </Button>
        </Link>
      </Card>
    </>
  );
}
