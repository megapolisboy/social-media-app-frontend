interface Props {
  type: string;
}

const MenuItem: React.FC<Props> = ({ type }) => {
  return <button>{type}</button>;
};
export default MenuItem;
