import axios from "axios";
import {
  getTracksBySongTitleProps,
  SpotifyTokenResponse,
  track,
} from "../types/types";
import getSpotifyToken from "./getSpotifyToken";

export async function getTracksBySongTitle({
  songTitleQuery,
}: getTracksBySongTitleProps): Promise<track[]> {
  const searchUrl = `https://api.spotify.com/v1/search`;

  try {
    const tokenData: SpotifyTokenResponse = await getSpotifyToken();
    const accessToken = tokenData.access_token;
    const response = await axios.get(searchUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        q: songTitleQuery,
        type: "track",
        limit: 10,
      },
    });

    const tracks = response.data.tracks.items;

    return tracks;
  } catch (error) {
    console.error("Error fetching tracks by song title:", error);
    throw new Error("Failed to retrieve tracks");
  }
}
