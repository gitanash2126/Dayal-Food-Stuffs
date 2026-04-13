import { Star } from "lucide-react";
import React from "react";

const Rating = ({ value = 4 }) => {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={
            value > i ? "text-green-500 fill-green-500" : "text-gray-300"
          }
        />
      ))}
    </div>
  );
};

export default Rating;
