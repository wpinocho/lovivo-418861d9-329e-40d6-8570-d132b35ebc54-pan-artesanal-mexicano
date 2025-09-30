import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="bg-secondary border border-primary/20 overflow-hidden hover-glow transition-all duration-300 group">
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-black overflow-hidden relative">
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm">
              Sin imagen
            </div>
          )}
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-white font-bold text-xl line-clamp-1 group-hover:text-primary transition-colors">
              {collection.name}
            </h3>
            {collection.featured && (
              <span className="bg-primary text-black text-xs px-3 py-1 rounded-full font-bold whitespace-nowrap ml-2">
                Destacado
              </span>
            )}
          </div>
          
          {collection.description && (
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {collection.description}
            </p>
          )}
          
          <Button 
            onClick={() => onViewProducts(collection.id)}
            className="w-full bg-primary hover:bg-primary/90 text-black font-bold hover-glow transition-all"
          >
            Ver Productos
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}