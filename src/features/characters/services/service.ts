import { ENDPOINTS } from "@/api/config";
import { apiClient } from "@/api/ApiClient";
import { Api, Result } from "../../../shared/types/domain";

class CharactersService {
    async getAll(page: number = 1, name?: string): Promise<Api> {
        const params = new URLSearchParams({ page: String(page) });
        if (name) params.append("name", name);

        return await apiClient.get<Api>(
            `${ENDPOINTS.CHARACTERS}?${params.toString()}`
        );
    }

    async getById(id: string): Promise<Result> {
        return await apiClient.get<Result>(`${ENDPOINTS.CHARACTERS}/${id}`);
    }
}

export const charactersService = new CharactersService();
