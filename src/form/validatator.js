export const required = value => (!value ? 'Field is required' : undefined);

export const maxLength = max => value => (value && value.length > max ? `Must be ${max} or less` : undefined);

export const maxLength100 = maxLength(100);
