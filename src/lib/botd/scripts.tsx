import { createContext, FC, useContext, useState } from 'react'
import Script, { ScriptProps } from 'next/script'
import { BOTD_PROXY_JS } from './constants'

const BotdReady = createContext(false)

export function botd(opts?: any): Promise<any> {
  const Botd = (window as any).Botd

  if (!Botd) {
    throw new Error(
      `Botd hasn't been loaded yet, please use <BotdScript /> and wait for it to load before executing this function`
    )
  }

  return Botd.load({
    token: process.env.NEXT_PUBLIC_BOTD_API_TOKEN,
    mode: 'allData',
    ...opts,
  })
}

export async function botDetect(...args: any[]) {
  const agent = await botd()
  return agent.detect('Vercel', ...args)
}

export function BotdScript(props: ScriptProps) {
  return <Script async src={BOTD_PROXY_JS} {...props} />
}

const Botd: FC<ScriptProps> = ({ children, onLoad, ...scriptProps }) => {
  const [ready, setReady] = useState(false)

  return (
    <BotdReady.Provider value={ready}>
      {children}
      <BotdScript
        {...scriptProps}
        onLoad={(e) => {
          setReady(true)
          if (onLoad) onLoad!(e)
        }}
      />
    </BotdReady.Provider>
  )
}

export default Botd

export const useBotdReady = () => useContext(BotdReady)