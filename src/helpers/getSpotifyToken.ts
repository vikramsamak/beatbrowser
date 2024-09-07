import axios from "axios";
import { SPOTIFY_API_TOKEN_URL } from "../constants/constants";
import { SpotifyTokenResponse } from "../types/types";

async function getSpotifyToken(): Promise<SpotifyTokenResponse> {
  const data = {
    grant_type: "client_credentials",
    client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID as string,
    client_secret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET as string,
  };

  try {
    const response = await axios.post<SpotifyTokenResponse>(
      SPOTIFY_API_TOKEN_URL,
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching Spotify token:", error);
    throw new Error("Failed to retrieve access token");
  }
}

export default getSpotifyToken;
