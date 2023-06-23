import React, { useEffect, useState } from "react";
import Contents from "../layout/Contents";
import YoutubeSearch from "../youtube/YoutubeSearch";
import YoutubeTag from "../youtube/YoutubeTag";
import YoutubeCont from "../youtube/YoutubeCont";
import ContTitle from "../layout/ContTitle";

const YoutubePage = () => {
  const [youtubes, setYoutubes] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&key=AIzaSyDo36Dwc5GHNMgdXRWjnfJ42bFqZjsWIXY`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=html&key=AIzaSyDo36Dwc5GHNMgdXRWjnfJ42bFqZjsWIXY&per_page=30",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <Contents>
      <ContTitle title="youtube" />
      <YoutubeSearch onSearch={search} />
      <YoutubeTag onSearch={search} />
      <YoutubeCont youtubes={youtubes} />
    </Contents>
  );
};

export default YoutubePage;
