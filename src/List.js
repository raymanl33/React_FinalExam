export default function List({ items }) {
  return (
    <table>
      {items.map((food) => (
        <tr key={food.id}>
          <td dangerouslySetInnerHTML={{ __html: food.name }}></td>
          <td dangerouslySetInnerHTML={{ __html: food.description }}></td>
        </tr>
      ))}
    </table>
  );
}
