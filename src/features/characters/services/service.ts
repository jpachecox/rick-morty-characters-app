import { ENDPOINTS } from "@/api/config";
import { apiClient } from "@/api/ApiClient";
import { Api, Domain, mapApiToDomain } from "../types";
import { ApiResponse } from "@/shared/types/pagination.types";

class CharactersService {
    async getAll(page: number = 1, name?: string): Promise<ApiResponse<Domain>> {
        const params = new URLSearchParams({ page: String(page) });
        if (name) params.append("name", name);

        const data = await apiClient.get<ApiResponse<Api>>(
            `${ENDPOINTS.CHARACTERS}?${params.toString()}`
        );

        return {
            info: data.info,
            results: data.results.map(mapApiToDomain),
        };
    }

    async getById(id: string): Promise<Domain> {
        const data = await apiClient.get<Api>(`${ENDPOINTS.CHARACTERS}/${id}`);
        return mapApiToDomain(data);
    }
}

export const charactersService = new CharactersService();
