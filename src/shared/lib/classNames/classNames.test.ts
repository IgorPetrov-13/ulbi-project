import { classNames } from './classNames';

describe('classNames', () => {
  test('only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional classes', () => {
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2');
  });

  test('with mods', () => {
    expect(classNames('someClass', { class1: true, class2: false }, [])).toBe('someClass class1');
  });

  test('with mods false', () => {
    expect(classNames('someClass', { class1: false, class2: false }, [])).toBe('someClass');
  });

  test('with mods undefined', () => {
    expect(classNames('someClass', { class1: undefined, class2: undefined }, [])).toBe('someClass');
  });

  test('with mods null', () => {
    expect(classNames('someClass', { class1: null, class2: null }, [])).toBe('someClass');
  });
});
