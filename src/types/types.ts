import {
  SEARCH_BY_ARTIST_TYPE,
  SEARCH_BY_SONG_TITLE_TYPE,
} from "../constants/constants";

export interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}

export interface getApiResultProps {
  serachByType: typeof SEARCH_BY_ARTIST_TYPE | typeof SEARCH_BY_SONG_TITLE_TYPE;
  searchQuery: string;
}

export interface getTrackByArtistProps {
  artistNameQuery: string;
}

export interface getTracksBySongTitleProps {
  songTitleQuery: string;
}

export type artist = {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type trackImage = {
  height: number;
  url: string;
  width: number;
};

export type track = {
  album: {
    album_type: string;
    artists: artist[];
    external_urls: {
      spotify: string;
    };
    id: string;
    images: trackImage[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  };
  artists: artist[];
  duration_ms: number;
  external_urls: {
    spotify: string;
  };
  id: string;
  name: string;
  popularity: number;
  preview_url: string;
};
