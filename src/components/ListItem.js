export default function ListItem(props) {
  return (
    <li>
      <a target="_blank" rel="noreferrer" href={props.url}>
        <img src={props.urlImage} alt={props.alt} />
      </a>
    </li>
  );
}
