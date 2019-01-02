const templates = require('./templates.js');

test('should exist', () => expect(templates.embedVars).toBeDefined());

test('should embed variables', () => expect(templates.embedVars('Keep', 'it', 100)).toBe('Keep it 100'));