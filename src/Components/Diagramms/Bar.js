import "./Diagramm.css";

const Bar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="diagramm-bar">
      <div className="diagramm-bar__inner">
        <div
          className="diagramm-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="diagramm-bar__label">{props.label}</div>
    </div>
  );
};

export default Bar;
