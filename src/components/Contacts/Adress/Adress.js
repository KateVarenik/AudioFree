import "./Adress.css";

export default function Adress(props) {
  return (
    <div className={`contacts__adress ${props.className}`}>
      <div className="contacts__adress-image">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5 0C6.30635 0 2.89459 3.41176 2.89459 7.60536C2.89459 12.8098 9.70068 20.4501 9.99046 20.7728C10.2626 21.076 10.7378 21.0754 11.0095 20.7728C11.2993 20.4501 18.1054 12.8098 18.1054 7.60536C18.1053 3.41176 14.6936 0 10.5 0ZM10.5 11.4318C8.39007 11.4318 6.67357 9.71529 6.67357 7.60536C6.67357 5.49544 8.39011 3.77893 10.5 3.77893C12.6099 3.77893 14.3264 5.49548 14.3264 7.6054C14.3264 9.71533 12.6099 11.4318 10.5 11.4318Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="contacts__adress-text">
        <p className="contacts__adress-city">Санкт-Петербург,</p>
        <p className="contacts__adress-street">Дачный пр. 21</p>
      </div>
    </div>
  );
}
