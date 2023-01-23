import { z } from 'zod';
import type { MapApiToTrpcRouter, ProcedureStructure } from './api.types';
import { response } from './response';

export const api = {
  kk: {
    ff: {
      input: z.string(),
      output: response(z.string())
        .error({
          code: 400,
          message: 'kkk',
          errorData: z.string(),
        })
        .error({
          code: 405,
          message: 'dkjdkj',
        }).schema,
    },
  },
} satisfies ProcedureStructure;

export type API = MapApiToTrpcRouter<typeof api>;