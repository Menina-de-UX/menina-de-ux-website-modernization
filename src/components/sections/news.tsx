// Components
import { Box } from '../common/box'
import { Button } from '../common/button'
import { Title } from '../common/title'
// Utilities
import Image from 'next/image'
// Hooks
// Interfaces

export function SectionNews() {
  return (
    <Box>
      <div className="mx-w-[35.313] flex flex-col  items-center">
        <Image
          src="/img-mulher-cursonovo.png"
          alt="imagem de uma mulher falando cursos novo"
          width={411}
          height={320}
          quality={100}
          priority
        />
        <div className="max-w-[493px] space-y-6">
          <Title type="h2" size="b2">
            Quer ficar por dentro de todas as novidades?
          </Title>
          <p className="text-blue-700 font-avenir font-ultraLight text-md leading-2">
            Entre no canal do Telegram da Menina de UX e fique sabendo de todos
            os cursos e processos seletivos novos!
          </p>
          <div className="flex justify-center">
            <Button.Root variant="pink">
              <Button.Text>Entrar no canal!</Button.Text>
            </Button.Root>
          </div>
        </div>
      </div>
    </Box>
  )
}
