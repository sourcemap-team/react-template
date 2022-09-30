import cn from 'classnames';

describe('cn', () => {
    test('t', () => {
        expect(cn('someClass')).toBe('someClass');
    });
});
