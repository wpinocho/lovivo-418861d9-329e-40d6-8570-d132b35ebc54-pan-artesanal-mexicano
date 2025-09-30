import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard"
import type { Product } from "@/lib/supabase"

interface ProductCardUIProps {
  product: Product
}

export const ProductCardUI = ({ product }: ProductCardUIProps) => {
  return (
    <HeadlessProductCard product={product}>
      {(logic) => (
        <Card className="bg-secondary border border-primary/20 hover-glow transition-all duration-300 overflow-hidden group">
          <CardContent className="p-0">
            <Link to={`/products/${logic.product.slug}`} className="block">
              <div className="aspect-square bg-black overflow-hidden relative">
                {(logic.matchingVariant?.image || (logic.product.images && logic.product.images.length > 0)) ? (
                  <img
                    src={(logic.matchingVariant?.image as any) || logic.product.images![0]}
                    alt={logic.product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-600">
                    Sin imagen
                  </div>
                )}

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {logic.discountPercentage && (
                    <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                      -{logic.discountPercentage}%
                    </span>
                  )}
                  {logic.product.featured && (
                    <span className="bg-primary text-black text-xs px-3 py-1 rounded-full font-bold">
                      Destacado
                    </span>
                  )}
                  {!logic.inStock && (
                    <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full font-bold">
                      Agotado
                    </span>
                  )}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {logic.product.title}
                </h3>
                {logic.product.description && (
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {logic.product.description.replace(/<[^>]*>/g, '')}
                  </p>
                )}
              </div>
            </Link>

            {logic.hasVariants && logic.options && (
              <div className="px-4 pb-3 space-y-3">
                {logic.options.map((opt) => (
                  <div key={opt.id}>
                    <div className="text-xs font-semibold text-primary mb-2">{opt.name}</div>
                    <div className="flex flex-wrap gap-2">
                      {opt.values.filter(val => logic.isOptionValueAvailable(opt.name, val)).map((val) => {
                        const isSelected = logic.selected[opt.name] === val
                        const swatch = opt.name.toLowerCase() === 'color' ? opt.swatches?.[val] : undefined

                        if (swatch) {
                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => logic.handleOptionChange(opt.name, val)}
                              title={`${opt.name}: ${val}`}
                              className={`h-8 w-8 rounded-full border-2 transition-all ${
                                isSelected ? 'border-primary scale-110' : 'border-gray-600'
                              } ${logic.selected[opt.name] && !isSelected ? 'opacity-40' : ''}`}
                              style={{ backgroundColor: swatch }}
                              aria-label={`${opt.name}: ${val}`}
                            />
                          )
                        }

                        return (
                          <button
                            key={val}
                            type="button"
                            onClick={() => logic.handleOptionChange(opt.name, val)}
                            className={`border-2 rounded-lg px-3 py-1.5 text-sm font-semibold transition-all ${
                              isSelected 
                                ? 'border-primary bg-primary text-black' 
                                : logic.selected[opt.name] && !isSelected
                                  ? 'border-gray-600 bg-secondary text-gray-500 opacity-40'
                                  : 'border-gray-600 bg-secondary text-white hover:border-primary'
                            }`}
                            aria-pressed={isSelected}
                            aria-label={`${opt.name}: ${val}`}
                            title={`${opt.name}: ${val}`}
                          >
                            {val}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="px-4 pb-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-primary font-bold text-xl">
                  {logic.formatMoney(logic.currentPrice)}
                </span>
                {logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice && (
                  <span className="text-gray-500 text-sm line-through">
                    {logic.formatMoney(logic.currentCompareAt)}
                  </span>
                )}
              </div>
              <Button
                onClick={() => {
                  logic.onAddToCartSuccess()
                  logic.handleAddToCart()
                }}
                disabled={!logic.canAddToCart}
                className={`${
                  logic.inStock 
                    ? 'bg-primary hover:bg-primary/90 text-black font-bold hover-glow' 
                    : 'bg-gray-700 text-gray-400'
                } disabled:opacity-50 transition-all`}
              >
                {logic.inStock ? 'Agregar' : 'Agotado'}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </HeadlessProductCard>
  )
}