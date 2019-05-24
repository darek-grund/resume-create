export const stringifyClassNames = classNames =>
  Object.entries(classNames)
    .map(([key, value]) => (value ? key : false))
    .filter(value => value)
    .join(' ');
