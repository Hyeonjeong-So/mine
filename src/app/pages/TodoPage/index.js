import React from 'react';
import {
  Box,
  Container,
  Button,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import DatePicker from './datepicker';

export const TodoPage = () => {
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <Typography component="h1" variant="h3" color="#f48fb1">
            My Todo
          </Typography>{' '}
          <br />
          <DatePicker />
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  required
                  fullWidth
                  label="이메일 주소"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  required
                  fullWidth
                  label="비밀번호"
                  type="password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              로그인
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                  가입한 적이 없나요? 회원가입으로 이동
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};
