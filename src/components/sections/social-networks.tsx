// Components
import { Box } from '../common/box'
import { RoundIcon } from '../common/round-icon'
import { Title } from '../common/title'
// Utilities
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa6'
import { EmailIcon } from '../icons-custom/email'
// Hooks
// Interfaces

export function SectionSocialNetworks() {
  return (
    <Box>
      <div className="mx-w-[35.313]  flex flex-col  items-center">
        <Image
          src="/img-mulher-microfone.png"
          alt="imagem de uma mulher falando cursos novo"
          width={330}
          height={330}
          quality={100}
          priority
        />
        <div className="max-w-[493px] space-y-6">
          <Title type="h2" size="b2">
            Redes Sociais
          </Title>
          <div>
            <p className="text-blue-700 font-avenir font-ultraLight text-md leading-2">
              Me acompanhe nas redes sociais!
            </p>
            <p className="text-blue-700 font-avenir font-ultraLight text-md leading-2">
              Se quiser conversar sobre projetos, eventos e afins é só me
              chamar!
            </p>
          </div>
          <div className="justify-center lg:justify-normal flex gap-4">
            <RoundIcon href="#" icon={FaLinkedinIn} />
            <RoundIcon href="#" icon={FaInstagram} />
            <RoundIcon href="#" icon={EmailIcon} />
          </div>
        </div>
      </div>
    </Box>
  )
}
