/**
 * Formulario completo para crear y editar personajes
 */
import { Domain } from '@/features/characters/types/domain';

export interface FormProps {
    character?: Domain 
    onSubmit: (data: FormData) => void
    onCancel?: () => void
    isLoading?: boolean
}
