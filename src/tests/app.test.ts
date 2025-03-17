import request from 'supertest';
import app from '../index';

describe('Testes do aplicativo', () => {
  test('Health check', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('OK');
  });

  test('Verificar versão', async () => {
    const res = await request(app).get('/version');
    expect(res.statusCode).toBe(200);
    expect(res.body.version).toBe('1.0.0');
  });
});