import axios from 'axios';
import { QueryClient } from '@tanstack/react-query';

export const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const queryClient = new QueryClient();

export const fetchLanguages = async () => {
  const response = await api.get('/languages');
  return response.data;
};

export const fetchUnits = async (languageId: number) => {
  const response = await api.get(`/units?languageId=${languageId}`);
  return response.data;
};

export const fetchLessons = async (unitId: number) => {
  const response = await api.get(`/lessons?unitId=${unitId}`);
  return response.data;
};

export const fetchQuestions = async (lessonId: number) => {
  const response = await api.get(`/questions?lessonId=${lessonId}`);
  return response.data;
};

export const fetchHindiLetters = async () => {
  const response = await api.get('/hindiLetters');
  return response.data;
};

export const fetchUserProgress = async (userId: number, lessonId: number) => {
  const response = await api.get(`/userProgress?userId=${userId}&lessonId=${lessonId}`);
  return response.data[0];
};

export const updateUserProgress = async (progressId: number, data: any) => {
  const response = await api.patch(`/userProgress/${progressId}`, data);
  return response.data;
};