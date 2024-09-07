import { Flex } from "@mantine/core";
import SongSearch from "./SongSearch";
import SongView from "./SongView";

import { useState } from "react";
import {
  SEARCH_BY_ARTIST_TYPE,
  SEARCH_BY_SONG_TITLE_TYPE,
} from "../constants/constants";
import { useQuery } from "@tanstack/react-query";
import { getApiResult } from "../helpers/getApiResult";

function MainView() {
  const [searchType, setSearchType] = useState<
    typeof SEARCH_BY_ARTIST_TYPE | typeof SEARCH_BY_SONG_TITLE_TYPE
  >(SEARCH_BY_SONG_TITLE_TYPE);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const SEARCH_QUERYKEY = [searchType, searchQuery];

  const { data, isFetching, isError, error, refetch } = useQuery({
    queryFn: () =>
      getApiResult({ searchQuery: searchQuery, serachByType: searchType }),
    queryKey: SEARCH_QUERYKEY,
    enabled: false,
  });

  return (
    <Flex direction={"column"} gap={"sm"}>
      <SongSearch
        setSearchType={setSearchType}
        searchType={searchType}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        handleSearch={refetch}
      />
      <SongView
        data={data}
        error={error}
        isError={isError}
        isFetching={isFetching}
      />
    </Flex>
  );
}

export default MainView;
