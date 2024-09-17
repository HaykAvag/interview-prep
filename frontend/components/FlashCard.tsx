import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Code } from "@nextui-org/code";
import { useState } from "react";

import { fontMono } from "@/config/fonts";

export default function FlashCard({
  card,
  gotoNext,
}: {
  card: {
    code: string;
    hint: string;
    description: string;
    title: string;
  };
  gotoNext: () => any;
}) {
  const [codeOpen, setCodeOpen] = useState(false);
  const [hintOpen, setHintOpen] = useState(false);

  const switchCodeOpen = () => setCodeOpen(!codeOpen);
  const switchHintOpen = () => setHintOpen(!hintOpen);

  return (
    <Card className="w-96">
      <CardHeader className="flex justify-center">
        <h1>{card.title}</h1>
      </CardHeader>

      <CardBody className="flex-col gap-3">
        <p className="whitespace-break-spaces h-auto">{card.description}</p>

        {codeOpen && (
          <Code
            className={`whitespace-break-spaces h-auto ${fontMono.variable}`}
            size="sm"
          >
            {card.code}
          </Code>
        )}

        {hintOpen && (
          <p className={`whitespace-break-spaces h-auto italic text-amber-300`}>
            {card.hint}
          </p>
        )}

        <div className="flex justify-between gap-4">
          <Button className="w-full" color="warning" onClick={switchHintOpen}>
            {hintOpen ? "Hide Hint" : "Show Hint"}
          </Button>
          <Button className="w-full" onClick={switchCodeOpen}>
            {codeOpen ? "Hide Code" : "Show Code"}
          </Button>
        </div>

        <div className="flex justify-between gap-4">
          <Button className="w-full" color="primary" onClick={gotoNext}>
            I knew this
          </Button>
          <Button className="w-full" color="danger" onClick={gotoNext}>
            Next
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
