import './MyLinks.scss';

const MyLinks = ({ list }) => {
  return (
    <div className="my-links">
      <p className="my-links__title">Мои ссылки</p>
      <ul className="my-links__list">
        {list.length
          ? list.map((item, index) => (
              <li className="my-links__item" key={item.id}>
                {index + 1}
                <a className="my-links__full-link" href={item.url}>
                  {item.url}
                </a>
                <a className="my-links__short-link" href={item.short_url}>
                  {item.short_url}
                </a>
                <div className="my-links__transition">
                  {item.clicks ? item.clicks : 0}
                </div>
              </li>
            ))
          : 'Здесь пока нет ссылок, введите свою ссылку в форме выше'}
      </ul>
    </div>
  );
};

export default MyLinks;
