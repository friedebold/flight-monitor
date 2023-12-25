interface Props {
  pitch: number;
}

const PitchGraph: React.FC<Props> = ({ pitch }) => {
  const bar_height = Math.abs(pitch);
  const bottom_pos = pitch < 0 ? 100 - bar_height : 100; /*  - bar_height */
  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        height: 200,
        width: 200,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "black",
          width: 5,
          height: bar_height,
          bottom: bottom_pos,
        }}
      ></div>
    </div>
  );
};

export default PitchGraph;
