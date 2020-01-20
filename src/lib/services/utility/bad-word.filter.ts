import { Injectable } from '@angular/core';
import list from 'badwords-list';

@Injectable({
  providedIn: 'root'
})

export class BadWordFilter {
  list = list.array;
  splitRegex = /\b/;
  regex = /[^a-zA-Z0-9|\$|\@]|\^/g;
  replaceRegex = /\w/g;

  constructor() {}

  /**
   * Determine if a string contains profane language.
   */
  isProfane(sentence: string) {
    return (
      this.list.filter(word => {
        const wordExp = new RegExp(
          `\\b${word.replace(/(\W)/g, '\\$1')}\\b`,
          'gi'
        );
        return wordExp.test(sentence);
      }).length > 0 || false
    );
  }

  /**
   * Replace a word with placeHolder characters;
   */
  replaceWord(sentence: string, placeHolder: string) {
    return sentence
      .replace(this.regex, '')
      .replace(this.replaceRegex, placeHolder);
  }

  /**
   * Clean bad words if exists in sentence.
   */
  clean(sentence: string = '', placeHolder: string = '') {
    return sentence
      .split(this.splitRegex)
      .map(word => {
        return this.isProfane(word)
          ? this.replaceWord(word, placeHolder)
          : word;
      })
      .join(this.splitRegex.exec(sentence)[0]);
  }
}
