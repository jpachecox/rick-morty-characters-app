import { ENDPOINTS } from "@/api/config";
import { apiClient } from "@/api/ApiClient";
import { Api, Domain, mapApiToDomain } from "../types";

class CharactersService {
    async getAll(page: number = 1, name?: string): Promise<Domain[]> {
        const params = new URLSearchParams({ page: String(page) });
        if (name) params.append("name", name);

        const data = await apiClient.get<{ results: Api[] }>(
            `${ENDPOINTS.CHARACTERS}?${params.toString()}`
        );

        return (data.results as Api[]).map(mapApiToDomain);
    }

    async getById(id: string): Promise<Domain> {
        const data = await apiClient.get<Api>(`${ENDPOINTS.CHARACTERS}/${id}`);
        return mapApiToDomain(data);
    }
}

export const charactersService = new CharactersService();
