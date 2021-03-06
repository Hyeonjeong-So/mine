import React, { useState } from 'react';
import {
  Alert,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// TODO: change using backend

export const LoginPage = () => {
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const postLoginRequest = (email, password) => {
    const name = localStorage.getItem('name');
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    navigate('/');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    if (!email || !password) {
      setError('모든 항목을 입력해주세요.');
      return;
    }

    const userEmail = localStorage.getItem('email');
    const userPassword = localStorage.getItem('password');

    if (userEmail !== email || userPassword !== password) {
      setError('해당하는 유저가 없습니다.');
      return;
    }

    postLoginRequest(email, password);
  };

  return (
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
        <Avatar sx={{ m: 1, bgcolor: '#f8bbd0' }}>
          <BookmarksIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
          {error ? (
            <Alert sx={{ mt: 3 }} severity="error">
              {error}
            </Alert>
          ) : null}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            loading={loading}
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
  );
};
