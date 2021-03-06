import React from "react";

export default function SelectedFoods(props) {
  const { foods } = props;

  const foodRows = foods.map((food, idx) => (
    <tr key={idx} onClick={() => props.onFoodClick(idx)}>
      <td>{food.description}</td>
      <td className="right aligned">{food.kcal}</td>
      <td className="right aligned">{food.protein_g}</td>
      <td className="right aligned">{food.fat_g}</td>
      <td className="right aligned">{food.carbohydrate_g}</td>
      <td className="right aligned">{food.modbus_addr}</td>
    </tr>
  ));

  return (
    <table className="ui selectable structured large table">
      <thead>
        <tr>
          <th colSpan="6">
            <h3>Selected foods</h3>
          </th>
        </tr>
        <tr>
          <th className="eight wide">Description</th>
          <th>Kcal</th>
          <th>Protein (g)</th>
          <th>Fat (g)</th>
          <th>Carbs (g)</th>
          <th>Modbus</th>
        </tr>
      </thead>
      <tbody>
        {foodRows}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th className="right aligned" id="total-kcal">
            {sum(foods, "kcal")}
          </th>
          <th className="right aligned" id="total-protein_g">
            {sum(foods, "protein_g")}
          </th>
          <th className="right aligned" id="total-fat_g">
            {sum(foods, "fat_g")}
          </th>
          <th className="right aligned" id="total-carbohydrate_g">
            {sum(foods, "carbohydrate_g")}
          </th>
          <th className="right aligned" id="max-modbus_addr">
            {max(foods, "modbus_addr")}
          </th>
        </tr>
      </tfoot>
    </table>
  );
}

function sum(foods, prop) {
  return foods
    .reduce((memo, food) => parseInt(food[prop], 10) + memo, 0.0)
    .toFixed(2);
}

function max(foods, prop) {
  return foods
  .reduce((memo, food) => Math.max(parseInt(food[prop], 10), memo), 0)
  .toFixed(0);  
}
