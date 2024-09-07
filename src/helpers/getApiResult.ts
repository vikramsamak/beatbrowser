import { getApiResultProps } from "../types/types";
import {
  SEARCH_BY_ARTIST_TYPE,
  SEARCH_BY_SONG_TITLE_TYPE,
} from "../constants/constants";
import { getTrackByArtist } from "./getTrackByArtist";
import { getTracksBySongTitle } from "./getTracksBySongTitle";

export async function getApiResult({
  serachByType,
  searchQuery,
}: getApiResultProps) {
  switch (serachByType) {
    case SEARCH_BY_ARTIST_TYPE:
      return getTrackByArtist({ artistNameQuery: searchQuery });

    case SEARCH_BY_SONG_TITLE_TYPE:
      return getTracksBySongTitle({ songTitleQuery: searchQuery });
  }
}
