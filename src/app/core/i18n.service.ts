import { Injectable, effect, signal } from '@angular/core';

export type Lang = 'es' | 'en';

export interface LocalizedText {
  es: string;
  en: string;
}

const STORAGE_KEY = 'portfolio-lang';

function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return 'es';

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') return stored;
  } catch {
    /* localStorage unavailable — fall through to browser detection */
  }

  const nav = window.navigator?.language?.toLowerCase() ?? 'es';
  return nav.startsWith('en') ? 'en' : 'es';
}

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Lang>(detectInitialLang());

  constructor() {
    effect(() => {
      const current = this.lang();
      if (typeof document !== 'undefined') {
        document.documentElement.lang = current;
      }
      try {
        window.localStorage.setItem(STORAGE_KEY, current);
      } catch {
        /* ignore write failures (e.g. private browsing) */
      }
    });
  }

  toggle(): void {
    this.lang.update((l) => (l === 'es' ? 'en' : 'es'));
  }

  set(lang: Lang): void {
    this.lang.set(lang);
  }

  /** Resolve a localized string pair for the current language. */
  t(text: LocalizedText): string {
    return text[this.lang()];
  }
}
