import { ChatTeardropDots } from 'phosphor-react'

import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm'

interface WidgetProps {
  text?: string

}

export function Widget(props: WidgetProps) {



  return (

    <Popover className="absolute bottom-4 right-4 md:bottom-10 md:right-8 flex flex-col items-end">
      <Popover.Panel>

        <WidgetForm />

      </Popover.Panel>

      <Popover.Button className="widget group">
        <ChatTeardropDots className='w-6 h-6' />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-1000 ease-out">
          <span className="pl-2">
            FeedBack
          </span>
        </span>

      </Popover.Button>
    </Popover>
  )
}