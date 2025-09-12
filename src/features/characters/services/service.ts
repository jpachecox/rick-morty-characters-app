import { ENDPOINTS } from "@/api/config";
import { apiClient } from "@/api/ApiClient";
import { CharacterResponse, Character } from "@/shared/types/domain";

/**
 * Service to interact with the Characters API
 */
class CharactersService {
    async getAll(page: number = 1, name?: string): Promise<CharacterResponse> {
        const params = new URLSearchParams({ page: String(page) });
        if (name) params.append("name", name);

        return await apiClient.get<CharacterResponse>(
            `${ENDPOINTS.CHARACTERS}?${params.toString()}`
        );
    }

    async getById(id: string): Promise<Character> {
        return await apiClient.get<Character>(`${ENDPOINTS.CHARACTERS}/${id}`);
    }
}

export const charactersService = new CharactersService();
