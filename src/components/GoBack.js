import React from "react";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

export default function GoBack() {
    return (
      <button>
        <BsFillArrowLeftCircleFill className="gotop" onClick={() => window.history.back()} aria-label="goback" />
      </button>
    );
};

