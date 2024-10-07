import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fetchUsers } from "../utils/utils";
import SearchBar from "./SearchBar";
import { useDebounce } from "../hooks/useDebounce";

function DebounceDemo() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  const debounceSearch = useDebounce(search);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const users = await fetchUsers(debounceSearch);
      setUsers(users);
      setLoading(false);
    };
    loadUsers();
  }, [debounceSearch]);

  return (
    <div>
      <SearchBar onChange={setSearch} />
      {loading && <div>loading...</div>}
      {!loading &&
        users.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
    </div>
  );
}

export default DebounceDemo;
