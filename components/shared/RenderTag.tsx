import Link from "next/link";
import { Badge } from "@/components/ui/badge";

import React from "react";
interface Props {
  key: number;
  _id: number;
  name: string;
  totalQuestions?: number;
  showcount?: boolean;
}

const RenderTag = ({ key, _id, name, totalQuestions, showcount }: Props) => {
  return (
    //    <div> {name} - {totalQuestions} </div>
    <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded:md border-none px-4 py-2 uppercase ">{name}</Badge>
      {
        showcount&&(
            <p className="small-medium">{totalQuestions}</p>
        )
      }
    </Link>
  );
};

export default RenderTag;
