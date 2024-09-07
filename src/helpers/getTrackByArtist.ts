import axios from "axios";
import {
  SPOTIFY_API_ARTIST_URL,
  SPOTIFY_API_SEARCH_URL,
} from "../constants/constants";
import { getTrackByArtistProps, SpotifyTokenResponse } from "../types/types";
import getSpotifyToken from "./getSpotifyToken";

export async function getTrackByArtist({
  artistNameQuery,
}: getTrackByArtistProps) {
  try {
    const tokenData: SpotifyTokenResponse = await getSpotifyToken();
    const accessToken = tokenData.access_token;
    const artistName = artistNameQuery;
    const searchUrl = `${SPOTIFY_API_SEARCH_URL}?q=${encodeURIComponent(
      artistName
    )}&type=artist&limit=1`;

    const searchResponse = await axios.get(searchUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const artist = searchResponse.data.artists.items[0];

    const topTracksUrl = `${SPOTIFY_API_ARTIST_URL}/${artist.id}/top-tracks?market=IN`;

    const topTracksResponse = await axios.get(topTracksUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const topTracks = topTracksResponse.data.tracks;

    return topTracks;
  } catch (error) {
    console.error("Error retrieving data from Spotify API:", error);
  }
}
