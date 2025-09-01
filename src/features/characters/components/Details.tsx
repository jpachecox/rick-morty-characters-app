/**
 * Vista completa con todos los detalles del personaje.
 */
import { Domain } from '@/features/characters/types';

export interface DetailsProps {
  character: Domain
  onEdit?: () => void
  onDelete?: () => void
  showActions?: boolean
}

