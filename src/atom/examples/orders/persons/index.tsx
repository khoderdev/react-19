import { useState } from "react";
import Cars from "./Cars";
import Person from "./Person";

export default function index() {
  const [showCar, setShowCar] = useState(false);

  function Car() {
    if (showCar)
      return (
        <div>
          <Cars model="BMW" year="2024" color="Black" />
        </div>
      );
  }

  function Persons() {
    return (
      <div>
        <Person
          name="Khoder"
          email="Khoder@gmail.com"
          age="28"
          nationality="lebanese"
        />
      </div>
    );
  }

  const hanleShowCar = () => {
    setShowCar(true);
  };
  const hanleHidewCar = () => {
    setShowCar(false);
  };

  return (
    <>
      <Persons />

      <div className="flex gap-2">
        <button
          onClick={hanleShowCar}
          className="btn-main-normal mb-6 self-center"
        >
          Show Car
        </button>
        <button
          onClick={hanleHidewCar}
          className="btn-main-normal mb-6 self-center"
        >
          Hide Car
        </button>
      </div>

      <Car />
    </>
  );
}
