import "./Mail.css";

export default function Mail(props) {
  return (
    <div className={`contacts__mail ${props.className}`}>
      <a href="mailto:hello@audiofree.ru" className="contacts__mail-image">
        <svg
          width="19"
          height="15"
          viewBox="0 0 19 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.396624 1.53118C3.0043 3.7396 7.57996 7.62487 8.9248 8.83631C9.10534 8.99981 9.29898 9.08294 9.5 9.08294C9.70061 9.08294 9.89392 9.00059 10.074 8.83787C11.42 7.62524 15.9957 3.7396 18.6034 1.53118C18.7658 1.39395 18.7905 1.15274 18.6591 0.984967C18.3552 0.597285 17.9022 0.375 17.4167 0.375H1.58334C1.09784 0.375 0.644774 0.597285 0.34096 0.985004C0.209519 1.15274 0.234271 1.39395 0.396624 1.53118Z"
            fill="currentColor"
          />
          <path
            d="M18.7704 2.72831C18.6301 2.663 18.465 2.68578 18.3483 2.78553C15.4564 5.23705 11.7656 8.3794 10.6044 9.42577C9.95262 10.0141 9.04808 10.0141 8.39481 9.42499C7.15706 8.30978 3.01239 4.78632 0.651715 2.7855C0.534189 2.68575 0.368756 2.66374 0.229596 2.72827C0.0896934 2.79325 0 2.93319 0 3.08742V13.042C0 13.9153 0.710088 14.6254 1.58335 14.6254H17.4167C18.2899 14.6254 19 13.9153 19 13.042V3.08742C19 2.93319 18.9103 2.79288 18.7704 2.72831Z"
            fill="currentColor"
          />
        </svg>
      </a>

      <div className="contacts__mail-text">
        <p className="contacts__mail-label">По всем вопросам пишите:</p>
        <a href="mailto:hello@audiofree.ru" className="contacts__mail-adress">
          hello@audiofree.ru
        </a>
      </div>
    </div>
  );
}