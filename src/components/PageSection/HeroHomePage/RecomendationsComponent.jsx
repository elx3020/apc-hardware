import ProductCardContainer from "../Products/ProductCardContainer";

import "./style.scss";

import { filterbyCategory } from "../../../utils/utilsFunctions";
function RecomendationsComponent(props) {
  const { data } = props;

  const recommendData = filterbyCategory(data, ["recomendado", "ratones"], 3);

  return (
    <div>
      <h2>Recomendado...</h2>
      <ProductCardContainer category="recomendado" data={data} nItems={3} />
    </div>
  );
}

export default RecomendationsComponent;
