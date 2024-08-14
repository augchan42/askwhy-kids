import { Chat } from '@/components/chat'
import { generateId } from 'ai'
import { AI } from './actions'
import Image from 'next/image'
import GoogleAnalytics from '@/components/GoogleAnalytics'


export const maxDuration = 60

// export default function Page() {
//   const id = generateId()
//   return (
//     <AI initialAIState={{ chatId: id, messages: [] }}>
//       <Chat id={id} />
//     </AI>
//   )
// }

export default function Page() {
  const id = generateId()
  return (
    // <main className="flex min-h-screen flex-col items-center p-24">
    <>
      <GoogleAnalytics />
      <AI initialAIState={{ chatId: id, messages: [] }}>
        <div className="w-full max-w-5xl">
          <Image
            src="/images/askwhy-kid4.jpg"
            alt="Splash Image"
            width={800}
            height={200}
            priority
            className="rounded-lg shadow-lg object-cover w-full h-[200px] hidden md:block"
          />
          {/* Mobile Image */}
          <Image
            src="/images/askwhy-kid.jpg"
            alt="Splash Image"
            width={400}
            height={300}
            priority
            className="rounded-lg shadow-lg object-cover w-full h-[300px] md:hidden"
          />
        </div>
        <div className="w-full max-w-5xl">
          <Chat id={id} />
        </div>
      </AI>
    </>
    // </main>
  )
}
