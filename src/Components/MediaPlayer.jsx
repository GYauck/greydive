import React from "react";

const MediaPlayer = ({ data }) => {
  return (
    <div className="relative my-20">
      <video src={data.linkVideo} controls></video>
    </div>
  );
};

export default MediaPlayer;

{
  /* <div className="relative pb-[56.22254758418741%] h-0 pt-60 mt-12">
      <iframe src="https://www.loom.com/embed/ef400f7229a94bbeab7ae4f731e54c73" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true" className="absolute top-0 left-0 h-full w-full"></iframe>
</div> */
}
