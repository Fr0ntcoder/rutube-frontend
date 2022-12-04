import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAuthFields } from '@/components/layout/header/auth-form/auth-form.interface';

import { IAuthData } from '@/services/auth/auth.helper';

export const register = createAsyncThunk<IAuthData, IAuthFields>();
