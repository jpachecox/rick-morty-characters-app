import { ENDPOINTS } from "@/api/config";
import { apiClient } from "@/api/ApiClient";
import { LocationResponse, Location } from "@/shared/types/domain";

/**
 * Service to interact with the Locations API
 */
class LocationsService {
    async getAll(page: number = 1, name?: string): Promise<LocationResponse> {
        const params = new URLSearchParams({ page: String(page) });
        if (name) params.append("name", name);

        return await apiClient.get<LocationResponse>(
            `${ENDPOINTS.LOCATIONS}?${params.toString()}`
        );
    }

    async getById(id: string): Promise<Location> {
        return await apiClient.get<Location>(`${ENDPOINTS.LOCATIONS}/${id}`);
    }
}

export const locationsService = new LocationsService();

