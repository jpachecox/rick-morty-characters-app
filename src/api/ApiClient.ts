class ApiClient {
    async get<T>(url: string, query: string = ""): Promise<T> {
        try {
            const response = await fetch(`${url}${query}`);
            if (!response.ok) {
                throw new Error(`Error al hacer GET en ${url}: ${response.status}`);
            }

            return (await response.json()) as T;
        } catch (error) {
            console.error("ApiClient.get error:", error);
            throw error;
        }
    }
}

export const apiClient = new ApiClient();
