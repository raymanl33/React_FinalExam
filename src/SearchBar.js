import { useStore } from "./store";


export default function SearchBar() {
  const search = useStore((state) => state.search);
  const searchUpdate = useStore((state) => state.searchUpdate);
  return (
    <label>
      Search: <input onChange={(e) => searchUpdate(e.target.value)} />
      <mark>{search}</mark>
    </label>
  );
}
