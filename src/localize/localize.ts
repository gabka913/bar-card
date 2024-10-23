import en from './languages/en.json'
import nb from './languages/nb.json'

const languages: Record<string, Record<string, Record<string, string>>> = { en, nb }

export function localize(string: string, search: string = '', replace: string = '') {
  const section = string.split('.')[0]
  const key = string.split('.')[1]

  const lang = (localStorage.getItem('selectedLanguage') || 'en').replace(/['"]+/g, '').replace('-', '_')

  let tranlated: string

  try {
    tranlated = languages[lang][section][key]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    tranlated = languages['en'][section][key]
  }

  if (tranlated === undefined) tranlated = languages['en'][section][key]

  if (search !== '' && replace !== '') {
    tranlated = tranlated.replace(search, replace)
  }
  return tranlated
}
