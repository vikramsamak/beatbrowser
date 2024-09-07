import { Box, Button, Flex, Select, TextInput } from "@mantine/core";
import { SetStateAction } from "react";
import {
  SEARCH_BY_ARTIST_TYPE,
  SEARCH_BY_SONG_TITLE_TYPE,
} from "../constants/constants";

interface SongSearchProps {
  setSearchType: React.Dispatch<
    SetStateAction<
      typeof SEARCH_BY_ARTIST_TYPE | typeof SEARCH_BY_SONG_TITLE_TYPE
    >
  >;
  setSearchQuery: React.Dispatch<SetStateAction<string>>;
  searchType: typeof SEARCH_BY_ARTIST_TYPE | typeof SEARCH_BY_SONG_TITLE_TYPE;
  searchQuery: string;
  handleSearch: () => void;
}

function SongSearch({
  searchType,
  searchQuery,
  setSearchType,
  setSearchQuery,
  handleSearch,
}: SongSearchProps) {
  return (
    <Flex gap={"sm"}>
      <Box style={{ width: "40%" }}>
        <Select
          placeholder="Choose search type"
          value={searchType}
          onChange={(value) => {
            if (value === SEARCH_BY_ARTIST_TYPE) {
              setSearchType(SEARCH_BY_ARTIST_TYPE);
            } else if (value === SEARCH_BY_SONG_TITLE_TYPE) {
              setSearchType(SEARCH_BY_SONG_TITLE_TYPE);
            }
          }}
          data={[
            { value: SEARCH_BY_SONG_TITLE_TYPE, label: "Search by Title" },
            { value: SEARCH_BY_ARTIST_TYPE, label: "Search by Artist" },
          ]}
          style={{ width: "100%" }}
        />
      </Box>
      <Box style={{ width: "40%" }}>
        <TextInput
          placeholder={`Enter ${
            searchType === SEARCH_BY_SONG_TITLE_TYPE
              ? "song title"
              : "artist name"
          }`}
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.currentTarget.value)}
          style={{ width: "100%" }}
        />
      </Box>
      <Box style={{ width: "20%" }}>
        <Button style={{ width: "100%" }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
    </Flex>
  );
}

export default SongSearch;
