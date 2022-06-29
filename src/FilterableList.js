import SearchBar from "./SearchBar";
import List from "./List";
import { useStore } from "./store";
import { foods } from "./data.js";

export default function FilterableList() {
  const search = useStore((state) => state.search);
  const results = filterItems(foods, search);

  function filterItems(items, search) {
    search = search.toLowerCase();
    let filteredItems = items.filter((item, i) =>
      item.name.split(" ").some((word) => {
        return word.toLowerCase().startsWith(search);
      })
    );
    return highlightItems(filteredItems, search);
  }
  
  function highlightItems(filteredItems, q) {
    return filteredItems.map((obj) => ({
      ...obj,
      name: obj.name.replace(new RegExp("(" + q + ")", "ig"), "<mark>$1</mark>"),
      description: obj.description.replace(
        new RegExp("(" + q + ")", "ig"),
        "<mark>$1</mark>"
      )
    }));
  }

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar query={search} onChange={handleChange} />
      <hr />
      <List items={results} />
    </>
  );
}
