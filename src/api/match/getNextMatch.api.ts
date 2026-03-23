import type { IApiResponse } from "@/interface/responseApi.interface";
import api from "@/lib/axios.lib";

export type MatchType = "HOME" | "AWAY" | "NEUTRAL";
export type MatchStatus = "UPCOMING" | "ONGOING" | "FINISHED" | "CANCELLED";

export interface IMatch {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  opponent: string;
  matchDate: string;
  matchType: MatchType;
  status: MatchStatus;
  opponentLogo: string;
  opponentLogoPublicId: string;
  location: string;
  season: string;
  opponentScore: number | null;
  teamScore: number | null;
}

export interface IPaginationMeta {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface IMatchListPayload {
  data: IMatch[];
  meta: IPaginationMeta;
}

export async function getNextMatch() {
  try {
    const response = await api.get<IApiResponse<IMatchListPayload>>(
      "/matches?limit=1&status=SCHEDULED&sortOrder=asc",
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch next match:", error);
    throw error;
  }
}
