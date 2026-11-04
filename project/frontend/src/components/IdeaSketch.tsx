export const BULB_PATH =
  'M 184 8 L 184 218 C 184 246 208 247 208 218 L 208 202 C 208 177 259 161 278 128 C 316 62 267 24 201 24 C 131 24 61 32 48 88 C 34 149 91 167 117 205 C 131 225 136 244 136 265 L 136 286 Q 136 306 157 306 L 221 306 C 258 306 258 344 221 344 L 135 344 C 98 344 98 382 135 382 L 221 382 C 258 382 258 420 221 420 L 187 420 Q 168 420 168 444';
export default function IdeaSketch() {
  return (
    <figure className="idea-sketch" aria-labelledby="idea-caption">
      <div className="idea-intro">
        <p className="eyebrow mono">From a spark to something real</p>
        <h4 className="serif">
          It starts
          <br /> with an idea<span>.</span>
        </h4>
        <p className="idea-copy">
          작은 생각을 발견하고,
          <br />
          구조를 세우고, 경험으로 이어갑니다.
        </p>
      </div>
      <svg
        className="idea-bulb"
        viewBox="0 0 420 480"
        fill="none"
        role="img"
        aria-labelledby="bulb-title bulb-desc"
      >
        <title id="bulb-title">아이디어에서 경험으로 이어지는 전구 선화</title>
        <desc id="bulb-desc">
          전구의 윤곽에서 출발한 오렌지 선이 아래의 굽은 경로로 이어집니다.
        </desc>
        <text x="318" y="110" className="bulb-label">
          IDEA
        </text>
        <text x="294" y="320" className="bulb-label">
          CRAFT
        </text>
        <text x="294" y="397" className="bulb-label">
          EXPERIENCE
        </text>
      </svg>
      <figcaption id="idea-caption" className="mono">
        An idea. A process. An experience.
      </figcaption>
    </figure>
  );
}
