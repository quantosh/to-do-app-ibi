import { useEffect, useRef, useCallback, useState } from 'react'
import PaletteButton from './palettebutton'

// Afuera del componente puesto que podríamos querer llamarlo desde otro
export const paletteConfig = [
  ['bg-slate-900',
    'bg-slate-700',
    'bg-slate-500',
    'bg-slate-400',
    'bg-slate-200',
    'bg-slate-100'],
  ['bg-red-500',
    'bg-red-400',
    'bg-red-200',
    'bg-purple-300',
    'bg-purple-400',
    'bg-purple-700'],
  ['bg-cyan-600',
    'bg-cyan-500',
    'bg-cyan-300',
    'bg-sky-300',
    'bg-sky-400',
    'bg-sky-900'],
  ['bg-green-600',
    'bg-emerald-300',
    'bg-lime-500',
    'bg-amber-400',
    'bg-yellow-500',
    'bg-orange-500']
]

export default function Palette ({ showPalette, handleShowPalette, colorChooser, todo }) {
  const elementRef = useRef(null)
  const [color, setColor] = useState(todo.color)
  const handleColorChange = (color) => {
    setColor(color)
  }

  // Efecto que se ejecuta siempre cuando se renderiza el componente
  useEffect(() => {
    if (color !== todo.color) {
      const newTodo = {
        ...todo,
        color
      }
      colorChooser(newTodo)
      handleShowPalette()
    }
  }, [color])

  // por qué un useCallback? porque sino, cada vez que se renderiza el componente, se crea una nueva función
  // y esta función se va a ejecutar cada vez que clickeemos en un componente hijo
  // con el useCallback, la función se crea una sola vez y se mantiene en memoria
  const handleBlur = useCallback(
    (e) => {
      const currentTarget = e.currentTarget
      // Le damos tiempo al navegador para que actualice el foco
      window.requestAnimationFrame(() => {
        // Checkeamos si el nuevo elemento focuseado es un hijo del contenedor original
        // esto podemos hacerlo usando la referencia que ya tenemos guardada o desde el evento, es lo mismo
        // if (!elementRef.current.contains(document.activeElement)) {
        if (!currentTarget.contains(document.activeElement)) {
          handleShowPalette()
        }
      })
    },
    [showPalette]
  )

  useEffect(() => {
    // Un div no se focusea automáticamente, al renderizarlo, por lo que tenemos que hacerlo manualmente
    // tabIndex={0} hace que el elemento sea focuseado cuando le damos click, que podría ser una solución para otros casos
    // pero en este en particular necesitamos que haga foco ni bien se renderiza, puesto que para desmontar el componente usamos el onBlur
    // y esto puede ocurrir sin que el usuario clickee dentro del elemento
    if (elementRef?.current && showPalette) {
      elementRef.current.focus()
    }
  }, [elementRef, showPalette])

  if (!showPalette) return null
  return (
    <div ref={elementRef} tabIndex={0} onBlur={handleBlur} className='flex items-center justify-center absolute top-4 right-5'>
      <div className='block backdrop-blur-sm bg-white/40 border border-white/40 shadow-md center rounded-l-xl rounded-b-xl p-2'>
        <h2 className='text-xs text-center mb-2 mt-1 text-gray-600'>Color Palette</h2>
        {
          paletteConfig.map((colorArray, index) => {
            return (
              <div className='flex' key={index}>
                {colorArray.map((color, index) => {
                  return (
                    <PaletteButton color={color} key={index} handleClick={handleColorChange} />
                  )
                })}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
