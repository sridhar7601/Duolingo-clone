import { describe, it, expect, vi } from 'vitest';
import { api, fetchLanguages, fetchUnits, fetchLessons } from '../utils/api';

vi.mock('../utils/api', async () => {
  const actual = await vi.importActual('../utils/api');
  return {
    ...actual,
    api: {
      get: vi.fn(),
    },
  };
});

describe('API functions', () => {
  it('fetchLanguages should return an array of languages', async () => {
    const mockLanguages = [{ id: 1, name: 'English' }, { id: 2, name: 'Spanish' }];
    (api.get as any).mockResolvedValue({ data: mockLanguages });

    const result = await fetchLanguages();
    expect(result).toEqual(mockLanguages);
    expect(api.get).toHaveBeenCalledWith('/languages');
  });

  it('fetchUnits should return an array of units for a given language', async () => {
    const mockUnits = [{ id: 1, name: 'Basics' }, { id: 2, name: 'Phrases' }];
    (api.get as any).mockResolvedValue({ data: mockUnits });

    const result = await fetchUnits(1);
    expect(result).toEqual(mockUnits);
    expect(api.get).toHaveBeenCalledWith('/units?languageId=1');
  });

  it('fetchLessons should return an array of lessons for a given unit', async () => {
    const mockLessons = [{ id: 1, name: 'Greetings' }, { id: 2, name: 'Numbers' }];
    (api.get as any).mockResolvedValue({ data: mockLessons });

    const result = await fetchLessons(1);
    expect(result).toEqual(mockLessons);
    expect(api.get).toHaveBeenCalledWith('/lessons?unitId=1');
  });
});