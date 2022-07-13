import Pagination from '../Pagination/Pagination';
import './LinksList.scss';

const LinksList = ({ list, pagination, onChangePage }) => {
  return (
    <div className="links-list">
      <p className="links-list__title">Список ссылок</p>
      <ul className="links-list__list">
        {list.map((item) => (
          <li className="links-list__item" key={item.id}>
            {item.id}
            <a className="links-list__full-link" href={item.url}>
              {item.url}
            </a>
            <a className="links-list__short-link" href={item.short_url}>
              {item.short_url}
            </a>
            <div className="links-list__transition">{item.clicks}</div>
          </li>
        ))}
      </ul>

      <Pagination onChangePage={onChangePage} {...pagination} />
    </div>
  );
};

export default LinksList;
