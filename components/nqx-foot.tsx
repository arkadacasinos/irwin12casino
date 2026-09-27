import { NqxFind } from '@/components/nqx-find'

export function NqxFoot() {
  return (
    <footer className="nqx-foot" id="nqx-search">
      <div className="nqx-wrap nqx-foot-in">
        <p className="nqx-kicker">Поиск по странице</p>
        <form className="nqx-form" id="nqx-form" action="#nqx-search" role="search">
          <label className="nqx-label" htmlFor="nqx-q">
            Фраза или хештег
          </label>
          <input
            className="nqx-field"
            id="nqx-q"
            name="q"
            type="search"
            enterKeyHint="search"
            autoComplete="off"
            placeholder="Введите фразу с хештега"
          />
        </form>
        <nav className="nqx-tags" aria-label="Хештеги для поиска по странице">
          <a className="nqx-tag" href="#nqx-k1" data-nqx-q="Irwin Casino">
            #Irwin Casino
          </a>
          <a className="nqx-tag" href="#nqx-k2" data-nqx-q="Irwin Casino официальный">
            #Irwin Casino официальный
          </a>
          <a className="nqx-tag" href="#nqx-k3" data-nqx-q="Irwin Casino официальный сайт">
            #Irwin Casino официальный сайт
          </a>
          <a className="nqx-tag" href="#nqx-k4" data-nqx-q="Irwin Casino зеркало">
            #Irwin Casino зеркало
          </a>
          <a className="nqx-tag" href="#nqx-k5" data-nqx-q="Ирвин Казино">
            #Ирвин Казино
          </a>
          <a className="nqx-tag" href="#nqx-k6" data-nqx-q="Ирвин Казино официальный">
            #Ирвин Казино официальный
          </a>
          <a className="nqx-tag" href="#nqx-k7" data-nqx-q="Ирвин Казино официальный сайт">
            #Ирвин Казино официальный сайт
          </a>
          <a className="nqx-tag" href="#nqx-k8" data-nqx-q="Ирвин Казино зеркало">
            #Ирвин Казино зеркало
          </a>
          <a className="nqx-tag" href="#nqx-k9" data-nqx-q="Ирвин Казино зеркало рабочее">
            #Ирвин Казино зеркало рабочее
          </a>
          <a className="nqx-tag" href="#nqx-k10" data-nqx-q="Irwin Casino играть">
            #Irwin Casino играть
          </a>
          <a className="nqx-tag" href="#nqx-k12" data-nqx-q="Ирвин Казино онлайн">
            #Ирвин Казино онлайн
          </a>
          <a className="nqx-tag" href="#nqx-k13" data-nqx-q="Irwin Казино">
            #Irwin Казино
          </a>
          <a className="nqx-tag" href="#nqx-k11" data-nqx-q="Ирвин Казино играть">
            #Ирвин Казино играть
          </a>
        </nav>
        <a className="nqx-clear" id="nqx-reset" href="#nqx-top">
          Показать всё
        </a>
        <NqxFind />
        <p className="nqx-legal">
          Материал для игроков 18+. Это разбор, а не касса и не форма входа. Irwin Casino, 2026.
        </p>
      </div>
    </footer>
  )
}
