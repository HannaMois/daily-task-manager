import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.container}>
      <svg
        className={css.pencil}
        viewBox="0 0 200 200"
        width="200px"
        height="200px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id={css['pencil-eraser']}>
            <rect rx="5" ry="5" width="20" height="20"></rect>
          </clipPath>
        </defs>
        <circle
          className={css.pencil__stroke}
          r="70"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="439.82 439.82"
          strokeDashoffset="439.82"
          strokeLinecap="round"
          transform="rotate(-113,100,100)"
        />
        <g className={css.pencil__rotate} transform="translate(100,100)">
          <g fill="none">
            <circle
              className={css.pencil__body1}
              r="64"
              stroke="hsl(247, 38%, 60%)"
              strokeWidth="30"
              strokeDasharray="402.12 402.12"
              strokeDashoffset="402"
              transform="rotate(-90)"
            />
            <circle
              className={css.pencil__body2}
              r="74"
              stroke="hsl(247, 70%, 78%)"
              strokeWidth="10"
              strokeDasharray="464.96 464.96"
              strokeDashoffset="465"
              transform="rotate(-90)"
            />
            <circle
              className={css.pencil__body3}
              r="54"
              stroke="hsl(247, 57%, 60%)"
              strokeWidth="10"
              strokeDasharray="339.29 339.29"
              strokeDashoffset="339"
              transform="rotate(-90)"
            />
          </g>
          <g
            className={css.pencil__eraser}
            transform="rotate(-90) translate(49,0)"
          >
            <g className={css.pencil__eraser_skew}>
              <rect
                fill="hsl(250, 6%, 81%)"
                rx="5"
                ry="5"
                width="30"
                height="30"
              />
              <rect
                fill="hsl(251, 7%, 73%)"
                width="5"
                height="30"
                clipPath="url(#pencil-eraser)"
              />
              <rect fill="hsl(228, 5%, 80%)" width="30" height="20" />
              <rect fill="hsl(223,10%,70%)" width="15" height="20" />
              <rect fill="hsl(223,10%,80%)" width="5" height="20" />
              <rect fill="hsla(223,10%,10%,0.2)" y="6" width="30" height="2" />
              <rect fill="hsla(223,10%,10%,0.2)" y="13" width="30" height="2" />
            </g>
          </g>
          <g
            className={css.pencil__point}
            transform="rotate(-90) translate(49,-30)"
          >
            <polygon fill="hsl(33,90%,70%)" points="15 0,30 30,0 30" />
            <polygon fill="hsl(33,90%,50%)" points="15 0,6 30,0 30" />
            <polygon fill="hsl(223,10%,10%)" points="15 0,20 10,10 10" />
          </g>
        </g>
      </svg>
    </div>
  );
};
