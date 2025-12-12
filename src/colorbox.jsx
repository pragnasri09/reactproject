

function ColorBox({ color }) {
  return (
    <div
      style={{
        margin: "30px auto",
        width: "200px",
        height: "200px",
        backgroundColor: color,
        borderRadius: "10px",
        border: "2px solid #000",
      }}
    ></div>
  );
}

export default ColorBox;