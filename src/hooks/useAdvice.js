import { useEffect, useState } from "react";
import { getData } from "../services/api/adviceApi";

const getAdviceData = async () => {
  try {
    const res = await getData();
    const adviceObject = {
      idAdvice: res.slip.id,
      advice: res.slip.advice,
    };

    return adviceObject;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};

export const useAdvice = (change) => {
  const [id, setId] = useState(0);
  const [advice, setAdvice] = useState("");
  useEffect(
    function () {
      getAdviceData().then((adviceObject) => {
        setId(adviceObject.idAdvice);
        setAdvice(adviceObject.advice);
      });
    },
    [change]
  );
  return { id, advice };
};
