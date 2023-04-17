import { DETAIL_BOARD_INFO } from "../../data/hardcodes";

function DetailBoard() {
  return (
    <div>
      <label>Details</label>
      <ul>
        {DETAIL_BOARD_INFO.map((item) => (
          <div>
            <span>{Object.keys(item)[0]}</span>
            <span>{Object.values(item)[0]}</span>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default DetailBoard;
