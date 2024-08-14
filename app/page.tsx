import { Chat } from '@/components/chat'
import { generateId } from 'ai'
import { AI } from './actions'
import Image from 'next/image'

export const maxDuration = 60

export default function Page() {
  const id = generateId()
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <AI initialAIState={{ chatId: id, messages: [] }}>
        <div className="w-full max-w-5xl mb-8">
          <Image
            src="/images/askwhy-kid4.jpg"
            alt="Splash Image"
            width={800}
            height={200}
            priority
            className="rounded-lg shadow-lg object-cover w-full h-[200px]"
          />
        </div>
        <div className="w-full max-w-5xl">
          <Chat id={id} />
        </div>
      </AI>
    </main>
  )
}
