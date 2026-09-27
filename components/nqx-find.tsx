'use client'

import { useEffect, useState } from 'react'

export function NqxFind() {
  const [note, setNote] = useState('')

  useEffect(() => {
    const form = document.querySelector<HTMLFormElement>('#nqx-form')
    const input = document.querySelector<HTMLInputElement>('#nqx-q')
    const reset = document.querySelector<HTMLAnchorElement>('#nqx-reset')
    const tags = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nqx-q]'))

    const blocks = () => Array.from(document.querySelectorAll<HTMLElement>('[data-nqx-block]'))

    function apply(raw: string, scroll: boolean) {
      const q = raw.trim().replace(/^#/, '').toLowerCase()
      const all = blocks()
      let shown = 0
      let first: HTMLElement | null = null

      for (const el of all) {
        const hit = q.length === 0 || (el.textContent || '').toLowerCase().includes(q)
        el.hidden = !hit
        el.classList.remove('nqx-hit')
        if (hit) {
          shown += 1
          if (!first) first = el
        }
      }

      if (first && q) first.classList.add('nqx-hit')
      setNote(
        q
          ? shown
            ? `На странице нашлось блоков: ${shown}`
            : 'По этой фразе на странице ничего нет.'
          : '',
      )

      if (scroll && first) {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        first.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
      }
    }

    function onSubmit(event: Event) {
      event.preventDefault()
      apply(input?.value || '', true)
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Enter' && (event.isComposing || event.keyCode === 229)) {
        event.preventDefault()
      }
    }

    function onTagClick(event: Event) {
      event.preventDefault()
      const link = event.currentTarget as HTMLAnchorElement
      const q = link.getAttribute('data-nqx-q') || ''
      if (input) input.value = q
      apply(q, true)
      const href = link.getAttribute('href')
      if (href) history.replaceState(null, '', href)
    }

    function onReset(event: Event) {
      event.preventDefault()
      if (input) input.value = ''
      apply('', false)
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      document.querySelector('#nqx-top')?.scrollIntoView({
        behavior: reduce ? 'auto' : 'smooth',
        block: 'start',
      })
      history.replaceState(null, '', '#nqx-top')
    }

    form?.addEventListener('submit', onSubmit)
    input?.addEventListener('keydown', onKeyDown)
    tags.forEach((tag) => tag.addEventListener('click', onTagClick))
    reset?.addEventListener('click', onReset)

    return () => {
      form?.removeEventListener('submit', onSubmit)
      input?.removeEventListener('keydown', onKeyDown)
      tags.forEach((tag) => tag.removeEventListener('click', onTagClick))
      reset?.removeEventListener('click', onReset)
    }
  }, [])

  return (
    <p className="nqx-note" aria-live="polite">
      {note}
    </p>
  )
}
