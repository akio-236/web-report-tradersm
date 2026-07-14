import apiClient from "../api/client";
import { API_ENDPOINTS } from "../api/endpoints";

export interface HealthResponse {
  status: string;
  message: string;
}

export const getHealth = async (): Promise<HealthResponse> => {
  const response = await apiClient.get<HealthResponse>(
    API_ENDPOINTS.HEALTH
  );

  return response.data;
};