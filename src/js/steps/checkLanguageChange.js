'use strict';

/**
 * Check to see whether we need to show the language overlay
 *
 * @param {string|HTMLElement|jQuery} monkeyContainer The container.
 */
module.exports = function ($monkeyContainer, options) {

  // We need to check whether we have to show the language overlay, and we do
  // this by seeing whether the current language is different to the book's
  // language when it was initialized, whether we're switching between locales
  // which have the character picker and therefore
  // don't need the language overlay, and finally, if the book has characters
  // that have been changed before the language change. Phew.
  if (options.book.locale !== $monkeyContainer.data('locale')) {
    delete options.book.characterSelection;
    $monkeyContainer.data('character-selection', null);
    options.clearSelection = true;
    if (!options.showCharPicker && $monkeyContainer.data('changedChars')) {
      options.showLanguageOverlay = true;
    }
    $monkeyContainer.data('locale', options.book.locale);
  }
  if (options.book.locale !== $monkeyContainer.data('first-book-locale')) {
    delete options.book.comparisonBooks;
  }
  return options;
};
