import { motion, AnimatePresence } from 'framer-motion'
import { Twirl as Hamburger } from 'hamburger-react'

import { useState } from 'react'

import { LinkHeader } from './link'

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false)

  function handleClose() {
    setIsOpen(false)
  }
  return (
    <>
      <div className="lg:hidden text-blue-700">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={30} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: '-100vh' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-100vh' }}
              transition={{ duration: 0.2 }}
              className="fixed top-0 left-0 w-full h-full bg-blue-700 flex justify-center items-center"
            >
              {' '}
              <motion.div
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
                exit={{ y: '100vh' }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg px-4 py-5 w-[90%] h-[95%] flex flex-col justify-start "
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between text-blue-700">
                  <h2 className="text-2xl font-medium ">Menu</h2>

                  <Hamburger toggled={isOpen} toggle={setIsOpen} size={30} />
                </div>

                <ul className="flex flex-col space-y-5 mt-6">
                  <li onClick={handleClose}>
                    <LinkHeader
                      href="/"
                      title="Início"
                      handleClick={handleClose}
                    />
                  </li>
                  <li onClick={handleClose}>
                    {' '}
                    <LinkHeader
                      href="/estude"
                      title="Estude"
                      handleClick={handleClose}
                    />
                  </li>
                  <li onClick={handleClose}>
                    <LinkHeader
                      href="/cursos"
                      title="Cursos"
                      handleClick={handleClose}
                    />
                  </li>
                  <li onClick={handleClose}>
                    <LinkHeader
                      href="/parcerias"
                      title="Parcerias"
                      handleClick={handleClose}
                    />
                  </li>
                  <li onClick={handleClose}>
                    <LinkHeader
                      href="/sobre"
                      title="Sobre"
                      handleClick={handleClose}
                    />
                  </li>
                  <li onClick={handleClose}>
                    <LinkHeader
                      href="/contato"
                      title="Contato"
                      handleClick={handleClose}
                    />
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
