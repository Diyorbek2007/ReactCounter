export default function Book (props) {
  return props.name ? (
    <div>
      <h2>{(props.name) ? <span>{props.name}</span> : 'Name noaniq'}</h2>
      <p>year: {(props.year) ? <span>{props.year}</span> : 'Yil noaniq'}</p>
      <p>price: {(props.price) ? <span>{props.price}</span> : 'Narxi noaniq'}</p>
      <b>{props.children}</b>
    </div>
  ) : null
}   