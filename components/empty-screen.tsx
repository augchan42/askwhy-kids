'use client';

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const allExampleMessages = [
  { heading: '✨ Why do stars twinkle?', message: 'Why do stars twinkle?' },
  { heading: '🦋 How do butterflies fly?', message: 'How do butterflies fly?' },
  { heading: '🌈 Why is the sky blue?', message: 'Why is the sky blue?' },
  { heading: '🐠 Do fish sleep?', message: 'Do fish sleep?' },
  { heading: '🌙 Why does the moon change shape?', message: 'Why does the moon change shape?' },
  { heading: '🦕 What did dinosaurs eat?', message: 'What did dinosaurs eat?' },
  { heading: '🌋 How do volcanoes erupt?', message: 'How do volcanoes erupt?' },
  { heading: '🌱 How do plants grow from seeds?', message: 'How do plants grow from seeds?' },
  { heading: '🐘 Why do elephants have long trunks?', message: 'Why do elephants have long trunks?' },
  { heading: '🌊 Why is the ocean salty?', message: 'Why is the ocean salty?' },
  { heading: '🦜 How do birds fly?', message: 'How do birds fly?' },
  { heading: '🌞 Why is the sun hot?', message: 'Why is the sun hot?' },
  { heading: '🦒 Why do giraffes have long necks?', message: 'Why do giraffes have long necks?' },
  { heading: '🌈 How does a rainbow form?', message: 'How does a rainbow form?' },
  { heading: '🐝 Why do bees make honey?', message: 'Why do bees make honey?' },
  { heading: '❄️ How do snowflakes form?', message: 'How do snowflakes form?' },
  { heading: '🌎 Why is Earth round?', message: 'Why is Earth round?' },
  { heading: '🦘 Why do kangaroos hop?', message: 'Why do kangaroos hop?' },
  { heading: '🌳 Why do leaves change color in fall?', message: 'Why do leaves change color in fall?' },
  { heading: '🦉 Why do owls hoot at night?', message: 'Why do owls hoot at night?' },
  { heading: '🦅 How far can eagles see?', message: 'How far can eagles see?' },
  { heading: '🌊 Why are waves formed in the ocean?', message: 'Why are waves formed in the ocean?' },
  { heading: '🦇 How do bats use echolocation?', message: 'How do bats use echolocation?' },
  { heading: '🌵 How do cacti survive in the desert?', message: 'How do cacti survive in the desert?' },
  { heading: '🐙 How many hearts does an octopus have?', message: 'How many hearts does an octopus have?' },
  { heading: '🌠 What causes shooting stars?', message: 'What causes shooting stars?' },
  { heading: '🦋 How do caterpillars turn into butterflies?', message: 'How do caterpillars turn into butterflies?' },
  { heading: '🌪️ How do tornadoes form?', message: 'How do tornadoes form?' },
  { heading: '🐬 How do dolphins communicate?', message: 'How do dolphins communicate?' },
  { heading: '🌺 Why do flowers smell nice?', message: 'Why do flowers smell nice?' },
  { heading: '🦔 Why do hedgehogs have spines?', message: 'Why do hedgehogs have spines?' },
  { heading: '🌈 Can we touch a rainbow?', message: 'Can we touch a rainbow?' },
  { heading: '🦚 Why do peacocks spread their feathers?', message: 'Why do peacocks spread their feathers?' },
  { heading: '🌋 Whats inside a volcano?', message: 'What\'s inside a volcano?' },
  { heading: '🐒 Why do monkeys like bananas?', message: 'Why do monkeys like bananas?' },
  { heading: '🌜 Why can we sometimes see the moon during the day?', message: 'Why can we sometimes see the moon during the day?' },
  { heading: '🦩 Why are flamingos pink?', message: 'Why are flamingos pink?' },
  { heading: '🌱 How do seeds know which way to grow?', message: 'How do seeds know which way to grow?' },
  { heading: '🐢 Why do turtles have shells?', message: 'Why do turtles have shells?' },
  { heading: '🌈 How many colors are in a rainbow?', message: 'How many colors are in a rainbow?' }
]

const NUM_DISPLAY_MESSAGES = 4

const getRandomMessages = () => {
  const shuffled = [...allExampleMessages].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, NUM_DISPLAY_MESSAGES)
}

export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  const [messages, setMessages] = useState<typeof allExampleMessages>([])

  useEffect(() => {
    setMessages(getRandomMessages())
  }, [])

  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {messages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
