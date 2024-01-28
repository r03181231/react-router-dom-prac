import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../shared/data";

function Work() {
  const params = useParams();
  console.log(params);
  //어떤 todo인지 찾아보기
  const foundData = data.find((item) => {
    return item.id === parseInt(params.id);
  });
  console.log(foundData);

  return <div>{foundData.todo}</div>;
}

export default Work;
