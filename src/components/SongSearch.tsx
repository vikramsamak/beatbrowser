import { Box, Button, Flex, Select, TextInput } from "@mantine/core";
import { useState } from "react";

function SongSearch() {
  const [searchType, setSearchType] = useState<string | null>("title");
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log(`Searching by ${searchType}: ${query}`);
  };

  return (
    <Flex gap={"sm"}>
      <Box style={{ width: "40%" }}>
        <Select
          placeholder="Choose search type"
          value={searchType}
          onChange={(value) => {
            setSearchType(value);
          }}
          data={[
            { value: "title", label: "Search by Title" },
            { value: "artist", label: "Search by Artist" },
          ]}
          style={{ width: "100%" }}
        />
      </Box>
      <Box style={{ width: "40%" }}>
        <TextInput
          placeholder={`Enter ${
            searchType === "title" ? "song title" : "artist name"
          }`}
          value={query}
          onChange={(event) => setQuery(event.currentTarget.value)}
          style={{ width: "100%" }}
        />
      </Box>
      <Box style={{ width: "20%" }}>
        <Button onClick={handleSearch} style={{ width: "100%" }}>
          Search
        </Button>
      </Box>
    </Flex>
  );
}

export default SongSearch;
